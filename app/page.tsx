import Banner from "@/components/Landing/Banner";
import Footer from "@/components/Landing/Footer";
import { Navbar } from "@/components/Landing/Navbar";
import { ProductCarousal } from "@/components/Landing/ProductCarousal";
import ProductDetails from "@/components/Landing/ProductDetails";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-['Poppins',Helvetica] max-w-360 mx-auto text-main overflow-x-hidden">
      <Navbar />
      <Banner/>
      <ProductDetails/>
      <ProductCarousal/>
      <Footer/>
    </main>
  );
}
