import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const helpLinks = ["My Account", "FAQs", "Categories", "All Products"];

const policyLinks = [
  "Refund Policy",
  "About Us",
  "Cancellation Policy",
  "Terms and Conditions",
  "Privacy Policy",
];

const socialIcons = [
  { src: "/figmaAssets/eva-facebook-fill.svg", alt: "Facebook" },
  { src: "/figmaAssets/mdi-twitter.svg", alt: "Twitter" },
  { src: "/figmaAssets/ri-instagram-fill.svg", alt: "Instagram" },
  { src: "/figmaAssets/akar-icons-linkedin-v2-fill.svg", alt: "LinkedIn" },
  { src: "/figmaAssets/combo-shape.svg", alt: "Social" },
  { src: "/figmaAssets/icon-park-telegram.svg", alt: "Telegram" },
];

export const SimilarProductsSection = () => {
  return (
    <footer className="relative w-full bg-[#020202]">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Kids photography"
        src="/figmaAssets/kids-photography-1.png"
      />

      <div className="absolute inset-0 bg-[#020202b2]" />

      <div className="relative container mx-auto px-6 md:px-[120px] py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[324px_1fr] gap-10 md:gap-8">
          <div className="flex flex-col gap-6">
            <img
              className="w-[66px] h-[51px]"
              alt="Tt logott logo"
              src="/figmaAssets/tt-logott-logo-1.svg"
            />

            <p className="[font-family:'Poppins',Helvetica] font-medium text-[#ffffffb2] text-sm tracking-[0] leading-[normal]">
              Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam
              in eos qui consequatur ab .Soluta dolor quae Ipsam in eos
              quconsequatur ab cum maxime.Soluta dolor quae
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
            <nav className="flex flex-col gap-4 md:gap-6">
              <h3 className="font-h5-semi-blod font-[number:var(--h5-semi-blod-font-weight)] text-white text-xl md:text-[length:var(--h5-semi-blod-font-size)] tracking-[var(--h5-semi-blod-letter-spacing)] leading-[var(--h5-semi-blod-line-height)] [font-style:var(--h5-semi-blod-font-style)]">
                Let Us Help
              </h3>

              <ul className="flex flex-col gap-[9px]">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="[font-family:'Poppins',Helvetica] font-medium text-[#ffffffb2] text-base tracking-[0] leading-[normal] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col gap-4 md:gap-6">
              <h3 className="font-h5-semi-blod font-[number:var(--h5-semi-blod-font-weight)] text-white text-xl md:text-[length:var(--h5-semi-blod-font-size)] tracking-[var(--h5-semi-blod-letter-spacing)] leading-[var(--h5-semi-blod-line-height)] [font-style:var(--h5-semi-blod-font-style)]">
                Policies
              </h3>

              <ul className="flex flex-col gap-[9px]">
                {policyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="[font-family:'Poppins',Helvetica] font-medium text-[#ffffffb2] text-base tracking-[0] leading-[normal] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col gap-4 md:gap-6">
                <h3 className="font-h5-semi-blod font-[number:var(--h5-semi-blod-font-weight)] text-white text-xl md:text-[length:var(--h5-semi-blod-font-size)] tracking-[var(--h5-semi-blod-letter-spacing)] leading-[var(--h5-semi-blod-line-height)] [font-style:var(--h5-semi-blod-font-style)]">
                  Send Email
                </h3>

                <div className="relative h-[62px] bg-whitewhite-500 rounded-xl overflow-hidden border-[0.5px] border-solid border-[#0000001a]">
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="h-full pl-6 pr-[100px] md:pr-[150px] border-0 [font-family:'Poppins',Helvetica] font-normal text-textblackblack-200 text-sm tracking-[0] leading-[19.6px] placeholder:text-textblackblack-200"
                  />

                  <Button className="absolute top-1/2 -translate-y-1/2 right-2 w-[80px] md:w-[135px] h-[46px] bg-pinkpink-500 hover:bg-pinkpink-500/90 rounded-xl border-[0.5px] border-solid border-[#0000001a] font-title2-semi-blod font-[number:var(--title2-semi-blod-font-weight)] text-whitewhitewhite-500 text-[length:var(--title2-semi-blod-font-size)] tracking-[var(--title2-semi-blod-letter-spacing)] leading-[var(--title2-semi-blod-line-height)] [font-style:var(--title2-semi-blod-font-style)]">
                    Send
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.4px]">
                  Follow Us
                </h4>

                <div className="flex items-start gap-4 flex-wrap">
                  {socialIcons.map((icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-6 h-6 hover:opacity-80 transition-opacity"
                    >
                      {icon.src === "/figmaAssets/combo-shape.svg" ? (
                        <div className="w-6 h-6 flex items-center justify-center">
                          <div className="w-5 h-5 bg-[url(/figmaAssets/combo-shape.svg)] bg-[100%_100%]" />
                        </div>
                      ) : (
                        <img
                          className="w-6 h-6"
                          alt={icon.alt}
                          src={icon.src}
                        />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
