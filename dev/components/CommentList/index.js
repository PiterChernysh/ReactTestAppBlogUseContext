import React, { useState } from "react";

import Comment from "../Comment";
import FormComment from "../FormComment";
import Button from "../Button";
import styles from "./style.css";
import MyContext from "../../context";

const CommentList = ({ match, idPost, comments, userActive }) => {
  const [showForm, setShowForm] = useState(false);
  const [itemEdit, setEditItem] = useState(false);

  const setItemEdit = () => {
    setEditItem(!itemEdit);
  };

  const activeUser = () => {
    if (JSON.stringify(userActive) == "{}") return false;
    else return true;
  };

  const showEditComment = () => {
    setShowForm(!showForm);
  };
  const active = activeUser();
  let dataList = [];
  for (let key in comments) {
    if (comments[key].idPost == idPost) dataList.push(comments[key]);
  }
  return (
    <>
      {active ? (
        !showForm ? (
          <Button handleClick={showEditComment}>Add comment</Button>
        ) : (
          <FormComment
            idPost={idPost}
            type="add"
            showEditComment={showEditComment}
          />
        )
      ) : (
        ""
      )}
      <ul className={styles.list}>
        {dataList.map(item => {
          return (
            <Comment
              key={item.id}
              comment={item}
              idPost={idPost}
              type={"show"}
              setItemEdit={setItemEdit}
            />
          );
        })}
      </ul>
    </>
  );
};

export default props => (
  <MyContext.Consumer>
    {context => <CommentList {...context} {...props} />}
  </MyContext.Consumer>
);
