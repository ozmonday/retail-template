import Link from "next/link";
import React from "react";
import Catalog from "./catalog";
import NavbarTop from "./navbar-top";


export default function Navbar({props}) {

  return (
    <div className="flex flex-col relative z-20">
      <NavbarTop/>
      <div className="flex flex-row justify-center bg-yellow">
        <button className="md:hidden m-2.5">menu</button>
        <div className="m-2.5">
          logo
        </div>
        <Catalog/>
        <div className="m-2.5">
          search
        </div>
        <div className="hidden md:flex m-2.5">
          chart
        </div>
      </div>
    </div>
  )
}






