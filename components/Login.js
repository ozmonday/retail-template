import Link from "next/link";
import React from "react";


export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visible, setVisible ]  = React.useState(false);
  let emailRef = React.useRef();
  let passwordRef = React.useRef();

  const loginAction = () => {
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)

    emailRef.current.value = "";
    setEmail(emailRef.current.value)
    passwordRef.current.value = "";
    setPassword(passwordRef.current.value)
  }

  const checkEmail = () => {
    setEmail(emailRef.current.value)
  }

  const checkPassword = () => {
    setPassword(passwordRef.current.value)
  }

  let disable = email === "" || password === ""

  return(
    <div className=" flex flex-col p-8 px-12">
      <input ref={emailRef} onChange={checkEmail} className="my-3 p-2 max-w-sm bg-input" placeholder="Email"/>
      <div className="flex flex-row justify-center bg-input my-3 max-w-sm">
        <input ref={passwordRef} onChange={checkPassword} className=" w-full p-2 bg-input " placeholder="Password" type={visible ? "text" : "password"}/>
        <button className="w-20" onClick={() => setVisible(!visible)} >{visible ? "hide" : "show"}</button>
      </div>

      <div className="flex flex-row justify-end">
        <a className="underline " href="http://google.com" >forgot password?</a>
      </div>

      <div className="flex flex-row justify-start my-9">
        <button disabled={disable} className="w-full p-3 px-5 bg-red" onClick={loginAction}>Login</button>
      </div>
      <div className="flex flex-row justify-center md:hidden">
        <p>Do not have account?</p>
        <Link href="/auth/signup" className="font-bold mx-2">Register</Link>
      </div>
    </div>
  )
}
