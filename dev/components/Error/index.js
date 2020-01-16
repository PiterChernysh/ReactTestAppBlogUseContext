import React from "react";
import style from "./style.css";
import { useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();
  const returnPage = () => {
    setTimeout(() => {
      history.push("/");
    }, 2000);
  };
  return (
    <div className={style.error}>
      {returnPage()}
      <img
        src="https://media3.giphy.com/media/xT8qBhrlNooHBYR9f2/giphy.gif"
        alt="man in space"
      />
      <p>Page not found</p>
    </div>
  );
};
export default Error;
