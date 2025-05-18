import { supabase } from "../../supabaseClient";

export const showCategorice = async (categoryId) => {
  let final = [];

  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category_id", categoryId);

    if (error) throw error;

    final = data;
  } catch (error) {
    console.error("Error fetching category products:", error);
    throw error;
  }

  return final;
};
