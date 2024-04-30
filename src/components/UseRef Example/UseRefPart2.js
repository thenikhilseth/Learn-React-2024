import React, { useEffect, useRef } from "react";

//UseRef hook use case- Accessing DOM elements

function UseRefPart2() {
  const inputRef = useRef(null); //Setting current to null

  useEffect(() => {
    //focus the current element which is input in this example
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />; //Setting the current property value to input element.
}

export default UseRefPart2;
