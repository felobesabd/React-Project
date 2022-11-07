import React from 'react'
import SubTitle from '../Regular/SubTitle';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const HomeProdCard = ({title, text, path}) => {
  return (
    <Container>
    <SubTitle title={title} text={text} path={path}/>
    <Row>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    </Row>
    </Container>
  )
}

export default HomeProdCard;