import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AdminSlideBar from './AdminSlideBar';
import AdminEditProductDetails from "./AdminEditProductDetailsInfo";

const AdminEditProductDetailsPage = () => {
    return (
        <Container style={{minHeight: '752px'}}>
            <Row className='justify-content-between'>
                <Col xs='3' md='2'>
                    <AdminSlideBar />
                </Col>
                <Col xs='8' md='10'>
                    <AdminEditProductDetails />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminEditProductDetailsPage;