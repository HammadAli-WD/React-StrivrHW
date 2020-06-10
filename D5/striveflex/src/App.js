import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbarflex from './component/Navbarflex'
import Footerflex from './component/Footerflex'
import Home from './component/Home'

import {Link } from "react-router-dom";
class App extends Component {

  
  
  render(){
  return (
   
    <div className="App">
      <Navbarflex/>
      <Link to="/RegistrationForm" className="btn btn-primary">Registration</Link>
     <Home/>
      <Footerflex/>

    </div>
    
  );
}
}

export default App;
