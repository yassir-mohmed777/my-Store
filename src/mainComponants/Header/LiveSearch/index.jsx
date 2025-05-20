import { IoIosSearch } from "react-icons/io";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient";
// import { supabase } from "../../supabaseClient"; 

export default function LiveSearch({ onResults }) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      onResults(null);
      return;
    }

    const delay = setTimeout(async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*") 
        .ilike("name", `%${searchQuery}%`); 

      if (error) {
        console.error("Error fetching results", error);
        onResults([]);
      } else {
        onResults(data);
      }
    }, 400); 

    return () => clearTimeout(delay);
  }, [searchQuery]);

  return (
    <div className="p-3 position-relative">
      <IoIosSearch className="fs-4" id={styles.search} />
      <input
        type="text"
        className="form-control"
        placeholder="ابحث"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <p className="m-0">بحث سريع</p>
    </div>
  );
}
