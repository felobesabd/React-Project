import React from 'react'
import { Container, Row, Button, Spinner } from 'react-bootstrap';
import CategoryCard from '../category/CategoryCard';

const CateContainer = ({category, loading}) => {
  return (
    <Container>
    <h3 className='my-2'>All Ratings</h3>
    <Row className='mb-3'>
      {
        loading === false ? (
          category !== '' ? (
            category.map((e, index)=> {
              return(
              <CategoryCard 
              key={index} 
              background='#6666' 
              img={e.image} 
              title={e.name}/>) 
          })
        ):(<h4>No Data Found</h4>)
        ):(
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

export default CateContainer;    
//     <CategoryCard background='#6666' img={cat2} title='Ratings'/>
//     <CategoryCard background='#6666' img={labtop} title='Ratings'/>
//     <CategoryCard background='#6666' img={sale} title='Ratings'/>
//     <CategoryCard background='#6666' img={pic} title='Ratings'/>
//     <CategoryCard background='#6666' img={clothe} title='Ratings'/>
//     <CategoryCard background='#6666' img={clothe} title='Ratings'/>
//     <CategoryCard background='#6666' img={cat2} title='Ratings'/>
//     <CategoryCard background='#6666' img={labtop} title='Ratings'/>
//     <CategoryCard background='#6666' img={sale} title='Ratings'/>
//     <CategoryCard background='#6666' img={pic} title='Ratings'/>
//     <CategoryCard background='#6666' img={clothe} title='Ratings'/>