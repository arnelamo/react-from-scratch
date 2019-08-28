import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

function MyInfo() {
  return (
    <div>
      <h1>Arne Lamo Pedersen</h1>
      <p>Blurb about myself</p>
      <ul>
        <li>Rome</li>
        <li>Paris</li>
        <li>Harstad</li>
      </ul>
    </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));
