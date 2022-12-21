import React, { useState } from "react";
import style from './navbar.module.css'


export default function Catalog({name}) {
  const [appear, setAppear] = useState(false);

  return (
    <div className="hidden md:flex md:flex-col justify-center">
    <span className="h-full" onMouseEnter={() => setAppear(true)} onMouseLeave={() => setAppear(false)}>
      <button className={`h-full flex px-4`}>
        <div className={`flex flex-col justify-center`}>
          <p className="c-white text-sm">{name}</p>
          <div className="flex flex-row w-full justify-center">
            <hr className={`${appear ? style.line_after : style.line_before}`}/>
          </div>
        </div>
      </button>
      <div className={`absolute justify-center left-0 bg-white z-40 w-screen p-3 ${appear? style.catalog_appear : style.catalog_disappear}`}>
        <div>item catalog</div>
      </div>
    </span>
    </div>
  )
}