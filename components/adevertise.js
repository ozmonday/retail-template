import React from "react";
import one from "../public/helm/one.avif";
import two from "../public/helm/two.avif";
import three from "../public/helm/three.avif";
import four from "../public/helm/four.avif";
import five from "../public/helm/five.avif";
import arrow_left from "../public/arrow_circle_left_white.svg";
import arrow_right from "../public/arrow_circle_right_white.svg";
import Image from "next/image";

export function AdvertiseSessionOne() {
  return (

      <div className="grid grid-cols-1 gap-3  md:grid-cols-4 md:grid-rows-2 py-3">
        <div className="bg-red-400">1</div>
        <div className="bg-red-400 md:col-span-2 md:row-span-2">2</div>
        <div className="bg-red-400 md:row-span-2">3</div>
        <div className="bg-red-400">4</div>
      </div>
  );
}

export function AdvertiseSessionTwo() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-3 py-3 md:grid-cols-2">
      <div className="bg-red-400">1</div>
      <div className="bg-red-400">2</div>
    </div>
  );
}
