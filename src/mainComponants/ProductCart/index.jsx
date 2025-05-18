import styles from "./index.module.css";
import FavoriteButton from "../FavoriteButton";
import { useNavigate } from "react-router-dom";
import { domain } from "../../zustand-store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";

export default function ProductCart({ productData }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {productData &&
        productData.map((el) => {
          return (
            <div key={el.id} className="col-12 col-md-6 col-lg-4 p-1">
              <div
                className={`col-12 rounded ${styles.Cart}`}
                onClick={() => navigate(`/products/${el.id}`)}
              >
                <div className={`position-relative ${styles.container}`}>
                  <div className={styles.heartWrapper}>
                    <FavoriteButton productId={el.id} />
                  </div>

                  {isLoading && (
                    <div className={styles.spinnerContainer}>
                      <div className="spinner-border text-secondary" />
                    </div>
                  )}

                  <LazyLoadImage
                    src={el.image_url}
                    className={styles.productImage}
                    alt={el.name}
                    effect="blur"
                    afterLoad={() => setIsLoading(false)}
                  />
                </div>
                <p>{el.name}</p>
                <span>
                  {el.new_price} ريال
                  <del className="text-muted">
                    {el.price}
                    {el.price && "ريال"}
                    
                  </del>
                </span>
              </div>
            </div>
          );
        })}
    </>
  );
}
