import React from 'react'
import BrandContainer from '../../brand/BrandContainer';
import PaginationReact from './../../component/HomeComp/PaginationReact';

const BrandPages = () => {
  return (
    <div style={{ minHeight: "752px" }}>
    <BrandContainer />
    <PaginationReact />
    </div>
  )
}

export default BrandPages;