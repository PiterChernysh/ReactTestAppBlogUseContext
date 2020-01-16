import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import styles from "./style.css";
import { validNameEmail } from "../../validation/authorization.js";
import MyContext from "../../context";

const Authorization = ({ setUserActive, users }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exist, setExist] = useState(true);

  const history = useHistory();

  const home = () => {
    history.push("/");
  };
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    };
    if (email != "" && password != "") {
      let item = validNameEmail(data, users);
      setExist(item.exist);
      if (item.exist) {
        let authUser = users[item.id];
        authUser.status = "true";
        setUserActive(authUser);
        clearForm();
        home();
      }
      setExist(false);
    }
  };
  const clearForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div className={styles.box0}>
      <div className={styles.box}>
        <h1>Authorization</h1>
        <form
          className={`${styles.form} ${styles.type ? styles.type : ""}`}
          onSubmit={handleSubmit}
        >
          {!exist && email != "" && password != "" ? (
            <h3>Login or password do not match</h3>
          ) : (
            ""
          )}
          <label htmlFor="email"> Login </label>
          <small>{email != "" ? <br /> : "No email"}</small>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <small>{password != "" ? <br /> : "No password"}</small>
          <input
            type="password"
            name="password"
            id="password"
            minLength={4}
            maxLength={8}
            size="8"
            value={password}
            onChange={handleChange}
          ></input>
          <Button>LOGIN</Button>
        </form>
      </div>
    </div>
  );
};

export default props => (
  <MyContext.Consumer>
    {context => <Authorization {...context} />}
  </MyContext.Consumer>
);
