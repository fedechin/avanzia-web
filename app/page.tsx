import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import ImplementationSection from "@/components/ImplementationSection";
import TwoColumnBenefits from "@/components/TwoColumnBenefits";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <BenefitsSection />
      <ImplementationSection />
      <TwoColumnBenefits />
      <PricingSection />
      <Footer />
    </main>
  );
}
