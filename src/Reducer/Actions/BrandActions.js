import { GET_ALL_BRAND, CREATE_BRAND, GET_ERROR } from '../types/Types';
import baseUrl from "../../Api/baseURL";
import { sendDataImg } from "../../hooks/useSendData";

// Func => Get All Data
export const BrandAction= (limit)=> async (dispatch)=> {
  try {
    const res = await baseUrl.get(`/api/v1/brands?limit=${limit}`)


      dispatch ({
        type: GET_ALL_BRAND,
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
export const BrandPagesAction= (page)=> async (dispatch)=> {
  try {
    const res = await baseUrl.get(`/api/v1/brands?limit=12&page=${page}`)
      dispatch ({
        type: GET_ALL_BRAND,
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
export const CreateBrandAction = (formdata)=> async (dispatch)=> {
  try {
    const res = await sendDataImg(`/api/v1/brands`, formdata)
      dispatch ({
        type: CREATE_BRAND,
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