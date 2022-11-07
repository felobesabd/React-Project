import React from 'react'
import AdminProductCard from './AdminProductCard';
import { Row } from 'react-bootstrap';

const AdminAllProduct = () => {
  return (
    <div>
    <div className='admin-text my-3'>All Products Management</div>
    <Row>
    <AdminProductCard />
    <AdminProductCard />
    <AdminProductCard />
    <AdminProductCard />
    </Row>
    </div>
  )
}

export default AdminAllProduct;