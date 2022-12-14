import Link from "next/link";
import React from "react";

class NavBar extends React.Component {
  authCheck() {
    return false;
  }
  
  render() {
    return (
    <div className="flex flex-col relative z-20">
      <div className="flex flex-row justify-center bg-red p-1.5" >
        <div className="px-1.5">
          { false ? <Link href="/dashboard/profile" >PROFILE</Link> : <Link href="/auth/signin" >LOGIN/REGISTER</Link>}
        </div>
        <div className="px-1.5">
          <Link href="/dashboard/wishlist">WISHLIST</Link>
        </div>
        <div className="px-1.5">
          <Link href="/contacts">CUSTOMER CARE</Link>
        </div>
      </div>
      <div className="flex flex-row justify-center bg-yellow p-3">
        <div className="m-2.5">
          logo
        </div>
        <div className="m-2.5">
          catalog
        </div>
        <div className="m-2.5">
          search
        </div>
        <div className="m-2.5">
          chart
        </div>
      </div>
    </div>
  )}
}


export default NavBar;


