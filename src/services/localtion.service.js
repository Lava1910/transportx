import axios from "axios";

const BASE_URL = "https://provinces.open-api.vn/api/";
const location_api = axios.create({
    baseURL:BASE_URL
});

export const find = async (id)=>{
    const url = location_api;
    try {
        const rs = await url.get('?depth=3');
        console.log(rs)
       // const token = rs.data.token;
        return rs.data;
    } catch (error) {
        return {};
    }
}





