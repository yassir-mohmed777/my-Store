import axios from "axios";
import { domain } from "../../zustand-store";

export const StoreReview = async (reviewData, userId) => {
  let final = [];

  await axios
    .post(
      domain + "/api/reviews",
      {
        data: {
          rating_no: reviewData.rating,
          text_content: reviewData.Content,
          users_permissions_user : {connect:[userId]}
        },
      },
    )
    .then((res) => {
      final = res.data.data
    });
    return final
};
