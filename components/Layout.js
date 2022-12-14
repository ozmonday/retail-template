import React from "react";
import NavBar from "./NavBar";

export default function Layout({children}) {
  return (
    <React.Fragment>
      <NavBar/>
      <main className="w-screen">{children}</main>
    </React.Fragment>
  )
}