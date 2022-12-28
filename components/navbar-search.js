import React from "react";
import Icon from "@mdi/react"
import { mdiMagnify } from "@mdi/js"

export default function Search() {
  let search = React.useRef()

  const searcing = () => {
    console.log(search.current.value)
  }
  
  return (
    <div className="flex flex-row h-full">
      <input ref={search} className="p-1.5 my-auto"/>
      <button className="my-auto px-2" onClick={searcing}><Icon path={mdiMagnify}  title="search" size={1.5} color="white"/></button>
    </div>
  )
}