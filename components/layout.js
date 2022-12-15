import React from "react";
import Navbar from "./navbar";

export default function Layout({children}) {
  return (
    <React.Fragment>
      <Navbar/>
      <main className="w-screen">{children}</main>
    </React.Fragment>
  )
}