import { useState } from "react";
import Image from "next/image";
import cart from "../public/supermarket-basket-svgrepo-com.svg"


export default function Cart() {
  const [appear, setAppear] = useState(false);

  return (
    <div className="relative h-full">
      <button onClick={() => setAppear(!appear)} className="flex flex-col justify-center h-full">
        <Image src={cart} width={28} height={28} alt="cart"/>
        <p className="c-white mx-auto font-bold text-xs">CART</p>
      </button>
      <div className={` absolute right-0 m-1 bg-white z-40 ${appear? "cart_appear" : "cart_disappear"}`}>
        <div className="flex flex-col h-full justify-center">
          items
        </div>
      </div>
    </div>
  )
}