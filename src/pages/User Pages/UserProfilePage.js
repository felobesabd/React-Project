import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import UserSideBar from './UserSideBar';
import UserProfileDetails from './UserProfileDetails';

const UserProfilePage = () => {
  return (
    <Container style={{minHeight: '757px'}}>
    <Row className='justify-content-between'>
    <Col xs='3' md='2'>
    <UserSideBar />
    </Col>
    <Col xs='8' md='10'>
    <UserProfileDetails />
    </Col>
    </Row>
    </Container>
  )
}

export default UserProfilePage;