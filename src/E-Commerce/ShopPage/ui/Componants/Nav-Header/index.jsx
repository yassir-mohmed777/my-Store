import { IoFilter } from "react-icons/io5";
import { useFilterModal } from "../../../../../zustand-store";

export default function NavHeader({
  sortBy,
  setSortBy,
  setProductPerPage,
  setActivePage,
  productPerPage,
}) {
  const { openModal } = useFilterModal();
  return (
    <div className="col-12">
      <h3 className="m-0">Shop</h3>
      <div className="d-flex justify-content-between align-items-center">
        <div className="col-8 col-lg-12 d-flex justify-content-start justify-content-lg-between align-items-center gap-3 gap-lg-0">
          <div className="d-flex justify-content-end mb-2">
            <select
              value={productPerPage}
              onChange={(e) => {
                setActivePage(1);
                setProductPerPage(Number(e.target.value));
              }}
              className="form-select w-auto"
            >
              <option value={6}>6 / Page</option>
              <option value={12}>12 / Page</option>
              <option value={24}>24 / Page</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-2 my-3">
            <label htmlFor="sortSelect" className="form-label mb-0">
              Sort by:
            </label>
            <select
              id="sortSelect"
              className="form-select w-50"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Latest</option>
              <option value="product_name-asc">Name (A-Z)</option>
              <option value="product_new_price-asc">
                Price (From low to high)
              </option>
              <option value="product_new_price-desc">
                Price ( From high to low)
              </option>
            </select>
          </div>
        </div>
        <div>
          <IoFilter
            className="d-block d-lg-none fs-3"
            role="button"
            onClick={openModal}
          />
        </div>
      </div>
    </div>
  );
}
