import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { Car, Home, Bike, Trophy, TrendingUp, CheckCircle } from "lucide-react";

const ConsorciosSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const consorcioTypes = [
    {
      icon: Car,
      title: "Consórcio de Automóveis",
      description: "Realize o sonho do carro novo sem juros abusivos",
    },
    {
      icon: Home,
      title: "Consórcio Imobiliário",
      description: "Conquiste seu imóvel com parcelas que cabem no bolso",
    },
    {
      icon: Bike,
      title: "Consórcio de Motos",
      description: "Sua moto nova com planejamento financeiro inteligente",
    },
  ];

  const benefits = [
    "Sem juros, apenas taxa de administração",
    "Parcelas fixas e previsíveis",
    "Poder de compra à vista na contemplação",
    "Flexibilidade de prazos",
    "Possibilidade de lance para antecipar",
    "Ideal para quem planeja o futuro",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-black-secondary to-black-primary relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-accent/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="text-gold-accent" size={32} />
            <span className="text-gold-accent uppercase tracking-widest text-sm font-medium">
              Prêmio Porto Bank 2025
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6">
            Consórcios <span className="text-gold-accent font-normal">Premiados</span>
          </h2>
          <p className="text-gray-light text-lg max-w-2xl mx-auto">
            Reconhecidos como referência em consórcios no interior de São Paulo. 
            Planeje seu futuro com segurança e sem juros abusivos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {consorcioTypes.map((tipo, index) => (
            <div
              key={tipo.title}
              className={`group bg-black-primary border border-gray-dark rounded-2xl p-8 hover:border-gold-accent/50 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-accent/20 to-gold-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <tipo.icon className="text-gold-accent" size={32} />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                {tipo.title}
              </h3>
              <p className="text-gray-light text-sm leading-relaxed">
                {tipo.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits list */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-gold-accent" size={24} />
              <h3 className="text-2xl font-light text-foreground">
                Vantagens do Consórcio
              </h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-gold-accent shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-light">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div
            className={`bg-gradient-to-br from-gold-accent/10 to-transparent border border-gold-accent/30 rounded-2xl p-8 md:p-10 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
              Comece a Planejar Hoje
            </h3>
            <p className="text-gray-light mb-8">
              Fale com nossos especialistas e descubra o consórcio ideal para 
              realizar seus sonhos. Atendimento personalizado em mais de 50 
              cidades do interior de São Paulo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20cons%C3%B3rcios" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GradientButton className="w-full sm:w-auto uppercase tracking-wider">
                  Simular Consórcio
                </GradientButton>
              </a>
              <Link to="/consorcios">
                <button className="w-full sm:w-auto px-6 py-3 border border-gray-dark text-gray-light hover:border-gold-accent hover:text-gold-accent transition-colors rounded-lg">
                  Saiba Mais
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsorciosSection;
