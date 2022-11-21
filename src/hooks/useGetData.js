import baseUrl from "../Api/baseURL";

const getData = async (url, params)=> {
    const res = await baseUrl.get(url, params)
    return res.data ;
}

export default getData;