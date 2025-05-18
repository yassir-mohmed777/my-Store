import axios from "axios";
import { domain } from "../../zustand-store";

export const tokenCheck = async(token) => {
    let userInfo;
    await axios.get(domain + "/api/users/me" , {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }).then((res) => {
        userInfo = res.data
    }).catch(() => {
        localStorage.clear()
        sessionStorage.clear()
    })
    return userInfo
}