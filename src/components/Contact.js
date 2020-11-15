import React from "react";
import "./Contact.scss";
import Gmail from "../images/gmail.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import LinkedIn from "../images/linkedin.png";
import Youtube from "../images/youtube.png";
import TBA from "../images/tba.svg";

export default function Contact() {
  return (
    <>
      <h2 className="span-title">
        <span className="outline">Contact us</span>
      </h2>
      <div className="social-container">
        <div className="gmail-wrapper">
          <a draggable="false" href="mailto:ielrobotikkulubu@gmail.com">
            <img className="gmail" src={Gmail} />
          </a>
        </div>
        <div className="instagram-wrapper">
          <a
            draggable="false"
            href="https://instagram.com/ielrobotics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="instagram" src={Instagram} />
          </a>
        </div>
        <div className="twitter-wrapper">
          <a
            draggable="false"
            href="https://twitter.com/ielrobotics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="twitter" src={Twitter} />
          </a>
        </div>
        <div className="linkedin-wrapper">
          <a
            draggable="false"
            href="https://www.linkedin.com/in/iel-robotics-679001198"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="linkedin" src={LinkedIn} />
          </a>
        </div>
        <div className="youtube-wrapper">
          <a
            draggable="false"
            href="https://www.youtube.com/channel/UCkxfrWkt9jEckAzERL970ew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="youtube" src={Youtube} />
          </a>
        </div>
        <div className="tba-wrapper">
          <a
            draggable="false"
            href="https://www.thebluealliance.com/team/8058"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="tba" src={TBA} />
          </a>
        </div>
      </div>
    </>
  );
}
