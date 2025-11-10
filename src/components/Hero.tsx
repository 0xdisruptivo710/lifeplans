import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-white mb-6 text-balance">
            Proteja o Que
            <br />
            Realmente Importa
          </h1>
          <p className="text-white/95 text-xl md:text-2xl font-light mb-12 leading-relaxed max-w-2xl">
            Soluções completas em seguros e planejamento financeiro para você e sua família
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Button
              size="lg"
              className="bg-white text-navy-primary hover:bg-white/90 font-semibold px-10 py-6 rounded-full text-lg hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              Solicitar Cotação
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold px-10 py-6 rounded-full text-lg transition-all duration-300"
            >
              Conhecer Produtos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <ChevronDown className="text-white/70" size={36} />
      </div>
    </section>
  );
};

export default Hero;
