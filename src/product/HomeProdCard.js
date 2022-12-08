import React from 'react'
import SubTitle from '../Regular/SubTitle';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const HomeProdCard = ({title, text, path, allProductData}) => {
  return (
    <Container>
      {
        allProductData ? (<SubTitle title={title} text={text} path={path}/>) :null
      }
    <Row>
      {
        allProductData ? (
            allProductData.map((e, index)=> <ProductCard key={index} item={e} />)
        ) : null
      }
    </Row>
    </Container>
  )
}

export default HomeProdCard;