import { tokenCheck } from "../apis/check_token"
import { userLogin } from "../apis/login_user"
import { ShowCountry } from "../apis/show_country"
import { storeUser } from "../apis/store_user"


export const AuthRepo = {
    register : async (values) => {
        return await storeUser(values)
    },

    checkToken : async (token) => {
        return await tokenCheck(token)
    },

    login : async (values) => {
        return await userLogin(values)
    },

    getCountry : async () => {
        return await ShowCountry()
    }
}