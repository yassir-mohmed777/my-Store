import { useEffect, useState } from "react";
import { domain } from "../../../../../zustand-store";
import styles from "./index.module.css";

export default function ProductImg({ product, productImg, setImg }) {
  const [multImg, setMultImg] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!product) return;
    console.log(product)
    setMultImg(product.images);
  }, [product]);

  return (
    <div className="col-12 col-md-6 ps-2">
      <div className={styles.wrapper}>
        <div className={styles.thumbnails}>
          {multImg &&
            multImg.map((el,index) => (
              <img
                key={index}
                src={el.image_url}
                onClick={() => setImg(el.image_url)}
                className={`${styles.thumb} ${
                  productImg === el.image_url ? styles.active : ""
                }`}
                alt="preview"
              />
            ))}
        </div>

        <div className={styles.mainImage}>
          {!loaded && (
            <div className="w-100 h-100 d-flex justify-content-center align-items-center bg-light">
              <div className="spinner-border text-secondary" />
            </div>
          )}
          <img
            src={productImg}
            onLoad={() => setLoaded(true)}
            style={{ display: loaded ? "block" : "none" }}
            alt="main"
          />
        </div>
      </div>
    </div>
  );
}
