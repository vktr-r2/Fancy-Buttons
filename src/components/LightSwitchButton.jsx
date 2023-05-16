import React, { useState } from "react";

const LightSwitchButton = () => {
  const [lightStatus, setLightStatus] = useState("off");

  const handleClick = () => {
    setLightStatus(
      lightStatus === "off" ? "on" : "off"
    );
  };

  return (
    <button 
    onClick={() => handleClick()}
    className="LightSwitchButton"
    >
      {lightStatus === "on" && (
        <span className="on">
          <i>💡</i>I'm ON!
        </span>
      )}
      {lightStatus === "off" && (
        <span className="off">
          <i>💡</i>I'm OFF!
        </span>
      )}
    </button>
  );
};

export default LightSwitchButton;
