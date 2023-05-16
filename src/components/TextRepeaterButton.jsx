import React, { useState } from "react";

const TextRepeaterButton = () => {
  const [repititions, setRepititions] = useState();

  return (
    <button className="TextRepeaterButton">
      <span>I like this text</span>
    </button>
  );
};

export default TextRepeaterButton;
