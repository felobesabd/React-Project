import React from 'react'
import { Row } from 'react-bootstrap';
import UserOrderDetails from './UserOrderDetails';

const UserAllOrders = () => {
  return (
    <div>
    <div className='admin-text mt-3'>Hello Felobes Abd</div>
    <Row className='justify-content-between my-2'>
    <UserOrderDetails />
    <UserOrderDetails />
    </Row>
    </div>
  )
}

export default UserAllOrders;