import {CREATE_PRODUCT, GET_ERROR} from "../types/Types";

const initalval = {
    product:[],
    loading:true
}

const ProductReducer = (state = initalval, action)=> {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                product:action.payload,
                loading:false
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