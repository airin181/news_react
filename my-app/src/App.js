import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {BrowserRouter} from 'react-router-dom';

/* import {useState} from 'react'; */



function App() {

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Main/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
