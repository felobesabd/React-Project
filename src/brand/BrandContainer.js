import React from 'react'
import { Container, Row } from 'react-bootstrap';
import BarndCard from '../brand/BarndCard';
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'

const BrandContainer = () => {
  return (
    <Container>
    <h3 className='my-2'>All Brands</h3>
    <Row>
    <BarndCard img={brand1}/>
    <BarndCard img={brand2}/>
    <BarndCard img={brand3}/>
    <BarndCard img={brand1}/>
    <BarndCard img={brand3}/>
    <BarndCard img={brand2}/>
    <BarndCard img={brand1}/>
    <BarndCard img={brand2}/>
    <BarndCard img={brand3}/>
    <BarndCard img={brand1}/>
    <BarndCard img={brand3}/>
    <BarndCard img={brand2}/>
    <BarndCard img={brand1}/>
    <BarndCard img={brand2}/>
    <BarndCard img={brand3}/>
    <BarndCard img={brand1}/>
    <BarndCard img={brand3}/>
    <BarndCard img={brand2}/>
    </Row>
    </Container>
  )
}

export default BrandContainer;