import { indexCategorice } from "../apis/index_categorice"
import { showCategorice } from "../apis/showCategorice"

export const CatsRepo = {
    categorice_index : async() => {
        return await indexCategorice()
    },

    categorice_show : async(id ) => {
        return await showCategorice(id )
    }
}