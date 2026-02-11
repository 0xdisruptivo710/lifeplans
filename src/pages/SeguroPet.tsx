import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Dog, Check, Shield, Heart } from "lucide-react";
import { useEffect } from "react";

const SeguroPet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Consultas veterinárias com rede credenciada",
    "Cirurgias e internações cobertas",
    "Vacinas e exames laboratoriais",
    "Emergências veterinárias 24 horas",
    "Cobertura para tratamentos especializados",
    "Assistência funeral pet",
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
              Seguro Pet
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              Cuidado completo para seu animal de estimação. Garanta saúde e bem-estar
              para quem faz parte da sua família.
            </p>
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Pet" target="_blank" rel="noopener noreferrer">
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
                Por Que Ter um Seguro Pet?
              </h2>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                Seu pet merece o melhor cuidado. O seguro pet garante acesso a consultas,
                cirurgias, exames e emergências veterinárias sem comprometer seu orçamento.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed">
                Com a Lifeplans, você encontra planos completos para cães e gatos,
                com rede credenciada de qualidade e atendimento em toda a região.
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
              <Dog className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Cães e Gatos</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Planos especializados para cães e gatos de todas as raças e idades.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Shield className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Cobertura Completa</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Consultas, cirurgias, internações, vacinas e exames em uma única apólice.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Heart className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Emergência 24h</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Atendimento veterinário de emergência disponível a qualquer hora do dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black-primary text-center">
        <div className="container-custom">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Proteja Seu Pet Agora
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Garanta saúde e cuidado completo para seu melhor amigo
          </p>
          <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Pet" target="_blank" rel="noopener noreferrer">
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

export default SeguroPet;
