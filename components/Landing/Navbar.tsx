"use client";
import { Nav_Links, Nav_Right_Links } from "@/constants";
import {
  ChevronDown,
  X
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full ">
      <div className=" mx-auto px-5 sm:px-6 lg:px-30 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10.5 ">
            {/* Logo */}
            <Image
              src="/logo.png"
              alt="TinyTales"
              width={65}
              height={51}
              className=" object-contain w-11.25 h-8.75 md:w-16.5 md:h-12.75"
            />

            {/* Desktop Navigation */}
            <nav>
              <ul className="hidden md:flex items-center space-x-6">
                {Nav_Links.map((link) => (
                  <li
                    key={link.name}
                    className="flex items-center gap-2 text-secondary hover:text-gray-900  cursor-pointer transition-colors "
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <p >{link.name}</p>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4 ">
            {Nav_Right_Links.map((link, index) => (
              <button
                key={index}
                className="cursor-pointer hover:scale-110 transition-transform"
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </button>
            ))}

            <button className="flex items-center gap-1 text-sm font-medium text-main">
              EN <ChevronDown className="w-6 h-6" />
            </button>

            <button className="flex items-center gap-1 text-main">
              <Image
                src="/icons/user.svg"
                alt="User"
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden font-medium text-main cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Image
                src="/icons/menu.svg"
                alt="Menu"
                width={24}
                height={24}
                className="w-6 h-6 "
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 py-4 space-y-1">
            {Nav_Links.map((link) => (
              <li
                key={link.name}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-secondary hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer"
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p>{link.name}</p>
              </li>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="px-4 py-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {Nav_Right_Links.map((link, index) => (
                <button
                  key={index}
                  className="cursor-pointer hover:scale-110 transition-transform"
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-sm font-medium text-main">
                EN <ChevronDown className="w-6 h-6" />
              </button>

              <button className="flex items-center gap-1 text-main">
                <Image
                  src="/icons/user.svg"
                  alt="User"
                  width={24}
                  height={24}
                  className="w-6 h-6 "
                />
                <ChevronDown className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
