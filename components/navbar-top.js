import { mdiPhone, mdiAccount, mdiHeart } from "@mdi/js";
import Link from "next/link";
import Icon from "@mdi/react";
import { useEffect } from "react";
import Router from "next/router";

function NavLink({ src, icon, title }) {
  const icn = (icon) => {
    if (icon) {
      return <Icon path={icon} title={`${title}`} size={0.8} color="#45b6fe" />;
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
        <p className={`link text-xs font-bold`}>{title}</p>
      </div>
    </button>
  );
}

export default function NavTop({ state }) {
  const auth = (state) => {
    if (state) {
      return (
        <NavLink src="/dashboard/profile" icon={mdiAccount} title="PROFILE" />
      );
    } else {
      return (
        <NavLink src="/auth/signin" icon={mdiAccount} title="LOGIN/REGISTER" />
      );
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      let e = document.getElementById("nav-top");
      if (window.scrollY >= 20) {
        e.style.height = 0;
      } else {
        e.style.height = "1.5rem";
      }
    });
  });

  return (
    <div id="nav-top" className="hidden md:flex md:w-screen md:flex-row md:justify-between">
      <NavLink src="/" title="VESPA STORE" />
      <ul className="flex flex-row justify-end">
        <li>{auth(state)}</li>
        <li>
          <NavLink src="/dashboard/wishlist" icon={mdiHeart} title="WISHLIST" />
        </li>
        <li>
          <NavLink src="/contacts" icon={mdiPhone} title="CUSTOMER CARE" />
        </li>
      </ul>
    </div>
  );
}
