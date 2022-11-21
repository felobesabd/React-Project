import React from 'react'
import BrandContainer from '../../brand/BrandContainer';
import PaginationReact from './../../component/HomeComp/PaginationReact';
import AllBrandHooks from './../../hookAbbreviation/BrandHooks/AllBrandHooks';

const BrandPages = () => {
  const [brand, loading, pageCount, getPage] = AllBrandHooks()
  return (
    <div style={{ minHeight: "752px" }}>
    <BrandContainer brand={brand.data} loading={loading} />
    {
      pageCount > 1 ? (
        <PaginationReact pageCount={pageCount} onPress={getPage}/>
      ) :null
    }
    </div>
  )
}

export default BrandPages;