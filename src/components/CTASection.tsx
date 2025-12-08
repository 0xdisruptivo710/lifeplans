import { useState, useEffect } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import { MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ctaHero1 from "@/assets/cta-hero-1.png";
import ctaHero2 from "@/assets/cta-hero-2.png";
import ctaHero3 from "@/assets/cta-hero-3.png";

const heroImages = [ctaHero1, ctaHero2, ctaHero3];

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-cta" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-white mb-6">
            Pronto para Garantir Sua Tranquilidade?
          </h2>
          <p className="text-gray-light text-xl mb-10 max-w-2xl mx-auto">
            Fale com nossos especialistas e encontre o seguro ideal
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
              <GradientButton className="w-full sm:w-auto uppercase tracking-wider px-10 py-6 text-lg">
                Solicitar Cotação
              </GradientButton>
            </a>
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
              <GradientButton variant="variant" className="w-full sm:w-auto uppercase tracking-wider px-10 py-6 text-lg">
                <MessageCircle className="mr-2" size={20} />
                Falar no WhatsApp
              </GradientButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
