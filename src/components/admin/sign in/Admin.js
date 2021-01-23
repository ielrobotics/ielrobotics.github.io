import React, {  useCallback, useContext } from "react";
import "./Admin.scss";
import fire from "../../../firebase/fire";
import { AuthContext } from "../../../Auth/Auth";
import { withRouter, Redirect } from "react-router";
const Admin = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const { email, password } = event.target.elements;
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/panel" />;
  }
  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        <h2 className="admin-title">
          <span className="outline">Admin Login</span>
        </h2>
        <form onSubmit={handleLogin} className="form-wrapper">
          <input
            className="email"
            type="email"
            placeholder="E-mail"
            name="email"
            required
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <button type="submit" name="login button" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
export default withRouter(Admin);
