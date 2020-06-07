import React, { Component } from 'react'
import {Card} from "react-bootstrap"
import CommentList from './CommentList'

export default class Booklistitem extends Component {
   state = {
       comments: []
   }
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
                    <CommentList comments = {this. state.comments} />
            </Card.Body>
        </Card>
        </>
        )
    }
    componentDidMount= async () => {
        const resp = await fetch ("https://striveschool.herokuapp.com/api/comments/" + this.props.asin, {
           headers: { "Authorization" : 'Basic dXNlcjE1OnNISFU1S1dtVkUyNmF2Qzg='}
        })

        const retrivecomments = await resp.json();
        this.setState ({
            comments:retrivecomments
        })
        
    }
}
