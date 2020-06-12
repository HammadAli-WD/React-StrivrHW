import React from 'react';
import {Navbar, Nav } from "react-bootstrap";
import {withRouter} from "react-router-dom"
//import './Style.css';


const Side = props => {

    return(
        <>

            <Navbar  className="col-md-2 d-none d-md-block bg-dark sidebar" style ={{}}
            collapseOnSelect
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
            <Navbar.Collapse id="responsive-navbar-nav">
                <div className="sidebar-sticky">
            <Nav.Item>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" 
            style={{objectFit:"cover", width:'100px'}} />
            </Nav.Item>
                
            <Nav.Item>
                {/* <Link to='/Solution'>Solution</Link> */}
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Your Library</Nav.Link>
            </Nav.Item>
            <Nav.Item className="footerSB">
                <Nav.Link className="p-3">Install App</Nav.Link>                        
                <h6 class="border-top ml-2"> 
                <img src="spotifyAssets/Diego.jpg" style={{objectFit: 'cover', width:'20px'}} /> Diego 'Zeba' Benovaz
                </h6>
            </Nav.Item>
            </div>
            </Navbar.Collapse>
            </Navbar >

        </>
    )
}

const SideBar = withRouter(Side);
export default SideBar