import { IoIosSearch } from "react-icons/io";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LiveSearch({ onResults }) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
        onResults(null); 
      return;
    }

    const delay = setTimeout(() => {
      axios
        .get(`http://localhost:1337/api/products?populate=*&_q=${searchQuery}`)
        .then((res) => {
            onResults(res.data.data); 
        })
        .catch((err) => {
          console.error("Error fetching results", err);
          onResults([]);
        });
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
