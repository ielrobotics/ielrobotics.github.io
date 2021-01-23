import React from "react";
import "./Team.scss";
export default function Team(props) {
  return (
    <div style={{ margin: "10em auto", maxWidth: "35em"}}>
      <h2 className="span-title">
        <span className="outline">{props.lang ? <>Our Team Members</> : <>Takımımız</>}</span>
      </h2>
      <ul className="teams">
        {props.team.map((data) => {
          return (
            <li className="team" key={data.Name}>
              <div className="team-container">
                <div className="image-wrapper">
                  <img
                    className="image-round"
                    src={data.Avatar}
                    alt={`iel robotics ${data.Name}`}
                  />
                </div>
                <div className="flex-text">
                  <p>{props.lang ? data.Quote: data.Alinti}</p>
                  <strong className="person">
                    - {`${data.Name} (${props.lang ? data.Role : data.Rol})`}
                  </strong>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
