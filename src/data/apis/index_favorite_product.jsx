import axios from "axios";
import { domain } from "../../zustand-store";

export const indexFavoriteProducts = async (favoriteId = []) => {
  if (favoriteId.length === 0) return [];
  let final = [];
  await axios
    .get(domain + "/api/products", {
      params: {
        populate: "*",
        filters: {
          documentId: {
            $in: favoriteId,
          },
        },
      },
    })
    .then((res) => {
      final = res.data.data;
    });
  return final;
};
