import React from 'react'
import UnopDropdown from 'unop-react-dropdown'

const ProductDropTitle = ({title}) => {
    const handler = ()=>{ };
  return (
    <div className='d-flex pt-4 justify-content-between'>
    <div className='sub-title'>{title}</div>
    <UnopDropdown
        onAppear={handler}
        onDisappearStart={handler}
        trigger={
            <p className=''>
            Sorted By
            <i className="ms-1 fa fa-sort-amount-desc" aria-hidden="true"></i>
            </p>
        }
        delay={300}
        align="CENTER"
        hover
        >
        <div className='drop-filter'>
            <div className='border-bottom drop-item'>Top Silling</div>
            <div className='border-bottom drop-item'>Top Prices</div>
            <div className='border-bottom drop-item'>Down Prices</div>
            <div className='border-bottom drop-item'>Top Ratings</div>
        </div>
        </UnopDropdown>
            </div>
  )
}

export default ProductDropTitle;