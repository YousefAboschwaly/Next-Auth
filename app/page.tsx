import Banner from "@/components/Landing/Banner";
import { Navbar } from "@/components/Landing/Navbar";
import ProductDetails from "@/components/Landing/ProductDetails";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-['Poppins',Helvetica] text-main overflow-x-hidden">
      <Navbar />
      <Banner/>
      <ProductDetails/>
    </main>
  );
}
