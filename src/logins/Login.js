import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container style={{ minHeight: "752px" }}>
    <Row className="py-5 d-flex justify-content-center ">
      <Col sm="12" className="d-flex flex-column">
        <label className="mx-auto title-login">Sign In</label>
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
        <button className="btn-login mx-auto mt-4">Sign In</button>
          <label className="mx-auto my-4">
          Don't have an account? sign up now!
          <Link to='/NewAccount' style={{textDecoration:'none'}}>
          <span style={{ cursor: "pointer" }} className="text-danger">
          Click here
          </span>
          </Link>
        </label>
        </Col>
        <label className="mx-auto my-4">
        <Link to='/admin/allproducts' style={{textDecoration:'none'}}>
        <span style={{ cursor: "pointer" }} className="text-danger">
        Admin
        </span>
        </Link>
      </label>
      <label className="mx-auto my-4">
      <Link to='/user/allorders' style={{textDecoration:'none'}}>
      <span style={{ cursor: "pointer" }} className="text-danger">
      User
      </span>
      </Link>
    </label>
    </Row>
    </Container>
  )
}

export default Login;