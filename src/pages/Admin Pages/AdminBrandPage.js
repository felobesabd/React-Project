import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSlideBar from './AdminSlideBar';
import AdminAddBrand from './AdminAddBrand';

const AdminBrandPage = () => {
  return (
    <Container style={{minHeight: '752px'}}>
    <Row>
    <Col xs='3' md='2'>
    <AdminSlideBar />
    </Col>
    <Col xs='9' md='10'>
    <AdminAddBrand />
    </Col>
    </Row>
    </Container>
  )
}

export default AdminBrandPage;