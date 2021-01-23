import React from "react";
import fire from "../../../firebase/fire";
import NewsPanel from "./news/NewsPanel";
import { Link } from "react-router-dom";
import "./Panel.scss";
import TeamPanel from "./team/TeamPanel";
export default function Panel(props) {
  return (
    <div className="panel-wrapper">
      <section>
        <div className="panel-container">
          <div className="admin-navbar">
            <button
              className="log-out-button"
              onClick={() => fire.auth().signOut()}
            >
              Log out
            </button>
            <Link className="log-out-button" to="/">
              Back to main page
            </Link>
          </div>
          <NewsPanel
            setNews={props.setNews}
            news={props.news}
            lang={props.lang}
            setLang={props.setLang}
          />
          <TeamPanel
            setTeam={props.setTeam}
            team={props.team}
            lang={props.lang}
            setLang={props.setLang}
          />
        </div>
      </section>
    </div>
  );
}
