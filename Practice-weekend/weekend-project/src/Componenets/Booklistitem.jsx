import React, { Component } from 'react'
import {Card, Button} from "react-bootstrap"

export default class Booklistitem extends Component {
   
    render() {
        return (
            <>           
        <Card className= "col-md-4">
            <Card.Img variant="top" src={this.props.item.img} />
            <Card.Body>
             <Card.Title>{this.props.item.title}</Card.Title>
                    <Card.Text>
                    {this.props.item.category}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </>
        )
    }
}
