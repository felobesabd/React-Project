import React from 'react';
import PaginationReact from '../component/HomeComp/PaginationReact';
import CateContainer from './ContainerCate';
import AllCategoryHooks from './../hookAbbreviation/CategoryHooks/AllCategoryHooks';

const AllCategory = () => {

  const [category, loading, pageCount, getPage] = AllCategoryHooks()

  return (
    <div style={{ minHeight: "750px" }}>
    <CateContainer category={category.data} loading={loading} />
    {
      pageCount > 1 ? (
        <PaginationReact pageCount={pageCount} onPress={getPage}/>
      ) :null
    }
    </div>
  )
}

export default AllCategory;