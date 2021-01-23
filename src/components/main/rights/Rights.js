import React from "react";
import "./Rights.scss";
export default function Rights(props) {
  return (
    <div className="rights-wrapper">
      <h3 className="copyright">
        Copyright ©{new Date().getFullYear()} IELRobotics#8058.
        {props.lang ? <> All rights reserved.</> : <>Tüm hakları saklıdır</>}
      </h3>
      <h4 className="designer">
        {props.lang ? <>Made by</> : <>Yapan</>}{" "}
        <a
          href="https://github.com/TheOguzhan"
          className="designer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          @TheOguzhan
        </a>
      </h4>
    </div>
  );
}
