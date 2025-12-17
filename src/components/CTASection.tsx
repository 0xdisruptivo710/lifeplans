import { useState, useEffect } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import { MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ctaHero1 from "@/assets/carro_1.jpg.png";
import ctaHero2 from "@/assets/carro_2.jpg.png";
import ctaHero3 from "@/assets/carro_3.jpg.png";

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
    <section className="relative h-[75vh] md:h-[85vh] overflow-hidden flex flex-col">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Content - Reorganizado para dar espaço aos carros */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-between px-4">
        {/* Título BEM NO TOPO */}
        <div className="flex-none pt-16 md:pt-20 text-center">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-raleway font-light mb-0">
              Pronto para Garantir Sua Tranquilidade?
            </h2>
          </div>
        </div>

        {/* MÁXIMO ESPAÇO CENTRAL para ver os carros */}
        <div className="flex-1 min-h-[200px] md:min-h-[300px]"></div>

        {/* Subtítulo e Botões BEM EMBAIXO */}
        <div className="flex-none pb-16 md:pb-20 text-center">
          <p className="text-gray-light text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
            Fale com nossos especialistas e encontre o seguro ideal
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
              <GradientButton className="w-full sm:w-auto uppercase tracking-wider px-8 py-4 text-base">
                Solicitar Cotação
              </GradientButton>
            </a>
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
              <GradientButton variant="variant" className="w-full sm:w-auto uppercase tracking-wider px-8 py-4 text-base">
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
