import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Row, Col, Button } from 'react-bootstrap';

const ProductRatesStar = () => {

    const secondExample = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="fa fa-star-o" />,
        halfIcon: <i className="fa fa-star-half-o" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
        console.log(`Example 2: new value is ${newValue}`);
        }
    };
    
  return (
    <div>
    <Row className="mt-3 ">
      <Col sm="12" className="me-5 d-flex align-items-center">
        <div className="rate-name d-inline ms-3 me-2 mt-1">Felobes Abd</div>
        <ReactStars {...secondExample} />
      </Col>
    </Row>
    <Row className="border-bottom mx-2">
      <Col className="d-felx me-4 pb-2">
        <textarea
          className="w-100 p-2 mt-3"
          rows="2"
          cols="20"
          placeholder="Write Your Comment...."
        />
        <div className=" d-flex justify-content-end al">
          <Button className="px-3 py-2 text-center d-inline">
          Add Comment</Button>
        </div>
      </Col>
    </Row>
  </div>
  )
}

export default ProductRatesStar;