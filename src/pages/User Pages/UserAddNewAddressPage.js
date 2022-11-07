import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import UserSideBar from './UserSideBar';
import UserAddNewAddressDetails from './UserAddNewAddressDetails';

const UserAddNewAddressPage = () => {
  return (
    <Container style={{minHeight: '757px'}}>
    <Row className='justify-content-between'>
    <Col xs='3' md='2'>
    <UserSideBar />
    </Col>
    <Col xs='8' md='10'>
    <UserAddNewAddressDetails />
    </Col>
    </Row>
    </Container>
  )
}

export default UserAddNewAddressPage;