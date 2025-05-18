import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

export default function ButtonView({ catID }) {
  const navigate = useNavigate();
  return (
    <div className="col-12 d-flex justify-content-center">
      <button
        className="btn btn-outline-dark rounded-5 my-4"
        onClick={() => navigate(`/categories/${catID}`)}
        id={styles.btn}
      >
      أعرض الكل
      </button>
    </div>
  );
}
