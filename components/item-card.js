import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import star_blue from "../public/star_blue.svg";
import star_white from "../public/star_white.svg";

export function Item({ id, price, discont, name, picture }) {
  const [wishlist, setWishlist] = useState(false);
  const route = useRouter();

  let wishlst = useRef();
  let wishtext = useRef();
  let wishcover = useRef();

  useEffect(() => {
    if (wishlist) {
      wishlst.current.style.backgroundColor = "white";
      wishtext.current.style.color = "#60A5FA";
      wishcover.current.style.backgroundColor = "#60A5FA";
    } else {
      wishlst.current.style.backgroundColor = "#60A5FA";
      wishtext.current.style.color = "white";
      wishcover.current.style.backgroundColor = "white";
    }
  });

  const promo = (d) => {
    if (d) {
      return (
        <p className="font-montserrat absolute top-2 left-0 z-20 rounded-r-full bg-green-300 p-2 text-xs text-white md:p-3 ">
          PROMO
        </p>
      );
    }
  };

  const priceTag = (d) => {
    if (d) {
      return (
        <div className="day-item flex flex-row justify-center">
          <p className="font-montserrat my-auto px-1 text-gray-400 line-through">
            ${price}
          </p>
          <p className="font-montserrat my-auto px-1 text-xs text-red-700">
            -{discont}%
          </p>
          <p className="font-montserrat my-auto px-1 text-xl font-bold text-blue-400">
            ${Math.round(price - price * (discont / 100))}
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

  const openProduct = (id) => {
    route.push(`/product/${id}`);
  };

  return (
    <li className="p-2 md:p-4">
      <div
        onClick={() => openProduct(id)}
        className="flex h-full flex-col bg-white"
      >
        <div className="relative w-full">
          <img
            src={picture}
            className="mx-auto h-44 w-auto md:h-64 text-center"
            alt={name}
          />
          {promo(discont)}
          <button
            ref={wishlst}
            onClick={() => setWishlist(!wishlist)}
            id="wishlist"
            className="absolute right-2 bottom-5 hidden rounded-full p-0.5 md:flex md:flex-row"
          >
            <p
              ref={wishtext}
              id="wish-text"
              className="font-montserrat my-auto text-xs"
            >
              WISHLIST
            </p>
            <div ref={wishcover} className="rounded-full p-1">
              <Image
                src={wishlist ? star_white : star_blue}
                width={22}
                height={22}
                alt="wish"
              />
            </div>
          </button>
        </div>
        <div className="h-full p-2">
          <p className="font-montserrat mb-2 text-center text-xs font-normal">
            {name.toUpperCase()}
          </p>
          {priceTag(discont)}
        </div>
        <div className="bg-blue-400 p-2">
          <p className="font-montserrat text-center text-sm text-white">
            BUY NOW
          </p>
        </div>
      </div>
    </li>
  );
}

export function BlankItem() {
  return (
    <li className="p-2 md:p-4">
      <div className="flex h-full animate-pulse flex-col bg-white">
        <div className="h-44 w-full bg-slate-400 md:h-64"></div>
        <div className="py-6">
          <div className="mx-auto mb-2 h-3 w-3/4 rounded bg-slate-400"></div>
          <div className="mx-auto h-4 w-2/4 rounded bg-slate-400"></div>
        </div>
        <div className="bg-blue-400 p-2">
          <p className="font-montserrat text-center text-sm text-white">
            BUY NOW
          </p>
        </div>
      </div>
    </li>
  );
}
