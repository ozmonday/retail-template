import { useState } from "react";
import Image from "next/image";
import cart from "../public/basket_white.svg"
import test from "../public/helm/four.avif"


export function CartItem() {
  return <div className="flex flex-row bg-red-400">
    <div className="basis-3/12 flex flex-row justify-center">
      <Image src={test} className="w-24 h-24"/>
    </div>
    <div className="flex flex-col basis-7/12 justify-center">
      <p>product name</p>
      <p>quantity</p>
      <p>price</p>
    </div>
    <div className="flex flex-col basis-2/12 justify-center">
      <p>delete</p>
      <p>edit</p>
    </div>
  </div>
}


export default function Cart() {
  const [items, setItems] = useState([
    {
      product :  {
        name: "helm",
        price: 12
      },
      quantity: 1,
    }
  ]);
  const [appear, setAppear] = useState(false);


  return (
    <span className="h-full">
      <button onClick={() => setAppear(!appear)} className="flex flex-col justify-center h-full">
        <Image className="mx-auto" src={cart} width={28} height={28} alt="cart"/>
        <p className="text-white font-montserrat text-xs font-medium">CART</p>
      </button>
      <div className={`absolute right-0 m-1 bg-white z-50 transition-all ${appear? "cart_appear fade-in" : "cart_disappear"}`}>
        <div className="flex flex-col justify-center">
          <p className="text-center p-5">recenly add items</p>
          <hr/>
          <CartItem/>
          <p className="text-center">you don't have items in the cart</p>
        </div>
      </div>
    </span>
  )
}