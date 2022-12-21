
import Link from "next/link";
import React from "react";
import DropDown from "./footer-dropdown";

export default function Footer() {

  const [state, setState] = React.useState([])

  return(
    <React.Fragment>
      <div className={`flex flex-col p-5 md:flex-row w-full md:px-10 bg-grey md:h-52 h-52`}>
        <div className={`flex flex-col md:basis-3/12`}>
          <p className="font-bold underline c-white text-sm my-2">HELP</p>
          <div className="flex flex-col my-2">
            <Link href="/contacts" className="c-white text-sm">Contact us</Link>
            <Link href="/contacts" className="c-white text-sm">FAQ</Link>
            <Link href="/contacts" className="c-white text-sm">Consition fo Sale</Link>
            <Link href="/contacts" className="c-white text-sm">Payment Methods</Link>
            <Link href="/contacts" className="c-white text-sm">Time of delivery</Link>
          </div>
        </div>
        <div className={`flex flex-col md:basis-3/12`}>
          <p className="font-bold underline c-white text-sm my-2">LEGAL AREA</p>
          <div className="flex flex-col my-2">
            <Link href="/contacts" className="c-white text-sm">Cookies</Link>
            <Link href="/contacts" className="c-white text-sm">Terms of us</Link>
            <Link href="/contacts" className="c-white text-sm">Privacy</Link>
            <Link href="/contacts" className="c-white text-sm">Right of Withdrawal</Link>
            <Link href="/contacts" className="c-white text-sm">Dispute Resolution</Link>
          </div>
        </div>
        <div className={`flex flex-col md:basis-3/12`}>
          <p className="font-bold underline c-white text-sm my-2">VESPA WORLD</p>
          <div className="flex flex-col my-2">
            <Link href="/contacts" className="c-white text-sm">vespa.com</Link>
            <Link href="/contacts" className="c-white text-sm">Community</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full bg-white justify-center">
        copy right
      </div>
    </React.Fragment>

  )
}