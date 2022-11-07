import React from 'react'
import { Row } from 'react-bootstrap';
import PaginationReact from '../../component/HomeComp/PaginationReact';
import ProductCard from '../../product/ProductCard';

const UserFavListDetails = () => {
  return (
    <div>
    <div className='admin-text mt-3 mb-2'>My Favourite List</div>
    <Row>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    </Row>
    <PaginationReact />
    </div>
  )
}

export default UserFavListDetails;