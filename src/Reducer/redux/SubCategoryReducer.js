import {CHOOSE_ONE_CATEGORY, CREATE_SUB_CATEGORY, GET_ERROR} from "../types/Types";

const initalval = {
    subcategory:[],
    loading:true
}

const SubCategoryReducer = (state = initalval, action)=> {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        subcategory:action.payload,
        loading:false
      }
    case CHOOSE_ONE_CATEGORY:
      return {
        subcategory:action.payload,
        loading:false
      }
    case GET_ERROR:
      return {
        loading:true,
        subcategory:action.payload
      }

    default:
      return state;
    }
}

export default SubCategoryReducer;