import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { AuthRepo } from "../../../data/repos/AuthRepo";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthStore, useLoader } from "../../../zustand-store";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { openLoader, closeLoader } = useLoader();
const {setToken} = useAuthStore()
  const phoneRegex = /^\+201[0125]\d{8}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required Field"),
    username: Yup.string().required("Required Field"),
    password: Yup.string()
      .required("Required Field")
      .matches(passwordRegex, "Not Valid"),
    phone: Yup.string()
      .required("Required Field")
      .matches(phoneRegex, "Not Valid"),
  });

 const hundleSubmit = (value) => {
  openLoader();

  const fakeUserId = Date.now().toString();
  const fakeToken = "static-dev-token"; 

  const userData = {
    user_name: value.username,
    user_email: value.email,
    user_phone: value.phone,
    user_password: value.password,
  };

 
  sessionStorage.setItem("userInfo", JSON.stringify(userData));
  sessionStorage.setItem("userId", fakeUserId);
  setToken(fakeToken); 

  let redirect = sessionStorage.getItem("redirect");

  setTimeout(() => {
    closeLoader();
    if (redirect) {
      navigate("/checkout");
    } else {
      navigate("/profile");
    }
  }, 1000);
};

  return (
    <div className="col-12 h-100 mb-5">
      <h3 className="text-white text-center py-5 prefOfSinIn">Sign Up</h3>
      <div className="d-flex flex-column h-100 justify-content-center align-items-center">
        <Formik
          onSubmit={hundleSubmit}
          validationSchema={validationSchema}
          initialValues={{
            email: "",
            password: "",
            username: "",
            phone: "",
          }}
        >
          <Form className="col-12 col-md-5 p-3 shadow rounded-2 border bg-white ">
            <label className="w-full">الاسم بالكامل</label>
            <Field
              type="text"
              name="username"
              className="form-control black-outline"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-danger "
            />

            <label className="w-full">الايميل</label>
            <Field
              placeholder="Ahmed123@icloud.com"
              type="text"
              name="email"
              className="form-control black-outline"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger "
            />
            <label className="w-full">رقم الهاتف</label>
            <Field
              type="text"
              name="phone"
              className="form-control black-outline"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-danger "
            />

            <label className="w-full"> كلمة المرور</label>
            <Field
              type="password"
              name="password"
              className="form-control black-outline"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger "
            />
            <button type="submit" className="btn btn-dark col-12 mt-4">
              تسجيل
            </button>
          </Form>
        </Formik>
        <Link to="/login" className="mt-3 text-secondary">
          لديك حساب ؟ سجل دخولك من هنا
        </Link>
      </div>
    </div>
  );
}
