import {CHOOSE_ONE_CATEGORY, CREATE_SUB_CATEGORY, GET_ERROR} from "../types/Types";
import { sendData } from "../../hooks/useSendData";
import getData from "../../hooks/useGetData";


// Func => Send Data To Data Base
export const CreateSubCategoryAction = (data)=> async (dispatch)=> {
    try {
        const res = await sendData("/api/v1/subcategories", data)
        dispatch ({
            type: CREATE_SUB_CATEGORY,
            payload: res,
            loading: true
        })
    } catch (e) {
        dispatch ({
            type: GET_ERROR,
            payload: 'Error' + e
        })
    }
}
// Func => Send Data To Data Base
export const chooseCategoryAction = (id)=> async (dispatch)=> {
    try {
        const res = await getData(`/api/v1/categories/${id}/subcategories`)

        dispatch ({
            type: CHOOSE_ONE_CATEGORY,
            payload: res,
            loading: true
        })
    } catch (e) {
        dispatch ({
            type: GET_ERROR,
            payload: 'Error' + e
        })
    }
}