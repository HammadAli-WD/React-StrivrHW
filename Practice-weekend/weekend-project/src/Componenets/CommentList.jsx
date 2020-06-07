import React, { Component } from 'react'
import CommentListItem from './CommentListItem'


export default class CommentList extends Component {
    state= {

    }
    
    render() {
        return (
            <ul>
                {this.props.comments && this.props.comments.map(comment => <CommentListItem key={comment.id} comment = {comment} />)}
            </ul>
        )
    }
}
