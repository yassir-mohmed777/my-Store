import styles from "./index.module.css";
export default function BlackSec() {
  return (
    <div className="container py-4 px-5 d-flex flex-wrap rounded-4 justify-content-between align-items-center" id={styles.Mydiv}>
      <h3>ابق على اطلاع <br /> بآخر عروضنا</h3>
      <div className="col-12 col-md-4">
        <input type="text" className="form-control mb-2 rounded-5 py-2" placeholder="ادخل الايميل"/>
        <button className="btn btn-light col-12 rounded-5 py-2">اشترك في النشرة الإخبارية</button>
      </div>
    </div>
  );
}
