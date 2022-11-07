import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import labtop from '../images/labtop.png'

const ProductCard = () => {
    return (
    <Col xs='6' sm='6' md='4' lg='3'>
    <Card style={{ 
        width: '100%', 
        height: '345px', 
        border: 'none',
        backgroundColor: 'rgb(216 216 216 / 30%)'}} className='my-2'>
    <div className='position-relative'>
    <Link to='/ProductDetails:id'>
    <Card.Img variant="top" src={labtop} />
    </Link>
    <i className="style-i-heart fa fa-heart-o" aria-hidden="true"></i>
    </div>
    <Card.Body>
    <Card.Title>
        <div className='card-title'>
        Felobes Abd Sadek Felobes Abd Sadek Felobes Abd Sadek
        </div>
    </Card.Title>
        <Card.Text>
        <div className='d-flex justify-content-between'>
        <div className='d-flex position-relative'>
        <i className="style-i-star fa fa-star" aria-hidden="true"></i>
        <div 
        style={{
            color:'#ffc107',
            marginLeft:'20px'}}>4.5</div>
        </div>
        <div>
        880EGP
        </div>
        </div>
        </Card.Text>
    </Card.Body>
    </Card>
    </Col>
    )
}

export default ProductCard;