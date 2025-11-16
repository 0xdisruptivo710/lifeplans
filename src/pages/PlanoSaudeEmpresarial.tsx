import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Building2, Check, TrendingUp, Users } from "lucide-react";

const PlanoSaudeEmpresarial = () => {
  const benefits = [
    "Planos personalizados para empresas de todos os portes",
    "Gestão completa com assessoria especializada",
    "Aumento de produtividade e redução de absenteísmo",
    "Atração e retenção de talentos",
    "Flexibilidade nas modalidades de contratação",
    "Relatórios gerenciais e acompanhamento constante",
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
              Plano de Saúde Empresarial
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              Cuide da saúde dos seus colaboradores e invista no crescimento da sua empresa. 
              Planos corporativos sob medida para seu negócio.
            </p>
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Plano%20de%20Sa%C3%BAde%20Empresarial" target="_blank" rel="noopener noreferrer">
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
                Por Que Investir em Plano de Saúde Empresarial?
              </h2>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                Oferecer plano de saúde aos colaboradores é muito mais que um benefício: é um investimento 
                estratégico que melhora o clima organizacional, aumenta a produtividade e reduz o turnover.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed">
                Com a Lifeplans, você conta com consultoria especializada para encontrar o plano ideal
                para sua empresa, com as melhores operadoras e condições do mercado.
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
              <h3 className="text-white text-2xl font-light mb-4">Todos os Portes</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Soluções para MEI, micro, pequenas, médias e grandes empresas.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Users className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Gestão Completa</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Assessoria em inclusões, exclusões, reajustes e sinistralidade.
              </p>
            </div>
            <div className="bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <TrendingUp className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Valorização</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Diferencie sua empresa e atraia os melhores profissionais do mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black-primary text-center">
        <div className="container-custom">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Solicite uma Proposta Personalizada
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Nossos consultores especializados estão prontos para atender sua empresa
          </p>
          <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Plano%20de%20Sa%C3%BAde%20Empresarial" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-gold text-black-primary hover:opacity-90 font-light px-12 py-6 rounded-none text-lg shadow-elegant uppercase tracking-wider">
              Falar com Especialista
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PlanoSaudeEmpresarial;
