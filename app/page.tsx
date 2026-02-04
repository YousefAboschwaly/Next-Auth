import Banner from "@/components/Landing/Banner";
import { Navbar } from "@/components/Landing/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-['Poppins',Helvetica] text-main overflow-x-hidden">
      <Navbar />
      <Banner/>
    </main>
  );
}
