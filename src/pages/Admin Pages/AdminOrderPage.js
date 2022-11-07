import React from 'react'
import PaginationReact from '../../component/HomeComp/PaginationReact';
import { Container, Row, Col } from 'react-bootstrap';
import AdminSlideBar from './AdminSlideBar';
import AdminAllOrder from './AdminAllOrder';

const AdminOrderPage = () => {
  return (
    <Container style={{minHeight: '752px'}}>
    <Row>
    <Col xs='3' md='2'>
    <AdminSlideBar />
    </Col>
    <Col xs='9' md='10'>
    <AdminAllOrder />
    <PaginationReact />
    </Col>
    </Row>
    </Container>
  )
}

export default AdminOrderPage;