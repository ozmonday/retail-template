import Image from "next/image";
import heml from "../public/606901mmg_2.avif";

export default function Item({ price, discont, name }) {
  const promo = (d) => {
    if (d) {
      return (
        <p className="absolute top-2 left-0 z-30 rounded-r-full bg-red-400 p-2 md:p-3 text-xs">
          PROMO
        </p>
      );
    }
  };

  const tag = (d) => {
    if (d) {
      return (
        <div className="flex flex-row justify-center">
          <p className="px-1 text-gray-400 line-through">${price}</p>
          <p className="my-auto px-1 text-xs text-red-700">{discont}%</p>
          <p className="px-1 font-bold text-blue-400">
            ${price - price * (discont / 100)}
          </p>
        </div>
      );
    } else {
      return <p className="text-center">{price}</p>;
    }
  };
  return (
    <div className="flex w-full flex-col bg-white">
      <div className="relative w-full">
        <Image src={heml} alt="helm" width="100%" height="auto" />
        {promo(discont)}
      </div>
      <div className="p-3">
        <p className="text-center">{name}</p>
        {tag(discont)}
      </div>
    </div>
  );
}
