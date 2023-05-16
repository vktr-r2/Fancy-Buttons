import React, { useState } from "react";

const TextRepeaterButton = () => {
  const [repetitions, setRepititions] = useState(1);

  const handleClick = () => {
    setRepititions(repetitions + 1);
  }

  const repetitionsArray = [];
  for (let i = repetitions; i > 0; i--) {
    repetitionsArray.push(<span key={i}> I like this text!</span>)
  }

  return (
    <button 
    onClick={() => handleClick()}
    className="TextRepeaterButton"
    >
      {repetitionsArray}
    </button>
  );
};

export default TextRepeaterButton;
