import React, { useEffect, useState } from "react";
import ProductCart from "../../../mainComponants/ProductCart";
import { useFavoriteStore } from "../../../zustand-store";
import { ProductsRepo } from "../../../data/repos/Products_Repo";
import favoriteNull from "../../../assets/no-favorites.jpg";
export default function FavoritePage() {
  const { favorites } = useFavoriteStore();
  const [products, setProducts] = useState();

  useEffect(() => {
    ProductsRepo.product_favorite(favorites).then((res) => {
      setProducts(res);
    });
  }, []);

  const favoriteLength = favorites.length === 0;

  return (
    <div className="col-12">
      <p className="text-center py-4 bg-dark text-white fw-bold ">
        Favorite Menu
      </p>
      {favoriteLength ? (
        <div className="text-center">
          <p className="text-secondary fw-bold fs-3 m-0">Not Found !</p>
          <img src={favoriteNull} className=" img-fluid w-25 object-fit-contain" />
        </div>
      ) : (
        <div className="d-flex flex-wrap">
          <ProductCart productData={products} />
        </div>
      )}
    </div>
  );
}
