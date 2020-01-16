import React from "react";

import styles from "./style.css";
import PostsList from "../../components/PostsList";

const Home = () => {
  return (
    <div className={styles.box}>
      <PostsList />
    </div>
  );
};

export default Home;
