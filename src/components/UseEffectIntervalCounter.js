import React, { useEffect, useState } from "react";

function UseEffectIntervalCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>UseEffectIntervalCounter:{count}</h2>
    </div>
  );
}

export default UseEffectIntervalCounter;
