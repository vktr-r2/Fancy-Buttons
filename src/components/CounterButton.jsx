import React, { useState } from "react";

const CounterButton = () => {
  const [clickCounter, setClickCounter] = useState();

  return (
    <button className="CounterButton">
      You clicked me {clickCounter} amount of times
    </button>
  );
};

export default CounterButton;
