import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LuxuryGrid from "@/components/LuxuryGrid";
import OurMission from "@/components/OurMission";
import InsuranceProducts from "@/components/InsuranceProducts";
import SecondaryInsurance from "@/components/SecondaryInsurance";
import WhyLifePlans from "@/components/WhyLifePlans";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LuxuryGrid />
      <OurMission />
      <InsuranceProducts />
      <SecondaryInsurance />
      <WhyLifePlans />
      <HowItWorks />
      <CTASection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
