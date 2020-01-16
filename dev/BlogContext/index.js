import React from "react";
import postsJson from "../data/posts.json";
import userJson from "../data/usersData.json";
import commentJson from "../data/comments.json";
import MyContext from "../context";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      userActive: {},
      posts: postsJson,
      users: userJson,
      comments: commentJson
    };
  }
  render() {
    const store = {
      userActive: this.state.userActive,
      posts: this.state.posts,
      users: this.state.users,
      comments: this.state.comments,
      setUserActive: user => {
        this.setState({ userActive: user });
      },
      resetUserActive: user => {
        return this.setState({ userActive: {} });
      },
      createUser: user => {
        const transformUser = [user].reduce((prev, next) => {
          prev[next.id] = next;
          return prev;
        }, {});
        return this.setState({
          users: { ...transformUser, ...this.state.users }
        });
      },
      updateUser: user => {
        let transformUsers = this.state.users;
        delete transformUsers[user.id];
        transformUsers[user.id] = user;
        return this.setState({ users: transformUsers });
      },
      removeUser: id => {
        let transformUsers = this.state.users;
        delete transformUsers[id];
        return this.setState({ users: transformUsers });
      },
      addPost: post => {
        let transformPost = [post].reduce((prev, next) => {
          prev[next.id] = next;
          return prev;
        }, {});
        return this.setState({
          posts: { ...transformPost, ...this.state.posts }
        });
      },
      updatePost: post => {
        let transformPost = this.state.posts;
        transformPost[post.id] = post;
        return this.setState({ posts: transformPost });
      },
      removePost: id => {
        let transformPost = this.state.posts;
        delete transformPost[id];
        return this.setState({ posts: transformPost });
      },
      addComments: comment => {
        let transformComments = [comment].reduce((prev, next) => {
          prev[next.id] = next;
          return prev;
        }, {});
        return this.setState({
          comments: { ...transformComments, ...this.state.comments }
        });
      },
      updateComments: comment => {
        let transformComments = this.state.comments;
        transformComments[comment.id] = comment;
        return this.setState({ comments: transformComments });
      },
      removeComments: id => {
        let transformComments = this.state.comments;
        delete transformComments[id];
        return this.setState({ comments: transformComments });
      }
    };
    return (
      <MyContext.Provider value={store}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default Blog;
