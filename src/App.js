// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState(`light`);
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#2f3439'
      document.body.style.color = 'white'

    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" AboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
      <Switch>
          <Route exact path="/about">
            <AboutUs mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm />
          </Route>
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
