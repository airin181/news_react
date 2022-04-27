import React, { Component } from "react";

class Nav extends Component {
  render() {
    return <div>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Link to="/news-list">News</Link>
    </div>;
  }
}

export default Nav;
