import React, { useState } from "react";

const TextRepeaterButton = () => {
  const [repetitions, setRepititions] = useState();
  const repetitionsArray = [];

  for (const i = repetitions; i > 0; i--) {
    repetitionsArray.push(<span key={i}>I like this text</span>)
  }

  return (
    <button className="TextRepeaterButton">
      {repetitionsArray}
    </button>
  );
};

export default TextRepeaterButton;
