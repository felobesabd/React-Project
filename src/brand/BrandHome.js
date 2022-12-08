import React, { useEffect } from 'react'
import SubTitle from '../Regular/SubTitle';
import { Container, Row, Button, Spinner } from 'react-bootstrap';
import BarndCard from './BarndCard';
import { useDispatch, useSelector } from 'react-redux';
import { BrandAction } from '../Reducer/Actions/BrandActions';

const BarndHome = ({title}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(BrandAction())
  }, [dispatch])

  const brand = useSelector(state => state.allBrandRed.brand)
  const loading = useSelector(state => state.allBrandRed.loading)

  return (
    <Container>
    <SubTitle title={title} text='More' path='/BrandPages'/>
    <Row>
    {
      loading === false ? (
        brand.data ? (
        brand.data.slice(0, 6).map((e, index)=> {
          return (
            <BarndCard
            key={index}
            img={e.image}
            />
          )
      })
      ) : (<h4>No Data Found</h4>)
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

export default BarndHome;