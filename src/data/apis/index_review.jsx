import axios from "axios";
import { domain } from "../../zustand-store";

export const IndexReview = async () => {
  let final = [];
  await axios
    .get(domain + "/api/reviews", {
      params: {
        populate: "*",
        sort: "createdAt:desc",
        "pagination[limit]": 3,
      },
    })
    .then((res) => {
        final = res.data.data
    });
    return final
};
