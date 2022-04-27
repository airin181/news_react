import React, { Component } from "react";
import Nav from './Nav';
import logo from '../../assets/logo.svg';
import './Header.css'
import {userContext} from '../../context/userContext';

class Header extends Component {

  static contextType = userContext

  render() {
    return <div className="header">

      <img src={logo} alt="logo newspaper" className="logo"/>
      <Nav/>
      <div>
        <userContext.Consumer>
        {(data) =>
          data? 
            <>
              <p>Hola, {data}</p>
            </>:""
        }
        </userContext.Consumer>
      </div>
    </div>;
  }
}

export default Header;
