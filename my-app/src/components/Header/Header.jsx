import React, { Component } from "react";
import Nav from './Nav';
import logo from '../../assets/logo.svg';
import './Header.css'

class Header extends Component {
  render() {
    return <div className="header">
      <img src={logo} alt="logo newspaper" className="logo"/>
      <Nav/>
    </div>;
  }
}

export default Header;
