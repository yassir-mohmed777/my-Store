import axios from "axios"
import { domain } from "../../zustand-store"


export const showProduct = async(id) => {
    
    let final = {}

    await axios.get(domain + `/api/products/${id}` , { params : { populate : "*" } }).then((res) => {
        final = res.data.data
    })

    return final
}