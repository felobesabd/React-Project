import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap';
import ProductSubNav from '../Regular/ProductSubNav';
import HomeProdCard from './HomeProdCard';
import ProductImgInfo from './ProductImgInfo';
import ProductRates from './ProductRates';
import { useParams } from "react-router-dom";
import {GetOneProductByCatAction} from "../Reducer/Actions/ProductActions";
import {useDispatch, useSelector} from "react-redux";
import GetOneProductByIdHook from "../hookAbbreviation/ProductHooks/GetOneProductById";

const ProductDetails = () => {

  const { id } = useParams()
    const [item, cat, brand, products] = GetOneProductByIdHook(id)


  return (
    <div style={{minHeight:'752px'}}>
    <ProductSubNav />
    <Container>
    <ProductImgInfo id={id}/>
    <ProductRates />
    <HomeProdCard allProductData={products} title='Products May Like' text=''/>
    </Container>
    </div>
  )
}

export default ProductDetails;