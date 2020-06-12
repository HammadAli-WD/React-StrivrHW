import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import SideBar from './SideBar';
import './Style.css';

import '../App.css';
import Footer from "./Footer";
import HomeBody from "./HomeBody";

const HomeContents = props => {


    return (
        <>
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper" >      
                      <SideBar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper" className="col-12 col-md-9 offset-md-3 mainPage">
                        <HomeBody />
                    </Col> 
                </Row>

            </Container>
            <Footer/>
        </>
        );
  };
  const Home = withRouter(HomeContents);
  export default Home
