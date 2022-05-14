import React, { useState } from "react";

const withCounter = (WrappedComponent, incerementNumber) => {
  const WithCounter = (props) => {
    const [count, setCount] = useState(0);
    const incerementHandle = () => {
      setCount((prevState) => prevState + incerementNumber);
    };
    return (
      <WrappedComponent
        count={count}
        incerementHandle={incerementHandle}
        {...props}
      />
    );
  };
  return WithCounter;
};

export default withCounter;
