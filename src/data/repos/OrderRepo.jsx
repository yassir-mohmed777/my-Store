import { ShowOrder } from "../apis/show_order"
import { storeOrder } from "../apis/store_order"

export const OrderRepo = {
    store_order : async(data) => {
        return await storeOrder(data)
    },

    show_order : async (userId) => {
        return await ShowOrder(userId)
    }
}