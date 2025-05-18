import axios from "axios"
import { domain } from "../../zustand-store";

export const storeOrder = async(data) => {
    let final;
    await axios.post(domain + "/api/orders", { data: data }).then((res) => {
        final = res.data.data.documentId
    })
    return final;
}