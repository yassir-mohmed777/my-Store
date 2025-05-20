import { ErrorMessage, Field, Form, Formik } from "formik";
import "./index.css";
import * as Yup from "yup";
import { AuthRepo } from "../../../data/repos/AuthRepo";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore, useLoader } from "../../../zustand-store";
import { useState } from "react";
export default function LoginPage() {
  const navigate = useNavigate();
  const {setToken} = useAuthStore()
  
  
  const { openLoader, closeLoader } = useLoader();
  const [rememberMe, setRememberMe] = useState(false);

  const validateYupSchema = Yup.object({
    email: Yup.string().email("invalid Email").required("Required Field"),
    password: Yup.string().required("Required Field"),
  });

  const hundleLogin = (value) => {
  openLoader();

  const storedUser =
    JSON.parse(localStorage.getItem("userInfo")) ||
    JSON.parse(sessionStorage.getItem("userInfo"));

  if (
    storedUser &&
    storedUser.user_email === value.email &&
    storedUser.user_password === value.password
  ) {
    toast.success("تم تسجيل الدخول بنجاح!");

    const fakeToken = "static-dev-token";
    const fakeUserId =
      localStorage.getItem("userId") || sessionStorage.getItem("userId");

    if (rememberMe) {
      localStorage.setItem("userInfo", JSON.stringify(storedUser));
      localStorage.setItem("userId", fakeUserId);
    } else {
      sessionStorage.setItem("userInfo", JSON.stringify(storedUser));
      sessionStorage.setItem("userId", fakeUserId);
    }

    setToken(fakeToken);

    let redirect = sessionStorage.getItem("redirect");

    setTimeout(() => {
      closeLoader();
      navigate(redirect || "/profile");
    }, 1000);
  } else {
    toast.error("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    closeLoader();
  }
};


  return (
    <div className="col-12 h-100">
      <h3 className="text-white text-center py-5 prefOfSinIn">Sign in</h3>
      <div className="col-12 h-100 my-5  d-flex justify-content-center align-items-center flex-column">
        <Formik
          onSubmit={hundleLogin}
          validationSchema={validateYupSchema}
          initialValues={{ email: "", password: "" }}
        >
          <Form className="col-10 col-lg-4 bg-white p-3 rounded shadow d-flex flex-column ">
            <label>الأيميل</label>
            <Field
              className="form-control black-outline py-2"
              name="email"
              placeholder="ادخل الايميل هنا..."
            />
            <ErrorMessage
              name="email"
              component={"div"}
              className="text-danger"
            />
            <label className="mt-3">كلمة المرور</label>
            <Field
              type="password"
              className="form-control black-outline py-2"
              name="password"
              placeholder="ادخل كلمة المرور هنا..."
            />
            <ErrorMessage
              name="password"
              component={"div"}
              className="text-danger"
            />
            <div className="form-check form-check-reverse mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                تذكرني
              </label>
            </div>
            <button className="btn btn-dark mt-4 " type="submit">تسجيل الدخول</button>
          </Form>
        </Formik>
        <Link to="/register" className="mt-3 text-secondary">
          عميل جديد ؟ أنشئ حسابك الأن
        </Link>
      </div>
    </div>
  );
}
