import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InsuranceProducts from "@/components/InsuranceProducts";
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
      <InsuranceProducts />
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
