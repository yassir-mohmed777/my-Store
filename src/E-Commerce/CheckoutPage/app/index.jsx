import { useRef, useState } from "react";
import { useCart } from "../../../zustand-store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js"; 
import { OrderRepo } from "../../../data/repos/OrderRepo"; 

// const stripePromise = loadStripe(
//   "pk_test_51ROUv6GP3KxxzVWZHWW9vk2QCbw65NMySuDW34UssCH4D7J7LeL4Nd7VZarn9DpAt9fhJpAeJQJ5bcOzx4SzzZlY00FhCTs26D"
// );

export default function CheckoutPage() {
  const { resetCart } = useCart();
  const navigate = useNavigate();
  const fullNameRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
 if (!agree) return toast.warning("وافق على الشروط والاحكام");
      navigate("/checkout-success");
      resetCart();
  
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">الدفع</h2>
      <div className="row">
        <div className="col-md-7">
          <form onSubmit={handleSubmit}>
            <h5 className="mb-3">معلومات الشحن</h5>
            <div className="mb-3">
              <label className="form-label">أسمك بالكامل</label>
              <input
                type="text"
                className="form-control"
                required
                ref={fullNameRef}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">رقم الهاتف</label>
              <input
                type="tel"
                className="form-control"
                required
                ref={phoneRef}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">المدينة</label>
              <input
                type="text"
                className="form-control"
                required
                ref={cityRef}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">العنوان</label>
              <input
                type="text"
                className="form-control"
                required
                ref={addressRef}
              />
            </div>

            <h5 className="mt-4">طريقة الدفع</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              <label className="form-check-label">الدفع عند الاستلام</label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              <label className="form-check-label">بطاقة ائتمان</label>
            </div>

            {paymentMethod === "card" && (
              <div className="border p-3 rounded mb-3">
                <h6>تفاصيل البطاقة</h6>
              </div>
            )}

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              <label className="form-check-label">
                أوافق على الشروط والأحكام
              </label>
            </div>

            <button type="submit" className="btn btn-dark w-100">
              اطلب الأن
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
