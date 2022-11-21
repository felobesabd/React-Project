import React from 'react'
import { Container, Row, Button, Spinner } from 'react-bootstrap';
import BarndCard from '../brand/BarndCard';

const BrandContainer = ({brand, loading}) => {

  console.log(brand);
  console.log(loading);

  return (
    <Container>
    <h3 className='my-2'>All Brands</h3>
    <Row>
    {
      loading === false ? (
        brand !== '' ? (
          // eslint-disable-next-line array-callback-return
          brand.map((e, index) => {
            return (<BarndCard key={index} img={e.image}/>)})
        ) : (<h4>No Found Data</h4>)
      ) : (
        <Button variant="primary" disabled>
        <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"/>
        Loading...
        </Button>)
    }
    </Row>
    </Container>
  )
}

export default BrandContainer;