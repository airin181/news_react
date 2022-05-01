import React, { Component } from "react";
import Form from './Form';
import Home from './Home';
import News from './News/News.jsx';
import {Route, Routes} from 'react-router-dom';
export class Main extends Component {

  
 constructor(props) {
   super(props)
 
   this.state = {
      newsForm: []
   }
 }

  render() {

  //form-newsList (props)
  const saveNews = (input) =>{
    this.setState({newsForm: input}) //input es un objeto
  } 

  const newsForm = this.state.newsForm

    return (<div>
   
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Form value={saveNews}/>} path='/form'/>
          <Route element={<News value={newsForm} />} path='/news'/>
        </Routes>

    </div>);
  }
}

export default Main;