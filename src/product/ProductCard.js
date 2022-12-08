import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import rate from '../images/rate.png'
import favOff from '../images/fav-off.png'

const ProductCard = ({item}) => {
    return (
    <Col xs='6' sm='6' md='4' lg='3'>
    <Card
        className="my-2"
        style={{
            width: "100%",
            height: "345px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}>
    <Link to={`/ProductDetails/${item._id}`}>
        <Card.Img style={{ height: "228px", width: "100%" }} src={(item.imageCover!==undefined)?item.imageCover:''} />
    </Link>
        <div className="d-flex justify-content-start mx-2 my-2">
            <img
                src={favOff}
                alt=""
                className="text-center"
                style={{
                    height: "24px",
                    width: "26px",
                }}
            />
        </div>
    <Card.Body>
        <Card.Title>
            <div className="card-title">
                {item.title}
            </div>
        </Card.Title>
        <Card.Text>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <img
                        className=""
                        src={rate}
                        alt=""
                        height="18px"
                        width="18px"
                    />
                    <div className="card-rate mx-2">{item.ratingsQuantity}</div>
                </div>
                <div className="d-flex align-items-baseline">
                    <div className="card-price">{item.price}</div>
                    <div className="card-currency mx-1">EGP</div>
                </div>
            </div>
        </Card.Text>
    </Card.Body>
    </Card>
    </Col>
    )
}

export default ProductCard;