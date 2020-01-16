import React, { useState } from "react";
import postsJson from "../data/posts.json";
import userJson from "../data/usersData.json";
import commentJson from "../data/comments.json";
import MyContext from "../context";

const Blog = (props) => {
  const [userActive, setUserActive] = useState({});
  const [posts, setPosts] = useState(postsJson);
  const [users, setUsers] = useState(userJson);
  const [comments, setComments] = useState(commentJson);
  const store = {
    userActive: userActive,
    posts: posts,
    users: users,
    comments: comments,
    setUserActive: user => {
      setUserActive(user);
    },
    resetUserActive: user => {
      setUserActive({});
    },
    createUser: user => {
      const transformUser = [user].reduce((prev, next) => {
        prev[next.id] = next;
        return prev;
      }, {});
      return setUsers({ ...transformUser, ...users });
    },
    updateUser: user => {
      let transformUsers = users;
      delete transformUsers[user.id];
      transformUsers[user.id] = user;
      return setUsers(transformUsers);
    },
    removeUser: id => {
      let transformUsers = users;
      delete transformUsers[id];
      return setUsers(transformUsers);
    },
    addPost: post => {
      let transformPost = [post].reduce((prev, next) => {
        prev[next.id] = next;
        return prev;
      }, {});
      return setPosts({ ...transformPost, ...posts });
    },
    updatePost: post => {
      let transformPost = posts;
      transformPost[post.id] = post;
      return setPosts(transformPost);
    },
    removePost: id => {
      let transformPost = posts;
      delete transformPost[id];
      return setPosts(transformPost);
    },
    addComments: comment => {
      let transformComments = [comment].reduce((prev, next) => {
        prev[next.id] = next;
        return prev;
      }, {});
      return setComments({ ...transformComments, ...comments });
    },
    updateComments: comment => {
      let transformComments = comments;
      transformComments[comment.id] = comment;
      return setComments(transformComments);
    },
    removeComments: id => {
      let transformComments = comments;
      delete transformComments[id];
      return setComments(transformComments);
    }
  };
  return (
    <MyContext.Provider value={store}>{props.children}</MyContext.Provider>
  );
};

export default Blog;
