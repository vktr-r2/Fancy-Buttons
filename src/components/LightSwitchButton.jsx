import React, { useState } from "react";

const LightSwitchButton = () => {
  const [lightStatus, setLightStatus] = useState();

  return (
    <button className="LightSwitchButton">
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
