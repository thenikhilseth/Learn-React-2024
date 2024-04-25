import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      HookCounter
      <button
        onClick={() => {
          setCount(count + 1); //We should use the functional form of the setCount; check HookCounterTwo file.
        }}
      >
        Count {count} times
      </button>
    </div>
  );
}

export default HookCounter;
