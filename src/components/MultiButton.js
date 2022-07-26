import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (

    //Below this code snippet, the events will pop up as soon as 
    //prop is passed onto the component
    // <div>
    //   <button onClick={handleClick}>Button 1</button>
    //   <button onClick={handleClick}>Button 2</button>
    //   <button onClick={handleClick}>Button 3</button>
    // </div>

    //Below this code snippet, the event will only pop when the event is called on 
    //The function defined here (i.e.arrow functions) provides each button a defeinition
    // that will be invoked when the button is clicked
    <div>
      <button onClick={() => handleClick (1)}>Button 1</button>
      <button onClick={() => handleClick (2)}>Button 2</button>
      <button onClick={() => handleClick (3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;
