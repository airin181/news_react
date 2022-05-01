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

 //form-newsList (props)
 render() {
    const saveNews = (input) =>{
      this.setState({newsForm: [...this.state.newsForm, input]}) //input -> objeto... estado: array
    } 
    console.log('clog de this.state.newsForm en MAIN: ', this.state.newsForm);

    return (
    <div>
   
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Form value={saveNews}/>} path='/form'/>
          <Route element={<News value={this.state}/>} path='/news'/>
        </Routes>

    </div>);
  }
}

export default Main;