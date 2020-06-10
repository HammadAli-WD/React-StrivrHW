import React from 'react'
import {Col, Image} from 'react-bootstrap'

export default function Movie(props) {
    return (
        <Col>
            <Image fluid src = {props.imageSrc} alt={props.title} />
        </Col>
    )
}
