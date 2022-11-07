import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductContainer = () => {
  return (
    <div>
    <Container>
    <Row>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    </Row>
    </Container>
    </div>
  )
}

export default ProductContainer;