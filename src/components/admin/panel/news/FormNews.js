import React, { useState } from "react";
import fire from "../../../../firebase/fire";

const db = fire.firestore();

export default function FormNews(props) {
  const [fileWaitHook, setFileWaitHook] = useState(false);
  const [fileUrl, setFileUrl] = useState(
    props.currentNews ? props.currentNews.Image : null
  );
  const onFileChange = async (e) => {
    setFileWaitHook(true);
    const file = e.target.files[0];
    const storageRef = fire.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef
      .put(file)
      .then(() => {
        setFileWaitHook(false);
      })
      .catch((err) => alert(err));
    setFileUrl(await fileRef.getDownloadURL());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { title, text, author, url, yazi, baslik } = e.target.elements;
    if (
      !title.value ||
      !author.value ||
      !text.value ||
      !yazi.value ||
      !baslik.value
    ) {
      alert("Title, Text and author is required. Turkish and English");
    } else {
      let news_copy = props.news;
      var addedNew = news_copy.find((n) => n.Title === title.value.toString());
      if (addedNew && !props.currentNews) {
        alert("This title is already given");
      } else {
        if (props.currentNews) {
          news_copy[news_copy.indexOf(props.currentNews)] = {
            Title: title.value.toString(),
            Author: author.value.toString(),
            Text: text.value.toString(),
            Yazi: yazi.value.toString(),
            Baslik: baslik.value.toString(),
            Url: url.value,
            Image: fileUrl,
            Date: Date.now(),
          };
        } else {
          news_copy.unshift({
            Title: title.value.toString(),
            Author: author.value.toString(),
            Text: text.value.toString(),
            Yazi: yazi.value.toString(),
            Baslik: baslik.value.toString(),
            Url: url.value,
            Image: fileUrl,
            Date: Date.now(),
          });
        }
        db.collection("news").doc(title.value.toString()).set({
          Title: title.value.toString(),
          Author: author.value.toString(),
          Text: text.value.toString(),
          Yazi: yazi.value.toString(),
          Baslik: baslik.value.toString(),
          Url: url.value,
          Image: fileUrl,
          Date: Date.now(),
        });
        props.setNews(news_copy);
        props.closeModal();
      }
    }
  };
  return (
    <div>
      <div
        className="form-container"
        style={{
          maxWidth: "20em",
          margin: "auto",
          border: "none",
          textAlign: "center",
        }}
      >
        <h2 className="span-title">
          <span className="outline" style={{ marginBottom: "0.5em" }}>
            {props.currentNews ? "Update" : "Add"} News
          </span>
        </h2>
        <form
          className="form-wrapper"
          style={{ border: "none" }}
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="Title"
            className="input"
            name="title"
            value={props.currentNews ? props.currentNews.Title : undefined}
            readOnly={props.currentNews}
          />
          <textarea
            type="textarea"
            placeholder="Text"
            className="input"
            name="text"
            defaultValue={props.currentNews ? props.currentNews.Text : ""}
          />
          <input
            type="text"
            placeholder="Başlık"
            className="input"
            name="baslik"
            value={props.currentNews ? props.currentNews.Baslik : undefined}
            readOnly={props.currentNews}
          />
          <textarea
            type="textarea"
            placeholder="Yazı "
            className="input"
            name="yazi"
            defaultValue={props.currentNews ? props.currentNews.Yazi : ""}
          />
          <input
            type="text"
            placeholder="Author"
            className="input"
            name="author"
            value={props.currentNews ? props.currentNews.Author : undefined}
            readOnly={props.currentNews}
          />
          <input
            type="url"
            placeholder="Link to post"
            className="input"
            name="url"
            defaultValue={props.currentNews ? props.currentNews.Url : ""}
          />
          <input
            type="file"
            className="file"
            onChange={onFileChange}
            accept="image/png, image/jpeg, image/svg"
          />
          <button
            className="log-out-button"
            type="submit"
            disabled={fileWaitHook}
          >
            {props.currentNews ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}
