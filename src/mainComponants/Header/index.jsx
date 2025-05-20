import styles from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMenu } from "react-icons/io5";
import logo from './RosemetLogoB.png'
import {
  useAuthStore,
  useCart,
  useFavoriteStore,
  useModalHed,
  useModalSearh,
} from "../../zustand-store";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import NavHeader from "./Nav-Header";
export default function Header() {
  const navigate = useNavigate();
  const { openModal } = useModalHed();
  const { openModalSearh } = useModalSearh();
  const { productInCart } = useCart();
  const [productQty, setProductQty] = useState();
  const { favorites } = useFavoriteStore();
  const [favoriteProduct, setFavoriteProduct] = useState([]);
  const { token, clearToken } = useAuthStore();

  useEffect(() => {
    let productQty = productInCart.reduce((acc, el) => acc + el.qty, 0);
    setProductQty(productQty);
    setFavoriteProduct(favorites);
  }, [productInCart, favorites]);

  const logOut = () => {
    // localStorage.clear();
    // sessionStorage.clear();
    clearToken();
    navigate("/login");
  };

  return (
    <>
      <NavHeader />
      <div className="col-12 border-bottom" id={styles.header}>
        <div className="col-12 d-flex justify-content-between align-items-center py-3 container">
          <div className="d-flex align-items-center gap-3">
            <IoMenu
              onClick={openModal}
              id={styles.icon}
              className="fs-3 d-block d-lg-none"
            />
            <nav className="d-none d-lg-flex align-items-lg-center gap-md-2  gap-lg-4 col-5">
              <Link to="/">الرئيسية</Link>
              <Link to="/shop">تسوق</Link>
              <Link to="/categories/d240cf9c-7fa1-4b2f-a7ef-f1956439b8f4">الجديد</Link>
              <Link>البراندات</Link>
            </nav>
          </div>
          <Link to="/">
          <img src={logo}  className={styles.logo} />
          </Link>
          <div className="fs-5 d-flex align-items-center gap-2 gap-lg-3">
            <div className={styles.hartIcon}>
              <CiHeart onClick={() => navigate('/wishlist')} role="button" className="fs-3" />
              <span>{favoriteProduct.length}</span>
            </div>
            <div className={styles.hartIcon}>
              <LiaShoppingBagSolid
                className="fs-3"
                role="button"
                onClick={() => navigate("/cart")}
              />
              <span>{productQty}</span>
            </div>
            <IoIosSearch
              role="button"
              onClick={openModalSearh}
              className="fs-3"
            />
            <div className="dropdown">
              <AiOutlineUser
                className="dropdown-toggle fs-4 d-none d-md-block"
                id="dropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li id={styles.Btn}>
                  <Link
                    to="/profile"
                    className="text-center nav-link text-secondary mb-2"
                  >
                    Profile
                  </Link>
                </li>
                {token && (
                  <li id={styles.Btn}>
                    <button
                      className=" col-12 nav-link text-secondary"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
