import Image from "next/image";
import { useState } from "react";

import one from "../public/Spedizione.avif";
import two from "../public/Reso.avif";
import three from "../public/Garanzia.avif";

import Link from "next/link";

export default function ItemDetail() {
  const [index, setIndex] = useState(0);

  const state = (index) => {
    switch (index) {
      case 0:
        return <p className="fade-in">ABS Shell. Full Jet helmet, strap with micrometric retention system. Removable, washable and breathable linin. ECE 22.05 approved. Available in 5 sizes (XS-XL). Made in Italy.</p>;
      case 1:
        return <p className="fade-in">Products are normally delivered within 3 working days from receiving the order in Italy and the EU, and within 5 working days for all other destinations. Click here for details on shipping times.</p>;
      case 2:
        return <p className="">You are entitled to withdraw from the contract, without stating a reason, within 14 days from when you or any appointed third-parties (i) receive the product or (ii) if several products on one order are delivered separately, from the date the last product was received. For more details about returns click here</p>;
      default:
        return <p>wrong</p>;
    }
  };

  return (
    <div className="m-3 grid grid-cols-1 bg-white md:m-5 md:mx-16 md:grid-cols-2">
      <div className="flex flex-col bg-red-400">
        <Image />
      </div>
      <div className="flex flex-col p-5 md:p-10">
        <p>Nama</p>
        <p>code</p>
        <p>price</p>
        <hr />
        <p>Size</p>
        <select>
          <option>one</option>
          <option>two</option>
          <option>three</option>
        </select>
        <p className="my-6">Need help? Contact our <Link href="/contacts"> Customer Care </Link></p>
        <button className="bg-blue-400 p-3 fade-in">Add to Cart</button>
        <p className="text-center">(inc. 20% VAT - shipping exp. not included)</p>
        <div className="flex flex-row justify-between">
          <button>add to wishlist</button>
          <button>share</button>
        </div>
        <div className="grid grid-cols-3 my-3">
          <div className="flex flex-col">
            <Image className="mx-auto" src={one} alt="ship" height={80} width={80} />
            <p className="text-center">Fast and traceable shipping</p>
          </div>

          <div className="flex flex-col">
            <Image className="mx-auto" src={two} alt="ship" height={80} width={80} />
            <p className="text-center">14 days to return your order</p>
          </div>

          <div className="flex flex-col">
            <Image className="mx-auto" src={three} alt="ship" height={80} width={80} />
            <p className="text-center">2 year warranty</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-row">
          <button onClick={() => setIndex(0)} className="basis-4/12 m-2">
            DESCRIPTION
          </button>
          <button onClick={() => setIndex(1)} className="basis-4/12 border-l border-r m-2">
            SHIPPING
          </button>
          <button onClick={() => setIndex(2)} className="basis-4/12 m-2">
            RETURN
          </button>
        </div>
        <div>{state(index)}</div>
      </div>
    </div>
  );
}
