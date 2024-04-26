import React, { useReducer } from "react";
//How to use the object pattern of action and state.
const initialState = {
  //State as an object, here we are setting 2 counters.
  firstCounter: 0,
  secondCounter: 10,
};

//Here we write action in the object pattern and it has 2 properties- Type and additional data (here value)
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "incrementTwo":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrementTwo":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducerCounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState); //useReducer returns newState and dispatch.

  //On click of a specific button, dispatch will help to execute the action/
  return (
    <div>
      <div>Counter 1: {count.firstCounter}</div>
      <div>Counter 2: {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "incrementTwo", value: 1 })}>
        Increment second counter{" "}
      </button>
      <button onClick={() => dispatch({ type: "decrementTwo", value: 1 })}>
        Decrement second counter
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducerCounterTwo;
