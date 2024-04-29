import "./App.css";
import React, { useReducer } from "react";
import HookCounter from "./components/HookCounter";
import HookCounterArray from "./components/HookCounterArray";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookUseEffectCounterOne from "./components/HookUseEffectCounterOne";
import MouseContainer from "./components/MouseContainer";
import UseEffectDataFetching from "./components/UseEffectDataFetching";
import UseEffectDataFetchingTwo from "./components/UseEffectDataFetchingTwo";
import UseEffectIntervalCounter from "./components/UseEffectIntervalCounter";
import UseEffectMouse from "./components/UseEffectMouse";
import UseContextComponentC from "./components/UseContextComponentC";
import UseReducerCounter from "./components/UseReducerCounter";
import UseReducerCounterTwo from "./components/UseReducerCounterTwo";
import UseReducerCounterThree from "./components/UseReducerCounterThree";
import AComponent from "./components/UseReducerAndUseContextExample/AComponent";
import BComponent from "./components/UseReducerAndUseContextExample/BComponent";
import CComponent from "./components/UseReducerAndUseContextExample/CComponent";
import UseReducerFetchData from "./components/UseReducerFetchData";
import ParentComponent from "./components/UseCallback Example/ParentComponent";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const counterContext = React.createContext();

//Counter Reducer Function
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

function App() {
  const [counter, dispatcher] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterArray /> */}
      {/* <HookUseEffectCounterOne /> */}
      {/* <UseEffectMouse /> */}
      {/* <MouseContainer /> */}
      {/* <UseEffectIntervalCounter /> */}
      {/* <UseEffectDataFetching /> */}
      {/* <UseEffectDataFetchingTwo /> */}
      {/* <UserContext.Provider value={"Nikhil"}>
        <ChannelContext.Provider value={"Seth"}>
          <UseContextComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <UseReducerCounter /> */}
      {/* <UseReducerCounterTwo /> */}
      {/* <UseReducerCounterThree /> */}
      {/* <counterContext.Provider
        value={{ counterState: counter, countDispatch: dispatcher }}
      >
        <AComponent />
        <BComponent />
        <CComponent />
      </counterContext.Provider> */}
      {/* <UseReducerFetchData /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
