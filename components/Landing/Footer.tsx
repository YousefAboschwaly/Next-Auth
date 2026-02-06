import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import {helpLinks , policyLinks , socialIcons} from "@/constants/index";

export default function Footer() {
  return (
    <footer className="bg-[#2A2A1F] text-white pt-15  relative overflow-hidden ">
      {/* Background Image Effect (Simulated with overlay) */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-50">
        <Image
          src="/kids-footer-sm.png"
          alt="Footer Background Mobile"
          fill
          className="object-cover lg:hidden"
        />
        <Image
          src="/kid.png"
          alt="Footer Background Desktop"
          fill
          className="hidden lg:block object-cover"
        />
      </div>

      <div className="px-4 md:px-24 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pb-20">
          {/* Logo and Description */}
          <div className="space-y-3 col-span-2 lg:col-span-1">
            <Image
              src="/logo-2.svg"
              alt="TinyTales"
              width={200}
              height={64}
              className="h-16 object-contain w-auto"
            />
            <p className="text-[#FFFFFFB2] text-[14px] font-medium leading-[1.8] max-w-md">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy
            </p>
          </div>

          {/* Contact Us (New - Matches Image) */}
          <div className="space-y-5 col-span-1 lg:hidden">
            <h4 className="text-[18px] md:text-[24px] text-[#FFFFFF] font-semibold">
              Contact Us
            </h4>
            <nav className="flex flex-col gap-4 text-[#FFFFFFB2] text-[14px]">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white fill-white" />
                <span className="truncate">+87 01928491</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/mail.svg"
                  alt="Mail"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span className="truncate">yousefshwaly@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                  className="w-5 h-5 "
                />
                <span>381, cairo, egypt</span>
              </div>
            </nav>
          </div>

          {/* Let Us Help */}
          <div className="space-y-5 col-span-1">
            <h4 className="text-[18px] md:text-[24px] text-[#FFFFFF] font-semibold">
              Let Us Help
            </h4>
            <nav className="flex flex-col gap-3 text-[#FFFFFFB2] text-[14px]">
              {helpLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="#"
                className="hover:text-white transition-colors lg:hidden"
              >
                Contact & Support
              </a>
            </nav>
          </div>

          {/* Policies (Hidden to match image) */}
          <div className="space-y-5 hidden lg:block col-span-1">
            <h4 className="text-[24px] text-[#FFFFFF] font-semibold">
              Policies
            </h4>
            <nav className="flex flex-col gap-3 text-[#FFFFFFB2] text-[16px]">
              {policyLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter and Socials */}
          <div className="space-y-5 col-span-2 lg:col-span-1">
            <h4 className="text-[24px] text-[#FFFFFF] font-semibold">
              Send Email
            </h4>
            {/* Nested Button Layout - Fixed width and flex */}
            <div className="bg-white rounded-2xl p-1.5 flex items-center shadow-2xl h-15 w-full max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent text-gray-900 px-6 py-2 flex-1 outline-none placeholder:text-gray-300 h-full min-w-0"
              />
              <Button className="bg-purp! hover:bg-[#A67C74]! text-white rounded-2xl! h-full px-8 text-[16px] font-semibold">
                Send
              </Button>
            </div>

            <div className="space-y-2 pt-2">
              <h5 className="text-[16px] font-semibold text-[#FFFFFF]">
                Follow Us
              </h5>
              <div className="flex gap-4 md:gap-8 items-center">
                {socialIcons.map((icon) => (
                  <Image
                    key={icon.alt}
                    src={icon.src}
                    alt={icon.alt}
                    width={17}
                    height={20}
                    className="w-5 h-5 cursor-pointer transition-all hover:scale-110 hover:brightness-75"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
