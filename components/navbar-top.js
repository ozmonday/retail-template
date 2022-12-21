import Link from "next/link"
import { mdiPhone, mdiAccount, mdiHeart } from "@mdi/js"
import Icon from "@mdi/react"
import NavLink from "./navbar-top-link"




export default function NavbarTop({state}) {
  return (
    <div className="hidden md:flex flex-row justify-between p-1.5 bg-white" >
      <div className="flex flex-row">
        <NavLink src="/dashboard/wishlist" name="VESPA STORE"/>
      </div>
      <div className="flex flex-row">
        <div className="px-1.5">
          {state ? <NavLink src="/dashboard/profile" icon={mdiAccount} name="PROFILE"/> : <NavLink src="/auth/signin" icon={mdiAccount} name="LOGIN/REGISTER"/>}
        </div>
        <div className="px-1.5">
          <NavLink src="/dashboard/wishlist" icon={mdiHeart} name="WISHLIST"/>
        </div>
        <div className="px-1.5">
          <NavLink src="/contacts" icon={mdiPhone} name="CUSTOMER CARE"/>
        </div>
      </div>
    </div>
  )
}