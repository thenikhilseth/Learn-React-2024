import React, { useEffect, useState } from "react";

//Log Mouse positions on UI on mousemove.
function UseEffectMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  //This useEffect will runs only once as empty array is passed.
  useEffect(() => {
    console.log("use effect called");
    window.addEventListener("mousemove", logMousePostion);
    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePostion);
    };
  }, []);

  const logMousePostion = (e) => {
    console.log("mouse event happening");
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div>
      <h3>
        {" "}
        Use Effect Hooks: X- {x} Y-{y}
      </h3>
    </div>
  );
}

export default UseEffectMouse;
