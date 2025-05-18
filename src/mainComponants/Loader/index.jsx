import styles from "./index.module.css";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center " id={styles.overLay}>
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
