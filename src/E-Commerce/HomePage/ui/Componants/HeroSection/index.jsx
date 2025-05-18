import styles from "./index.module.css";
import heroImg from "../../../../../assets/copy.png";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <div className="col-12 SecOne" id={styles.SecOne}>
      <div className="col-12 d-flex flex-column flex-lg-row container">
        <div
          className="col-12 col-lg-6 d-flex flex-wrap flex-column mt-3 justify-content-center"
          id={styles.custom}
        >
          <div>
            <h1>
              ابحث  <br />عن ملابس  <br /> تناسب ذوقك
            </h1>
            <p>
              تصفح مجموعتنا المتنوعة من الملابس المصنوعة بعناية ,والمصممة لأبراز شخصيتك وتلبية ذوقك الرفيع
            </p>
            <div className="mt-4">
              <Link className="nav-link" to="/shop">
                <button className="d-block">تسوق الأن</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div>
            <img src={heroImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
