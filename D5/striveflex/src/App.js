import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarflex from './component/Navbarflex'
import Footerflex from './component/Footerflex'
import {Container, Row, Col, Dropdown } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Navbarflex/>
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
        </Row>
      </Container>
      <Footerflex/>

    </div>
  );
}

export default App;
