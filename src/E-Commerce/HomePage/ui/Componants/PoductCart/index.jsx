import { useNavigate } from "react-router-dom";
import { domain } from "../../../../../zustand-store";
import styles from "./index.module.css";
import { useState } from "react";
import FavoriteButton from "../../../../../mainComponants/FavoriteButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ProductCart({ products}) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="d-none d-md-flex flex-wrap justify-content-center">
      {products &&
        products.map((el) => (
          <div key={el.id} className="col-12 col-md-6 col-lg-3 p-1">
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
        ))}
    </div>
  );
}
