import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { VexoArena } from "@/components/sections/VexoArena";
import { ForCompanies } from "@/components/sections/ForCompanies";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <VexoArena />
      <ForCompanies />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}
