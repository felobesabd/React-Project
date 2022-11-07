import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSlideBar from './AdminSlideBar';
import AdminAddSupCategory from './AdminAddSupCategory';

const AdminSubCategoryPage = () => {
  return (
    <Container style={{minHeight: '752px'}}>
    <Row className='justify-content-between'>
    <Col xs='3' md='2'>
    <AdminSlideBar />
    </Col>
    <Col xs='8' md='10'>
    <AdminAddSupCategory />
    </Col>
    </Row>
    </Container>
  )
}

export default AdminSubCategoryPage;