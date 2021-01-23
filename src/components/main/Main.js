import React from "react";
import News from "./news/News";
import Team from "./team/Team";
import Contact from "./contact/Contact";
import "./Main.scss";
import Rights from "./rights/Rights";
export default function Main(props) {
  return (
    <div className="main-wrapper">
      <section>
        <div className="main-container">
          <News
            news={props.news}
            setNews={props.setNews}
            lang={props.lang}
          />
          <Team
            team={props.team}
            setTeam={props.setTeam}
            lang={props.lang}
          />
          <Contact lang={props.lang}/>
          <Rights lang={props.lang} />
        </div>
      </section>
    </div>
  );
}
