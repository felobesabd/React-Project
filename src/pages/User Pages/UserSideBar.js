import React from 'react'
import { Link } from 'react-router-dom';

const UserSideBar = () => {
  return (
    <div className="sidebar">
    <div className="d-flex flex-column">
        <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text mt-3 border-bottom p-2 mx-auto">
            Orders Management
            </div>
        </Link>
                <Link to="/user/favlist" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text mt-1 border-bottom p-2 mx-auto">
            Favourite List
            </div>
        </Link>
        <Link to="/user/address" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto">
            Personal Address
            </div>
        </Link>
        <Link to="/user/profile" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text my-1 border-bottom p-2 mx-auto">
            Profile
            </div>
        </Link>
    </div>
</div>
  )
}

export default UserSideBar;