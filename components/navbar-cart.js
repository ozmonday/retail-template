import { useState } from "react";
import Image from "next/image";
import cart from "../public/basket_white.svg"


export default function Cart() {
  const [appear, setAppear] = useState(false);

  return (
    <span className="relative h-full">
      <button onClick={() => setAppear(!appear)} className="flex flex-col justify-center h-full">
        <Image className="mx-auto" src={cart} width={28} height={28} alt="cart"/>
        <p className="text-white font-montserrat text-xs font-medium">CART</p>
      </button>
      <div className={`absolute right-0 m-1 h-full bg-white ${appear? "cart_appear" : "cart_disappear"}`}>
        <div className="flex flex-col h-full justify-center">
          items
        </div>
      </div>
    </span>
  )
}