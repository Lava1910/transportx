import api from './api';
import location_api from './localtion.service'; 

// export const get = async () => {
//     try {
//         const 
//     } catch (error) {

//     }
// }

export const find = async (id)=>{
    const url = location_api;
    try {
        const rs = await api.get(url);
       // const token = rs.data.token;
        return rs.data;
    } catch (error) {
        return {};
    }
}

export default find;
