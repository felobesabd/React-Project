import React from 'react'
import UnopDropdown from 'unop-react-dropdown'

const ProductDropTitle = ({title, click}) => {
    const handler = ()=>{ };

    function clickedMe(key) {
        localStorage.setItem('sortSearch', key)
        click()
    }

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
            <div onClick={()=> clickedMe('Normal')}
                 className='border-bottom drop-item'>Normal</div>
            <div onClick={()=> clickedMe('Top Selling')}
                 className='border-bottom drop-item'>Top Selling</div>
            <div onClick={()=> clickedMe('Top RATING')}
                 className='border-bottom drop-item'>Top RATING</div>
            <div onClick={()=> clickedMe('PRICE: LOW TO HIGH')}
                 className='border-bottom drop-item'>PRICE: LOW TO HIGH</div>
            <div onClick={()=> clickedMe('PRICE: HIGH TO LOW')}
                 className='border-bottom drop-item'>PRICE: HIGH TO LOW</div>

        </div>

        </UnopDropdown>
            </div>
  )
}

export default ProductDropTitle;