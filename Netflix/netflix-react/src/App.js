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
        <Container fluid className="px-4">
          <div className = "d-flex justify-content-between">
            <div className= "d-flex">
              <h2 className="mb-4">Latest</h2>
              <div className = "ml-4 mt-1">
              <Dropdown>
                <Dropdown.Toggle
                  style={{ backgroundColor: "#221f1f" }}
                  id="dropdownMenuButton"
                  className="btn-secondary btn-sm dropdown-toggle rounded-0"
                >
                Genres
                </Dropdown.Toggle>
                  <Dropdown.Menu bg="dark">
                    <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
              </div>
            </div>
            <div>
                <i className="fa fa-th-large icons"></i>
                <i className="fa fa-th icons"></i>
              </div>
          </div>
          {this.state.error && (
              <Alert variant="danger" className="text-center">
                An error has occurred, please try again later
              </Alert>
            )}
          {this.state.searchdeMovies.length > 0 && (
            <Gallery
            title = "Search results"
            fetchComments = {this.fetchComments}
            comments = {this.state.comments}
            movies = {this.state.searchdeMovies}
            />
          )}

        </Container>
        
      </div>
    )
  }
}

