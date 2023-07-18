import api from "./api";

export const auth_login = async (user)=>{
    const url = "auth/login";
    try {
        const rs = await api.post(url,{email:user.email,password:user.password});
        //const token = rs.data.token;
        return rs.data;
    } catch (error) {
        alert("Tài khoản hoặc mật khẩu không đúng");
        return {};
    }
}

export const auth_register = async (user)=>{
    const url = "auth/register";
    try {
        const rs = await api.post(url,{userName:user.userName,phone:user.phone,email:user.email,password:user.password});
        //const token = rs.data.token;
        alert("Đã đăng kí tài khoản thành công");
        return rs.data;
    } catch (error) {
        alert("Đăng kí thất bại, vui lòng thử lại");
        return {};
    }
}

// export const auth_profile = async ()=>{
//     const url = "auth/profile";
//     try {
//         const rs = await api.get(url);
//        // const token = rs.data.token;
//         return rs.data;
//     } catch (error) {
//         alert("Tài khoản hoặc mật khẩu không đúng");
//         return {};
//     }
// }