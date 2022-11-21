import baseUrl from "../Api/baseURL";

const sendDataImg = async (url, params)=> {
    const imgData = {
        headers:{"Content-Type":"multipart/from-data"}
    }
    const res = await baseUrl.post(url, params, imgData)
    return res;
}

const sendData = async (url, params)=> {
    const res = await baseUrl.post(url, params)
    return res;
}

export { sendData, sendDataImg };