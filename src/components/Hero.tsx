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
          <h1 className="text-white mb-6 text-balance">
            A Solução em Seguros
            <br />
            Para Você e Sua Empresa
          </h1>
          <p className="text-gray-light text-xl md:text-2xl font-light mb-12 leading-relaxed max-w-2xl">
            Sinta-se seguro com a gente, venha para a Life Plans
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Button
              size="lg"
              className="bg-gradient-gold text-black-primary hover:opacity-90 font-semibold px-10 py-6 rounded-none text-lg hover:-translate-y-1 transition-all duration-300 shadow-elegant uppercase tracking-wider"
            >
              Solicitar Cotação
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-black-primary font-semibold px-10 py-6 rounded-none text-lg transition-all duration-300 uppercase tracking-wider"
            >
              Conhecer Produtos
            </Button>
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
