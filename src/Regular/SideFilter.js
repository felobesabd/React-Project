import React from 'react'
import { Row } from 'react-bootstrap'

const SideFilter = () => {
    return (
        <div className="">
        <Row>
        <div className="d-flex flex-column mt-2">
            <div className="filter-title">Category</div>
            <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub ms-2 ">All</div>
            </div>
            <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub ms-2 ">home devices</div>
            </div>
            <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub ms-2 ">home devices</div>
            </div>
            <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub ms-2 ">home devices</div>
            </div>
            <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub ms-2 ">home devices</div>
            </div>
            </div>
            <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">Brand</div>
            <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub ms-2 ">All</div>
            </div>
            <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub ms-2 ">Apple</div>
            </div>
            <div className="d-flex mt-2">
            <input type="checkbox" value="" />
            <div className="filter-sub ms-2 ">Samsung</div>
            </div>
            </div>
            <div className="filter-title mt-3">Price</div>
            <div className="d-flex align-items-center">
            <p className="filter-sub my-2">From:</p>
            <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
            />
            </div>
            <div className="d-flex align-items-center">
            <p className="filter-sub my-2">About:</p>
            <input
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