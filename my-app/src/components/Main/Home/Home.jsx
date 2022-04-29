import React, { Component } from "react";
import {userContext} from '../../../context/userContext';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
    const user = event.target.user.value;
    this.setState({user})
    this.context.login(user)
  }

  

  render() {

    return (
      <>
      <h1>Tell us who you are 🤘</h1>
      <p>Register your name and enjoy unlimited content! </p>
        <form onSubmit={this.register} className="form">
          <TextField id="outlined-basic" label="Username" variant="filled" name='user'/>
          <Button variant="outlined" type="submit" className="Button" sx={{margin:1}}>Submit</Button>
        </form>
      </>)
  }
}

export default Home;

