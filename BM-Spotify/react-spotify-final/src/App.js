import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Tracks from './Component/Tracks';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home}></Route>
    <Route path='/tracks/:id' exact  component={Tracks}></Route>
    </Router>
  );
}

export default App;
