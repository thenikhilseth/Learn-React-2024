import "./App.css";
import React from "react";
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

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
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
      <UserContext.Provider value={"Nikhil"}>
        <ChannelContext.Provider value={"Seth"}>
          <UseContextComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
