//How to use multiple useReducer Hooks
import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducerCounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        {count}
        <button onClick={() => dispatch("increment")}>Increase</button>
        <button onClick={() => dispatch("decrement")}>Descrease</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
      <div>
        {countTwo}
        <button onClick={() => dispatchTwo("increment")}>
          Increase Counter Two
        </button>
        <button onClick={() => dispatchTwo("decrement")}>
          Descrease Counter Two
        </button>
        <button onClick={() => dispatchTwo("reset")}>Reset Counter Two</button>
      </div>
    </div>
  );
}

export default UseReducerCounterThree;
