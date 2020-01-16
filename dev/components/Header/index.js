import React from "react";
import { useHistory } from "react-router-dom";

import Title from "../Title";
import styles from "./style.css";
import Button from "../Button";
import MyContext from "../../context";

const Header = ({ rout, userActive, resetUserActive, updateUser }) => {
  const history = useHistory();

  const list = Object.keys(rout);
  const transition = page => {
    if (page != history.location.pathname) history.push(page);
  };
  const resetActiveUser = () => {
    resetUserActive({});
    let userLogOut = userActive;
    updateUser(userLogOut);
  };
  const createMenu = () => {
    return list.map(item => {
      return (
        <Button handleClick={() => transition(rout[item])} key={item}>
          {item}
        </Button>
      );
    });
  };
  return (
    <header>
      <Title />
      <nav className={styles.novigation}>
        {createMenu()}
        <Button handleClick={() => resetActiveUser()}>Sign out</Button>{" "}
      </nav>
    </header>
  );
};

export default props => (
  <MyContext.Consumer>
    {context => <Header {...context} {...props} />}
  </MyContext.Consumer>
);
