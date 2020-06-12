import React from "react";
import { Row, Col } from "react-bootstrap";
import './Style.css';


const Footer = () => (
  <footer>
    <div className="container1">
        {/* <audio src="./assets/music/beyonce.mp3" id="song"></audio> */}
          <div className="row">
            <div className="col">
                <div className="row d-flex d-row">
                    <div className="col-lg-4">
                         <img src="https://static.stereogum.com/uploads/2017/10/queen-1507300904-640x596.jpg" id="thumbnail" style={{height:'50px', paddingLeft:'20px'}} />
                        </div>
                        <div className="col-lg-4">
                          <span className="songdetails" style={{fontSize: 'small', color: 'white'}}>Song for my father</span> <br></br>
                          <span  className="songdetails" style={{fontSize: 'smaller', color: 'white'}}>Horace Silver</span>
                           </div>
                           <div className="col-lg-4">
                            <button type="button" className="btn btn-info" style={{backgroundColor:'rgb(53, 52, 52)', border: '0px'}}><i className="fa fa-heart"></i></button>
                            <button type="button" className="btn btn-info" style={{backgroundColor:'rgb(53, 52, 52)', border: '0px'}}><i className="fa fa-podcast"></i></button>
                           </div>
                </div>
           </div>
         
            <div className="col-5 mt-3 btnClass" style={{textAlign: 'center'}}>
              <button type="button" className="btn btn-info" id="shuffle"><i className="fa fa-random fa-lg"></i></button>
              <button type="button" className="btn btn-info" id="backward">  <i className="fa fa-step-backward fa-lg"> </i></button>
              <button type="button" className="btn btn-info" id="playPause"> <i className="fa fa-play-circle fa-lg"> </i></button>
              <button type="button" className="btn btn-info" id="forward"> <i className="fa fa-step-forward fa-lg"> </i></button>
              <button type="button" className="btn btn-info"> <i className="fa fa-redo-alt"> </i><br /></button>
              <button type="button" className="btn btn-info"><i className="fa fa-random fa-lg"></i></button>
              <div className="w3-light-grey w3-round-xlarge mt-1"><div className="w3-container w3-round-xlarge" style={{height:'5px'}}></div></div>
            </div>
            <div className="col mt-3 mr-2 secondbtnClass" style={{textAlign:'right'}}>
              <button type="button" className="btn btn-info">  <i className="fa fa-list fa-lg"></i></button>
              <button type="button" className="btn btn-info">  <i className="fa fa-volume-up fa-lg"></i></button>
              <button type="button" className="btn btn-info">  <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />  </button>           
            </div>
            </div>
        </div>        
      </footer>
);

export default Footer;