import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthRepo } from "../../data/repos/AuthRepo";

export default function ProtectedRoute({ children }) {
  const [isValid, setIsValid] = useState(null); // null = جاري التحقق
  const token = sessionStorage.getItem("token") || localStorage.getItem("token");

  // useEffect(() => {
  //   if (!token) {
  //     setIsValid(false);
  //     return;
  //   }

  //   AuthRepo.checkToken(token)
  //     .then(() => {
  //       setIsValid(true);
  //     })
  //     .catch(() => {
  //       toast.error("Access denied. Please login.");
  //       localStorage.clear();
  //       sessionStorage.clear();
  //       setIsValid(false);
  //     });
  // }, []);

  // لودر بسيط
  if (isValid === null) {
    return (
      <div className="d-flex justify-content-center align-items-center my-5" style={{ minHeight: "80vh" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // إذا التحقق صالح، يتم عرض المحتوى أو توجيه إلى صفحة الدخول
  return isValid ? children : <Navigate to="/login" />;
}
