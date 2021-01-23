import React, { useState } from "react";
import fire from "../../../../firebase/fire";
import FormNews from "./FormNews";
import Modal from "../../../helpers/Modal";
const db = fire.firestore();

const NewsList = (props) => {
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
        <FormNews
          news={props.news}
          setNews={props.setNews}
          currentNews={nonLoopData}
          closeModal={() => setIsOpen(false)}
        />
      </Modal>
      <ul className="news">
        {props.news.map((data) => {
          return (
            <li className="new" key={data.Title}>
              <div style={{ display: "flex", margin: "auto" }}>
                <button
                  onClick={(e) => {
                    let news_copy = props.news.filter(
                      (n) => n.Title !== data.Title
                    );
                    db.collection("news").doc(data.Title).delete();
                    props.setNews(news_copy);
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
              <div
                onClick={() => {
                  if (data.Url) {
                    var win = window.open(data.Url, "_blank");
                    win.focus();
                  }
                }}
                className="new-container"
                style={data.Url ? { cursor: "pointer" } : { cursor: "default" }}
              >
                <div className="flex-text">
                  <h2 className="new-pre-title">{data.Title}</h2>
                  <p className="new-text">{data.Text}</p>
                  <img
                    style={{ maxWidth: "2em", height: "auto" }}
                    src={encodeURI(
                      `https://avatars.dicebear.com/api/bottts/${data.Title}.svg`
                    )}
                    alt={`iel robotics ${data.Title}`}
                  />
                  <strong style={{ display: "block" }}>
                    - {data.Author}{" "}
                    <img
                      style={{ maxWidth: "1.5em", height: "auto" }}
                      src={encodeURI(
                        `https://avatars.dicebear.com/api/bottts/${data.Author}.svg`
                      )}
                      alt={`iel robotics ${data.Author}`}
                    />
                  </strong>
                </div>
                <div style={{ margin: "auto", textAlign: "center" }}>
                  {data.Image ? (
                    <img
                      src={data.Image}
                      style={{
                        maxWidth: "10em",
                        height: "auto",
                        borderRadius: "0.5em",
                        marginLeft: "1em",
                      }}
                      loading="lazy"
                      alt={`iel robotics ${data.Title}`}
                    />
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default function NewsPanel(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: "10em" }}>
      <h2>News</h2>
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
        <FormNews
          news={props.news}
          setNews={props.setNews}
          closeModal={() => setIsOpen(false)}
        />
      </Modal>
      {
        <NewsList
          lang={props.lang}
          setLang={props.setLang}
          setNews={props.setNews}
          news={props.news}
        />
      }
    </div>
  );
}
