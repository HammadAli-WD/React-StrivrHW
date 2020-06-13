import React, { Component } from 'react';
import {Container,Row,Col,Image,Badge, Modal, Button, Form, InputGroup, FormControl} from 'react-bootstrap'
//import './MovieDetails.css'
//import AddComment from './AddComment'
import CommentList from './CommentList'
import SideBar from './SideBar';
class MovieDetails extends Component {
    state = { 
        songs:[],
       /*  album:{}, */
        loading: true
     }

     /* fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + '&i=' + songId, {
        method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "a8534a12bbmsh0c48470a69eec51p1f6e95jsnc3e6e0454ebc"
      }
     })
     .then(response => response.json())
     .then()
     .then(response => {
       this.setState({
         Eminem: response.data
       })
     }),
 */


     componentDidMount = async() => {
     //const url = 'http://www.omdbapi.com/?apikey=809d53f5'
        let albumId = this.props.match.params.id;
        console.log(albumId)
        
        let resp = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + albumId, {
        "method": "GET",
          "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "a8534a12bbmsh0c48470a69eec51p1f6e95jsnc3e6e0454ebc"
          }
         })
        
     let data = await resp.json()   
     console.log("Data", data)  
       this.setState({
        songs: data.tracks.data,
        /* album: data, */
         loading:false
       })
       //console.log(this.state.songs)
        
       
    }
   render(){
    console.log("State:Songs", this.state.songs)
       return (
     <Container fluid>
         <Row> 
             <Col xs={2} id="sidebar-wrapper" >      
                      <SideBar />
            </Col>
            <Col  xs={4} className="p-5 m-5">
            {/* <div>
            <img src={this.state.album.cover_medium} />
            <h2>{this.state.album.title}</h2>
            </div> */}
            </Col>
            <Col xs={6} className="pr-5 pt-5">
            {this.state.songs.map((song) =>
            <div className="d-flex flex-column">
                <div className="p-2 w-100 d-flex justify-content-between">
                    <ul>
                        <audio src={song.preview} id="song"></audio>
                       {/*  <li className="d-inline-flex"><i className="fa fa-music pr-2 song" aria-hidden="true">a</i></li> */}
                        <li className="d-inline-flex"><h6>{song.artist.tracklist} <small>{song.artist.name}</small></h6></li>
                    </ul>
                    <div className="p-2 flex-shrink-1 bd-highlight">{song.duration} </div>              
                </div>
            </div>
                )}
        </Col>
        </Row>
     </Container>
       )
   }
}
 
export default MovieDetails;