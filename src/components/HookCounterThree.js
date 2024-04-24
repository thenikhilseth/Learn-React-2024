import React, { useState } from "react";

//useState with Object.

function HookCounterThree() {
  const [time, setTime] = useState({ hours: "", minutes: "" });
  return (
    <div>
      <input
        type="text"
        value={time.hours}
        onChange={(e) => {
          setTime({ ...time, hours: e.target.value });
        }}
      ></input>
      <input
        type="text"
        value={time.minutes}
        onChange={(e) => {
          setTime({ ...time, minutes: e.target.value });
        }}
      ></input>
      <h2>
        Hours:{time.hours},Minutes:{time.minutes}
      </h2>
    </div>
  );
}

export default HookCounterThree;
