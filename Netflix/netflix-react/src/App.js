import React, { Component } from 'react';
import './App.css';



export default class App extends Component {
  state = {
    harryPotterMovies: [],
    spiderManMovies: [],
    starWarsMovies: [],
    searchdeMovies:[],
    loading: true,
    error: false,
    comments:[]
  }
  url = "http://www.omdbapi.com/?i=tt3896198&apikey=ffe05ef9";
  componentDidMount= () => {
    Promise.all([
      fetch(this.url + "&s=harry%20potter")
        .then((response) => response.json())
        .then ((responseObject) =>
        this.setState({harryPotterMovies: responseObject.Search})),

      fetch(this.url +  "&s=spider%20man")
        .then((response) => response.json())
        .then(responseObject =>
          this.setState({spiderManMovies : responseObject.Search})),

      fetch(this.url + "&s=star%20wars")
          .then((response) => response.json())
          .then(responseObject =>
            this.setState({starWarsMovies : responseObject.Search}))
    ])
    .then(()=>this.setState({loading:false}))
    .catch((err) => {
      this.setState({error:true});
      console.log("An error has occured:", err);
    });
  };
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


