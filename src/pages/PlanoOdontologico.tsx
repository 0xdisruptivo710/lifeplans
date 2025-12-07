import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Smile, Check, Star } from "lucide-react";

const PlanoOdontologico = () => {
  const benefits = [
    "Consultas e check-ups dentários regulares",
    "Limpezas, restaurações e tratamento de canal",
    "Ortodontia e implantes (conforme plano)",
    "Rede credenciada ampla com dentistas qualificados",
    "Atendimento de urgência 24h",
    "Planos individual, familiar e empresarial",
  ];

  return (
    <div className="min-h-screen bg-black-primary">
      <Header />
      
      <section className="pt-32 pb-20 bg-black-secondary">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-gold-accent font-light text-sm tracking-[0.2em] uppercase mb-4 block">
              PLANOS ODONTOLÓGICOS
            </span>
            <h1 className="text-white text-5xl lg:text-6xl font-raleway font-light mb-6">
              Plano Odontológico
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              Cuide da saúde bucal de toda sua família com planos completos e acessíveis. 
              Prevenção e tratamento com dentistas de qualidade.
            </p>
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Plano%20Odontol%C3%B3gico" target="_blank" rel="noopener noreferrer">
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
                Saúde Bucal é Essencial
              </h2>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                O plano odontológico é fundamental para manter a saúde bucal em dia e prevenir problemas 
                mais graves. Com a Lifeplans, você tem acesso a uma rede credenciada de dentistas
                qualificados em mais de 50 cidades do interior de São Paulo.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed">
                Oferecemos planos com diferentes coberturas, desde básicas até completas com ortodontia 
                e implantes, para atender todas as necessidades da sua família.
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
              <Smile className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Prevenção</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Limpezas regulares e check-ups preventivos para evitar problemas futuros.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Star className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Qualidade</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Rede credenciada com dentistas experientes e clínicas bem equipadas.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Check className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Economia</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Planos acessíveis com mensalidades que cabem no seu bolso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black-primary text-center">
        <div className="container-custom">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Garanta Seu Sorriso Saudável
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Fale com nossos consultores e encontre o plano odontológico ideal
          </p>
          <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Plano%20Odontol%C3%B3gico" target="_blank" rel="noopener noreferrer">
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
