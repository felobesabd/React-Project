import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY  } from "../types/Types";

const initalval = {
    category:[],
    loading:true
}

const CategoryReducer = (state = initalval, action)=> {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category:action.payload,
                loading:false
            }

            case CREATE_CATEGORY:
                return {
                    category:action.payload,
                    loading:false
                }

            case GET_ERROR:
                return {
                    category:action.payload,
                    loading:true
                }

        default:
            return state;
    }
}

export default CategoryReducer;