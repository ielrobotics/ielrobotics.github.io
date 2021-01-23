import React from "react";

export default function ToggleButton(props) {
  return (
    <button
      style={{ cursor: "pointer" }}
      onClick={() => {
        props.setLang(!props.lang);
      }}
      type="button"
      className="log-out-button"
    >
      {props.lang ? "EN" : "TR"}
    </button>
  );
}
