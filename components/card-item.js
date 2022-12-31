import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import heml from "../public/606901mmg_2.avif";
import strblue from "../public/star-blue.svg";
import strwhite from "../public/star-white.svg";

export default function Item({ price, discont, name }) {
  const [wishlist, setWishlist] = useState(false);
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
        <p className="absolute top-2 left-0 z-30 rounded-r-full bg-green-300 p-2 text-xs text-white md:p-3 ">
          PROMO
        </p>
      );
    }
  };

  const tag = (d) => {
    if (d) {
      return (
        <div className="day-item flex flex-row justify-center">
          <p className="my-auto px-1 text-gray-400 line-through">${price}</p>
          <p className="my-auto px-1 text-xs text-red-700">-{discont}%</p>
          <p className="my-auto px-1 text-xl font-bold text-blue-400">
            ${price - price * (discont / 100)}
          </p>
        </div>
      );
    } else {
      return <p className="text-center">{price}</p>;
    }
  };

  return (
    <li className="flex w-full flex-col p-5">
      <div className="bg-white">
        <div className="relative w-full">
          <Image src={heml} alt="helm" width="100%" height="auto" />
          {promo(discont)}
          <button
            ref={wishlst}
            onClick={() => setWishlist(!wishlist)}
            id="wishlist"
            className="absolute right-2 bottom-5 hidden rounded-full p-0.5 md:flex md:flex-row"
          >
            <p ref={wishtext} id="wish-text" className="my-auto text-xs">
              WISHLIST
            </p>
            <div ref={wishcover} className="rounded-full p-1">
              <Image
                src={wishlist ? strwhite : strblue}
                width={22}
                height={22}
                alt="wish"
              />
            </div>
          </button>
        </div>

        <div className="p-2">
          <p className="mb-2 text-center text-sm">{name.toUpperCase()}</p>
          {tag(discont)}
        </div>
        <div className="bg-blue-400 p-2">
          <p className="text-center text-sm text-white">BUY NOW</p>
        </div>
      </div>
    </li>
  );
}
