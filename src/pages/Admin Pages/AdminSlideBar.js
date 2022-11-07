import React from 'react'
import { Link } from 'react-router-dom';

const AdminSlideBar = () => {
  return (
    <div className="sidebar">
    <div className="d-flex flex-column">
        <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text mt-3 border-bottom p-2 mx-auto">
            Product Management
            </div>
        </Link>
                <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text mt-1 border-bottom p-2 mx-auto">
            Order Management
            </div>
        </Link>
        <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto">
            Add Brand
            </div>
        </Link>
        <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto">
            Add Category
            </div>
        </Link>
        <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto">
            Add Sub-Category
            </div>
        </Link>
        <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto">
            Add Product
            </div>
        </Link>
    </div>
</div>
  )
}

export default AdminSlideBar;