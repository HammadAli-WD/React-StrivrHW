import React from 'react';
import "./App.css";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContents from './Component/HomeContents';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <HomeContents />
    </Router>
  );
}

export default App;
