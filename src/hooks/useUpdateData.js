import baseUrl from "../Api/baseURL";

const updateDataImg = async (url, params)=> {
    const imgData = {
        headers:{"Content-Type":"multipart/from-data"}
    }
    const res = await baseUrl.put(url, params, imgData)
    return res;
}

const updateData = async (url, params)=> {
    const res = await baseUrl.put(url, params)
    return res;
}

export { updateData , updateDataImg};