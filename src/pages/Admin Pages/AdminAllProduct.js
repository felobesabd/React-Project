import React from 'react'
import AdminProductCard from './AdminProductCard';
import { Row } from 'react-bootstrap';

const AdminAllProduct = ({item}) => {
  return (
    <div>
    <div className='admin-text my-3'>All Products Management</div>
    <Row>
      {
        item ? (
            item.map((item, index)=> <AdminProductCard  item={item} key={index} />)
        ) : (<h4>No Products</h4>)
      }
    </Row>
    </div>
  )
}

export default AdminAllProduct;