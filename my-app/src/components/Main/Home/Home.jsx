import React, { Component } from "react";
import {userContext} from '../../../context/userContext';

class Home extends Component {

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
    
     //Esto me lo trae vaciooooo 

  }
  

  render() {
    const data = this.state.user
    
    console.log('c.log de data en render: ',data);
    return <div>
      <userContext.Provider value={data}>
        <form onSubmit={this.register}>
          <label htmlFor="user">Nombre usuario:</label> <br />
          <input type="text" name="user"id="user"/> <br />
          <input type="submit" value="Enviar"/>
        </form>
      </userContext.Provider>
    </div>
  }
}

export default Home;
