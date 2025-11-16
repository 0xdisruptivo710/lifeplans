import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Heart, Check, Shield, Clock } from "lucide-react";

const PlanoSaudeIndividual = () => {
  const benefits = [
    "Atendimento em hospitais e clínicas de primeira linha",
    "Cobertura para consultas, exames e procedimentos",
    "Rede credenciada ampla em Sorocaba e região",
    "Telemedicina disponível 24/7",
    "Cobertura para urgência e emergência",
    "Planos com ou sem coparticipação",
  ];

  const operators = [
    "Amil",
    "SulAmérica",
    "Bradesco Saúde",
    "Unimed Sorocaba",
    "Intermédica",
    "Fênix Saúde",
  ];

  return (
    <div className="min-h-screen bg-black-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black-secondary">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-gold-accent font-light text-sm tracking-[0.2em] uppercase mb-4 block">
              PLANOS DE SAÚDE
            </span>
            <h1 className="text-white text-5xl lg:text-6xl font-raleway font-light mb-6">
              Plano de Saúde Individual
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              Proteção completa para sua saúde com as melhores operadoras do mercado. 
              Atendimento personalizado e planos sob medida para suas necessidades.
            </p>
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Plano%20de%20Sa%C3%BAde%20Individual" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-gold text-black-primary hover:opacity-90 font-light px-10 py-6 rounded-none text-base shadow-elegant uppercase tracking-wider">
                Solicitar Cotação
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-black-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-white text-4xl font-raleway font-light mb-8">
                Por Que Escolher um Plano Individual?
              </h2>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                O plano de saúde individual é ideal para quem busca autonomia e proteção completa. 
                Com a Lifeplans, você tem acesso às melhores operadoras do mercado e um atendimento
                consultivo para encontrar o plano perfeito para seu perfil.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed">
                Oferecemos planos com diferentes níveis de acomodação e abrangência, desde enfermaria 
                até apartamento, com cobertura nacional ou regional, conforme sua necessidade.
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

      {/* Features Grid */}
      <section className="section-padding bg-black-secondary">
        <div className="container-custom">
          <h2 className="text-white text-4xl font-raleway font-light mb-12 text-center">
            Principais Características
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Heart className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Cobertura Completa</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Consultas, exames, internações, cirurgias e tratamentos com cobertura regulamentada pela ANS.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Shield className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Sem Carência</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Opções de planos sem carência para portabilidade ou em condições especiais de contratação.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Clock className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Atendimento Ágil</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Suporte especializado e consultoria personalizada para todas as suas dúvidas e necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operators Section */}
      <section className="section-padding bg-black-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-4xl font-raleway font-light mb-8">
              Operadoras Parceiras
            </h2>
            <p className="text-gray-light text-lg font-extralight mb-12">
              Trabalhamos com as principais operadoras do mercado para oferecer as melhores opções
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {operators.map((operator, index) => (
                <div
                  key={index}
                  className="bg-black-secondary border border-gray-dark p-6 hover:border-gold-accent transition-all duration-300"
                >
                  <p className="text-white font-light text-lg">{operator}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black-secondary">
        <div className="container-custom text-center">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Pronto para Contratar seu Plano?
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Fale com nossos especialistas e receba uma cotação personalizada
          </p>
          <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Plano%20de%20Sa%C3%BAde%20Individual" target="_blank" rel="noopener noreferrer">
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

export default PlanoSaudeIndividual;
