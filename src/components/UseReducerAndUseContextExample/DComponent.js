import { React, useContext } from "react";
import { counterContext } from "../../App";

function DComponent() {
  const countContext = useContext(counterContext);
  return (
    <div>
      Count from Component D - {countContext.counterState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increase
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Descrease
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default DComponent;
