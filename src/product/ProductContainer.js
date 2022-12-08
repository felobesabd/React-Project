import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductContainer = ({item}) => {
  return (
    <div>
    <Container>
    <Row>
      {
        item ? (
            item.map((e, index)=> {
              return (
                  <ProductCard key={index} item={e} />
              )
            })
        ) : null
      }
    </Row>
    </Container>
    </div>
  )
}

export default ProductContainer;