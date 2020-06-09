import React, { Component } from 'react';
import {Container,Row,Col,Image,Badge, Modal, Button, Form, InputGroup, FormControl} from 'react-bootstrap'
import './MovieDetails.css'
//import AddComment from './AddComment'
import CommentList from './CommentList'
class MovieDetails extends Component {
    state = { 
        movie:{},
        loading: true
     }

     componentDidMount = async () => {
     const url = 'http://www.omdbapi.com/?apikey=809d53f5'
        const movieId = this.props.match.params.id;
        let response = await fetch(url + '&i=' + movieId)
        let movie = await response.json()
        this.setState({
          movie,
          loading:false
        })
        console.log('state',this.state.movie)
    }
   render(){
       return (
     <Container>
         <Row>
             <Col>
             <Image className='mt-3' src={this.state.movie.Poster}>
             </Image>
             </Col>
             <Col>
             <div>
            <h1>{this.state.movie.Title}
            <Badge variant='primary' className='mx-2'>{this.state.movie.Rated}</Badge>
            </h1>
            </div>
            <div>
            <p>{this.state.movie.Plot}</p>
       <span>Released - {this.state.movie.Released}</span>
       <span className='mx-3'>Language - {this.state.movie.Language}</span>
       <span>Duration - {this.state.movie.Runtime}</span>
            </div>
            <div>
            <Badge variant='success' className='mx-2'>IMDB RATING - {this.state.movie.imdbRating}</Badge>
            <Badge variant='success' className='mx-2'>Votes- {this.state.movie.imdbVotes}</Badge>
            </div>
            <div className='mt-5'>
                 <Modal
                    show={this.state.selected}
                    onHide={() => this.setState({ selected: !this.state.selected })}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Movie comments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
            <div className="my-3">
              {this.props.comments.length > 0 &&
                this.props.comments[0].elementId === this.props.data.imdbID && (
                  <CommentList comments={this.props.comments} />
                )}
              <div className="text-center">
                <h5 className="my-3">Add a comment</h5>
                <Form onSubmit={this.submitComment}>
                  <div className="my-3 text-center">
                    <Form.Check
                      inline
                      label="1"
                      type="radio"
                      id="1"
                      name="rating"
                      onClick={this.handleRadioChange}
                    />
                    <Form.Check
                      inline
                      label="2"
                      type="radio"
                      id="2"
                      name="rating"
                      onClick={this.handleRadioChange}
                    />
                    <Form.Check
                      inline
                      label="3"
                      type="radio"
                      id="3"
                      name="rating"
                      onClick={this.handleRadioChange}
                    />
                    <Form.Check
                      inline
                      label="4"
                      type="radio"
                      id="4"
                      name="rating"
                      onClick={this.handleRadioChange}
                    />
                    <Form.Check
                      inline
                      label="5"
                      type="radio"
                      id="5"
                      name="rating"
                      onClick={this.handleRadioChange}
                    />
                  </div>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Write your comment"
                      aria-label="comment"
                      aria-describedby="basic-addon1"
                      onChange={this.handleCommentText}
                      value={this.state.newComment.comment}
                    />
                  </InputGroup>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </Modal.Body>
                                            
                </Modal>
         {/* <AddComment id={this.state.movie.imdbID}/> */}
            </div>
             </Col>
          
         </Row>
     </Container>
       )
   }
}
 
export default MovieDetails;