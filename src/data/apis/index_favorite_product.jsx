
import { supabase } from "../../supabaseClient"; // تأكد من أنك أنشأت هذا الملف لتكوين supabase

export const indexFavoriteProducts = async (favoriteIds = []) => {
  if (favoriteIds.length === 0) return [];

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .in("id", favoriteIds);

  if (error) {
    console.error("Error fetching favorite products:", error);
    return [];
  }

  return data;
};