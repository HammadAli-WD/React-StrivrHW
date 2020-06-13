import React from "react";
import { Col, Image, Modal, Button, Spinner } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
//import CommentList from "./CommentList";
class Song extends React.Component {
 /*  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
    };
  } */

 /*  handleClick = (movieID) => {
    
  }; */

  render() {
    const { song } = this.props;
    return (
      <Col className="mb-2">
          <Link to={'/Tracks/' + song.id} >
          <Image
          fluid
          src={song.album.cover_medium}
          alt={song.album.title}
          
        />
</Link>
        
        {/* <Modal show={this.state.isModalVisible} onHide={this.handleClick}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {comments.length > 0 ? (
              <CommentList comments={comments} />
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" role="status" variant="success">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal> */}
      </Col>
    );
  }
}

export default withRouter(Song);