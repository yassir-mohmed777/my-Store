import { useNavigate, useParams } from "react-router-dom";
import BlackSec from "../../HomePage/ui/Componants/BlackSec";
import MinHeader from "../ui/Componants/minHeader";
import ProductDetail from "../ui/Componants/ProductDetail";
import { useEffect, useState } from "react";
import { ProductsRepo } from "../../../data/repos/Products_Repo";
import ReviewSec from "../../HomePage/ui/Componants/ReviewSec";
import ProductImg from "../ui/Componants/ProductImg";
import { domain } from "../../../zustand-store";

export default function ProductDetailPage() {
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const [imgUrl, setImgUrl] = useState("");
  let productId = params.productId;

  // useEffect(() => {
  //   ProductsRepo.Product_show(productId)
  //     .then((res) => {
  //       setProduct(res);
  //       setImgUrl(domain + res.product_img.url);
  //     })
  //     .catch((err) => {
  //       navigate("/error");
  //     });
  // }, []);

  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5" style={{ minHeight: "80vh" }}>
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="col-12">
      <div className="container">
        <MinHeader
          productName={product.product_name}
          catName={product.categorice.category_name}
          catId={product.categorice.documentId}
        />
        <div className="col-12 d-flex flex-wrap flex-md-nowrap">
          <ProductImg product={product} productImg={imgUrl} setImg={setImgUrl} />
          <ProductDetail product={product} productImg={imgUrl} />
        </div>
        <ReviewSec />
        <BlackSec />
      </div>
    </div>
  );
}
