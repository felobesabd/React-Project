import React from 'react'
import { Row } from 'react-bootstrap';
import AdminOrderCard from './AdminOrderCard';

const AdminAllOrder = () => {
  return (
    <div>
    <div className='admin-text my-3'>All Products Management</div>
    <Row>
    <AdminOrderCard />
    <AdminOrderCard />
    <AdminOrderCard />
    <AdminOrderCard />
    </Row>
    </div>
  )
}

export default AdminAllOrder;