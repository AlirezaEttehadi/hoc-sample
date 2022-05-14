import React, { useState } from "react";
import withCounter from "./withCounter";

function ClickCounter({ count, incerementHandle, name }) {
  //   const [count, setCount] = useState(0);
  //   const incerementHandle = () => {
  //     setCount((prevState) => prevState + 1);
  //   };
  return (
    <div>
      <button onClick={() => incerementHandle()}>
        {name} clicked {count} time
      </button>
    </div>
  );
}

export default withCounter(ClickCounter , 10);
