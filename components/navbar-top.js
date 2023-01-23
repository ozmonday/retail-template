import { useEffect } from "react";
import Router from "next/router";
import phone from "../public/phone_blue.svg"
import person from "../public/person_blue.svg"
import favorite from "../public/favorite_blue.svg"
import Image from "next/image";


function NavLink({ src, icon, title }) {
  const icn = (icon) => {
    if (icon) {
      return <Image alt={title} src={icon} height={20} width={20}/>
    }
  };

  const push = (src) => {
    Router.push(src);
    return;
  };

  return (
    <button className="flex h-full flex-row px-1.5" onClick={() => push(src)}>
      <div className="mx-1 flex h-full flex-col justify-center">
        {icn(icon)}
      </div>
      <div className="flex h-full flex-col justify-center">
        <p className="link font-montserrat text-xs font-medium font-reguller">{title}</p>
      </div>
    </button>
  );
}

export default function NavTop({ state }) {
  const auth = (state) => {
    if (state) {
      return (
        <NavLink src="/dashboard/profile" icon={person} title="PROFILE" />
      );
    } else {
      return (
        <NavLink src="/auth/signin" icon={person} title="LOGIN/REGISTER" />
      );
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let e = document.getElementById("nav-top");
      if (window.scrollY >= 20) {
        e.style.height = 0;
      } else {
        e.style.height = "1.5rem";
      }
    });
  });

  return (
    <div id="nav-top" className="hidden md:flex md:w-full md:flex-row md:justify-between">
      <NavLink src="/" title="VESPA STORE" />
      <ul className="flex flex-row justify-end">
        <li>{auth(state)}</li>
        <li>
          <NavLink src="/dashboard/wishlist" icon={favorite} title="WISHLIST" />
        </li>
        <li>
          <NavLink src="/contacts" icon={phone} title="CUSTOMER CARE" />
        </li>
      </ul>
    </div>
  );
}
