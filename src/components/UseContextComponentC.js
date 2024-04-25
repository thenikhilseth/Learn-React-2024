import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../App";

function UseContextComponentC() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <h3>
        UseContextComponentC---
        {user}-{channel}
      </h3>
    </div>
  );
}

export default UseContextComponentC;
