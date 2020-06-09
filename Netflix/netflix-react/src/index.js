import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import ShowDetail from './Components/ShowDetail';

import Navbar from "./Components/Navbar";
//import ShowDetail from "./Components/ShowDetail";




/* function Routing() {
  return (

    <div>
      <Switch>
        {If the current URL is /about, this route is rendered
            while the rest are ignored}
        <Route path="/Navbar">
          <Navbar />
        </Route>

        {Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact}
        <Route path="/ShowDetail/:id">
          <ShowDetail />
          console.log(ShowDetail)
        </Route>
        {<Route path="/contact">
          <AllContacts />
        </Route>}

        {If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all}
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </div>
  );
} */





ReactDOM.render(
  //<React.StrictMode>
  <Router>
    
     
    <Route path='/' exact component={App}></Route>
    <Route path='/ShowDetail/:id' exact  component={ShowDetail}></Route>
    {/* <Route path="/" exact component={App} />
    <Route path="/ShowDetail/:id" component={ShowDetail} /> */}
    </Router>,
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
