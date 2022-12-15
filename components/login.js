import Link from "next/link";
import Router from "next/router";
import React, { useEffect } from "react";
import style from './login.module.css'

import { setCookie } from "../utils/utils";


export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visible, setVisible ]  = React.useState(false);
  const [passBoder, setPassBorder] = React.useState(style.pass_border)
  const [emailBorder, setEmailBorder] = React.useState(style.pass_border)
  
  let disable = email === "" || password === ""

  let emailRef = React.useRef();
  let passwordRef = React.useRef();
  
  useEffect(()=> setEmail(emailRef.current.value), [])
  useEffect(()=> setPassword(passwordRef.current.value), [])

  const loginAction = () => {
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
    setEmail("")
    setPassword("")
    Router.push("/")
    setCookie("token","user", 7)

  }

  const checkEmail = () => {
    if (emailRef.current.value === "user") {
      setEmailBorder(style.pass_border)
      setEmail(emailRef.current.value)
    } else {
      setEmailBorder(style.red_border)
      setEmail("")
    }
  }

  const checkPassword = () => {
    if (passwordRef.current.value === "root") {
      setPassBorder(style.pass_border)
      setPassword(passwordRef.current.value)
    } else {
      setPassBorder(style.red_border)
      setPassword("")
    }
  }

  return(
    <div className=" flex flex-col p-8 px-12">
      <input ref={emailRef} onChange={checkEmail} className={`my-3 p-2 max-w-sm bg-input ${emailBorder}`} placeholder="Email"/>
      
      <div className={`flex flex-row justify-end bg-input my-3 max-w-sm ${passBoder}`}>
        <input ref={passwordRef} onChange={checkPassword} className=" w-full p-2 bg-input" placeholder="Password" type={visible ? "text" : "password"}/>
        <button className="w-20" onClick={() => setVisible(!visible)} >{visible ? "hide" : "show"}</button>
      </div>

      <div className="flex flex-row justify-end">
        <a className="underline " href="http://google.com" >forgot password?</a>
      </div>

      <div className="flex flex-row justify-start my-9">
        <button disabled={disable} className="w-full p-2 px-5 bg-red font-bold" onClick={loginAction}>Login</button>
      </div>
      
      <div className="flex flex-row justify-center md:hidden">
        <p>Do not have account?</p>
        <Link href="/auth/signup" className="font-bold mx-2">Register</Link>
      </div>
    </div>
  )
}
