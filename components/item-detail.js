import Image from "next/image";
import { useState } from "react";

import one from "../public/Spedizione.avif";
import two from "../public/Reso.avif";
import three from "../public/Garanzia.avif";
import star from "../public/star_gray.svg";
import share from "../public/share_gray.svg";

import Link from "next/link";

export default function ItemDetail() {
  const [index, setIndex] = useState(0);

  return (
    <div className="m-3 grid grid-cols-1 bg-white md:m-5 md:mx-20 md:grid-cols-2">
      <div className="flex flex-col">
        <Image />
      </div>
      <div className="flex flex-col p-5 md:p-10 border-l">
        <p className="font-staatliches text-2xl text-blue-400">Nama</p>
        <p className="my-1 text-xs font-normal text-gray-700">
          CODE:<b>MD32423423</b>
        </p>
        <div className=" day-item my-3 flex flex-row">
          <p className="font-montserrat my-auto text-xl  text-gray-400 line-through">
            ${12}
          </p>
          <p className="font-montserrat my-auto px-1 text-lg text-red-700">
            -{20}%
          </p>
          <p className="font-montserrat my-auto text-2xl font-bold text-blue-400">
            ${12 - 12 * (20 / 100)}
          </p>
        </div>
        <hr className="border-dashed border-blue-400" />
        <div className="mt-5 flex flex-row">
          <p className="font-montserrat my-auto text-sm font-bold text-gray-700">
            SIZE:
          </p>
          <select className="mx-2 p-2">
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select>
        </div>
        <p className="font-montserrat my-6 text-sm font-normal text-gray-700">
          Need help? Contact our{" "}
          <Link href="/contacts" className="font-bold underline">
            {" "}
            Customer Care{" "}
          </Link>
        </p>
        <button className="font-montserrat bg-blue-400 p-3 text-sm font-bold text-white">
          ADD TO CART
        </button>
        <p className="font-montserrat m-1 text-center  text-xs text-gray-700">
          (inc. 20% VAT - shipping exp. not included)
        </p>
        <div className="my-2 flex flex-row justify-end">
          <button className="flex flex-row text-sm font-normal text-blue-400">
            <Image
              src={star}
              height={15}
              width={15}
              alt="wishlist"
              className="m-2"
            />
            <p className="my-auto">ADD TO WISHLIST</p>
          </button>
          <button className="text-sm flex flex-row font-normal text-blue-400">
            <Image
              src={share}
              height={15}
              width={15}
              alt="share"
              className="m-2"
            />
            <p className="my-auto">SHARE</p>
          </button>
        </div>
        <div className="my-5 grid grid-cols-3">
          <div className="flex flex-col">
            <Image
              className="mx-auto"
              src={one}
              alt="ship"
              height={80}
              width={80}
            />
            <p className="font-montserrat font-reguller text-center text-xs text-gray-700">
              Fast and traceable <br /> shipping
            </p>
          </div>

          <div className="flex flex-col">
            <Image
              className="mx-auto"
              src={two}
              alt="ship"
              height={80}
              width={80}
            />
            <p className="font-montserrat font-reguller text-center text-xs text-gray-700">
              14 days to return <br /> your order
            </p>
          </div>

          <div className="flex flex-col">
            <Image
              className="mx-auto"
              src={three}
              alt="ship"
              height={80}
              width={80}
            />
            <p className="font-montserrat font-reguller text-center text-xs text-gray-700">
              2 year warranty
            </p>
          </div>
        </div>
        <hr className="border-dashed border-blue-400" />
        <div className="my-3 flex flex-row">
          <button
            onClick={() => setIndex(0)}
            className={`font-montserrat m-1 basis-4/12 text-xs ${
              index == 0
                ? "font-bold text-blue-400"
                : "font-reguller text-gray-700"
            }`}
          >
            DESCRIPTION
          </button>
          <button
            onClick={() => setIndex(1)}
            className={`font-montserrat m-1 basis-4/12 border-l border-r border-blue-400 text-xs ${
              index == 1
                ? "font-bold text-blue-400"
                : "font-reguller text-gray-700"
            }`}
          >
            SHIPPING
          </button>
          <button
            onClick={() => setIndex(2)}
            className={`font-montserrat m-1 basis-4/12 text-xs ${
              index == 2
                ? "font-bold text-blue-400"
                : "font-reguller text-gray-700"
            }`}
          >
            RETURN
          </button>
        </div>
        <div>
          <p
            className={`font-montserrat font-reguller mx-5 flex text-xs text-gray-700 ${
              index == 0 ? "fade-in" : "hidden"
            }`}
          >
            ABS Shell. Full Jet helmet, strap with micrometric retention system.
            Removable, washable and breathable linin. ECE 22.05 approved.
            Available in 5 sizes (XS-XL). Made in Italy.
          </p>
          <p
            className={`font-montserrat font-reguller mx-5 flex text-xs text-gray-700 ${
              index == 1 ? "fade-in" : "hidden"
            }`}
          >
            Products are normally delivered within 3 working days from receiving
            the order in Italy and the EU, and within 5 working days for all
            other destinations. Click here for details on shipping times.
          </p>
          <p
            className={`font-montserrat font-reguller mx-5 flex text-xs text-gray-700 ${
              index == 2 ? "fade-in" : "hidden"
            }`}
          >
            You are entitled to withdraw from the contract, without stating a
            reason, within 14 days from when you or any appointed third-parties
            (i) receive the product or (ii) if several products on one order are
            delivered separately, from the date the last product was received.
            For more details about returns click here
          </p>
        </div>
      </div>
    </div>
  );
}
