import { sendDataImg } from "../../hooks/useSendData";
import {CREATE_PRODUCT, GET_ERROR} from "../types/Types";


// Func => Send Data To Data Base
export const CreateProductAction = (fromData)=> async (dispatch)=> {
    try {
        const res = await sendDataImg("/api/v1/products", fromData)
        console.log(res)
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