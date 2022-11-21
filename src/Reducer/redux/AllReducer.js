import { combineReducers } from 'redux'
import CategoryReducer from './CategoryReducer';
import BrandReducer from './BrandReducer';
import SubCategoryReducer from './SubCategoryReducer';
import ProductReducer from './ProductReducer';

export default combineReducers ({
    allCategoryRed: CategoryReducer,
    allBrandRed: BrandReducer,
    subCategoryRed: SubCategoryReducer,
    allProductRed:ProductReducer
})