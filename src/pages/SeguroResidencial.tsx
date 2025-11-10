import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Home, Check, Shield, Droplet } from "lucide-react";

const SeguroResidencial = () => {
  const benefits = [
    "Cobertura para incêndio, raio e explosão",
    "Proteção contra danos elétricos e vendaval",
    "Roubo e furto de bens",
    "Responsabilidade civil familiar",
    "Assistência residencial 24h (encanador, eletricista, chaveiro)",
    "Cobertura para equipamentos portáteis",
  ];

  return (
    <div className="min-h-screen bg-black-primary">
      <Header />
      
      <section className="pt-32 pb-20 bg-black-secondary">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-gold-accent font-light text-sm tracking-[0.2em] uppercase mb-4 block">
              SEGUROS
            </span>
            <h1 className="text-white text-5xl lg:text-6xl font-raleway font-light mb-6">
              Seguro Residencial
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              Proteja seu lar contra imprevistos e tenha tranquilidade para viver com segurança. 
              Cobertura completa para sua residência e seus bens.
            </p>
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Residencial" target="_blank" rel="noopener noreferrer">
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
                Por Que Proteger Sua Casa?
              </h2>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                Sua casa é um dos seus maiores patrimônios e merece proteção adequada. O seguro residencial 
                cobre diversos tipos de sinistros e ainda oferece assistência para pequenos reparos do dia a dia.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed">
                Com a Life Plans, você encontra planos com coberturas flexíveis que se adaptam ao 
                valor do seu imóvel e ao seu padrão de vida, com preços acessíveis.
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
              <Home className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Proteção Total</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Cobertura para estrutura, conteúdo e responsabilidade civil.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Shield className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Assistência 24h</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Encanador, eletricista, chaveiro e outros serviços essenciais.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Droplet className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Imprevistos</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Proteção contra vazamentos, danos elétricos e fenômenos naturais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black-primary text-center">
        <div className="container-custom">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Proteja Seu Lar Agora
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Solicite uma cotação gratuita e personalizada para sua residência
          </p>
          <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Residencial" target="_blank" rel="noopener noreferrer">
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

export default SeguroResidencial;
