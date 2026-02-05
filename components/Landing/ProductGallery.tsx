"use client";
import { Images } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ProductGallery() {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className=" relative flex flex-col gap-4 mx-auto md:mx-0 w-88.25 lg:w-131">
      {/* Main Image */}
      <div className="relative h-95.25   lg:h-141.25 bg-[#F5F5F5] rounded-3xl lg:rounded-[24px] overflow-hidden group">
        <Image
          width={305}
          height={514}
          src={Images[activeImage]}
          alt="Product view"
          className=" z-10 w-51.5 h-86.5 lg:w-76.25 lg:h-128.5  object-cover  absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:scale-105 transition-transform duration-300 "
        />

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-12 lg:h-12 bg-purp backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#A87C6E] transition-colors shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setActiveImage((prev) => prev - 1)}
          disabled={activeImage === 0}
        >
          <ChevronLeft className="w-3.25 h-3.25 lg:w-5 lg:h-5" />
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-12 lg:h-12 bg-purp backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#A87C6E] transition-colors shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() =>
            setActiveImage((prev) => (prev + 1 < Images.length ? prev + 1 : 0))
          }
          disabled={activeImage === Images.length - 1}
        >
          <ChevronRight className="w-3.25 h-3.25 lg:w-5 lg:h-5" />
        </button>

        {/* Top Indicators */}
        <div className="  absolute top-0 left-0 right-0 flex justify-center gap-2 bg-[linear-gradient(0deg,rgba(244,244,244,0.2)_0%,rgba(0,0,0,0.3)_100%)] h-12.25 lg:h-18.25">
          <div className="  w-full flex items-center justify-center gap-2">
            {Images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 w-19.75 lg:w-30  rounded-3xl transition-all duration-300 ${idx === activeImage ? " bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 z-10">
        {Images.slice(1, 3).map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx + 1)}
            className={`relative w-28.5 h-30.75 lg:w-42.25 lg:h-45.75 rounded-xl overflow-hidden bg-[#F5F5F5] transition-all ${activeImage === idx + 1 ? "border-blue-500 ring-2 ring-blue-100" : " hover:bg-gray-200"}`}
          >
            <Image
              width={142}
              height={142}
              src={img}
              alt={`View ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}

        {/* More Images Placeholder */}
        <button className="relative w-28.5 h-30.75 lg:w-42.25 lg:h-45.75 rounded-xl overflow-hidden ">
          <Image
            width={142}
            height={142}
            src={Images[3]}
            alt="More views"
            className="w-full h-full object-cover opacity-50 bg-[#F5F5F5]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-3xl">
            +2
          </div>
        </button>
      </div>
      
    
    </div>
  );
}
