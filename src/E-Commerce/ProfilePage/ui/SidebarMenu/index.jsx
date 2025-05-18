import { FaMapMarkerAlt, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import styles from './index.module.css'
import { useNavigate } from "react-router-dom";
export default function SidebarMenu() {

  const navigate = useNavigate()

  const logOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="col-12">
      <div className="border p-0 rounded">
        <div className="bg-light py-2 px-3 border-bottom d-flex align-items-center gap-1">
          <FaTachometerAlt />
          <span className="fw-bold">Control</span>
        </div>

        <ul className="list-unstyled mb-0" id={styles.hover}>
          <li className="border-bottom px-3 py-2 d-flex  align-items-center gap-1 text-secondary">
            <FaMapMarkerAlt />
            <span>Address (1)</span>
          </li>
          <li className="border-bottom px-3 py-2 d-flex  align-items-center gap-1 text-secondary">
            <FaHeart />
            <span>Favorites List (0)</span>
          </li>
          <li onClick={logOut} className="px-3 py-2 d-flex  align-items-center gap-1 text-secondary">
            <FaSignOutAlt />
            <span>Sign out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
