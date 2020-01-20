import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Post_item = props => {
  const { title, body, id } = props.post;
  return (
    <Fragment>
      <div className="col s12 m7">
        <div className="card blue-grey darken-2">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p>{body}</p>
          </div>
          <div className="card-action">
            <Link to={`/post/${id}`}>This is a link</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Post_item;
