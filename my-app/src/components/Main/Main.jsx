import React, { Component } from "react";
import Form from './components/Main/Form'
import Home from './components/Main/Home'
import News from './components/Main/News'
import {Route, Routes} from 'react-router-dom'

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
