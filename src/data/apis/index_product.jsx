// import axios from "axios";
// import { domain } from "../../zustand-store";

// export const indexProduct = async (
//   pageNo,
//   pageSize,
//   categoryId = null,
//   sortBy = "newest",
//   minPrice = null,
//   maxPrice = null
// ) => {
//   let final = {
//     total: 0,
//     data: [],
//   };

//   const sortQuery = getSortQuery(sortBy);

//   try {
//     const res = await axios.get(domain + "/api/products", {
//       params: {
//         populate: "*",
//         pagination: {
//           page: pageNo,
//           pageSize: pageSize,
//         },
//         filters: {
//           ...(categoryId && {
//             categorice: {
//               documentId: {
//                 $eq: categoryId,
//               },
//             },
//           }),
//           ...(minPrice != null || maxPrice != null) && {
//             product_new_price: {
//               ...(minPrice != null && { $gte: minPrice }),
//               ...(maxPrice != null && { $lte: maxPrice })
//             }
//           }
//         },
//         sort: sortQuery,
//       },
//     });

//     final = {
//       total: res.data.meta.pagination.total,
//       data: res.data.data,
//     };
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }

//   return final;
// };

// function getSortQuery(sortBy) {
//   switch (sortBy) {
//     case "product_new_price-asc":
//       return "product_new_price:asc";
//     case "product_new_price-desc":
//       return "product_new_price:desc";
//     case "product_name-asc":
//       return "product_name:asc";
//     case "newest":
//     default:
//       return "createdAt:desc";
//   }
// }

import { supabase } from '../../supabaseClient';

export const indexProduct = async (
  pageNo,
  pageSize,
  categoryId = null,
  sortBy = 'newest',
  minPrice = null,
  maxPrice = null
) => {
  let final = {
    total: 0,
    data: [],
  };

  try {
    const from = (pageNo - 1) * pageSize;
    const to = from + pageSize - 1;

    let query = supabase
      .from('products')
      .select('*, categorice(*)', { count: 'exact' }) // انضمام للفئة وحساب العدد الكلي
      .range(from, to); // تقسيم الصفحات

    if (categoryId) {
      query = query.eq('category_id', categoryId);
    }

    if (minPrice != null) {
      query = query.gte('new_price', minPrice);
    }

    if (maxPrice != null) {
      query = query.lte('new_price', maxPrice);
    }

    const sortQuery = getSortQuery(sortBy);
    if (sortQuery.column) {
      query = query.order(sortQuery.column, { ascending: sortQuery.ascending });
    }

    const { data, count, error } = await query;

    if (error) throw error;

    final = {
      total: count || 0,
      data: data || [],
    };
  } catch (error) {
    console.error('Error fetching products:', error.message);
  }

  return final;
};

function getSortQuery(sortBy) {
  switch (sortBy) {
    case 'new_price-asc':
      return { column: 'new_price', ascending: true };
    case 'new_price-desc':
      return { column: 'new_price', ascending: false };
    case 'name-asc':
      return { column: 'name', ascending: true };
    case 'newest':
    default:
      return { column: 'created_at', ascending: false };
  }
}


