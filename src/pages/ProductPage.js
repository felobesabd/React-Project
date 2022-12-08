import React from 'react'
import ProductSubNav from '../Regular/ProductSubNav';
import ProductDropTitle from '../Regular/ProductDropTitle';
import { Container, Row, Col } from 'react-bootstrap';
import SideFilter from '../Regular/SideFilter';
import ProductContainer from '../product/ProductContainer';
import PaginationReact from '../component/HomeComp/PaginationReact';
import SearchProductHook from "../hookAbbreviation/ProductHooks/SearchProductHooks";

const ProductPage = () => {

  const [allProducts, , pageCount, getPage, getProduct, results] = SearchProductHook()

  return (
    <div style={{minHeight:'752px'}}>
    <ProductSubNav />
    <Container>
    <ProductDropTitle click={getProduct} title={`${results} Results`}/>
    <Row className='d-flex flex-row justify-content-between'>
    <Col xs='3' sm='2' md='2'>
    <SideFilter />
    </Col>
    <Col xs='9' sm='9' md='10'>
    <ProductContainer item={allProducts} />
    </Col>
    </Row>
    <PaginationReact pageCount={pageCount} onPress={getPage}/>
    </Container>
    </div>
  )
}

export default ProductPage;