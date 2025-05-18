import styles from "./index.module.css";
import { useRef, useState } from "react";
import { RevewRepo } from "../../data/repos/RevewRepo";
import { useModalReview, useReview } from "../../zustand-store";


export default function Reviews() {
  const { closeReview } = useModalReview();
  const contentRef = useRef()
  const [rating, setRating] = useState(0);

  const hundleSubmit = (e) => {
    e.preventDefault()
    let userId = sessionStorage.getItem('userId')
    const Content = contentRef.current.value
    const reviewData = {
      rating,
      Content,
    };
    RevewRepo.store_reviews(reviewData , userId).then()
    useReview.getState().triggerRefresh();
    closeReview()
  }


  return (
    <div className="col-12" onClick={closeReview} id={styles.overlay}>
      <form 
      onSubmit={hundleSubmit}
        className="col-6 bg-white rounded-3 p-3"
        onClick={(e) => e.stopPropagation()}
        id={styles.contant}
      >
        <h3>Evalution</h3>
        <div className="stars mb-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              style={{
                cursor: "pointer",
                color: i <= rating ? "gold" : "#ccc",
                fontSize: "24px",
              }}
              onClick={() => setRating(i)}
            >
              ★
            </span>
          ))}
        </div>
        <div className="mb-3">
          <label className="form-label">Reviews*</label>
          <textarea
            className="form-control"
            rows="4"
            ref={contentRef}
          />
        </div>
        <button className="btn btn-dark">Send</button>
      </form>
    </div>
  );
}
