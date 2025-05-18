import { useEffect, useState } from "react";
import MinHeader from "../ui/Componants/MinHeader";
import ProductCart from "../../../mainComponants/ProductCart";
import { ProductsRepo } from "../../../data/repos/Products_Repo";
import NavHeader from "../ui/Componants/Nav-Header";
import { useFilterModal } from "../../../zustand-store";
import Paginate from "../../CategoryProductsPage/ui/Componants/Pagenation";
import FilterModal from "../../../mainComponants/FilterModal";
import Filters from "../../../mainComponants/Filter";

export default function ShopPage() {
  const [products, setProducts] = useState();
  const [productsTotal, setProductsTotal] = useState(0);
  const [productPerPage, setProductPerPage] = useState(6);
  const [activePage, setActivePage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
const {filterModalIndex} = useFilterModal()
  // useEffect(() => {
  //   ProductsRepo.Products_index(
  //     activePage,
  //     productPerPage,
  //     null,
  //     sortBy,
  //     minPrice,
  //     maxPrice
  //   ).then((res) => {
  //     setProducts(res.data);
  //     setProductsTotal(res.total);
  //   });
  // }, [activePage, productPerPage, sortBy, minPrice, maxPrice]);


  return (
    <div className="col-12">
      {filterModalIndex && <FilterModal setMaxPrice={setMaxPrice} setMinPrice={setMinPrice}/>}
      <div className="container p-0">
        <MinHeader />
        <div className="d-flex">
          <Filters setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} />
          <div className="col-12 col-lg-9 px-2">
            <NavHeader
            productPerPage={productPerPage}
              setSortBy={setSortBy}
              sortBy={sortBy}
              setProductPerPage={setProductPerPage}
              setActivePage={setActivePage}
            />
            <div className="d-flex flex-wrap">
              <ProductCart productData={products} />
            </div>
            <Paginate
              setActivePage={setActivePage}
              productperPage={productPerPage}
              productsTotal={productsTotal}
              activePage={activePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
