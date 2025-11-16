import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GradientButton } from "@/components/ui/gradient-button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Smile, Shield, Star, Clock, Users, CheckCircle } from "lucide-react";
import healthImage from "@/assets/health-insurance.jpg";

const benefits = [
  {
    icon: Smile,
    title: "Cobertura Completa",
    description: "Consultas, limpezas, tratamentos e procedimentos odontológicos",
  },
  {
    icon: Shield,
    title: "Sem Carência",
    description: "Planos com carência reduzida ou zero para emergências",
  },
  {
    icon: Star,
    title: "Dentistas Credenciados",
    description: "Rede com os melhores profissionais de Sorocaba e região",
  },
  {
    icon: Clock,
    title: "Atendimento Ágil",
    description: "Marque suas consultas com facilidade e rapidez",
  },
];

const plans = [
  {
    name: "Individual",
    description: "Ideal para quem busca cuidados odontológicos completos",
    features: [
      "Consultas ilimitadas",
      "Limpeza e prevenção",
      "Procedimentos básicos",
      "Raio-X incluído",
      "Emergências 24h",
    ],
  },
  {
    name: "Familiar",
    description: "Proteção odontológica para toda a família",
    features: [
      "Até 5 dependentes",
      "Ortodontia incluída",
      "Cobertura nacional",
      "Próteses e implantes",
      "Desconto em procedimentos estéticos",
    ],
  },
  {
    name: "Empresarial",
    description: "Benefício completo para seus colaboradores",
    features: [
      "A partir de 3 vidas",
      "Gestão simplificada",
      "Relatórios de utilização",
      "Sem reajuste por sinistralidade",
      "Implantação rápida",
    ],
  },
];

const PlanosOdontologicos = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.2);
  const { ref: plansRef, isVisible: plansVisible } = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${healthImage})`,
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-gold-accent font-light text-sm md:text-base tracking-wider uppercase mb-4 block">
              CUIDADO COMPLETO COM SEU SORRISO
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-raleway font-light text-white mb-6">
              Planos Odontológicos
            </h1>
            <p className="text-lg md:text-xl text-gray-light max-w-3xl mx-auto mb-8 font-light">
              Tenha acesso aos melhores dentistas e tratamentos com planos odontológicos 
              completos e com preços acessíveis
            </p>
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20planos%20odontol%C3%B3gicos" target="_blank" rel="noopener noreferrer">
              <GradientButton className="uppercase tracking-wider text-sm px-8 py-4">
                Solicitar Cotação
              </GradientButton>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-black-secondary">
        <div className="container-custom">
          <div
            ref={benefitsRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
              VANTAGENS
            </span>
            <h2 className="text-3xl md:text-5xl font-raleway font-light mb-6 text-white">
              Por Que Escolher Nossos Planos?
            </h2>
            <p className="text-gray-light text-lg max-w-2xl mx-auto font-light">
              Oferecemos os melhores planos odontológicos com cobertura completa e 
              atendimento personalizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bg-black-primary p-8 rounded-lg border border-gray-dark hover:border-gold-accent transition-all duration-500 group ${
                    benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-gold-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-raleway font-light text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-light font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 md:py-28 bg-black-primary">
        <div className="container-custom">
          <div
            ref={plansRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              plansVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
              NOSSOS PLANOS
            </span>
            <h2 className="text-3xl md:text-5xl font-raleway font-light mb-6 text-white">
              Escolha o Plano Ideal Para Você
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-black-secondary p-8 rounded-lg border border-gray-dark hover:border-gold-accent transition-all duration-500 hover:shadow-elegant ${
                  plansVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-2xl font-raleway font-light text-white mb-3">
                  {plan.name}
                </h3>
                <p className="text-gray-light font-light mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-light font-light">
                      <CheckCircle className="w-5 h-5 text-gold-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20odontol%C3%B3gico" target="_blank" rel="noopener noreferrer" className="block">
                  <GradientButton className="w-full uppercase tracking-wider">
                    Solicitar Cotação
                  </GradientButton>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-raleway font-light text-white mb-6">
            Pronto Para Cuidar do Seu Sorriso?
          </h2>
          <p className="text-gray-light text-lg mb-8 max-w-2xl mx-auto font-light">
            Entre em contato e encontre o plano odontológico perfeito para você e sua família
          </p>
          <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">
            <GradientButton className="uppercase tracking-wider text-sm px-8 py-4">
              Fale Conosco
            </GradientButton>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PlanosOdontologicos;
