import React, { useState } from "react";
import withCounter from "./withCounter";

function HoverCounter({ count, incerementHandle, name }) {
  //   const [count, setCount] = useState(0);
  //   const incerementHandle = () => {
  //     setCount((prevState) => prevState + 1);
  //   };
  return (
    <div>
      <button onMouseEnter={() => incerementHandle()}>
        {name}hovered {count} time
      </button>
    </div>
  );
}

export default withCounter(HoverCounter , 5);
