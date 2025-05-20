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
            key={el.id}
            onClick={() => navigate(`/categories/${el.category_id}`)}
            id={styles.Product}
            className="col-12 d-flex p-3"
          >
            <img src={el.image_url} />
            <div className="d-flex flex-column ms-3">
              <p className="text-secondary">{el.name}</p>
              <span className="text-secondary">{el.new_price}ريال</span>
            </div>
          </div>
        ))}
    </div>
  );
}
