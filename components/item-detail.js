import Image from "next/image";
import { useState } from "react";

import one from "../public/Spedizione.avif";
import two from "../public/Reso.avif";
import three from "../public/Garanzia.avif";
import star from "../public/star_gray.svg";
import share from "../public/share_gray.svg";
import Link from "next/link";
import Select from "./select";

export function ItemDetail({ item }) {
  const [index, setIndex] = useState(0);

  const size = [{ value: 32, label: "XL" }];

  const priceTag = (discont) => {
    if (discont) {
      return (
        <div className="day-item flex flex-row">
          <p className="font-montserrat my-auto text-xl text-gray-400 line-through">
            ${item.price}
          </p>
          <p className="font-montserrat my-auto px-3 text-sm text-red-700">
            -{discont}%
          </p>
          <p className="font-montserrat my-auto text-2xl font-bold text-blue-400">
            ${Math.round(item.price - item.price * (discont / 100))}
          </p>
        </div>
      );
    } else {
      return (
        <p className="font-montserrat text-center text-xl font-bold text-blue-400">
          {price}
        </p>
      );
    }
  };

  return (
    <div className="m-3 grid grid-cols-1 bg-white md:m-5 md:mx-20 md:grid-cols-2">
      <div className="flex flex-col">
        <div className="flex max-h-full flex-col ">
          <img src={item.image} className="h-full w-auto" alt={item.title} />
        </div>
      </div>
      <div className="flex flex-col border-l p-5 md:p-10">
        <p className="font-staatliches text-2xl text-blue-400">{item.title}</p>
        <p className="my-1 text-xs font-normal text-gray-700">
          CODE:<b>MD32423423</b>
        </p>
        {priceTag(23)}
        <hr className="my-3 border-dashed border-blue-400" />
        <div className="mt-5 flex flex-row">
          <p className="font-montserrat my-auto mr-2 text-sm font-bold text-gray-700">
            SIZE:
          </p>
          <Select value={console.log} options={size} />
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
          <button className="flex flex-row text-sm font-normal text-blue-400">
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
        <hr className="my-3 border-dashed border-blue-400" />
        <div className="flex flex-row">
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
        <div className="my-3">
          <p
            className={`font-montserrat font-reguller mx-5 flex text-xs text-gray-700 ${
              index == 0 ? "fade-in" : "hidden"
            }`}
          >
            {item.description}
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

export function BlankItemDetail() {
  return (
    <div className="m-3 grid animate-pulse grid-cols-1 bg-white md:m-5 md:mx-20 md:grid-cols-2">
      <div className="flex h-96 flex-col bg-slate-400"></div>
      <div className="flex flex-col p-5 md:p-10">
        <div className="flex h-6 w-3/4 flex-col rounded bg-slate-400"></div>
        <div className="my-2 flex h-3 w-1/4 flex-col rounded bg-slate-400"></div>
        <div className="flex h-5 w-2/6 flex-col rounded bg-slate-400"></div>
        <hr className="my-3 border-dashed border-blue-400" />
        <div className="mt-5 flex h-6 w-24 flex-col rounded bg-slate-400"></div>
        <div className="my-6 flex h-3 w-2/4 flex-col rounded bg-slate-400"></div>
        <button className="font-montserrat bg-blue-400 p-3 text-sm font-bold text-white">
          ADD TO CART
        </button>
        <div className="my-2 flex flex-row justify-end">
          <div className="flex h-5 w-2/6 flex-col rounded bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
}
