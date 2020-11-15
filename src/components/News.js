import React from "react";
import "./News.scss";
export default function News() {
  return (
    <div className="news-wrapper">
      <h2 className="span-title">
        <span className="outline">News</span>
      </h2>
      <ul className="news">
        <li className="new">
          <div className="new-container">
            <div className="flex-text">
              <p>
                Sit kasd amet vero eirmod ea sit. Labore et dolores aliquyam
                accusam kasd. Nonumy.
              </p>
              <img
                style={{ maxWidth: "2em", height: "auto" }}
                src={encodeURI(`https://avatars.dicebear.com/api/bottts/${"sevgi saygı ve kardeşlik"}.svg`)}
              />
            </div>
          </div>
        </li>
        <li className="new">
          <div className="new-container">
            <div className="flex-text">
              Sit kasd amet vero eirmod ea sit. Labore et dolores aliquyam
              accusam kasd. Nonumy.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
