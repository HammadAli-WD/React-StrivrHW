import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarflex from './component/Navbarflex'
import Footerflex from './component/Footerflex'

function App() {
  return (
    <div className="App">
      <Navbarflex/>
      <Footerflex/>

    </div>
  );
}

export default App;
