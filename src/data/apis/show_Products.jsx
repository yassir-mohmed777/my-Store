// import { supabase } from "../../supabaseClient";

// export const showProduct = async (id) => {
//   const { data, error } = await supabase
//     .from("products")
//     .select("*") 
//     .eq("id", id)
//     .single();

//   if (error) {
//     console.error("حدث خطأ أثناء جلب المنتج:", error.message);
//     return null;
//   }

//   return data;
// };

import { supabase } from "../../supabaseClient";

export const showProduct = async (id) => {
  // 1. جلب بيانات المنتج
  const { data: product, error: productError } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (productError) {
    console.error("حدث خطأ أثناء جلب المنتج:", productError.message);
    return null;
  }

  // 2. جلب الصور المرتبطة بالمنتج
  const { data: gallery, error: galleryError } = await supabase
    .from("product_images")
    .select("image_url")
    .eq("product_id", id);

  if (galleryError) {
    console.error("حدث خطأ أثناء جلب صور المنتج:", galleryError.message);
    return {
      ...product,
      images: [], // في حال فشل الصور، نُرجع المنتج بدون صور
    };
  }

  // 3. دمج المنتج مع الصور
  return {
    ...product,
    images: gallery, // مصفوفة تحتوي على { image_url }
  };
};
