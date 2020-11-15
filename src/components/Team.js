import React from "react";
import "./Team.scss";
export default function Team() {
  return (
    <>
      <h2 className="span-title">
        <span className="outline">Our Team Members</span>
      </h2>
      <ul className="teams">
        <li className="team">
          <div className="team-container">
            <div className="image-wrapper">
              <img
                className="image-round"
                src="https://avatars.dicebear.com/api/bottts/O%C4%9Fuzhan%20%C3%96zk%C4%B1r.svg"
                alt=""
              />
            </div>
            <div className="flex-text">
              <p>
                Voluptua nonumy sit accusam erat magna et dolor. Dolore tempor
                clita eirmod gubergren amet, aliquyam.
              </p>
              <strong className="person">-Oğuzhan Özkır</strong>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
