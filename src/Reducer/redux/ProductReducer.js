import {CREATE_PRODUCT, GET_ONE_PRODUCT, GET_ALL_PRODUCT, GET_ONE_PRODUCT_BY_CAT, Delete_ONE_PRODUCT, UPDATE_PRODUCT, GET_ERROR} from "../types/Types";

const initial = {
    product:[],
    allProducts:[],
    oneProduct:[],
    oneProductCat:[],
    deleteProduct:[],
    updateProduct:[],
    loading:true
}

const ProductReducer = (state = initial, action)=> {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                product:action.payload,
                loading:false
            }

        case GET_ALL_PRODUCT:
            return {
                ...state,
                allProducts:action.payload,
                loading:false
            }

        case GET_ONE_PRODUCT:
            return {
                oneProduct:action.payload,
                loading:false
            }

        case GET_ONE_PRODUCT_BY_CAT:
            return {
                ...state,
                oneProductCat:action.payload,
                loading:false
            }

        case Delete_ONE_PRODUCT:
            return {
                ...state,
                deleteProduct:action.payload,
                loading:false
            }

        case UPDATE_PRODUCT:
            return {
                ...state,
                updateProduct: action.payload,
                loading: false
            }

        case GET_ERROR:
            return {
                loading:true,
                product:action.payload
            }
        default:
            return state;
    }
}

export default ProductReducer;