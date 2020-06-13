import React, { Component } from 'react'
import {Container, Row, Col, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import SideBar from './SideBar';
import './Style.css';

import '../App.css';
import Footer from "./Footer";
import HomeBody from "./HomeBody";

class HomeContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Eminem: [],
            Metallica: [],
            Behemoth: [],
           // selectedArtist: ''
          loading: true,
          /* error: false,
          comments: [], */
        }
       /*  this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) */
      }
      
      /* fetchArtist (name) {
        fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${name}`, {
          method: "GET",
          headers: {
           "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
           "x-rapidapi-key": "20438f9eb4mshb2a68ca50196b46p1d55a5jsn2dbdc2b012cd"
          }
         })
         .then(response => response.json())
         .then()
         .then(response => {
           this.setState({
             data: response.data
           })
         });
         
       
       }

       componentDidMount() {
        //this.fetchArtist('Eminem')
        this.fetchArtist()
      } */

      componentDidMount() {
        Promise.all([
          fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + "eminem", {
            "method": "GET",
          "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "a8534a12bbmsh0c48470a69eec51p1f6e95jsnc3e6e0454ebc"
          }
         })
         .then(response => response.json())
       
         .then(response => {
           this.setState({
             Eminem: response.data
           })
         }),
    
          fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + "metallica" , {
            "method": "GET",
          "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "a8534a12bbmsh0c48470a69eec51p1f6e95jsnc3e6e0454ebc"
          }
         })
         .then(response => response.json())
      
         .then(response => {
           this.setState({
             Metallica: response.data
           })
         }),
    
          fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + "behemoth", {
            "method": "GET",
          "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "a8534a12bbmsh0c48470a69eec51p1f6e95jsnc3e6e0454ebc"
          }
         })
         .then(response => response.json())
       
         .then(response => {
           this.setState({
             Behemoth: response.data
           })
         })
        ])
          .then(() => this.setState({ loading: false }))
          .catch((err) => {
            this.setState({ error: true });
            console.log("An error has occurred:", err);
          })
      }


        /* handleChange(e) {
            const artistName = e.target.value
            this.setState({
            selectedArtist: artistName
            })
            this.fetchArtist(artistName)
        }

        handleSubmit () {
            this.fetchArtist(this.state.selectedArtist)
        } */

    render() {
        return (
            <>
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper" >      
                      <SideBar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper"> {/* className="col-12 col-md-9 offset-md-3 mainPage" */}

                    <HomeBody
                    Title = 'Eminem'
                    loading={this.state.loading}
                    Songs={this.state.Eminem.slice(0, 6)}
                    />
                    <HomeBody
                    Title = 'Metallica'
                    loading={this.state.loading}
                    Songs={this.state.Metallica.slice(0, 6)}
                    />
                    <HomeBody
                    Title = 'Behemoth'
                    loading={this.state.loading}
                    Songs={this.state.Behemoth.slice(0, 6)}
                    />


                    {/* <div>
                    {<Form onSubmit={this.handleSubmit}>
                        <input 
                        type="text" 
                        placeholder="Search..."
                        value={this.state.selectedArtist}
                        onChange={this.handleChange}
                        />
                        <button>Search</button>
                        </Form>
                    </div>
                    <div>
                        {this.state.Behemoth.map((movie) => (
                            <div class="col text-center" id={movie.id}>
                            <img class="img-fluid w-100" src={
                              movie.album.cover_medium
                            } alt="1" />
                            
                          </div>
                        ))}
                    </div>} */}
                    </Col> 
                </Row>

            </Container>
            <Footer/>
        </>
        )
    }
}



  const Home = withRouter(HomeContents);
  export default Home
