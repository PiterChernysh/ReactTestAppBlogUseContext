import React from "react";
import ReactDOM from "react-dom";
import styles from "./style.css";
import BlogContext from "./BlogContext";
import Router from "./router";

const App = () => {
  return (
    <BlogContext>
      <div className={styles.box}>
        <Router />
      </div>
    </BlogContext>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
