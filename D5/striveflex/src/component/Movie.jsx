import React from 'react'
import {Col, Image} from 'react-bootstrap'

export default function Movie(props) {
    return (
        <Col className="mb-2">
        <Image fluid src={props.movie.Poster} alt={props.movie.Title} />
      </Col>
    )
}
