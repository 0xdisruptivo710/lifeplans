import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-geometric.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Geometric Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Diagonal Gold Accent Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 right-0 w-96 h-2 bg-gradient-gold transform rotate-45 translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-1 bg-gold-accent transform -rotate-45"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-white mb-6 text-balance font-raleway font-extralight">
            Planos de Saúde e Seguros
            <br />
            Para Você e Sua Família
          </h1>
          <p className="text-gray-light text-xl md:text-2xl font-extralight mb-12 leading-relaxed max-w-2xl">
            13 anos protegendo o que realmente importa em Sorocaba-SP
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-gold text-black-primary hover:opacity-90 font-light px-10 py-6 rounded-none text-base hover:-translate-y-1 transition-all duration-300 shadow-elegant uppercase tracking-wider w-full sm:w-auto"
              >
                Solicitar Cotação
              </Button>
            </a>
            <a href="#planos">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-black-primary font-light px-10 py-6 rounded-none text-base transition-all duration-300 uppercase tracking-wider w-full sm:w-auto"
              >
                Conhecer Planos
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <ChevronDown className="text-gold-accent" size={36} />
      </div>
    </section>
  );
};

export default Hero;
