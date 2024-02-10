import React from "react";
import NavBar from "../../Components/common/NavBar/NavBar";
import "./Login.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
  return (
  <>
  <NavBar />
    <div className="SingUp">
      <Link to={"/"} className="nav__logo link">
        <img src="./img/racing.png" alt="logo" className="nav__logo-img" />
        <span>C</span>AR
      </Link>
      <h2 className="SingUp__title">به وبسایت ما خوش آمدید</h2>
      <p className="SingUp__subtitle">لطفا اطلاعات خود را وارد کنید</p>
      <Form className="form">
        <Form.Control
          type="text"
          className="form__input"
          placeholder="نام کاربری یا شماره تماس"
        />
        <Form.Control
          type="password"
          className="form__input"
          placeholder="رمز عبور "
        />

        <button className="form__submit">ورود</button>
      </Form>
      <p className="form__social-title">وارد شوید با :</p>
      <div className="form__social">
        <button className="form__social-btn">
          <p>google</p>
          <FcGoogle />
        </button>
        <button className="form__social-btn">
            <p>faceBook</p>
          <FaFacebook />
        </button>
      </div>
      <p className="form__link">
        آیا حساب کاربری ندارید ؟{" "}
        <Link to={"/signUp"} className="link">
         ثبت نام کنید
        </Link>
      </p>
    </div>
  </>
  )
}



