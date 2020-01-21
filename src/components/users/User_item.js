import React, { Fragment } from "react";

export const User_item = ({ user, per_page, current_page, total }) => {
  const { email, first_name, last_name, avatar } = user;

  const pageNumber = [];
  if (total) {
    for (let i = 1; i <= Math.ceil(total / per_page); i++) {
      pageNumber.push(i);
    }
  }

  const renderPageNumbers = pageNumber.map(number => {
    let classes = current_page === number ? "active" : "";

    return (
      <span
        key={number}
        className={classes}
        onClick={() => this.makeHttpRequestWithPage(number)}
      >
        {number}
      </span>
    );
  });

  console.log(pageNumber);
  return (
    <Fragment>
      <ul className="collection">
        <li className="collection-item avatar">
          <img src={avatar} alt="" className="circle" />
          <span className="title">{first_name}</span>
          <p>{email}</p>
          <a href="#!" className="secondary-content">
            <i className="material-icons"></i>
          </a>
        </li>
      </ul>
      {renderPageNumbers}
    </Fragment>
  );
};

export default User_item;
