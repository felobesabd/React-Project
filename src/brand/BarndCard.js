import React from 'react'
import { Card, Col } from 'react-bootstrap'

const BarndCard = ({img}) => {
  return (
    <Col xs='6' sm='6' md='4' lg='2'>
    <Card style={{ width: '100%', height: '100px', border: 'none'}} className='my-2'>
    <div>
    <Card.Img style={{ width: '100%', height: '100px'}} variant="top" src={img} />
    </div>
    </Card>
    </Col>
  )
}

export default BarndCard;