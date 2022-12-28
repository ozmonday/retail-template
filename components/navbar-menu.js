import { useState } from "react";
import Image from "next/image";
import menu from "../public/menu-svgrepo-com.svg";

export default function Menu({ children }) {
  const [appear, setAppear] = useState(false);

  return (
    <div className="block h-full">
      <button
        onClick={() => setAppear(!appear)}
        className="flex h-full flex-col justify-center"
      >
        <Image
          src={menu}
          className="mx-auto"
          width={20}
          height={20}
          alt="menu"
        />
      </button>
      <div
        className={` absolute left-0 z-40 bg-white ${
          appear ? "menu_appear" : "menu_disappear"
        }`}
      >
        <div className="flex h-full flex-col justify-center">{children}</div>
      </div>
    </div>
  );
}
