import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AdminSlideBar from './AdminSlideBar';
import AdminOrderDetails from './AdminOrderDetails';

const AdminOrderDetailsPage = () => {
  return (
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
          <AdminSlideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminOrderDetails />
        </Col>
    </Row>
</Container>
  )
}

export default AdminOrderDetailsPage;