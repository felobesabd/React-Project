import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import UserSideBar from './UserSideBar';
import UserAllOrders from './UserAllOrders';

const UserProductsPage = () => {
  return (
    <Container style={{minHeight: '752px'}}>
    <Row className='justify-content-between'>
    <Col xs='3' md='2'>
    <UserSideBar />
    </Col>
    <Col xs='8' md='10'>
    <UserAllOrders />
    </Col>
    </Row>
    </Container>
  )
}

export default UserProductsPage;