import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebook from "../public/social_media_icon/facebook_white.svg"
import instagram from "../public/social_media_icon/instagram_white.svg"
import twitter from "../public/social_media_icon/twitter_white.svg"
import youtube from "../public/social_media_icon/youtube_white.svg"

export default function Footer() {

  return (
    <footer>
      <div
        className="bg-gray-600 grid grid-cols-3 md:grid-cols-4  grid-row-1 gap-4"
      >
        <div className="col-span-3 md:col-span-1 flex flex-row justify-center">
          <div className="flex flex-col">
          <p className="md:underline text-white m-1 text-center font-montserrat font-bold text-sm md:text-start">FOLLOW US:</p>
          <div className="flex flex-row">
            <button className="m-1">
              <Image  src={facebook} height={30} width={30} alt="facebook"/>
            </button>
            <button className="m-1">
              <Image  src={instagram} height={30} width={30} alt="instagram"/>
            </button>
            <button className="m-1">
              <Image  src={youtube} height={30} width={30} alt="youtube"/>
              </button>
            <button className="m-1">
              <Image  src={twitter} height={30} width={30} alt="twitter"/>
            </button>
          </div>
          </div>
        </div>
        <div className="flex flex-col p-3">
          <p className="hidden md:inline text-white my-2 font-montserrat font-bold text-sm underline">HELP</p>
          <div className="my-2 flex flex-col">
            <Link href="/contacts" className="text-white text-sm">
              Contact us
            </Link>
            <Link href="/contacts" className="text-white text-sm">
              FAQ
            </Link>
            <Link href="/contacts" className="text-white text-sm">
              Consition fo Sale
            </Link>
            <Link href="/contacts" className="text-white text-sm">
              Payment Methods
            </Link>
            <Link href="/contacts" className="text-white text-sm">
              Time of delivery
            </Link>
          </div>
        </div>
        <div className="flex flex-col p-3">
          <p className="hidden md:inline text-white my-2 font-montserrat font-bold text-sm underline">LEGAL AREA</p>
          <div className="my-2 flex flex-col">
            <Link href="/contacts" className="text-white text-sm">
              Cookies
            </Link>
            <Link href="/contacts" className="text-white text-sm">
              Terms of us
            </Link>
            <Link href="/contacts" className="text-white text-sm">
              Privacy
            </Link>
            <Link href="/contacts" className="text-white text-sm">
              Right of Withdrawal
            </Link>
            <Link href="/contacts" className="text-white text-sm">
              Dispute Resolution
            </Link>
          </div>
        </div>
        <div className="flex flex-col p-3">
          <p className="hidden md:inline text-white my-2 font-montserrat font-bold text-sm underline">
            VESPA WORLD
          </p>
          <div className="my-2 flex flex-col">
            <Link href="/contacts" className="text-white text-sm">
              vespa.com
            </Link>
            <Link href="/contacts" className="text-white text-sm">
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
