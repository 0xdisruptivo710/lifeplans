import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, Car, Home, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import luxuryCar from "@/assets/luxury-car-diagonal.jpg";
import privateJet from "@/assets/private-jet.jpg";

const insurances = [
  {
    icon: Shield,
    title: "Seguro de Vida",
    description: "Proteção financeira para sua família",
    features: ["Coberturas personalizadas", "Indenizações rápidas", "Assistência funeral", "Invalidez permanente"],
    link: "/seguro-vida",
  },
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo",
    features: ["Assistência 24h", "Carro reserva", "Cobertura nacional", "Proteção vidros"],
    link: "/seguro-auto",
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Segurança total para seu lar",
    features: ["Incêndio e roubo", "Danos elétricos", "Responsabilidade civil", "Assistência residencial"],
    link: "/seguro-residencial",
  },
  {
    icon: Building2,
    title: "Seguro Empresarial",
    description: "Proteja seu patrimônio comercial",
    features: ["Proteção patrimonial", "Responsabilidade civil", "Lucros cessantes", "Equipamentos"],
    link: "/seguro-empresarial",
  },
];

const advantages = [
  "Parcerias com as melhores seguradoras",
  "Análise detalhada de coberturas",
  "Cotação sem compromisso",
  "Renovação facilitada",
  "Suporte em sinistros",
  "Atendimento personalizado",
];

const Seguros = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: advantagesRef, isVisible: advantagesVisible } = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${luxuryCar})`,
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-raleway font-light text-white mb-6">
              Seguros Completos
            </h1>
            <p className="text-lg md:text-xl text-gray-light max-w-2xl mx-auto font-light">
              Proteja o que você mais valoriza com soluções sob medida
            </p>
          </div>
        </div>
      </section>

      {/* Insurances Grid */}
      <section className="py-20 bg-black-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
              NOSSAS SOLUÇÕES
            </span>
            <h2 className="text-3xl md:text-4xl font-raleway font-light text-white">
              Seguros para Todas as Necessidades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insurances.map((insurance, index) => {
              const Icon = insurance.icon;
              const { ref, isVisible } = useScrollAnimation(0.2);
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    to={insurance.link}
                    className="group bg-black-secondary border border-gray-dark p-10 hover:border-gold-accent transition-all duration-700 block h-full"
                  >
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="text-gold-accent group-hover:scale-110 transition-transform duration-300" size={48} strokeWidth={1.5} />
                    <ArrowRight className="text-gray-light group-hover:text-gold-accent group-hover:translate-x-2 transition-all duration-300" size={24} />
                  </div>
                  
                  <h3 className="text-white text-2xl font-light mb-4 group-hover:text-gold-accent transition-colors duration-300">
                    {insurance.title}
                  </h3>
                  
                  <p className="text-gray-medium leading-relaxed font-extralight mb-6">
                    {insurance.description}
                  </p>

                  <ul className="space-y-3">
                    {insurance.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-light text-sm">
                        <CheckCircle className="text-gold-accent mr-3 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg order-2 lg:order-1">
              <img 
                src={privateJet} 
                alt="Proteção premium" 
                className="w-full h-full object-cover"
              />
            </div>

            <div
              ref={advantagesRef}
              className={`transition-all duration-1000 order-1 lg:order-2 ${
                advantagesVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
                VANTAGENS
              </span>
              <h2 className="text-3xl md:text-4xl font-raleway font-light mb-8 text-foreground">
                Expertise em Seguros
              </h2>
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground font-light">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Seguros;