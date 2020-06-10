
import React, { Component } from 'react'
import {Container, Row, Col, Dropdown } from 'react-bootstrap'
import Gallery from "./Gallery";

export default class Home extends Component {
    
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
            <Gallery title ={"Trending Now"} imageSrc ="./assets/6.png" />
            <Gallery title ={"Horror"} imageSrc ="./assets/8.png" />
            <Gallery title ={"Thrill"} imageSrc ="./assets/7.png" />

          </Container>
        )
    }
}
