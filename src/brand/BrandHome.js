import React from 'react'
import SubTitle from '../Regular/SubTitle';
import { Container, Row } from 'react-bootstrap';
import BarndCard from './BarndCard';
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'

const BarndHome = ({title}) => {
  return (
    <Container>
    <SubTitle title={title} text='More' path='/BrandPages'/>
    <Row>
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

export default BarndHome;