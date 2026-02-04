import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <section className="relative w-full h-37.5 md:h-60 bg-light flex items-center justify-center overflow-hidden text-center">
      <div className="relative w-full h-full">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          alt="Element vertical"
          src="/banner.png"
          fill
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-center font-bold  [-webkit-text-stroke:1px_#0000000d]">
        <h1 className="hidden md:block   text-transparent md:text-[80px]  tracking-[0] leading-normal">
          Product Details
        </h1>
        <h1 className="block md:hidden text-transparent text-4xl  tracking-[0] leading-normal">
          T-Shirt
        </h1>
      </div>

      <div className="absolute z-10 w-full font-semibold text-center">
        <h2 className="hidden md:block  text-lg md:text-[32px]  leading-none tracking-normal">
          Product Details
        </h2>
        <h2 className="md:hidden text-xl leading-none tracking-normal ">
          T-Shirt
        </h2>
      </div>
    </section>
  );
}
