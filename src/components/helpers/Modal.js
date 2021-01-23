import React from "react";
import "./Modal.scss";
import ReactDOM from "react-dom";
export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
    <div className="overlay" onClick={onClose}/>
      <div className="modal" style={{overflow: 'hidden'}}>
        <button onClick={onClose} className="close-modal-button">X</button>
        {children}
      </div>
    </>, document.getElementById("portal")
  );
}
