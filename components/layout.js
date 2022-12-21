import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({children}) {
  return (
    <React.Fragment>
     
        <Navbar/>
        <main className="w-screen layout">{children}</main>
        <Footer/>

    </React.Fragment>
  )
}