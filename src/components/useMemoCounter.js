import React, { useMemo, useState } from "react";

function useMemoCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 10000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      useMemoCounter
      <div>
        <button onClick={incrementOne}>Counter 1 - {counterOne} </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Counter 2 - {counterTwo}</button>
      </div>
    </div>
  );
}

// In this example Counter 1 button has odd-even logic whereas Counter 2 does not have any logic.
// Therefore, we don't want to  render any unnecessary odd-even logic when we are pressing counter 2 button because the logic is related to counter 1 button.
// With the help of useMemo, we return memoized value that will only render when counter one will change.
// In the above example, if you will increase the iterations in while loop, you will notice that Counter 1 is rendering bit slowly than Counter 2 button.

export default useMemoCounter;
