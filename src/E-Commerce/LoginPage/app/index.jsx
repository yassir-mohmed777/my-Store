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
    AuthRepo.login(value).then((res) => {
      if (res) {
        toast.success("Login Success !");
        const userData = {
          user_name: res.user.username,
          user_email: res.user.email,
          user_phone: res.user.phone,
        };
        setToken(res.jwt)
        if (rememberMe) {
          localStorage.setItem("userInfo", JSON.stringify(userData));
          localStorage.setItem("userId", res.user.documentId);
        } else {
          sessionStorage.setItem("userInfo", JSON.stringify(userData));
          sessionStorage.setItem("userId", res.user.documentId);
        }
        let redirect = sessionStorage.getItem("redirect");
        setTimeout(() => {
          closeLoader();
          if (redirect) {
            navigate("/checkout");
          } else {
            navigate("/profile");
          }
        }, 3000);
      } else {
        toast.error("Wrong Email or Password");
        closeLoader();
      }
    });
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
            <label>Email</label>
            <Field
              className="form-control black-outline py-2"
              name="email"
              placeholder="Enter Email Here..."
            />
            <ErrorMessage
              name="email"
              component={"div"}
              className="text-danger"
            />
            <label className="mt-3">Password</label>
            <Field
              type="password"
              className="form-control black-outline py-2"
              name="password"
              placeholder="Enter Password Here..."
            />
            <ErrorMessage
              name="password"
              component={"div"}
              className="text-danger"
            />
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <button className="btn btn-dark mt-4" type="submit">Sign in</button>
          </Form>
        </Formik>
        <Link to="/register" className="mt-3 text-secondary">
          New customer? Create your account
        </Link>
      </div>
    </div>
  );
}
