import React, { useContext } from "react";
import DownHeader from "./main/headers/DownHeader";
import Header from "./main/headers/Header";
import Main from "./main/Main";
import { AuthContext } from "../Auth/Auth";
import "./Home.scss";
import { Link } from "react-router-dom";
import fire from "../firebase/fire";
function Home(props) {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser ? (
        <div className="admin-button-wrapper">
          <section>
            <div className="admin-button-container">
              <Link to="/panel" className="link-to-panel">
                <span className="panel-outline">Go to Admin Panel</span>
              </Link>
              <h2
                className="link-to-panel"
                onClick={() => fire.auth().signOut()}
              >
                <span className="panel-outline">Log out</span>
              </h2>
            </div>
          </section>
        </div>
      ) : null}
      <Header lang={props.lang} setLang={props.setLang} />
      <DownHeader lang={props.lang}/>
      <Main
        news={props.news}
        setNews={props.setNews}
        team={props.team}
        setTeam={props.setTeam}
        lang={props.lang}
      />
    </>
  );
}
export default Home;
