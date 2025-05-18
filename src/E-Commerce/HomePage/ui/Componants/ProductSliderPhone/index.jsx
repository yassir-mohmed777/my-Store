// ProductSliderPhone.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import FavoriteButton from "../../../../../mainComponants/FavoriteButton";
import { domain } from "../../../../../zustand-store";
import styles from "./index.module.css";

export default function ProductSliderPhone({ products }) {
  const navigate = useNavigate();

  return (
    <div className="d-md-none">
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
      >
        {products?.map((el) => (
          <SwiperSlide key={el.id}>
            <div
              className={`rounded ${styles.Cart}`}
              onClick={() => navigate(`/products/${el.id}`)}
            >
              <div className={`position-relative ${styles.container}`}>
                <div className={styles.heartWrapper}>
                  <FavoriteButton productId={el.id} />
                </div>
                <LazyLoadImage
                  src={el.image_url}
                  className={styles.productImage}
                  alt={el.name}
                  effect="blur"
                />
              </div>
              <p>{el.name}</p>
              <span>
                ${el.new_price}{" "}
                <del className="text-muted">
                  {el.price && "$"}
                  {el.price}
                </del>
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
