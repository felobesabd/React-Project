import React from 'react'
import SubTitle from '../../Regular/SubTitle';
import { Container, Row, Button, Spinner } from 'react-bootstrap';
import CategoryCard from '../../category/CategoryCard';
import HomeCategoryHooks from './../../hookAbbreviation/CategoryHooks/HomeCategoryHooks';

const HomeCate = () => {

  const [category, loading] = HomeCategoryHooks()
  console.log(loading)

  return (
    <Container>
    <SubTitle title='Ratings' text='More' path='/AllCategory'/>
    <Row>
    {
      loading === false ? (
        category.data ? (
          category.data.slice(0, 6).map((e, index)=> {
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
              </Button>
      )
    }
    </Row>
  </Container>
  )
}

export default HomeCate;    