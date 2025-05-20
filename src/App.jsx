import { Route, Routes } from "react-router-dom";
import HomePages from "./E-Commerce/HomePage/app";
import CategoryProductsPage from "./E-Commerce/CategoryProductsPage/app";
import ProductDetailPage from "./E-Commerce/ProductDetailPage/app";
import CartPage from "./E-Commerce/CartPage/app";
import ModalHeader from "./mainComponants/Header/Modal";
import {
  useData,
  useFilterModal,
  useLoader,
  useModalHed,
  useModalReview,
  useModalSearh,
} from "./zustand-store";
import RegisterPage from "./E-Commerce/RegisterPage/app";
import { ToastContainer } from "react-toastify";
import ShopPage from "./E-Commerce/ShopPage/app";
import LoginPage from "./E-Commerce/LoginPage/app";
import CheckoutPage from "./E-Commerce/CheckoutPage/app";
import Reviews from "./mainComponants/Reviews";
import ProfilePage from "./E-Commerce/ProfilePage/app";
import SearchModal from "./mainComponants/Header/SearchModal";
import ProtectedRoute from "./E-Commerce/ProtectedRoute";
import Loader from "./mainComponants/Loader";
import ThankYouPage from "./E-Commerce/ThankYouPage";
import FilterModal from "./mainComponants/FilterModal";
import MainLayout from "./E-Commerce/MainLayout";
import NotFoundPage from "./E-Commerce/NotFoundPage";
import FavoritePage from "./E-Commerce/FavoritePage/app";
import ScrollToTop from "./mainComponants/ScrollToTop";
import { useEffect } from "react";
import { CatsRepo } from "./data/repos/Cat_Repo";

export default function App() {
  const { modalIndex } = useModalHed();
  const { modalRevIndex } = useModalReview();
  const { ModalSearh } = useModalSearh();
  const { LoaderIndex } = useLoader();
  const { filterModalIndex } = useFilterModal();
    const { setData } = useData();
useEffect(() => {
  CatsRepo.categorice_index().then((res) => {
    setData(res);
  });
},[])

  return (
    <div className="App">
      <ScrollToTop />
      <ToastContainer />
      {filterModalIndex && <FilterModal />}
      {LoaderIndex && <Loader />}
      {ModalSearh && <SearchModal />}
      {modalRevIndex && <Reviews />}
      {modalIndex && <ModalHeader />}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              // <ProtectedRoute>
                <CheckoutPage />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/categories/:categoryId"
            element={<CategoryProductsPage />}
          />
          <Route path="/wishlist" element={<FavoritePage />} />

          <Route path="/checkout-success" element={<ThankYouPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
// 4242 4242 4242 4242