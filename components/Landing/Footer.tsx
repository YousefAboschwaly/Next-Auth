import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const helpLinks = ["My Account", "FAQs", "Categories", "All Products"];

const policyLinks = [
  "Refund Policy",
  "About Us",
  "Cancellation Policy",
  "Terms and Conditions",
  "Privacy Policy",
];

const socialIcons = [
  { src: "/icons/facebook.svg", alt: "Facebook" },
  { src: "/icons/twitter.svg", alt: "Twitter" },
  { src: "/icons/instagram.svg", alt: "Instagram" },
  { src: "/icons/linkedin.svg", alt: "LinkedIn" },
  { src: "/icons/whatsapp.svg", alt: "Social" },
  { src: "/icons/telegram.svg", alt: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="relative  mt-24   w-full bg-[#020202B2]">
      <Image
        className="absolute inset-0] lg:w-full h-full object-cover"
        width={1440}
        height={323}
        alt="Kids photography"
        src="/kid.png"
      />

      <div className="absolute inset-0 bg-[#020202B2]" />

      <div className="relative  px-5 lg:px-30 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row  gap-12 lg:gap-13.5  ">
          <div className="flex flex-col gap-6 lg:max-w-81">
            <Image
              className="w-16.5 h-12.75"
              width={66}
              height={51}
              alt="logo"
              src="/icons/logo-3.svg"
            />

            <p className=" font-medium text-[#ffffffb2] lg:text-sm tracking-[0] leading-[normal]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy
            </p>
          </div>

          <div className="flex  justify-between lg:justify-start lg:gap-20  ">
            <nav className="flex flex-col gap-4 md:gap-6 ">
              <h3 className=" font-semibold text-2xl text-white  ">
                Let Us Help
              </h3>

              <ul className="flex flex-col gap-2.25 w-full">
                {helpLinks.map((link, index) => (
                  <li key={index} className="text-white font-medium  ">
                    {link}
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col gap-4 md:gap-6">
              <h3 className="font-semibold text-2xl text-white">Policies</h3>

              <ul className="flex flex-col gap-2.25 w-full">
                {policyLinks.map((link, index) => (
                  <li key={index} className="text-white font-medium  ">
                    {link}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-4 md:gap-6">
              <h3 className="font-semibold text-2xl text-white ">Send Email</h3>

              <div className="relative h-15.5 bg-white rounded-xl overflow-hidden border-[0.5px] border-solid border-[#0000001a]">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="h-full pl-6 pr-25 md:pr-37.5 border-0 font-normal text-sm tracking-[0] leading-[19.6px]"
                />

                <Button className="absolute top-1/2 -translate-y-1/2 right-2 w-20 md:w-33.75 h-11.5 bg-purp hover:bg-purp/90 rounded-xl border-[0.5px] border-solid border-[#0000001a] ">
                  Send
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className=" font-semibold text-white text-base tracking-[0] leading-[22.4px]">
                Follow Us
              </h4>

              <div className="flex items-start gap-6 flex-wrap">
                {socialIcons.map((icon, index) => (
                  <Image
                    key={index}
                    className="w-6 h-6"
                    alt={icon.alt}
                    src={icon.src}
                    width={24}
                    height={24}
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
