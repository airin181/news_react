import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom';
import {useState} from 'react';
import {userContext} from './context/userContext';
import './styles/styles.scss'


function App() {
  const [user, setUser] = useState(""); //estado --> useState lee "user" y el string de dentro lo coge setUser
 

  //login (context)
  const login = (name) => {
    setUser(name)
  }

  //logout (context)
  const logout = () => {
    setUser("");
  } 

  
  //(context)
  const data = {
    user,
    login,
    logout 
  }
  
 

  return (
    <div className='App'>
      <BrowserRouter>
      <userContext.Provider value={data}>
      <Header/>
      <Main/>
      </userContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
