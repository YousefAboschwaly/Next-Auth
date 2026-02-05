"use client";
import { Colors } from "@/constants";
import { ChevronDown, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ProductInfo() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Blue");
  const [selectedSize, setSelectedSize] = useState("2xl");
  const [selectedType, setSelectedType] = useState("Cotton");
  const price = 300.0;
  const originalPrice = 360.0;
  return (
    <>
      <div className="flex flex-col h-full w-full lg:max-w-162">
        {/* Header Actions */}
        <div className="flex justify-between items-start mb-3 md:mb-4">
          <span className=" font-semibold text-xs inline-block px-4 py-2 rounded-[32px] border-[0.5px] border-purp text-purp">
            T-Shirt
          </span>

          <div className="flex gap-2">
            <button
              className="w-9 h-9 md:w-12 md:h-12 rounded-xl border border-[#4040401A] backdrop-blur-[3px]
flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
            >
              <Image
                src="/icons/bag-add.svg"
                alt="Add to Bag"
                width={32}
                height={32}
                className="w-8 h-8"
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
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>

        {/* Title & Price */}
        <h1 className="text-[16px] md:text-2xl font-medium  mb-3 md:mb-4 max-w-131 leading-[150%]">
          J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
        </h1>

        <div className="flex items-baseline gap-2 md:gap-3 mb-1 md:mb-2">
          <span className="text-xl font-medium ">${price.toFixed(2)}</span>
          <span className="text-[16px] text-secondary leading-[140%] line-through decoration-1">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-[#333333] mb-6 md:mb-4">
          This price is exclusive of taxes.
        </p>

        {/* Description */}
        <div className="space-y-1 text-xs md:text-sm pb-8 md:pb-5  w-full  md:max-w-127.5">
          <p>
            Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam
            nonummy Lorem ipsum dolor sit amet, diam nonummy
          </p>
        </div>

        <div className="border-b border-[#E6E6E6] h-px" />

        {/* Selectors */}
        <div className="space-y-6 mb-6 md:mb-8 mt-8 w-full lg:max-w-75">
          <div className="relative">
            <label className=" text-xs  absolute z-10 left-4 -top-2 bg-white px-2">
              Type
            </label>
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full cursor-pointer appearance-none bg-white border border-[#4040401A] backdrop-blur-[3px] rounded-[10px] px-3 md:px-4 h-11.25 text-sm font-medium "
              >
                <option>Cotton</option>
                <option>Polyester</option>
                <option>Blend</option>
              </select>

              <ChevronDown className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          <div className="relative">
            <label className="text-xs  absolute z-10 left-4 -top-2 bg-white px-2">
              Size
            </label>
            <div className="relative">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full cursor-pointer appearance-none bg-white border border-[#4040401A] backdrop-blur-[3px] rounded-[10px] px-3 md:px-4 h-11.25 text-sm font-medium "
              >
                <option>2xl</option>
                <option>Xl</option>
                <option>L</option>
                <option>M</option>
                <option>S</option>
              </select>
              <ChevronDown className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="mb-16">
          <label className="block text-base md:text-[20px] font-medium mb-5">
            Colors
          </label>
          <div className="flex items-center gap-2 md:gap-4">
            {Colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`relative w-11 h-11 md:w-15 md:h-15 rounded-full flex items-center justify-center bg-[#F4F7F9] cursor-pointer  ring-[1.5px] ${selectedColor === color.name ? "ring-main scale-110" : "ring-transparent hover:scale-105"}`}
                aria-label={`Select ${color.name}`}
              >
                <div
                  className={`w-6 h-6 md:w-8 md:h-8 rounded-full  transition-all `}
                    style={{ backgroundColor: color.class }}
                />

                {selectedColor === color.name && (
                  <p className=" absolute top-16 text-xs md:text-sm text-[#545454] font-medium">
                    {selectedColor}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity - Desktop Only */}
        <div className="space-y-4 mt-auto w-full">
          <div className="flex items-center gap-2">
            <label className="text-base lg:text-[20px] font-medium ">
              Quantity
            </label>
            <span className="text-xs lg:text-base text-secondary leading-[140%] ">
              (${(price * quantity).toFixed(2)} for Piece)
            </span>
          </div>

          <div className="flex items-center flex-col lg:flex-row gap-5 lg:justify-between lg:gap-0">
            <div className="flex items-center justify-start w-full lg:w-auto gap-5">
              <div className="flex items-center bg-[#F5F5F5] rounded-2xl p-2 gap-8">
                <button
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-xl  disabled:opacity-50 text-[28px] font-medium hover:text-gray-900 cursor-pointer"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-5 h-5 " />
                </button>

                <span className="text-2xl font-medium text-center text-[#333333]">
                  {quantity.toString().padStart(2, "0")}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-xl  disabled:opacity-50 text-[28px] font-medium hover:text-gray-900 cursor-pointer"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <span className="text-2xl font-medium">
                ${(price * quantity).toFixed(2)}
              </span>
            </div>

            <button className=" bg-purp hover:bg-[#b0897a] w-full lg:w-auto text-white font-medium py-4 lg:px-13.25 rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-purp/20 cursor-pointer">
              Add To Cart
              <Image
                src="/icons/purp-shopping-bag.svg"
                alt="Add to Bag"
                width={24}
                height={24}
                className="w-6 h-6 "
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
