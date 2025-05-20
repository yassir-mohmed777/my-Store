import CategoriceSec from "../ui/Componants/CategoriceSec";
import BlackSec from "../ui/Componants/BlackSec";
import ReviewSec from "../ui/Componants/ReviewSec";
import { useEffect, useState } from "react";
import {
  apikey,
  domain,
  useData,
  useLoader,
  useReview,
} from "../../../zustand-store";
import { RevewRepo } from "../../../data/repos/RevewRepo";
import Brands from "../ui/Componants/Brands";
import { CatsRepo } from "../../../data/repos/Cat_Repo";
import HeroSection from "../ui/Componants/HeroSection";
import NewarivalSection from "../ui/Componants/NewarivalSection";
import TopSellingSection from "../ui/Componants/TopSellingSection";
import axios from "axios";
export default function HomePages() {
  const { openLoader, closeLoader } = useLoader();
  const [products, setProducts] = useState();
  const { setReviews } = useReview();

  useEffect(() => {

     CatsRepo.categorice_show(
      "03c8e441-33f4-4da7-8dc1-5f775cc2265d"
    ).then((res) => {
      setProducts(res);
      console.log(res)
    });


  }, []);

  return (
    <div className="col-12">
      <HeroSection />
      <Brands />
      <NewarivalSection />
      <TopSellingSection Products={products} />
      <CategoriceSec />
      <ReviewSec />
      <BlackSec />
    </div>
  );
}
