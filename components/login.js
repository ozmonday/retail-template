import Link from "next/link";
import Router from "next/router";
import React from "react";
import style from "./login.module.css";
import { setCookie } from "../utils/utils";

function checkEmail(value) {
  return value == "user" ? true : false;
}

function checkPassword(value) {
  return value == "root" ? true : false;
}

export default function Login() {
  const [visible, setVisible] = React.useState(false);
  const [PValid, setPValid] = React.useState({
    valid: false,
    style: style.pass_border,
  });
  const [EValid, setEValid] = React.useState({
    valid: false,
    style: style.pass_border,
  });

  let emailRef = React.useRef();
  let passwordRef = React.useRef();

  const loginAction = () => {
    Router.push("/");
    setCookie("token", "user", 7);
  };

  const EmailValidation = () => {
    if (checkEmail(emailRef.current.value)) {
      setEValid({ valid: true, style: style.pass_border });
    } else {
      setEValid({ valid: false, style: style.red_border });
    }
  };

  const PasswordValidation = () => {
    if (checkPassword(passwordRef.current.value)) {
      setPValid({ valid: true, style: style.pass_border });
    } else {
      setPValid({ valid: false, style: style.red_border });
    }
  };

  return (
    <div className=" flex flex-col">
      <input
        ref={emailRef}
        onChange={EmailValidation}
        className={`bg-input my-2 p-2 ${EValid.style}`}
        placeholder="email"
      />
      <div className={`bg-input my-2 flex flex-row ${PValid.style}`}>
        <input
          ref={passwordRef}
          onChange={PasswordValidation}
          className="bg-input basis-10/12 p-2"
          placeholder="password"
          type={visible ? "text" : "password"}
        />
        <button className="basis-2/12" onClick={() => setVisible(!visible)}>
          {visible ? "hide" : "show"}
        </button>
      </div>
      <a className="text-end underline" href="http://google.com">
        forgot password?
      </a>
      <button
        disabled={!EValid.valid || !PValid.valid}
        className="md-2 bg-red mt-8 p-2 font-bold"
        onClick={loginAction}
      >
        Login
      </button>
      <p className="my-2 text-center md:hidden">
        Do not have account?
        <Link href="/auth/signup" className="mx-2 font-bold">
          Register
        </Link>
      </p>
    </div>
  );
}
