import React from "react";
import "./Header.scss";
import Bulky from "../../../images/bulky.png";
import ToggleButton from "../../helpers/ToggleButton";
export default function Header(props) {
  return (
    <div className="header-wrapper">
      <ToggleButton lang={props.lang} setLang={props.setLang} />
      <header>
        <div className="container">
          <img className="mascot-img" src={Bulky} alt="Bulky IELRobotics" />
          <h1 className="title">
            {props.lang === true ? (
              <p>
                Hello! My name is Bulky.&nbsp;<br></br>I am a mascot of #8058.
              </p>
            ) : (
              <p>
                Merhaba! Ben Bulky.&nbsp;<br></br>#8058'in maskotuyum
              </p>
            )}
          </h1>
        </div>
      </header>
    </div>
  );
}
