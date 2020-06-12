import React from 'react';
import "./App.css";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
