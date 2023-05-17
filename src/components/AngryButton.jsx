// Import necessary functions from React library
import React, { useReducer, useState } from "react";

function AngryButton() {

  // Use the useReducer hook to handle state (anger) and dispatch actions
  // Initial state of anger is 0
  const [anger, dispatch] = useReducer((anger, action) => {
    // The reducer function is called with the current state (anger) and an action
    // If anger > 1, it resets to 0, otherwise it increments by the value of action
    return anger > 1 ? 0 : anger + action;
  }, 0)

  // Return the JSX to be rendered
  return (
    // Define a button element
    <button
      // On click, dispatch an action with value 0.1
      onClick={() => dispatch(0.1)}
      // The background color changes based on the state of anger, with the RGBA red channel increasing as anger increases
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      className="AngryButton"
    >
      {/*// If anger is less than 1, display a warning message*/}
      {anger < 1 && <span>I'm warning you, don't push me too much!</span>}
      {/*// If anger is greater than 1, display an angry message*/}
      {anger > 1 && <span>You little $#!+, I WARNED YOU!</span>}
    </button>
  );
}

export default AngryButton;
