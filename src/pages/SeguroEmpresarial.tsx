import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Building2, Check, Shield, TrendingUp } from "lucide-react";

const SeguroEmpresarial = () => {
  const benefits = [
    "Cobertura para incêndio e riscos patrimoniais",
    "Proteção contra roubo de equipamentos e mercadorias",
    "Responsabilidade civil geral e profissional",
    "Interrupção de atividades (lucros cessantes)",
    "Equipamentos eletrônicos e maquinário",
    "Seguros específicos por ramo de atividade",
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
              Seguro Empresarial
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              Proteja seu negócio contra riscos e imprevistos que podem comprometer suas operações. 
              Soluções completas para empresas de todos os portes.
            </p>
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Empresarial" target="_blank" rel="noopener noreferrer">
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
                Por Que Investir em Seguro Empresarial?
              </h2>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                O seguro empresarial é essencial para garantir a continuidade do seu negócio em casos 
                de sinistros. Proteja seu patrimônio, seus colaboradores e sua operação contra diversos riscos.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed">
                Com a Lifeplans, você conta com consultoria especializada para identificar os riscos
                específicos do seu segmento e montar uma proteção sob medida para sua empresa.
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
              <Building2 className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Todos os Segmentos</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Soluções específicas para comércio, indústria, serviços e agronegócio.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Shield className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Proteção Total</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Cobertura para patrimônio, responsabilidade civil e lucros cessantes.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <TrendingUp className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Continuidade</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Garanta a continuidade das operações mesmo diante de imprevistos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black-primary text-center">
        <div className="container-custom">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Proteja Seu Negócio Agora
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Fale com nossos consultores especializados em seguros empresariais
          </p>
          <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20Empresarial" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-gold text-black-primary hover:opacity-90 font-light px-12 py-6 rounded-none text-lg shadow-elegant uppercase tracking-wider">
              Solicitar Proposta Personalizada
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SeguroEmpresarial;
