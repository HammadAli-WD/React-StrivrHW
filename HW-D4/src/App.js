import React, { Component } from 'react'
import { Container, Row, Col, Card, Button} from "react-bootstrap"
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`https://striveschool.herokuapp.com/books?offset=0&limit=50`, {
      headers: new Headers({
        "Content-Type": "application/json",
        /* "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg=', */
      }),
    });
    const json = await response.json();
    this.setState({ data: json });
  }

  render() {
    return(
      <Container>
          <Row className = "justify-content-center mt-3">
               
              {this.state.data.map((book) => {
                return (
                  <Col xs={2} key={book.asin}>
                    <Card style={{ width: "10rem" }}>
                      <Card.Img variant="top" src={book.img} />
                      <Card.Body>
                        <Card.Title className="name">{book.category}</Card.Title>
                        <Card.Text>€{book.price}</Card.Text>
                        <Button variant="primary">Comments</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  )
              })}                   
                  
              
          </Row>
      </Container>
  )
  }
}


export default App;
