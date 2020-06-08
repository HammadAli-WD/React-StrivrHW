import React, { Component } from 'react';
import './App.css';
import { Container, Alert, Dropdown } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";


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
  
  showSearchResult = (searchString) => {
    fetch(this.url + '&s=' + searchString)
      .then((response) => response.json())
      .then ((responseObject) =>
      this.setState({searchdeMovies : responseObject.Search}));
  };

  fetchComments = async(movieID) => {
    const fetchUrl =  await fetch ("https://striveschool.herokuapp.com/api/comments/" + movieID, {
      headers: { "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg='}
   })

   const retrieveComments = await fetchUrl.json();
   this.setState({
     comments:retrieveComments
   });

  };


  render() {
    return (
      <div>
        <Navbar showSearchResult= {this.showSearchResult} />
        
      </div>
    )
  }
}


