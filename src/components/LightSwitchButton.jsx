import React from "react";

const LightSwitchButton = () => {

  return (
    <button className="LightSwitchButton">
      {/*When the state is ON*/} <span className="on"><i>💡</i>I'm ON!</span>
      {/*When the state is OFF*/} <span className="off"><i>💡</i>I'm OFF!</span>
    </button>
  );
}

export default LightSwitchButton;