import React from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  return (
    <div>
      Component A
      <ComponentB />
    </div>
  );
}

export default ComponentA;
