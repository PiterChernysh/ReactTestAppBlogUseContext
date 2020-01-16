import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./style.css";

const Item = ({ item, author }) => {
  const history = useHistory();
  const post = () => {
    history.push(`/post/${item.id}`);
  };

  return (
    <>
      <li className={styles.item}>
        <div className={styles.item__title} onClick={post}>
          <header className={styles.item__head}>
            <h3 className={styles.item__title}>Title: {item.title} </h3>
            <div className={styles.item__action}></div>
          </header>
          <img className={styles.image} src={item.content.img} />
          <h3 className={styles.item__task}>Task: {item.content.task}</h3>
          <h3 className={styles.item__task}>Author: {author.name} </h3>
          <h3 className={styles.item__task}>
            Status: {author.status === "true" ? "Online" : "Offline"}
          </h3>
        </div>
      </li>
    </>
  );
};

export default Item;
