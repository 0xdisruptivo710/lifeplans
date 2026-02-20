import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Smartphone, Check, Shield, RefreshCw } from "lucide-react";
import { useEffect } from "react";

const SeguroCelular = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Proteção contra roubo e furto qualificado",
    "Cobertura para quebra acidental e danos",
    "Proteção contra oxidação por líquidos",
    "Aparelho reserva durante o reparo",
    "Cobertura para danos elétricos",
    "Válido em todo território nacional",
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
              Seguro Celular
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              Proteção total para seu smartphone contra roubo, quebra, danos e oxidação.
              Mantenha seu aparelho sempre protegido.
            </p>
            <a href="https://wa.me/551534118501?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Celular" target="_blank" rel="noopener noreferrer">
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
                Por Que Ter um Seguro de Celular?
              </h2>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                Seu smartphone é uma ferramenta essencial no dia a dia. Proteja seu investimento
                contra os imprevistos mais comuns como roubo, quedas e danos por líquidos.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed">
                Com a Lifeplans, você garante cobertura completa para seu aparelho com
                as melhores condições e agilidade no atendimento de sinistros.
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
              <Smartphone className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Todas as Marcas</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Cobertura para smartphones de todas as marcas e modelos do mercado.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Shield className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Proteção Total</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Roubo, furto, quebra, danos por líquidos e defeitos elétricos cobertos.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <RefreshCw className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Aparelho Reserva</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Não fique sem comunicação enquanto seu aparelho está em reparo ou substituição.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black-primary text-center">
        <div className="container-custom">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Proteja Seu Celular Agora
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Não espere o imprevisto acontecer. Garanta seu smartphone hoje mesmo.
          </p>
          <a href="https://wa.me/551534118501?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Celular" target="_blank" rel="noopener noreferrer">
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

export default SeguroCelular;
