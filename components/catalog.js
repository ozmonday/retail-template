import React, { useState } from "react";
import style from './navbar.module.css'

export default function Catalog() {

  const [appear, setAppear] = useState(false);
  const catalog = () => {
    setAppear(!appear)
  }

  return (
    <React.Fragment>
    <span onMouseEnter={catalog} onMouseLeave={catalog}>
      <button className={`hidden md:flex m-2.5`}>Catagory Name</button>
      <div className={`absolute justify-center left-0 bg-grey z-40 w-screen p-3 ${appear? style.catalog_appear : style.catalog_disappear}`}>
        <div>item catalog</div>
      </div>
    </span>
    </React.Fragment>
  )
}