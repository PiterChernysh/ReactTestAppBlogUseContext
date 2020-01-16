import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import styles from "./style.css";
import { validNameEmail } from "../../validation/registration.js";
import MyContext from "../../context";

const Registration = ({ type, users, setUserActive, createUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exist, setExist] = useState("no");

  const history = useHistory();

  const home = () => {
    history.push("/");
  };
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      default:
        return setPassword(value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      name: name,
      email: email,
      password: password,
      status: "true"
    };
    if (email != "" && password != "") {
      let item = validNameEmail(data, users);
      setExist(item.name);
      if (item.name === "no") {
        setUserActive(data);
        createUser(data);
        clearForm();
        home();
      }
    }
  };
  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setExist("no");
  };

  return (
    <div className={styles.box0}>
      <div className={styles.box}>
        {type != "update" ? <h1>Registration</h1> : <h1>Update profile</h1>}
        <form
          className={`${styles.form} ${styles.type ? styles.type : ""}`}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name"> Name </label>
          <small>{name != "" ? <br /> : "No name"}</small>
          <small>
            {exist === "name"
              ? "user with this name exists, enter another name"
              : ""}
          </small>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <label htmlFor="email"> Login </label>
          <small>{email != "" ? <br /> : "No email"}</small>
          <small>
            {exist === "email"
              ? "user with this email exists, enter another name"
              : ""}
          </small>
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
          <div className={styles.novigation}>
            <Button>Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default props => (
  <MyContext.Consumer>
    {context => <Registration {...context} />}
  </MyContext.Consumer>
);
