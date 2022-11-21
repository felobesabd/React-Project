import { GET_ALL_BRAND, CREATE_BRAND, GET_ERROR } from './../types/Types';

const initalval = {
    brand:[],
    loading:true
}

const BrandReducer = (state = initalval, action)=> {
    switch (action.type) {
        case GET_ALL_BRAND:
            return {
                ...state,
                brand:action.payload,
                loading:false
            }

            case CREATE_BRAND:
                return {
                    brand:action.payload,
                    loading:false
                }

            case GET_ERROR:
                return {
                    brand:action.payload,
                    loading:true
                }

        default:
            return state;
    }
}

export default BrandReducer;