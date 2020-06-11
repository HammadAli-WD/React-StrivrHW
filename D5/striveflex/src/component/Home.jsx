
import React, { Component } from 'react'
import {Container, Row, Col, Dropdown, Alert } from 'react-bootstrap'
import Gallery from "./Gallery";

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      transformer:[],
      spiderman:[],
      matrix:[],
      loading: true, 
      error: false
    }
  }


  //url = "http://www.omdbapi.com/?i=tt3896198&apikey=ffe05ef9";



  componentDidMount(){
    
    Promise.all([fetch("http://www.omdbapi.com/?apikey=ffe05ef9" + "&s=transformers")
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({ transformer: responseObject.Search })
        ),

        fetch("http://www.omdbapi.com/?apikey=85a2b045" + "&s=spider%20man")
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({ spiderMan: responseObject.Search })
        ),

      fetch("http://www.omdbapi.com/?apikey=85a2b045" + "&s=matrix")
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({ matrix: responseObject.Search })
        )])

        .catch((err) => {
          this.setState({ error: true });
          console.log("An error has occurred:", err);
        });
       // console.log(this.setState)
  }

    render() {
        return (
            <Container fluid className="px-4">
            <Row>
            <Col className="d-flex">
            <h2 className="mb-4"> Tv Shows</h2>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic"
              className="btn btn-sm dropdown-toggle rounded-0 ml-3"
              style={{ backgroundColor: "#221f1f" }}>
                Genres
              </Dropdown.Toggle>
    
              <Dropdown.Menu className="bg-dark">
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Col>
            <div className="d-none d-md-block">
            <i className="fa fa-th-large icons mr-2"></i>
            <i className="fa fa-th icons mr-4"></i>
          </div>
            </Row>

          {this.state.error && (
             <Alert variant="danger">
             An error has occurred, please try again later
           </Alert>
          )}
          {!this.state.error && 
          <Gallery title= {"Transformer"}
          movies={this.state.transformer.slice(0, 6)}
          />
          <Gallery title= {"Transformer"}
          movies={this.state.transformer.slice(0, 6)}
          />
          <Gallery title= {"Transformer"}
          movies={this.state.transformer.slice(0, 6)}
          />
          }

           {/*  <Gallery title ={"Trending Now"} imageSrc ={this.state.transformer.Poster.slice(0,6)} />
            <Gallery title ={"Horror"} imageSrc ="./assets/8.png" />
            <Gallery title ={"Thrill"} imageSrc ="./assets/7.png" /> */}

          </Container>
        )
    }
}
