import { sendDataImg } from "../../hooks/useSendData";
import {CREATE_PRODUCT, GET_ONE_PRODUCT, GET_ALL_PRODUCT, GET_ONE_PRODUCT_BY_CAT, Delete_ONE_PRODUCT, UPDATE_PRODUCT, GET_ERROR} from "../types/Types";
import getData from "../../hooks/useGetData";
import deleteData from "../../hooks/useDeleteData";
import {updateDataImg} from "../../hooks/useUpdateData";


// Func => Send Data To Data Base
export const CreateProductAction = (fromData)=> async (dispatch)=> {
    try {
        const res = await sendDataImg("/api/v1/products", fromData)
        dispatch ({
            type: CREATE_PRODUCT,
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

// Func => Get Data From Data Base
export const GetAllProductAction = (limit)=> async (dispatch)=> {
    try {
        const res = await getData(`/api/v1/products/?limit=${limit}`)

        dispatch ({
            type: GET_ALL_PRODUCT,
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

// Func => Get Data From Data Base
export const GetAllProductPagesAction = (limit, page)=> async (dispatch)=> {
    try {
        const res = await getData(`/api/v1/products?limit=${limit}&page=${page}`)

        dispatch ({
            type: GET_ALL_PRODUCT,
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

// Func => Get Data From Data Base
export const GetAllProductSearchAction = (data)=> async (dispatch)=> {
    try {
        const res = await getData(`/api/v1/products?${data}`)

        dispatch ({
            type: GET_ALL_PRODUCT,
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

// Func => Get Data From Data Base
export const GetOneProductAction = (id)=> async (dispatch)=> {
    try {
        const res = await getData(`/api/v1/products/${id}`)
        dispatch ({
            type: GET_ONE_PRODUCT,
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

// Func => Get Data From Data Base
export const GetOneProductByCatAction = (catId)=> async (dispatch)=> {
    try {
        const res = await getData(`/api/v1/products/?category=${catId}`)

        dispatch ({
            type: GET_ONE_PRODUCT_BY_CAT,
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
// Func => Delete Product From Data Base
export const DeleteOneProductAction = (id)=> async (dispatch)=> {
    try {
        const res = await deleteData(`/api/v1/products/${id}`)
        dispatch ({
            type: Delete_ONE_PRODUCT,
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
// Func => Update Product From Data Base
export const UpdateProductAction = (id, formData)=> async (dispatch)=> {
    try {
        const res = await updateDataImg(`/api/v1/products/${id}`, formData)
        dispatch ({
            type: UPDATE_PRODUCT,
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