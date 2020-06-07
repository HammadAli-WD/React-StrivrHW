import React, { Component } from 'react'

export default class CommentListItem extends Component {
    render() {
        return (
            <li>
                {this.props.comment.rate} -> {this.props.comment.comment}
                
            </li>
        )
    }
}
