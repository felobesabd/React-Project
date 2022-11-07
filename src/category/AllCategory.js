import React from 'react';
import PaginationReact from '../component/HomeComp/PaginationReact';
import CateContainer from './ContainerCate';


const AllCategory = () => {
  return (
    <div style={{ minHeight: "752px" }}>
    <CateContainer />
    <PaginationReact />
    </div>
  )
}

export default AllCategory;