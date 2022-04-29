import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <div className="nav">
      <Link to="/" className="nav__element">Home</Link>
      <Link to="/form" className="nav__element">Form</Link>
      <Link to="/news" className="nav__element">News</Link>
    </div>;
  }
}

export default Nav;