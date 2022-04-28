import React, { Component } from "react";
import Nav from './Nav';
import logo from '../../assets/logo.svg';
import './Header.css';
import {userContext} from '../../context/userContext';

class Header extends Component {

/*   static contextType = userContext */

  render() {
    return (
      <header className="header">
        <img src={logo} alt='logo' className="logo"></img>
        <Nav/>
        <div className='user'>
          <userContext.Consumer>
          {({user,logout}) => 
              user?
                <>
                  <p>Hola, {user}</p>
                  <button onClick={logout}>Logout</button>
                </>:""
          }
          </userContext.Consumer>
        </div>
      </header>
    )
  }
}

export default Header;
