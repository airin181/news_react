import React, { Component } from "react";
import Nav from './Nav';
import logo from '../../assets/logo.svg';
import './Header.css';
import {userContext} from '../../context/userContext';
import Button from '@mui/material/Button';

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
                  <p>Hey, {user}</p>
                  <Button variant="contained" onClick={logout}>Logout</Button>
                </>:""
          }
          </userContext.Consumer>
        </div>
      </header>
    )
  }
}

export default Header;
