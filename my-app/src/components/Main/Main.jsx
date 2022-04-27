import React, { Component } from "react";
import Form from './components/Main/Form'
import Home from './components/Main/Home'
import News from './components/Main/News'

class Main extends Component {
  render() {
    return <div>
      <Home/>
      <Form/>
      <News/>

    </div>;
  }
}

export default Main;
