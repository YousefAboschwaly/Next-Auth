"use client";
import { Colors } from "@/constants";
import {
  ChevronDown,
  Code,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
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
      <div className="flex flex-col h-full">
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
        <h1 className="text-[16px] md:text-2xl font-medium  mb-3 md:mb-4 ">
          J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
        </h1>

        <div className="flex items-baseline gap-2 md:gap-3 mb-1 md:mb-2">
          <span className="text-xl font-medium ">
            ${price.toFixed(2)}
          </span>
          <span className="text-[16px] text-secondary leading-[140%] line-through decoration-1">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-[#333333] mb-6 md:mb-4">
          This price is exclusive of taxes.
        </p>

        {/* Description */}
        <div className="space-y-1 text-xs md:text-sm pb-8 md:pb-5 border-b border-[#E6E6E6] w-full  md:max-w-127.5">
          <p>
            Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam
            nonummy Lorem ipsum dolor sit amet, diam nonummy
          </p>
        </div>

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
        <div className="mb-6 md:mb-8">
          <label className="block text-sm md:text-base font-bold text-gray-900 mb-2 md:mb-3">
            Colors
          </label>
          <div className="flex items-center gap-2 md:gap-3">
            {Colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${color.class} ring-2 ring-offset-2 transition-all ${selectedColor === color.name ? "ring-blue-500 scale-110" : "ring-transparent hover:scale-105"}`}
                aria-label={`Select ${color.name}`}
              />
            ))}
          </div>
          <p className="mt-1.5 md:mt-2 text-xs md:text-sm text-gray-500">
            {selectedColor}
          </p>
        </div>

        {/* Quantity - Desktop Only */}
        <div className="hidden md:block mt-auto">
          <div className="flex items-center justify-between mb-2">
            <label className="text-base font-bold text-gray-900">
              Quantity
            </label>
            <span className="text-sm text-gray-400">
              (${(price * quantity).toFixed(2)} for Piece)
            </span>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center bg-gray-50 rounded-lg p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-gray-900 disabled:opacity-50"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-bold text-gray-900">
                {quantity.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-gray-900"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xl font-bold text-gray-900">
              ${(price * quantity).toFixed(2)}
            </div>

            <button className="flex-1 bg-[#C19A8B] hover:bg-[#b0897a] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#C19A8B]/20">
              Add To Cart
              <ShoppingBag className="w-5 h-5 opacity-80" />
            </button>
          </div>
        </div>

        {/* Quantity Label - Mobile */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-gray-900">Quantity</label>
            <span className="text-xs text-gray-400">
              (${(price * quantity).toFixed(2)} for Piece)
            </span>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-3 md:hidden z-40">
        <button className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600">
          <Code className="w-5 h-5" />
        </button>

        <div className="flex items-center bg-gray-100 rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-9 h-9 flex items-center justify-center text-gray-600"
            disabled={quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-6 text-center font-bold text-gray-900 text-sm">
            {quantity.toString().padStart(2, "0")}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-9 h-9 flex items-center justify-center text-gray-600"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="text-lg font-bold text-gray-900">
          ${(price * quantity).toFixed(2)}
        </div>

        <button className="flex-1 bg-[#C19A8B] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm">
          Add To Cart
          <ShoppingBag className="w-4 h-4 opacity-80" />
        </button>
      </div>
    </>
  );
}
