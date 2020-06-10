import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

export default class Navbarflex extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <div className="d-flex my-3 my-lg-0">
                        <i className="fa fa-search icons mr-3"></i>
                        <div id="kids">KIDS</div>
                        <i className="fa fa-bell icons mx-3"></i>
                        <i className="fa fa-user icons mx-3"></i>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
