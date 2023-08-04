import React from "react";
import "../stylesheets/splashscreen.css";

export default function Splashscreen() {
  return (
    <div className="Splash">
      <header className="Splash-header">
        <p>
          Splashscreen
        </p>
      </header>
      <div className="container">
        <div className="div1">
          <p>Div 1</p>
        </div>
        <div className="div2">
          <p>Div 2</p>
        </div>
        <div className="div3">
          <p>Div 3</p>
        </div>
      </div>
      <script src="../scripts/splashscreen.js"></script>
    </div>
  );
}