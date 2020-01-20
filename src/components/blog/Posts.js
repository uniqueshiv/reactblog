import React, { Component } from "react";
// import PropTypes from "prop-types";
import Post_item from "./Post_item";
import Loading from "../layout/Loading";
import axios from "axios";

class Posts extends Component {
  state = {
    posts: [],
    loading: true
  };
  // static propTypes = {
  //   prop: PropTypes
  // };

  componentWillMount() {
    this.setState({ loading: false });
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      const posts = res.data;
      console.log(posts);
      this.setState({ posts: posts });
      this.setState({ loading: true });
    });
  }

  render() {
    if (!this.state.loading) {
      return <Loading />;
    } else {
      return (
        this.state.posts.length > 0 &&
        this.state.posts.map(item => <Post_item post={item} key={item.id} />)
      );
    }
  }
}

export default Posts;
