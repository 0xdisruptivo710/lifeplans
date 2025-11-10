import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Heart, Check, Users, Shield } from "lucide-react";

const PlanoSaudeFamiliar = () => {
  const benefits = [
    "Cobertura para todos os membros da família",
    "Atendimento em hospitais e clínicas de excelência",
    "Rede credenciada ampla em Sorocaba e região",
    "Telemedicina para toda a família 24/7",
    "Economia com planos familiares",
    "Programas de saúde preventiva e bem-estar",
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
              Plano de Saúde Familiar
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              Proteja toda sua família com um único plano. Cobertura completa, economia e tranquilidade 
              para quem você mais ama.
            </p>
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Plano%20de%20Sa%C3%BAde%20Familiar" target="_blank" rel="noopener noreferrer">
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
                Vantagens do Plano Familiar
              </h2>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                Com o plano de saúde familiar da Life Plans, você garante proteção completa para todos os membros 
                da sua família com economia e praticidade. Um único plano, uma única mensalidade.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed">
                Oferecemos planos com diferentes perfis de cobertura, incluindo dependentes de qualquer idade, 
                desde recém-nascidos até idosos.
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
              <h3 className="text-white text-2xl font-light mb-4">Para Toda Família</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Inclua cônjuge, filhos, pais e outros dependentes em um único plano com economia.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Shield className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Proteção Completa</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Cobertura para consultas, exames, internações, cirurgias e tratamentos para todos.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Heart className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Cuidado Preventivo</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Programas de saúde preventiva e check-ups regulares para toda a família.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black-primary text-center">
        <div className="container-custom">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Proteja Sua Família Agora
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Fale com nossos consultores e receba uma cotação personalizada
          </p>
          <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Plano%20de%20Sa%C3%BAde%20Familiar" target="_blank" rel="noopener noreferrer">
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

export default PlanoSaudeFamiliar;
