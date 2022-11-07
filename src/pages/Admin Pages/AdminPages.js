import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PaginationReact from '../../component/HomeComp/PaginationReact';
import AdminAllProduct from './AdminAllProduct';
import AdminSlideBar from './AdminSlideBar';

const AdminPages = () => {
  return (
    <Container style={{minHeight: '752px'}}>
    <Row>
    <Col xs='3' md='2'>
    <AdminSlideBar />
    </Col>
    <Col xs='9' md='10'>
    <AdminAllProduct />
    <PaginationReact />
    </Col>
    </Row>
    </Container>
  )
}

export default AdminPages;