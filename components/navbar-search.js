import React from "react";
import Image from "next/image";
import search from "../public/search_white.svg";

export default function Search() {
  let src = React.useRef();

  const searcing = () => {
    console.log(src.current.value);
  };

  return (
    <div className="flex h-full flex-row">
      <input ref={src} className="my-auto p-1.5" />
      <button className="my-auto px-2" onClick={searcing}>
        <Image src={search} width={35} height={35} alt="search" />
      </button>
    </div>
  );
}
