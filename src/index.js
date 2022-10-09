//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const fName = "Roopa";
const lName = "Polavaram";

ReactDOM.render(
  <div>
    <h1>It's me</h1>
    <ul>
      <li>I am happy</li>
      <li>I am healthy</li>
      <li>I am joyful</li>
    </ul>
    <p>Random number is {Math.floor(Math.random() * 10)}</p>
    <p>
      My name is {fName} {lName}
    </p>
    <p>My name is {fName + " " + lName}</p>
    {/* below one is using ES6 template literal or string interpolation;*/}
    {/* Using back ticks; used to embed strings in Js */}
    <p>My name is {`${fName} ${lName}`}</p>
  </div>,
  document.getElementById("root")
);
