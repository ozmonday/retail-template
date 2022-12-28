import Link from "next/link";
import React from "react";


export default function Footer() {

  return (
    <footer>
      <div
        className={`bg-grey flex h-52 w-full flex-col p-5 md:h-52 md:flex-row md:px-10`}
      >
        <div className={`flex flex-col md:basis-3/12`}>
          <p className="c-white my-2 text-sm font-bold underline">HELP</p>
          <div className="my-2 flex flex-col">
            <Link href="/contacts" className="c-white text-sm">
              Contact us
            </Link>
            <Link href="/contacts" className="c-white text-sm">
              FAQ
            </Link>
            <Link href="/contacts" className="c-white text-sm">
              Consition fo Sale
            </Link>
            <Link href="/contacts" className="c-white text-sm">
              Payment Methods
            </Link>
            <Link href="/contacts" className="c-white text-sm">
              Time of delivery
            </Link>
          </div>
        </div>
        <div className={`flex flex-col md:basis-3/12`}>
          <p className="c-white my-2 text-sm font-bold underline">LEGAL AREA</p>
          <div className="my-2 flex flex-col">
            <Link href="/contacts" className="c-white text-sm">
              Cookies
            </Link>
            <Link href="/contacts" className="c-white text-sm">
              Terms of us
            </Link>
            <Link href="/contacts" className="c-white text-sm">
              Privacy
            </Link>
            <Link href="/contacts" className="c-white text-sm">
              Right of Withdrawal
            </Link>
            <Link href="/contacts" className="c-white text-sm">
              Dispute Resolution
            </Link>
          </div>
        </div>
        <div className={`flex flex-col md:basis-3/12`}>
          <p className="c-white my-2 text-sm font-bold underline">
            VESPA WORLD
          </p>
          <div className="my-2 flex flex-col">
            <Link href="/contacts" className="c-white text-sm">
              vespa.com
            </Link>
            <Link href="/contacts" className="c-white text-sm">
              Community
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row justify-center bg-white">
        copy right
      </div>
    </footer>
  );
}
