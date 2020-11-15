import React from "react";
import News from "./News";
import Team from "./Team";
import Contact from "./Contact";
import "./Main.scss";
export default function Main() {
  return (
    <div className="main-wrapper">
      <section>
        <div className="main-container">
          <News />
          <Team />
          <Contact/>
        </div>
      </section>
    </div>
  );
}
