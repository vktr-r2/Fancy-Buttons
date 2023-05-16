import React, { useState } from "react";

const CounterButton = () => {
  const [clickCounter, setClickCounter] = useState(0);

  return (
    <button className="CounterButton">
      You clicked me {clickCounter} times
    </button>
  );
};

export default CounterButton;
