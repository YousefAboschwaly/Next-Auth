import { RatingDistribution, Reviews } from "@/constants";
import { Star } from "lucide-react";
import Image from "next/image";

export function RatingReviews() {
  return (
    <div className="mt-16 pt-10 w-full max-w-275.5 ">
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
          className="  w-24.5 h-14.25 absolute bottom-8 lg:-top-28  object-cover "
        />
      </div>

      <div className="flex flex-col lg:flex-row  mb-10 lg:mb-16  w-full lg:gap-36.25">
        <div className=" flex flex-col lg:flex-row gap-10">
          {/* Score */}
          <div className="flex items-end justify-center lg:justify-start gap-4 font-medium ">
            <span className="text-[80px] lg:text-[120px] leading-none">
              4,5
            </span>
            <span className="text-2xl text-[#B0B0B0]  mb-2">/5</span>
          </div>

          {/* Bars */}
          <div className="space-y-2 lg:w-121 w-full ">
            {RatingDistribution.map((row) => (
              <div
                key={row.stars}
                className="flex items-center gap-4 text-purp "
              >
                <div className="flex items-center gap-2 ">
                  <Star className="w-6 h-6  fill-current" />
                  <span className="text-xl font-medium text-[#545454]">
                    {row.stars}
                  </span>
                </div>

                <div className="flex-1 h-1.5 bg-[#E6E6E6] rounded-2xl overflow-hidden">
                  <div
                    className="h-full rounded-full bg-purp "
                    style={{
                      width: `${row.pct}%`,
                    }}
                  ></div>
                </div>

                <span className="text-xl font-medium text-[#545454] pl-1 text-right">
                  %{row.pct}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Total & Action */}
        <div className=" lg:flex-col hidden lg:flex  items-center w-full ">
          <div className="text-center mb-4 flex flex-col space-y-3 w-full ">
            <span className="text-base text-[#545454] ">Total Reviews</span>
            <span className="text-6xl font-semibold ">3.0K</span>
          </div>
          <button className=" bg-purp hover:bg-[#b0897a] text-base  text-white font-medium px-5 py-4 rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-purp/20 cursor-pointer">
            Add Comment
            <Image
              src="/icons/chat.svg"
              alt="message icon"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>

      {/* Review List */}
      <div className=" space-y-5 lg:space-y-8 ">
        {Reviews.map((review) => (
          <div
            key={review.id}
            className="border-b-2 pt-5 lg:pt-8 border-[#F4F7F9]  last:border-0"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 lg:gap-4">
                <h3 className=" text-sm lg:text-xl font-semibold ">
                  {review.author}
                </h3>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 lg:w-5 lg:h-5   fill-current ${i < review.rating ? "text-purp stroke-purp " : "text-purp/30  stroke-purp/30 "}`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs lg:text-sm text-[#545454] font-medium">
                {review.date}
              </span>
            </div>
            <p className="text-sm lg:text-base text-[#545454] lg:text-main font-medium lg:font-normal pt-2 pb-5 lg:pt-5 lg:pb-8.5">
              {review.content}
            </p>
          </div>
        ))}
      </div>

        <button className="px-9 lg:px-6.25 py-4 mx-auto bg-[#F5F5F5] hover:bg-[#E0E0E0] text-base  text-purp font-medium rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-purp/20 cursor-pointer">
          View More Comments
        </button>
       
    </div>
  );
}
