import React, { memo } from "react";

import Header from "./components/layout/Header";
import Posts from "./components/blog/Posts";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact_us from "./components/pages/Contact_us";
import Single_post from "./components/blog/Single_post";
import Notfound from "./components/layout/Notfound";
import Users from "./components/users/Users";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact-us" component={Contact_us} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/users" component={Users} />
            <Route path="/post/:id" component={Single_post} />
            <Route path="*" component={Notfound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
