import React, { Component } from "react";
import Form from './Form';
import Home from './Home';
import News from './News/News.jsx';
import {Route, Routes} from 'react-router-dom';

export class Main extends Component {
  render() {
    return (<div>
   
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Form/>} path='/form'/>
          <Route element={<News/>} path='/news'/>
        </Routes>

    </div>);
  }
}

export default Main;