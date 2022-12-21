import React from "react";
import Icon from "@mdi/react"
import { mdiMagnify } from "@mdi/js"

export default function Search() {
  let search = React.useRef()

  const searcing = () => {
    console.log(search.current.value)
  }
  
  return (
    <div className="hidden md:flex md:flex-row">
      <div className="flex flex-col justify-center">
        <input ref={search} className="p-1.5"/>
      </div>
      <div className="flex flex-col justify-center px-2">
        <button onClick={searcing}><Icon path={mdiMagnify}  title="search" size={1.5} color="white"/></button>
      </div>
    </div>
  )
}