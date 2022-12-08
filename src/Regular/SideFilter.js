import React from 'react'
import { Row } from 'react-bootstrap'
import SideFilterSearchHook from "../hookAbbreviation/All Search/SideFilterSearchHook";

const SideFilter = () => {

    const [brand, category, checkCateValue, checkBrandValue, priceFrom, priceTo, priceFromValue, priceToValue] = SideFilterSearchHook()

    return (
        <div className="">
        <Row>
        <div className="d-flex flex-column mt-2">
            <div className="filter-title">Category</div>
            <div className="d-flex mt-3">
            <input onChange={checkCateValue} type="checkbox" value="0" />
            <div className="filter-sub ms-2 ">All</div>
            </div>

            {
                category ? (
                    category.map((item, index)=> {
                        return (
                            <div className="d-flex mt-3" key={index}>
                                <input onChange={checkCateValue} type="checkbox" value={item._id} />
                                <div className="filter-sub ms-2">{item.name}</div>
                            </div>
                        )
                    })
                ) : (<h6>No Data Found</h6>)
            }

            </div>
            <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">Brand</div>

            <div className="d-flex mt-3">
            <input onChange={checkBrandValue} type="checkbox" value="0" />
            <div className="filter-sub ms-2 ">All</div>
            </div>

            {
                brand ? (
                    brand.map((item, index)=> {
                        return (
                            <div className="d-flex mt-3" key={index}>
                                <input onChange={checkBrandValue} type="checkbox" value={item._id} />
                                <div className="filter-sub ms-2">{item.name}</div>
                            </div>
                        )
                    })
                ) : (<h6>No Data Found</h6>)
            }

            </div>
            <div className="filter-title mt-3">Price</div>
            <div className="d-flex align-items-center">
            <p className="filter-sub my-2">From:</p>
            <input
                value={priceFromValue}
                onChange={priceFrom}
                className="m-2 text-center"
                type="number"
                style={{ width: "50px", height: "25px" }}
            />
            </div>
            <div className="d-flex align-items-center">
            <p className="filter-sub my-2">About:</p>
            <input
                value={priceToValue}
                onChange={priceTo}
                className="m-2 text-center"
                type="number"
                style={{ width: "50px", height: "25px" }}
            />
        </div>
        </Row>
    </div>
    )
}

export default SideFilter;