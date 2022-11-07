import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewAccount = () => {
  return (
    <Container style={{ minHeight: "752px" }}>
    <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto title-login mb-2">Sign In New Account</label>
                        <input
            placeholder="User Name"
            type="text"
            className="user-input text-center mx-auto"
        />
            <input
                placeholder="Email"
                type="text"
                className="user-input my-3 text-center mx-auto"
            />
            <input
                placeholder="Password"
                type="password"
                className="user-input text-center mx-auto"
            />
                    <button className="btn-login mx-auto mt-4">New Account</button>
                    <label className="mx-auto my-4">
                    you already have an account?
                    <Link to='/login' style={{textDecoration:'none'}}>
                    <span style={{ cursor: "pointer" }} className="text-danger">
                    Click here
                    </span>
                    </Link>
            </label>
        </Col>
    </Row>
    </Container>
  )
}

export default NewAccount;