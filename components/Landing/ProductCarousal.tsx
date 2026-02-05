"use client";
import { Products } from "@/constants";
import {
  ChevronLeft,
  ChevronRight,
  Star
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export function ProductCarousal() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 300;
    const el = scrollContainerRef.current;

    el.scrollTo({
      left:
        direction === "left"
          ? el.scrollLeft - scrollAmount
          : el.scrollLeft + scrollAmount,
      behavior: "smooth",
    });

    // update after scroll
    setTimeout(updateScrollButtons, 300);
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-16 pt-10 pl-5 lg:pl-30 ">
      <div className=" relative   ">
        <h2 className="z-10 text-base lg:text-2xl font-semibold mb-8 relative inline-block">
          Rating & Reviews
          <span className="absolute -bottom-2 left-0 w-10 h-1 bg-purp rounded-full"></span>
        </h2>
        <Image
          width={98}
          height={57}
          src="/logo-2.svg"
          alt="Logo"
          className="  w-24.5 h-14.25 absolute bottom-8 lg:-top-46  object-cover "
        />
      </div>

      <div
        ref={scrollContainerRef}
        onScroll={updateScrollButtons}
        className="flex gap-4 overflow-x-auto pb-4 scroll-smooth "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {Products.map((product) => (
          <div
            key={product.id}
            className=" shrink-0 w-43  lg:w-70  overflow-hidden"
          >
            {/* Image Container - Portrait aspect ratio */}
            <div className="  flex flex-col justify-between items-center h-51.75 lg:h-70 p-3 lg:pt-4   bg-white rounded-xl border border-gray-200">
              <div className="flex items-center justify-between w-full pb-2">
                {/* Discount Badge */}
                {product.discount && (
                  <span className="  text-purp  text-[10px] font-semibold px-4 py-2 rounded-xl border border-[#4040401A] backdrop-blur-[3px] flex items-center justify-center hover:scale-105 transition-transform ">
                    {product.discount}
                  </span>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2 ml-auto">
                  <button
                    className="w-9 h-9 md:w-12 md:h-12 rounded-xl border border-[#4040401A] backdrop-blur-[3px]
                 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Image
                      src="/icons/bag-add.svg"
                      alt="Add to Bag"
                      width={32}
                      height={32}
                      className="w-5 h-5 md:w-8 md:h-8"
                    />
                  </button>
                  <button
                    className="w-9 h-9 md:w-12 md:h-12 rounded-xl border border-[#4040401A] backdrop-blur-[3px]
                 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Image
                      src="/icons/love-2.svg"
                      alt="Add to Bag"
                      width={32}
                      height={32}
                      className="w-5 h-5 md:w-8 md:h-8"
                    />
                  </button>
                </div>
              </div>

              {/* Product Image */}
              <Image
                width={198}
                height={198}
                src={product.image}
                alt={product.title}
                className="mb-3 lg:mb-8 w-auto h-auto  object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-3">
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-2 font-medium">
                <span className="text-xs text-[#545454]">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-purp fill-current" />
                  <span className="text-xs ">
                    {product.rating}{" "}
                    <span className="text-[10px] text-[#545454]">
                      ({product.reviews})
                    </span>
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium   mb-3 line-clamp-2">
                {product.title}
              </h3>

              <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Price & Colors */}
                <div className="flex items-center justify-between font-medium ">
                  <div className="flex items-baseline gap-1.5">
                    <span className="">AED {product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        AED {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Color Swatches */}
                <div className="flex items-center gap-1 mt-2">
                  {product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className={`w-4 h-4 rounded-full ${color} border border-gray-200`}
                    />
                  ))}
                  {product.extraColors > 0 && (
                    <span className="text-xs ">+{product.extraColors}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Centered */}
      <div className="flex justify-center gap-3 mt-8">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="
      w-12 h-12
      bg-purp rounded-full
      flex items-center justify-center
      text-white
      hover:bg-[#A87C6E]
      transition-colors
      shadow-sm
      cursor-pointer
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="
     w-12 h-12
      bg-purp rounded-full
      flex items-center justify-center
      text-white
      hover:bg-[#A87C6E]
      transition-colors
      shadow-sm
      disabled:opacity-50
      cursor-pointer
      disabled:cursor-not-allowed
    "
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
