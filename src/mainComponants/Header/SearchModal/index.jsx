import { useModalSearh } from "../../../zustand-store";
import { IoClose } from "react-icons/io5";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { ProductsRepo } from "../../../data/repos/Products_Repo";
import ProductsData from "./ProductsData";
import LiveSearch from "../LiveSearch";
export default function SearchModal() {
  const { closeModalSearh } = useModalSearh();
  const [popularData, setpopularData] = useState();
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    ProductsRepo.Product_popular().then((res) => {
      setpopularData(res);
    });
  }, []);

  return (
    <div className="overLay" onClick={closeModalSearh}>
      <div
        className=" animate__animated animate__fadeInRight"
        onClick={(e) => e.stopPropagation()}
        id={styles.contant}
      >
        <div className="d-flex align-items-center p-3 justify-content-between border-bottom">
          <p className="m-0">ابحث في موقعنا</p>
          <IoClose
            className="fs-3 "
            role="button"
            onClick={closeModalSearh}
            id={styles.icon}
          />
        </div>
        <LiveSearch onResults={setSearchResults} />
        <div className="flex-grow-1 d-flex flex-column">
          {searchResults ? (
            searchResults.length > 0 ? (
              <ProductsData products={searchResults} />
            ) : (
              <p className="text-center my-4">No results found</p>
            )
          ) : (
            <>
              <p className="py-2 px-3 m-0 border-bottom border-top shadow">
                هل تحتاج إلى بعض الإلهام؟
              </p>
              <ProductsData products={popularData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
