import React from "react";
import "./DownHeader.scss";
import {Link} from "react-dom";
import File from "../files/a.txt";
export default function DownHeader() {
  return (
    <>
      <div className="down-header">
        <section>
          <div className="down-container">
            <h2 className="title-down">We need sponsors</h2>
            <p className="paragraph">
              We need some sponsors to fund us for robotic competitions
            </p>
            <a href={File} download="true" target="_blank" rel="noopener noreferrer"  className="link">
              Sponsorship file
            </a>
            <a href="#" className="link">
              Let's get in touch
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
