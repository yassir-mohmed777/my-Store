import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function MinHeader() {
  return (
    <div className="d-flex align-items-center gap-2 my-4">
      <Link to={'/'} className="nav-link">Home</Link>
      <FaAngleRight />
      <p className="m-0">Shop</p>
    </div>
  );
}
