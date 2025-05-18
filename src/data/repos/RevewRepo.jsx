import { IndexReview } from "../apis/index_review"
import { StoreReview } from "../apis/store_reviews"


export const RevewRepo = {
    store_reviews : async(reviewData , userId) => {
        return await StoreReview(reviewData , userId)
    },

    index_store_reviews : async() => {
        return await IndexReview()
    }
}