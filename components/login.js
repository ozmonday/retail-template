import Link from "next/link";
import Router from "next/router";
import React from "react";
import { setCookie } from "../utils/utils";

function checkEmail(value) {
  return value == "user" ? true : false;
}

function checkPassword(value) {
  return value == "root" ? true : false;
}

export default function Login() {
  const [visible, setVisible] = React.useState();
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState();

  const loginAction = () => {
    Router.push("/");
    setCookie("token", "user", 7);
  };

  const EmailValidation = () => {
    let email = document.getElementById("email");
    console.log(email.value)
    if (checkEmail(email.value)) {
      email.style.outline = "1px solid #dcdcdc"
      setEmail(true)
    } else {
      email.style.outline = "1px solid red"
      setEmail(false)
    }
  };

  const PasswordValidation = () => {
    let password = document.getElementById("password");
    let border = document.getElementById("password-border");
    console.log(password.value)
    if (checkPassword(password.value)) {
      border.style.outline = "1px solid #dcdcdc"
      setPassword(true)
    } else {
      border.style.outline = "1px solid red"
      setPassword(false)
    }
  };

  return (
    <div className=" flex flex-col">
      <input
        id="email"
        onChange={EmailValidation}
        className={`bg-input my-2 p-2`}
        placeholder="email"
      />
      <div id="password-border" className={`bg-input my-2 flex flex-row`}>
        <input
          id="password"
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
        disabled={!email || !password}
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
