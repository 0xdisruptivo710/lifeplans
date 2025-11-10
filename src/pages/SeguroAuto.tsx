import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Car, Check, Shield, Wrench } from "lucide-react";

const SeguroAuto = () => {
  const benefits = [
    "Cobertura completa para colisão, roubo e furto",
    "Assistência 24 horas em todo território nacional",
    "Carro reserva em caso de sinistro",
    "Cobertura para terceiros e danos materiais",
    "Proteção para vidros, faróis e retrovisores",
    "Descontos por bom histórico e dispositivos de segurança",
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
              Seguro Auto
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              Proteção completa para seu veículo com as melhores seguradoras. 
              Dirija com tranquilidade sabendo que está protegido.
            </p>
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Auto" target="_blank" rel="noopener noreferrer">
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
                Por Que Ter um Seguro Auto?
              </h2>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                O seguro auto é fundamental para proteger seu patrimônio e garantir tranquilidade no dia a dia. 
                Além de obrigatório em muitos casos de financiamento, oferece cobertura completa para imprevistos.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed">
                Com a Life Plans, você encontra as melhores opções do mercado com coberturas flexíveis 
                e preços competitivos para todos os perfis de motoristas.
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
              <Car className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Cobertura Total</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Proteção contra colisão, roubo, furto, incêndio e fenômenos naturais.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Shield className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Assistência 24h</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Guincho, chaveiro, pane elétrica e mecânica em todo Brasil.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Wrench className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Carro Reserva</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Não fique sem mobilidade enquanto seu carro está em reparo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black-primary text-center">
        <div className="container-custom">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Proteja Seu Veículo Agora
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Faça uma cotação gratuita e compare as melhores opções
          </p>
          <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Auto" target="_blank" rel="noopener noreferrer">
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

export default SeguroAuto;
