import React from 'react'
import { Container } from 'react-bootstrap';
import PayDetails from './../../../component/Pay Container/PayDetails';

const PayPage = () => {
  return (
    <div style={{minHeight:'752px'}}>
    <Container>
    <PayDetails />
    </Container>
    </div>
  )
}

export default PayPage;