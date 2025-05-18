import BlackSec from "../../HomePage/ui/Componants/BlackSec";
import LeftSite from "../ui/CartDetail/LeftSite";
import RightSite from "../ui/CartDetail/RightSite";
import MinHeader from "../ui/MinHeader";

export default function CartPage() {
  return (
    <div className="col-12">
      <div className="container">
        <MinHeader />
        <h1>سلة التسوق</h1>
        <div className="col-12 d-flex flex-wrap mb-5">
          <LeftSite />
          <RightSite />
        </div>
        <BlackSec />
      </div>
    </div>
  );
}
