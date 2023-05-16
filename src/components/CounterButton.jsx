import React, { useState } from "react";

const CounterButton = () => {
  const [clickCounter, setClickCounter] = useState(0);

  const handleClick = () => {
    setClickCounter(clickCounter + 1);
  }

  return (
    <button
    onClick={() => handleClick()}
    className="CounterButton"
    >
      You clicked me {clickCounter} times
    </button>
  );
};

export default CounterButton;
