import React from "react";
import HomePage from './pages/HomePages/Home'
import NavComp from './Regular/ComNav';
import FooterSec from "./Regular/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './logins/Login';
import NewAccount from './logins/NewAccount';
import AllCategory from './category/AllCategory';
import BrandPages from './pages/HomePages/BrandPages';
import ProductPage from './pages/ProductPage';
import ProductDetails from './product/ProductDetails';
import CartPages from './pages/HomePages/CartPages';
import PayPage from './pages/HomePages/Pay Page/PayPage';
import AdminPages from './pages/Admin Pages/AdminPages';
import AdminOrderPage from './pages/Admin Pages/AdminOrderPage';
import AdminOrderDetailsPage from './pages/Admin Pages/AdminOrderDetailsPage';
import AdminBrandPage from './pages/Admin Pages/AdminBrandPage';
import AdminCategoryPage from './pages/Admin Pages/AdminCategoryPage';
import AdminSubCategoryPage from './pages/Admin Pages/AdminSubCategoryPage';
import AdminAddProductPage from "./pages/Admin Pages/AdminAddProductPage";
import UserProductsPage from './pages/User Pages/UserPRoductsPage';
import UserFavListPage from './pages/User Pages/UserFavListPage';
import UserAddressPage from './pages/User Pages/UserAddressPage';
import UserEditAddressPage from './pages/User Pages/UserEditAddressPage';
import UserAddNewAddressPage from './pages/User Pages/UserAddNewAddressPage';
import UserProfilePage from './pages/User Pages/UserProfilePage';
import AdminEditProductDetailsPage from "./pages/Admin Pages/AdminEditProductDetails";

let App = () => {
    return (
        <div className="color-body font">
            <NavComp />
            <BrowserRouter>
            <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/NewAccount" element={<NewAccount />} />
            <Route path="/AllCategory" element={<AllCategory />} />
            <Route path="/BrandPages" element={<BrandPages />} />
            <Route path="/ProductPage" element={<ProductPage />} />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPages />} />
            <Route path="/pay" element={<PayPage />} />
            <Route path="/admin/allproducts" element={<AdminPages />} />
            <Route path="/admin/allorders" element={<AdminOrderPage />} />
            <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
            <Route path="/admin/addbrand" element={<AdminBrandPage />} />
            <Route path="/admin/addcategory" element={<AdminCategoryPage />} />
            <Route path="/admin/addsubcategory" element={<AdminSubCategoryPage />} />
            <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
            <Route path="/user/allorders" element={<UserProductsPage />} />
            <Route path="/user/favlist" element={<UserFavListPage />} />
            <Route path="/user/address" element={<UserAddressPage />} />
            <Route path="/user/edit-address" element={<UserEditAddressPage />} />
            <Route path="/user/add-address" element={<UserAddNewAddressPage />} />
            <Route path="/user/profile" element={<UserProfilePage />} />
            <Route path="/editProductDetails/:id" element={<AdminEditProductDetailsPage />} />
            </Routes>
            </BrowserRouter>
            <FooterSec />
        </div>
    )
}
export default App;