// import axios from "axios";
// import { domain } from "../../zustand-store";

// export const indexModalProduct = async () => {
//   let final = [];

//   await axios
//     .get(domain + "/api/products", { params: { 
//         populate: "*" ,
//         pagination: {
//             page: 1,
//             pageSize: 5, 
//           },
//           sort: "createdAt:desc",
//     } })
//     .then((res) => {
//         final = res.data.data
//     });

//     return final
// };
import { supabase } from "../../supabaseClient"; // تأكد أنك أنشأت هذا العميل

export const indexModalProduct = async () => {
  const page = 1;
  const pageSize = 5;

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error } = await supabase
    .from("products")
    .select("*") // يمكنك تحديد الحقول أو العلاقات هنا
    .order("created_at", { ascending: false }) // يعادل sort: "createdAt:desc"
    .range(from, to); // pagination

  if (error) {
    console.error("Error fetching modal products:", error);
    return [];
  }

  return data;
};