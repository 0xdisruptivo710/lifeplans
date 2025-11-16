import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Heart, Users, Building2, Stethoscope, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroFamily from "@/assets/hero-family.jpg";
import healthInsurance from "@/assets/health-insurance.jpg";

const plans = [
  {
    icon: Heart,
    title: "Plano de Saúde Individual",
    description: "Cobertura completa personalizada para você",
    features: ["Rede credenciada ampla", "Atendimento 24h", "Telemedicina incluída", "Cobertura nacional"],
    link: "/plano-saude-individual",
  },
  {
    icon: Users,
    title: "Plano de Saúde Familiar",
    description: "Proteção integral para toda sua família",
    features: ["Cobertura para dependentes", "Pediatria especializada", "Maternidade completa", "Descontos progressivos"],
    link: "/plano-saude-familiar",
  },
  {
    icon: Building2,
    title: "Plano de Saúde Empresarial",
    description: "Soluções corporativas completas",
    features: ["Gestão simplificada", "Planos personalizados", "Relatórios gerenciais", "Suporte dedicado"],
    link: "/plano-saude-empresarial",
  },
  {
    icon: Stethoscope,
    title: "Plano Odontológico",
    description: "Cuidados completos para seu sorriso",
    features: ["Prevenção e limpeza", "Tratamentos avançados", "Ortodontia incluída", "Emergências 24h"],
    link: "/plano-odontologico",
  },
];

const benefits = [
  "Acesso às melhores operadoras do mercado",
  "Consultoria especializada e personalizada",
  "Melhor custo-benefício garantido",
  "Atendimento ágil e humanizado",
  "Suporte durante toda a contratação",
  "Acompanhamento pós-venda contínuo",
];

const PlanosSaude = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroFamily})`,
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
              Planos de Saúde
            </h1>
            <p className="text-lg md:text-xl text-gray-light max-w-2xl mx-auto font-light">
              Proteção completa para você e sua família com as melhores operadoras do mercado
            </p>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 bg-black-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
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
                    to={plan.link}
                    className="group bg-black-secondary border border-gray-dark p-10 hover:border-gold-accent transition-all duration-700 block h-full"
                  >
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="text-gold-accent group-hover:scale-110 transition-transform duration-300" size={48} strokeWidth={1.5} />
                    <ArrowRight className="text-gray-light group-hover:text-gold-accent group-hover:translate-x-2 transition-all duration-300" size={24} />
                  </div>
                  
                  <h3 className="text-white text-2xl font-light mb-4 group-hover:text-gold-accent transition-colors duration-300">
                    {plan.title}
                  </h3>
                  
                  <p className="text-gray-medium leading-relaxed font-extralight mb-6">
                    {plan.description}
                  </p>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={benefitsRef}
              className={`transition-all duration-1000 ${
                benefitsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
                DIFERENCIAIS
              </span>
              <h2 className="text-3xl md:text-4xl font-raleway font-light mb-8 text-foreground">
                Por que escolher a Lifeplans?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground font-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
              <img 
                src={healthInsurance} 
                alt="Profissionais de saúde" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PlanosSaude;