import React from 'react';

function AngryButton(){
  return (
    <button className="AngryButton">
      {/* {If you have NOT reached max clicks*/} <span>I'm warning you, don't push me too much!</span>
      {/* {If max clicks reached*/}<span>Rawr!</span>
    </button>
  );
}

export default AngryButton;