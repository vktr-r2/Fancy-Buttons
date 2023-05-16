import React, { useState } from "react";

function AngryButton() {
  const [anger, setAnger] = useState(0);

  const handleClick = (amount) => {
    anger < 1 ? setAnger(anger + amount) : setAnger(0);
  };

  return (
    <button
      onClick={() => handleClick(0.1)}
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      className="AngryButton"
    >
      {anger < 1 && <span>I'm warning you, don't push me too much!</span>}
      {anger > 1 && <span>You little $#!+, I WARNED YOU!</span>}
    </button>
  );
}

export default AngryButton;
