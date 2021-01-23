import React from "react";
import "./News.scss";
import DownArrow from "../../../images/downarrow.svg";
const dayjs = require("dayjs");
const NewList = (props) => {
  return (
    <>
      <ul className="news">
        {props.news.map((data) => {
          return (
            <li
              className="new"
              key={data.Title}
              onClick={() => {
                if (data.Url) {
                  var win = window.open(data.Url, "_blank");
                  win.focus();
                }
              }}
            >
              <div
                className="new-container"
                style={data.Url ? { cursor: "pointer" } : { cursor: "default" }}
              >
                <div className="flex-text">
                  <p
                    style={{
                      display: "flex",
                      top: "0",
                      right: "0",
                      position: "absolute",
                      color: "#ccc",
                      fontSize: ".75em",
                      marginRight: "1em",
                    }}
                  >
                    {props.lang
                      ? dayjs(data.Date).format("DD/MM/YYYY HH:mm:ss")
                      : dayjs(data.Date).format("MM/DD/YYYY HH:mm:ss")}
                  </p>
                  <h2 className="new-pre-title" style={{ display: "block" }}>
                    {props.lang ? data.Title : data.Baslik}
                  </h2>
                  <p className="new-text">
                    {props.lang ? data.Text : data.Yazi}
                  </p>
                  <img
                    style={{ maxWidth: "2em", height: "auto" }}
                    src={encodeURI(
                      `https://avatars.dicebear.com/api/bottts/${data.Title}.svg`
                    )}
                    alt={`iel robotics ${data.Title}`}
                  />
                  <strong style={{ display: "block", fontSize: "1.2em" }}>
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
export default function News(props) {
  const [limit, setLimit] = React.useState(4);
  const increment = 4;
  let sliced_data = props.news.slice(0, limit);
  return (
    <div className="news-wrapper">
      <h2 className="span-title" style={{ color: "black" }}>
        <span className="outline">
          {props.lang ? <>News</> : <>Haberler</>}
        </span>
      </h2>
      <NewList lang={props.lang} news={sliced_data} />
      {limit >= props.news.length ? null : (
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              padding: "15px 10px 5px 10px",
              borderRadius: "50%",
              margin: "auto",
              border: "0px solid",
            }}
            onClick={() => {
              setLimit(limit + increment);
            }}
            className="log-out-button"
          >
            <img
              src={DownArrow}
              style={{ height: "3em", width: "3em" }}
              alt="down arrow"
            />
          </button>
        </div>
      )}
    </div>
  );
}
