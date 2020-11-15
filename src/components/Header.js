import React from "react";
import "./Header.scss";
export default function Header() {
  return (
    <div className="header-wrapper">
      <header>
        <div className="container">
          <img
            className="mascot-img"
            src="https://via.placeholder.com/150/ "
            alt="Taurus IELRobotics"
          />
          <h1 className="title">
            Hello! My name is Taurus.&nbsp;<br></br>
            I am a mascot of #8058.
          </h1>
        </div>
      </header>
    </div>
  );
}
