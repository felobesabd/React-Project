import baseUrl from "../Api/baseURL";

const deleteData = async (url, params)=> {
    const res = await baseUrl.delete(url, params)
    return res.data ;
}

export default deleteData;