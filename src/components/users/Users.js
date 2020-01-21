import React, { Component } from "react";
import Useritem, { User_item } from "./User_item";
import { Link } from "react-router-dom";
import Loading from "../layout/Loading";
import axios from "axios";

export default class Users extends Component {
  state = {
    users: [],
    loading: false,
    current_page: null,
    total: null,
    per_page: null
  };

  HttpRequestWithPage = async page_number => {
    axios.get(`https://reqres.in/api/users?page=${page_number}`).then(res => {
      this.setState({
        users: res.data.data,
        current_page: res.data.page,
        total: res.data.total,
        per_page: res.data.per_page
      });
      console.log("state = ", this.state);
    });
  };

  //   componentWillMount() {
  //     this.HttpRequestWithPage();
  //     console.log("component will mount");
  //     this.setState({ loading: true });
  //     axios.get(`https://reqres.in/api/users?page=1`).then(res => {
  //       //console.log(res.data.data);
  //       this.setState({ users: res.data.data });
  //       this.setState({ loading: false });
  //     });
  //   }

  componentDidMount() {
    this.HttpRequestWithPage(1);
    console.log("component did mount function");
  }

  render() {
    let users;

    const pageNumber = [];
    if (this.state.total) {
      for (
        let i = 1;
        i <= Math.ceil(this.state.total / this.state.per_page);
        i++
      ) {
        pageNumber.push(i);
      }
    }

    const renderPageNumbers = pageNumber.map(number => {
      let classes = this.state.current_page === number ? "active" : "";

      return (
        <li key={number} className={classes}>
          <Link to="#" onClick={() => this.HttpRequestWithPage(number)}>
            {number}
          </Link>
        </li>
      );
    });

    if (this.state.users.length > 0 && this.state.users) {
      users = this.state.users.map(user => (
        // <Useritem
        //   user={user}
        //   key={user.id}
        //   current_page={this.state.page}
        //   per_page={this.state.per_page}
        //   total={this.state.total}
        // />
        <li className="collection-item avatar">
          <img src={user.avatar} alt="" className="circle" />
          <span className="title">{user.first_name}</span>
          <p>{user.email}</p>
          <a href="#!" className="secondary-content">
            <i className="material-icons"></i>
          </a>
        </li>
      ));
    } else {
      return <Loading />;
    }
    return (
      <div>
        <ul className="collection">{users}</ul>
        <ul class="pagination">{renderPageNumbers}</ul>
      </div>
    );
  }
}
