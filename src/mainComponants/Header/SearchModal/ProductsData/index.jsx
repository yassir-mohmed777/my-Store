import { useNavigate } from "react-router-dom";
import { domain } from "../../../../zustand-store";
import styles from "./index.module.css";
export default function ProductsData({ products }) {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column overflow-auto" id={styles.contant}>
      {products &&
        products.map((el) => (
          <div
            key={el.documentId}
            onClick={() => navigate(`/categories/${el.categorice.documentId}`)}
            id={styles.Product}
            className="col-12 d-flex p-3"
          >
            <img src={domain + el.product_img.url} />
            <div className="d-flex flex-column ms-3">
              <p className="text-secondary">{el.product_name}</p>
              <span className="text-secondary">${el.product_new_price}</span>
            </div>
          </div>
        ))}
    </div>
  );
}
