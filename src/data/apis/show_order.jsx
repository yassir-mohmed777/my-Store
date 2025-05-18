import axios from "axios";
import { domain } from "../../zustand-store";

export const ShowOrder = async(userId) => {
  let final = [];
  await axios
    .get(domain + "/api/orders", {
      params: {
        filters: {
            users_permissions_user: {
              documentId: {
                $eq: userId
              }
            }
          }
      },
    })
    .then((res) => {
      final = res.data.data;
    });
    return final
};
