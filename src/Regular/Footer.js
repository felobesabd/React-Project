import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const FooterSec = () => {
    return (
        <div className="back-foot">
        <Container>
        <Row className="d-flex justify-content-between align-items-center">
            <Col sm="6" className="">
                <div>
                <a href='#'><i className="foot-i fa fa-facebook" aria-hidden="true"></i></a>
                <a href='#'><i className="foot-i fa fa-twitter" aria-hidden="true"></i></a>
                <a href='#'><i className="foot-i fa fa-google" aria-hidden="true"></i></a>
                </div>
            </Col>
            <Col sm="6" className="d-flex justify-content-end my-2">
                <div className="footer-shroot ">terms and conditions</div>
                <div className="footer-shroot mx-2"> Privacy Policy</div>
                <div className="footer-shroot mx-2">contact us</div>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default FooterSec;