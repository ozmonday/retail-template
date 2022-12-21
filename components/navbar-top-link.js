import Link from "next/link"
import Icon from "@mdi/react"
import { useState } from "react"
import style from './navbar.module.css'

export default function NavLink({src, icon, name}) {
  const [focus, setFocus] = useState(false)

  return (
    <Link onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)} className="flex flex-row h-full" href={`${src}`}>
      <div className="flex flex-col justify-center h-full">
        { icon !== undefined ? <Icon path={icon} className="mx-1" title={`${name}`} size={0.8} color="#45b6fe"/> : undefined }
      </div>
      <div className="flex flex-col justify-center h-full">
        <p className={`font-bold text-xs ${focus ? style.link_focus : style.link }`}>{name}</p>
      </div>
    </Link>
  )
}