import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Spinner from "./logo192.png";

const Loading = props => {
  return (
    <Fragment>
      <img src={Spinner} />
    </Fragment>
  );
};

export default Loading;
