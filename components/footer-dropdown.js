import React from "react";
import Icon from "@mdi/react";
import { mdiMinus, mdiPlus } from "@mdi/js"; 
import style from "./footer.module.css";

export default function DropDown({ state, setState, name,children}) {
  const [appear, setAppear] = React.useState(false)

  const click = () => {
    setAppear(!appear)
  }
  return (
     <React.Fragment>
      <div className={`flex flex-col md:basis-3/12 h-10 justify-center bg-red`}>
        <button onClick={click} className={`flex flex-row  justify-between`}>
          <p className="font-bold">{name}</p>
          <div className="flex flex-col justify-center">
            <Icon path={appear ? mdiMinus : mdiPlus} title="minus" size={1} color="yellow"/>
          </div>
        </button> 
      </div>
      <div className={`flex flex-col bg-yellow ${appear ? style.link_appear : style.link_disappear}`}>
        {children}
      </div>
      <hr/>
     </React.Fragment>
  )
}