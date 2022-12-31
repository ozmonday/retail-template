import Catalog from "./navbar-catalog";
import NavTop from "./navbar-top";
import Search from "./navbar-search";
import Cart from "./navbar-cart";
import Menu from "./navbar-menu";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

export default function Nav({ props }) {
  return (
    <nav>
      <NavTop state={false} />
      <div className="flex h-16 flex-row justify-between px-6 md:h-20 md:px-12 bg-gray-700">
        <div className="flex flex-col justify-center md:hidden">
          <Menu>satu menu</Menu>
        </div>
        <div className="flex flex-col justify-center">
          <p>logo</p>
        </div>
        <div className="flex flex-col justify-center md:hidden">
          <button className="flex h-full flex-col justify-center">
            <Icon path={mdiMagnify} title="search" size={1.2} color="white" />
          </button>
        </div>
        <ul className="hidden lg:flex lg:flex-row">
          <Catalog name="HELMETS" />
          <Catalog name="CLOTHING" />
          <Catalog name="GADGETS" />
          <Catalog name="VEHICLE ACCESSORIES" />
          <Catalog name="VESTPA 946" />
          <Catalog name="COLLECTIONS" />
        </ul>
        <div className="hidden md:flex md:basis-3/12 md:flex-row md:justify-between">
          <Search />
          <Cart />
        </div>
      </div>
      <hr className="hidden h-2 w-full border-none bg-yellow-400 md:flex" />
    </nav>
  );
}
