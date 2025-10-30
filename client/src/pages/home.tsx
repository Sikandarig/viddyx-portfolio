import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <SocialProof />
      <Testimonials />
      <Services />
      <Comparison />
      <Reviews />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
