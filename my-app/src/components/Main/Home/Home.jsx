import React, { Component } from "react";
import {userContext} from '../../../context/userContext';

class Home extends Component {

  static contextType = userContext

  constructor(props) {
    super(props)
  
    this.state = {
       user: ""
    }
  }
  register = (event) => {
    event.preventDefault(); 
    const user = event.target.user.value

    this.setState({user})
    this.context.login(user)
  }

  render() {

    return (
      <>
        <form onSubmit={this.register}>
          <label htmlFor="user">Nombre usuario:</label> <br />
          <input type="text" name="user"id="user"/> <br />
          <input type="submit" value="Enviar"/>
        </form>
      </>)
  }
}

export default Home;
