import Image from "next/image";
import Link from "next/link";
import cart from "../public/cart/icons8-basket-48.png"

export default function Cart() {
  return (
    <Link href="/dashboard/cart" className="hidden md:flex md:flex-col justify-center">
      <div className="flex flex-row justify-center" >
        <Image src={cart} width={35} height={35} alt="cart"/>
      </div>
      <p className="flex felx-row justify-center c-white font-bold text-xs">CART</p>
    </Link>
  )
}