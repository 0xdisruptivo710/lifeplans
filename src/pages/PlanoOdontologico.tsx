import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Smile, Check, Star, Shield, Users } from "lucide-react";
import { useEffect } from "react";

const PlanoOdontologico = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Consultas e check-ups dentários regulares",
    "Limpezas, restaurações e tratamento de canal",
    "Ortodontia e implantes (conforme plano)",
    "Rede credenciada ampla com dentistas qualificados",
    "Atendimento de urgência 24h",
    "Planos a partir de 2 pessoas",
  ];

  const planTypes = [
    {
      icon: Check,
      title: "Planos Essenciais",
      description: "Para consultas de rotina, limpezas e prevenção básica.",
    },
    {
      icon: Star,
      title: "Planos Completos",
      description: "Incluindo tratamentos como restaurações, canal, extrações e muito mais.",
    },
    {
      icon: Shield,
      title: "Planos Premium",
      description: "Com procedimentos avançados como Ortodontia e Implantes, para um sorriso duradouro e confiante.",
    },
  ];

  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black-secondary">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-gold-accent font-light text-sm tracking-[0.2em] uppercase mb-4 block">
              PLANOS ODONTOLÓGICOS
            </span>
            <h1 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6 leading-tight">
              As Melhores Operadoras, o Melhor Cuidado com Cobertura Nacional e Acessível para Você, Sua Família ou Sua Empresa.
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              Mais que um plano, é a tranquilidade de ver sua família sorrindo sem preocupações, onde quer que estejam no Brasil. Na Lifeplans, somos sua ponte para as melhores soluções em saúde bucal.
            </p>
            <a href="https://wa.me/551534118501?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Plano%20Odontol%C3%B3gico" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-gold text-black-primary hover:opacity-90 font-light px-10 py-6 rounded-none text-base shadow-elegant uppercase tracking-wider">
                Solicitar Cotação
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-black-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-white text-4xl font-raleway font-light mb-8">
                Sua Parceira Estratégica em Saúde Bucal
              </h2>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                Como corretora especializada, conectamos você às operadoras líderes de mercado, garantindo prevenção eficaz, tratamentos de alta qualidade e o suporte que você merece para um sorriso perfeito e seguro em todo o território nacional.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                A Lifeplans seleciona e trabalha exclusivamente com as melhores e mais renomadas operadoras odontológicas do mercado. Isso significa que você tem acesso a uma rede credenciada vasta e qualificada, com cobertura nacional, em capitais e interior.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed">
                Conte com a Lifeplans para encontrar o plano ideal, que se encaixa perfeitamente às suas necessidades e oferece atendimento de qualidade, perto de você ou em qualquer lugar do Brasil.
              </p>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-black-secondary border border-gray-dark hover:border-gold-accent transition-all duration-300"
                >
                  <Check className="text-gold-accent flex-shrink-0 mt-1" size={24} strokeWidth={1.5} />
                  <p className="text-gray-light font-extralight">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plan Types Section */}
      <section className="section-padding bg-black-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl font-raleway font-light mb-6">
              Encontre o Plano Perfeito para o Seu Sorriso
            </h2>
            <p className="text-gray-light text-lg font-extralight max-w-3xl mx-auto">
              Na Lifeplans, sabemos que cada sorriso é único. Por sermos uma corretora que representa as principais operadoras, podemos oferecer uma ampla variedade de planos e coberturas, garantindo a flexibilidade que você busca.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planTypes.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div key={index} className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
                  <Icon className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
                  <h3 className="text-white text-2xl font-light mb-4">{plan.title}</h3>
                  <p className="text-gray-medium font-extralight leading-relaxed">
                    {plan.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-black-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black-secondary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Smile className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Prevenção</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Limpezas regulares e check-ups preventivos para evitar problemas futuros.
              </p>
            </div>
            <div className="bg-black-secondary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Star className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Qualidade</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Rede credenciada com dentistas experientes e clínicas bem equipadas.
              </p>
            </div>
            <div className="bg-black-secondary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Users className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">A partir de 2 pessoas</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Planos acessíveis para você e sua família ou empresa, com mensalidades que cabem no seu bolso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black-secondary text-center">
        <div className="container-custom">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Garanta Seu Sorriso Saudável
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Fale com nossos consultores e encontre o plano odontológico ideal
          </p>
          <a href="https://wa.me/551534118501?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Plano%20Odontol%C3%B3gico" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-gold text-black-primary hover:opacity-90 font-light px-12 py-6 rounded-none text-lg shadow-elegant uppercase tracking-wider">
              Solicitar Cotação Gratuita
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PlanoOdontologico;
