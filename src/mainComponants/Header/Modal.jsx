import { Link } from "react-router-dom";
import { useModalHed } from "../../zustand-store";
import styles from "./index.module.css";
import { AiOutlineUser } from "react-icons/ai";
export default function ModalHeader() {
  const { closeModal } = useModalHed();
  return (
    <div className="overLay" onClick={closeModal}>
      <div
        className="d-flex flex-column align-items-center gap-3 pt-4 animate__animated animate__fadeInRight"
        onClick={(e) => e.stopPropagation()}
        id={styles.contant}
      >
        <Link className="border-bottom" to="/">Home</Link>
        <Link className="border-bottom" to="/shop">Shop</Link>
        <Link className="border-bottom" to="/categories/hhsv73wydbkc0z0tgmg8jn3p">NewArrivals</Link>
        <Link className="border-bottom">Brands</Link>
        <div className="d-flex align-items-center gap-2 border-bottom">
        <AiOutlineUser />
        <Link to="/login">Log in / Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
