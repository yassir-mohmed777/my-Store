import styles from "./index.module.css";
import Zara from "../../../../../assets/Marka/zara.png";
import Calvin from "../../../../../assets/Marka/Calvin.png";
import Pranda from "../../../../../assets/Marka/Pranda.png";
import Vedsace from "../../../../../assets/Marka/Vedsace.png";
import Gucci from "../../../../../assets/Marka/Gucci.png";

export default function Brands() {
  const images = [Vedsace, Zara, Gucci, Pranda, Calvin];

  return (
<div className={`col-12 py-1 py-lg-4 ${styles.color}`}>
      <div className="container">
        <div className="row g-3 justify-content-center">
          {images.map((img, index) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
              key={index}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`Brand ${index}`}
                  className={styles.brandImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
