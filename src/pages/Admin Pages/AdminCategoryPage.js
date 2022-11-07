import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSlideBar from './AdminSlideBar';
import AdminAddCategory from './AdminAddCategory';

const AdminCategoryPage = () => {
  return (
    <Container style={{minHeight: '752px'}}>
    <Row>
    <Col xs='3' md='2'>
    <AdminSlideBar />
    </Col>
    <Col xs='9' md='10'>
    <AdminAddCategory />
    </Col>
    </Row>
    </Container>
  )
}

export default AdminCategoryPage;