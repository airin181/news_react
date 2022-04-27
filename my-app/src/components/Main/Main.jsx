import React, { Component } from "react";
import Form from './Form';
import Home from './Home';
import News from './News';
import {Route, Routes} from 'react-router-dom';

class Main extends Component {
  render() {
    return <div>
      <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Form/>} path='/form'/>
      <Route element={<News/>} path='/news-list'/>
      </Routes>

    </div>;
  }
}

export default Main;