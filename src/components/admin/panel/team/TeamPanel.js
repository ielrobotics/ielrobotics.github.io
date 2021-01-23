import React, { useState } from "react";
import Modal from "../../../helpers/Modal";
import TeamForm from "./TeamForm";
import fire from "../../../../firebase/fire";
const db = fire.firestore();
const TeamList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nonLoopData, setNonLoopData] = useState([]);
  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <TeamForm
          team={props.team}
          setTeam={props.setTeam}
          currentTeam={nonLoopData}
          closeModal={() => setIsOpen(false)}
        />
      </Modal>
      <ul className="teams">
        {props.team.map((data) => {
          return (
            <li className="team" key={data.Name}>
              <div style={{ display: "flex", margin: "auto" }}>
                <button
                  onClick={(e) => {
                    let team_copy = props.team.filter(
                      (n) => n.Name !== data.Name
                    );
                    db.collection("team").doc(data.Name).delete();
                    props.setTeam(team_copy);
                  }}
                  className="log-out-button"
                  style={{ margin: "auto" }}
                >
                  Delete
                </button>
                <button
                  className="log-out-button"
                  style={{ margin: "auto" }}
                  onClick={() => {
                    setNonLoopData(data);
                    setIsOpen(true);
                  }}
                >
                  Update
                </button>
              </div>
              <div className="team-container">
                <div className="image-wrapper">
                  <img
                    className="image-round"
                    src={data.Avatar}
                    alt={`iel robotics ${data.Name}`}
                  />
                </div>
                <div className="flex-text">
                  <p>{data.Quote}</p>
                  <strong className="person">
                    - {`${data.Name} (${data.Role})`}
                  </strong>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default function TeamPanel(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ marginBottom: "10em" }}>
      <h2>Team</h2>
      <button
        className="log-out-button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add new
      </button>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <TeamForm
          closeModal={() => setIsOpen(false)}
          team={props.team}
          setTeam={props.setTeam}
        />
      </Modal>
      {
        <TeamList
          team={props.team}
          setTeam={props.setTeam}
          lang={props.lang}
          setLang={props.setLang}
        />
      }
    </div>
  );
}
