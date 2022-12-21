
import React from "react";
import Catalog from "./navbar-catalog";
import NavbarTop from "./navbar-top";
import Search from "./navbar-search";
import Cart from "./navbar-cart";
import style from './navbar.module.css'

export default function Navbar({props}) {


  return (
    <div className="fixed z-40 w-screen t-0">
      <NavbarTop state={true}/>
      <div className="flex flex-row h-12 md:h-20 justify-between md:px-12 bg-grey transition-all">
        <div className="flex flex-col justify-center md:hidden">
          <button>menu</button>
        </div>
        <div className="flex flex-col justify-center">
          <p>logo</p>
        </div>
        <div className="flex flex-col justify-center md:hidden">
          <p>search</p>
        </div>
        <div className="flex flex-row">
          <Catalog name="HELMETS"/>
          <Catalog name="CLOTHING"/>
          <Catalog name="GADGETS"/>
          <Catalog name="VEHICLE ACCESSORIES"/>
          <Catalog name="VESTPA 946"/>
          <Catalog name="COLLECTIONS"/>
        </div>
        <div className="flex flex-row justify-between basis-3/12">
          <Search/>
          <Cart/>
        </div>
      </div>
      <hr className={`hidden md:flex ${style.line_bottom}`}/>
    </div>
  )
}






