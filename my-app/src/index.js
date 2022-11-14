import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./logo.png";

function TemporaryName() {
  return (
    <div>
      <img src={logo} width="40px" alt="logo" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Jas well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps, including mobile apps.</li>
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TemporaryName />);