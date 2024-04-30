import React, { useEffect, useRef, useState } from "react";

// UseRef use case - Storing mutable values in a container

function UseRefPart1() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(); //Creating a ref object, here current is undefined because we didn't pass any intial value {current: undefined}

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      //Setting current property value to interval {current: interval) and we can also change it anytime
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      UseRef Storing mutable values - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
    </div>
  );
}

export default UseRefPart1;
