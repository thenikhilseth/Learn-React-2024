import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment": //If action is increment, increase state(counter) by 1
      return state + 1;
    case "decrement": //If action is decrement, subtract state(counter) by 1
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialState); //useReducer returns newState and dispatch.

  //On click of a specific button, dispatch will help to execute the action/
  return (
    <div>
      {count}
      <button onClick={() => dispatch("increment")}>Increase</button>
      <button onClick={() => dispatch("decrement")}>Descrease</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default UseReducerCounter;
