import { indexFavoriteProducts } from "../apis/index_favorite_product"
import { indexModalProduct } from "../apis/index_modal_product"
import { indexProduct } from "../apis/index_product"
import { showProduct } from "../apis/show_Products"

export const ProductsRepo = {
    Products_index : async(pageNo , pageSize , filtersId , sortBy ,minPrice ,maxPrice ) => {
        return await indexProduct(pageNo , pageSize , filtersId , sortBy ,minPrice ,maxPrice)
    },

    Product_show : async (id) => {
        return await showProduct(id)
    },

    Product_popular : async () => {
        return await indexModalProduct()
    },

    product_favorite : async (favoriteId) => {
        return await indexFavoriteProducts(favoriteId)
    }
}