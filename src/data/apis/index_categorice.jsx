import { supabase } from "../../supabaseClient";

export const indexCategorice = async () => {
  let final = [];

  try {
    const { data, error } = await supabase
      .from("categorice")
      .select("*");

    if (error) throw error;

    final = data;
    console.log(data);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  return final;
};
