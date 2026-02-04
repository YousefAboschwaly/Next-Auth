import { ChevronRight } from "lucide-react";
import { ProductInfo } from "./ProductInfo";
import { ProductGallery } from "./ProductGallery";
import { RatingReviews } from "./RatingReviews";

export default function ProductDetails() {
  return (
    <div className=" px-5 lg:px-30 pt-4">


      {/* Breadcrumb */}
      <div className="bg-light p-4 md:px-8 rounded-3xl">
        <nav className="flex items-center gap-1 md:gap-2 font-medium text-xs lg:text-[16px]  text-main overflow-x-auto">
          <span className=" whitespace-nowrap">Home</span>
          <ChevronRight className="w-3 h-3 md:w-6 md:h-6 shrink-0" />
          <span  className=" whitespace-nowrap">Our Category</span>
          <ChevronRight className="w-3 h-3 md:w-6 md:h-6 shrink-0" />
          <span className="hidden md:block text-secondary whitespace-nowrap">Product Details</span>
          <span className="block md:hidden text-secondary whitespace-nowrap">T-Shirt</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="  pt-4  md:pt-10">
        <div className="flex flex-col md:flex-row gap-5 md:gap-8">
          <ProductGallery />
          <ProductInfo />
        </div>

        <RatingReviews />
      </main>
    </div>
  );
}
