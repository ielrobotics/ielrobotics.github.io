import React, { useState } from "react";
import fire from "../../../../firebase/fire";
const db = fire.firestore();
export default function TeamForm(props) {
  const [fileUrl, setFileUrl] = useState(
    props.currentTeam ? props.currentTeam.Avatar : null
  );
  const [fileWaitHook, setFileWaitHook] = useState(false);
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
      .catch((err) => {
        alert(err);
      });
    setFileUrl(await fileRef.getDownloadURL());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, quote, role, alinti, rol } = e.target.elements;
    if (
      !name.value ||
      !quote.value ||
      !role.value ||
      !alinti.value ||
      !rol.value
    ) {
      alert("Every input is required, except file");
    } else {
      let team_copy = props.team;
      console.log(team_copy, props.team, props);
      var addedTeam = team_copy.find((n) => n.Name === name.value);
      if (addedTeam && !props.currentTeam) {
        alert("This person is already exists");
      } else {
        if (props.currentTeam) {
          team_copy[team_copy.indexOf(props.currentTeam)] = {
            Name: name.value,
            Quote: quote.value,
            Role: role.value,
            Rol: rol.value,
            Alinti: alinti.value,
            Avatar: fileUrl
              ? fileUrl
              : encodeURI(
                  `https://avatars.dicebear.com/api/bottts/${name.value}.svg`
                ),
          };
        } else {
          team_copy.push({
            Name: name.value,
            Quote: quote.value,
            Role: role.value,
            Rol: rol.value,
            Alinti: alinti.value,
            Avatar: fileUrl
              ? fileUrl
              : encodeURI(
                  `https://avatars.dicebear.com/api/bottts/${name.value}.svg`
                ),
          });
        }
        db.collection("team")
          .doc(name.value.toString())
          .set({
            Name: name.value,
            Quote: quote.value,
            Role: role.value,
            Rol: rol.value,
            Alinti: alinti.value,
            Avatar: fileUrl
              ? fileUrl
              : encodeURI(
                  `https://avatars.dicebear.com/api/bottts/${name.value}.svg`
                ),
          });
      }
      props.setTeam(team_copy);
      props.closeModal();
    }
  };
  return (
    <div>
      <div style={{ maxWidth: "20em", margin: "auto", border: "none", textAlign: "center" }}>
        <h2 className="span-title">
          <span className="outline" style={{ marginBottom: "1em" }}>
            Add Team Member
          </span>
        </h2>
        <form
          className="form-wrapper"
          style={{ border: "none" }}
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            className="input"
            name="name"
            readOnly={props.currentTeam}
            defaultValue={props.currentTeam ? props.currentTeam.Name : ""}
          />
          <textarea
            type="textarea"
            placeholder="Quote"
            name="quote"
            className="input"
            defaultValue={props.currentTeam ? props.currentTeam.Quote : ""}
          />
          <input
            type="text"
            name="role"
            className="input"
            placeholder="Role"
            defaultValue={props.currentTeam ? props.currentTeam.Role : ""}
          />
          <textarea
            type="textarea"
            placeholder="Alıntı"
            name="alinti"
            className="input"
            defaultValue={props.currentTeam ? props.currentTeam.Alinti : ""}
          />
          <input
            type="text"
            name="rol"
            className="input"
            placeholder="Rol"
            defaultValue={props.currentTeam ? props.currentTeam.Rol : ""}
          />
          <input
            type="file"
            className="file"
            accept="image/png, image/jpeg, image/svg"
            onChange={onFileChange}
          />
          <button
            className="log-out-button"
            type="submit"
            disabled={fileWaitHook}
          >
            {props.currentTeam ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}
/*
doc
    -avatar (default is avatar api)
    -name 
    -quote
    -role


*/
