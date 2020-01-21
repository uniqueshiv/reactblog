import React, { useEffect, useState } from "react";
import axios from "axios";

// const [post, getPost] = useState({});

const Single_post = props => {
  // useEffect(function() {
  //   const postId = props.match.params.id;
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  //     .then(res => {
  //       let post = res.data;
  //       getPost(post);
  //       console.log("post = ", post);
  //     });
  // }, []);
  const [count, setCount] = useState(0);
  useEffect(() => {
    // component mount
    console.log("adsasdasd");
    setCount(count + 1);
    return () => {
      // component unmount
    };
  }, []);

  useEffect(() => {
    // if value of count changes
    console.log(count);
    // setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Hello single post </h2>
    </div>
  );
};

export default Single_post;
