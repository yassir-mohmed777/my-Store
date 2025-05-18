import axios from "axios";
import { domain } from "../../zustand-store";

export const indexModalProduct = async () => {
  let final = [];

  await axios
    .get(domain + "/api/products", { params: { 
        populate: "*" ,
        pagination: {
            page: 1,
            pageSize: 5, 
          },
          filters: {
            popular: {
              $eq: true,
            },
          },
          sort: "createdAt:desc",
    } })
    .then((res) => {
        final = res.data.data
    });

    return final
};
