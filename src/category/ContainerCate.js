import React from 'react'
import { Container, Row } from 'react-bootstrap';
import CategoryCard from '../category/CategoryCard';
import clothe from '../images/clothe.png';
import cat2 from '../images/cat2.png';
import labtop from '../images/labtop.png';
import sale from '../images/sale.png';
import pic from '../images/pic.png';

const CateContainer = () => {
  return (
    <Container>
    <h3 className='my-2'>All Ratings</h3>
    <Row className='mb-3'>
    <CategoryCard background='#6666' img={clothe} title='Ratings'/>
    <CategoryCard background='#6666' img={cat2} title='Ratings'/>
    <CategoryCard background='#6666' img={labtop} title='Ratings'/>
    <CategoryCard background='#6666' img={sale} title='Ratings'/>
    <CategoryCard background='#6666' img={pic} title='Ratings'/>
    <CategoryCard background='#6666' img={clothe} title='Ratings'/>
    <CategoryCard background='#6666' img={clothe} title='Ratings'/>
    <CategoryCard background='#6666' img={cat2} title='Ratings'/>
    <CategoryCard background='#6666' img={labtop} title='Ratings'/>
    <CategoryCard background='#6666' img={sale} title='Ratings'/>
    <CategoryCard background='#6666' img={pic} title='Ratings'/>
    <CategoryCard background='#6666' img={clothe} title='Ratings'/>
    </Row>
    </Container>
  )
}

export default CateContainer;