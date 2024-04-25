import React, { useEffect, useState } from "react";

function HookUseEffectCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //The function inside useEffect will only run if count variable will me changed as count is available in array.
  useEffect(() => {
    console.log("Use Effect- Document Updated");
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookUseEffectCounterOne;
