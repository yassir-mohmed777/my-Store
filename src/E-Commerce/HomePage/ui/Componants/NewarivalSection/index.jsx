import { useEffect, useState } from "react";

import styles from "./index.module.css";
import { CatsRepo } from "../../../../../data/repos/Cat_Repo";
import ButtonView from "../ButtonVeiw";
import ProductCart from "../PoductCart";
import ProductSliderPhone from "../ProductSliderPhone";

export default function NewarivalSection() {
  const [products, setProducts] = useState();
  useEffect(() => {
    CatsRepo.categorice_show("d240cf9c-7fa1-4b2f-a7ef-f1956439b8f4").then((res) => {
      setProducts(res);
    });
  }, []);
  return (
    <div className="col-12 my-5 ">
      <div className="container">
        <h2 className="text-center mb-3" id={styles.h2}>
       ألبضاعة الجديدة
        </h2>
        <div className="col-12">
          <ProductCart products={products} />
          <ProductSliderPhone products={products}/>
        </div>
        <ButtonView catID={"d240cf9c-7fa1-4b2f-a7ef-f1956439b8f4"} />
        <hr />
      </div>
    </div>
  );
}
