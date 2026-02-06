import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Heart, Check, Users, Shield } from "lucide-react";
import { useEffect } from "react";

const PlanoSaudeColetivo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const benefits = [
    "Planos para profissionais de diversas categorias",
    "Preços mais acessíveis que planos individuais",
    "Rede credenciada ampla em mais de 50 cidades do interior de SP",
    "Telemedicina 24/7",
    "Sem necessidade de vínculo empregatício",
    "Possibilidade de incluir dependentes",
  ];

  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      <section className="pt-32 pb-20 bg-black-secondary">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-gold-accent font-light text-sm tracking-[0.2em] uppercase mb-4 block">
              PLANOS DE SAÚDE
            </span>
            <h1 className="text-white text-5xl lg:text-6xl font-raleway font-light mb-6">
              Coletivo por Adesão
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              Planos de saúde com condições especiais para profissionais e categorias.
              Aproveite preços diferenciados sem precisar de CNPJ.
            </p>
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Plano%20Coletivo%20por%20Ades%C3%A3o" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-gold text-black-primary hover:opacity-90 font-light px-10 py-6 rounded-none text-base shadow-elegant uppercase tracking-wider">
                Solicitar Cotação
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-white text-4xl font-raleway font-light mb-8">
                Vantagens do Coletivo por Adesão
              </h2>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                O plano coletivo por adesão é a opção ideal para profissionais liberais, autônomos e
                trabalhadores de categorias específicas que desejam um plano de saúde com preços mais acessíveis.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed">
                A Lifeplans trabalha com diversas entidades de classe e associações profissionais,
                oferecendo condições especiais para advogados, contadores, engenheiros, profissionais
                da saúde e muitas outras categorias.
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

      <section className="section-padding bg-black-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Users className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Para Profissionais</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Advogados, contadores, engenheiros, profissionais da saúde e diversas outras categorias.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Shield className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Preços Especiais</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Condições diferenciadas e mensalidades mais acessíveis que planos individuais tradicionais.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Heart className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Cobertura Completa</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Consultas, exames, internações, cirurgias e tratamentos com as melhores operadoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black-primary text-center">
        <div className="container-custom">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Encontre Seu Plano Coletivo
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Fale com nossos consultores e descubra as opções disponíveis para sua categoria
          </p>
          <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Plano%20Coletivo%20por%20Ades%C3%A3o" target="_blank" rel="noopener noreferrer">
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

export default PlanoSaudeColetivo;
