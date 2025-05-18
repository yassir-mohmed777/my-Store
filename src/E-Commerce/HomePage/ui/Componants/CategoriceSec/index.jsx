import styles from "./index.module.css";
import { domain, useData } from "../../../../../zustand-store";
import { Link } from "react-router-dom";
import casual from '../../../../../assets/CatImg/a.png'
import gym from '../../../../../assets/CatImg/c.png'
import party from '../../../../../assets/CatImg/g.png'
import formal from '../../../../../assets/CatImg/x.png'
export default function CategoriceSec() {

  const {Categorice : categorice} = useData()

  const casualCategory =
    categorice && categorice.find((cat) => cat.name === "شبابية");
  const formalCategory =
    categorice && categorice.find((cat) => cat.name === "الاناقة");
  const partyCategory =
    categorice && categorice.find((cat) => cat.name === "نسائية");
  const gymCategory =
    categorice && categorice.find((cat) => cat.name === "رياضة");

  return (
    <div
      className="container col-12 p-3 p-md-5 d-flex flex-column align-items-center rounded-5"
      id={styles.backgrauond}
    >
      <h2 className="mb-4">تصفح حسب نمطك</h2>

      <div className="row g-3 d-flex flex-lg-wrap">
        {casualCategory && (
          <div className="col-12 col-lg-4">
              <Link to={`/categories/${casualCategory.id}`}>
              <p className="position-absolute p-3">شبابية</p>
              <img src={casual} />
          </Link>
            </div>
        )}
        {formalCategory && (
          <div className="col-12 col-lg-8">
            <Link to={`/categories/${formalCategory.id}`}>
            <p className="position-absolute p-3">الاناقة</p>
            <img src={formal} />
          </Link>
          </div>
        )}
        {partyCategory && (
          <div className="col-12 col-lg-8">
            <Link to={`/categories/${partyCategory.id}`}>
            <p className="position-absolute p-3">نسائية</p>
            <img src={party} />
          </Link>
          </div>
        )}
        {gymCategory && (
          <div className="col-12 col-lg-4">
            <Link to={`/categories/${gymCategory.id}`}>
            <p className="position-absolute p-3">رياضة</p>
            <img src={gym} />
          </Link>
          </div>
        )}
      </div>
    </div>
  );
}
