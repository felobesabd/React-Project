import React from 'react'
import { Container } from 'react-bootstrap';
import ProductSubNav from '../Regular/ProductSubNav';
import HomeProdCard from './HomeProdCard';
import ProductImgInfo from './ProductImgInfo';
import ProductRates from './ProductRates';

const ProductDetails = () => {
  return (
    <div style={{minHeight:'752px'}}>
    <ProductSubNav />
    <Container>
    <ProductImgInfo />
    <ProductRates />
    <HomeProdCard title='Products May Like' text=''/>
    </Container>
    </div>
  )
}

export default ProductDetails;