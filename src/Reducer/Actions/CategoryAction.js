import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_ERROR } from "../types/Types";
import baseUrl from "../../Api/baseURL";
import { sendDataImg } from "../../hooks/useSendData";

// Func => Get All Data
export const CategoryAction= (limit)=> async (dispatch)=> {
    try {
        const res = await baseUrl.get(`/api/v1/categories?limit=${limit}`)
        dispatch ({
            type: GET_ALL_CATEGORY,
            payload: res.data
        })
    } catch (e) {
        dispatch ({
            type: GET_ERROR,
            payload: 'Error' + e
        })
    }
}

// Func => Get Data Pages Of Pagination
export const CategoryPagesAction= (page)=> async (dispatch)=> {
    try {
        const res = await baseUrl.get(`/api/v1/categories?limit=18&page=${page}`)
        dispatch ({
            type: GET_ALL_CATEGORY,
            payload: res.data
        })
    } catch (e) {
        dispatch ({
            type: GET_ERROR,
            payload: 'Error' + e
        })
    }
}

// Func => Send Data To Data Base
export const CreateCategoryAction = (formdata)=> async (dispatch)=> {
    try {
        const res = await sendDataImg(`/api/v1/categories`, formdata)
        dispatch ({
            type: CREATE_CATEGORY,
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