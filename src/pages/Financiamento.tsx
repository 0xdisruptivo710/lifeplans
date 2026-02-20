import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
  Car,
  Briefcase,
  User,
  Check,
  Shield,
  TrendingUp,
  Clock,
  Calculator,
  Handshake,
  CheckCircle
} from "lucide-react";
import { useEffect } from "react";

const Financiamento = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tiposFinanciamento = [
    {
      icon: Car,
      title: "Financiamento Veicular",
      description: "Adquira seu veículo novo ou seminovo com parcelas que cabem no seu orçamento.",
      features: ["Aprovação rápida", "Veículos novos e seminovos", "Prazos flexíveis", "Taxas negociadas"],
    },
    {
      icon: User,
      title: "Crédito Pessoal",
      description: "Crédito para realizar seus projetos pessoais com condições facilitadas.",
      features: ["Sem burocracia", "Valores flexíveis", "Parcelas fixas", "Aprovação simplificada"],
    },
    {
      icon: Briefcase,
      title: "Financiamento Empresarial",
      description: "Capital para expandir seu negócio, adquirir equipamentos ou investir em infraestrutura.",
      features: ["Capital de giro", "Máquinas e equipamentos", "Expansão do negócio", "Linhas especiais"],
    },
  ];

  const diferenciais = [
    {
      icon: Calculator,
      title: "Consultoria Especializada",
      description: "Analisamos seu perfil e encontramos as melhores condições entre diversas instituições financeiras.",
    },
    {
      icon: Shield,
      title: "Segurança e Transparência",
      description: "Trabalhamos com total transparência em todas as etapas, sem custos ocultos.",
    },
    {
      icon: TrendingUp,
      title: "Melhores Taxas",
      description: "Por atuarmos como intermediários, negociamos taxas diferenciadas para nossos clientes.",
    },
    {
      icon: Clock,
      title: "Agilidade no Processo",
      description: "Cuidamos de toda a burocracia para que seu financiamento seja aprovado com rapidez.",
    },
    {
      icon: Handshake,
      title: "Parceiros de Confiança",
      description: "Relacionamento com os principais bancos e instituições financeiras do Brasil.",
    },
    {
      icon: CheckCircle,
      title: "Acompanhamento Total",
      description: "Do primeiro contato até a liberação do crédito, estamos ao seu lado em cada etapa.",
    },
  ];

  const comoFunciona = [
    {
      step: "01",
      title: "Contato Inicial",
      description: "Você nos conta seu objetivo e necessidade de crédito",
    },
    {
      step: "02",
      title: "Análise de Perfil",
      description: "Avaliamos seu perfil e buscamos as melhores opções disponíveis",
    },
    {
      step: "03",
      title: "Proposta Personalizada",
      description: "Apresentamos as melhores condições de taxas e prazos",
    },
    {
      step: "04",
      title: "Aprovação e Liberação",
      description: "Acompanhamos todo o processo até a liberação do seu crédito",
    },
  ];

  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black-secondary">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-gold-accent font-light text-sm tracking-[0.2em] uppercase mb-4 block">
              FINANCIAMENTO
            </span>
            <h1 className="text-white text-5xl lg:text-6xl font-raleway font-light mb-6">
              Financiamento <span className="text-gold-accent">Sob Medida</span>
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              A Lifeplans atua como consultora e intermediária para encontrar as melhores
              condições de financiamento para você. Trabalhamos com os principais bancos e
              instituições financeiras do Brasil.
            </p>
            <a href="https://wa.me/551534118501?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Financiamento" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-gold text-black-primary hover:opacity-90 font-light px-10 py-6 rounded-none text-base shadow-elegant uppercase tracking-wider">
                Simular Financiamento
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Tipos de Financiamento */}
      <section className="section-padding bg-black-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
              NOSSAS SOLUÇÕES
            </span>
            <h2 className="text-white text-3xl md:text-4xl font-raleway font-light mb-4">
              Tipos de Financiamento
            </h2>
            <p className="text-gray-light max-w-2xl mx-auto font-extralight">
              Soluções de crédito para diferentes necessidades e objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiposFinanciamento.map((tipo, index) => {
              const Icon = tipo.icon;
              return (
                <div
                  key={index}
                  className="bg-black-secondary border border-gray-dark p-10 hover:border-gold-accent transition-all duration-700"
                >
                  <Icon className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
                  <h3 className="text-white text-2xl font-light mb-4">
                    {tipo.title}
                  </h3>
                  <p className="text-gray-medium font-extralight leading-relaxed mb-6">
                    {tipo.description}
                  </p>
                  <ul className="space-y-3">
                    {tipo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-light text-sm">
                        <Check className="text-gold-accent mr-3 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="section-padding bg-black-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl md:text-4xl font-raleway font-light mb-4">
              Como Funciona
            </h2>
            <p className="text-gray-light max-w-2xl mx-auto font-extralight">
              Processo simples e transparente do início ao fim
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comoFunciona.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-gold-accent/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-light text-sm font-extralight">
                  {item.description}
                </p>
                {index < comoFunciona.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-0.5 bg-gradient-to-r from-gold-accent/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding bg-black-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl md:text-4xl font-raleway font-light mb-4">
              Nossos <span className="text-gold-accent">Diferenciais</span>
            </h2>
            <p className="text-gray-light max-w-2xl mx-auto font-extralight">
              Por que escolher a Lifeplans para seu financiamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((dif, index) => {
              const Icon = dif.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-black-secondary border border-gray-dark hover:border-gold-accent/30 transition-colors rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="text-gold-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      {dif.title}
                    </h3>
                    <p className="text-gray-light text-sm font-extralight">
                      {dif.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black-secondary text-center">
        <div className="container-custom">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Encontre o Financiamento Ideal
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Fale com nossos consultores e descubra as melhores condições para o seu perfil
          </p>
          <a href="https://wa.me/551534118501?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Financiamento" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-gold text-black-primary hover:opacity-90 font-light px-12 py-6 rounded-none text-lg shadow-elegant uppercase tracking-wider">
              Falar com Consultor
            </Button>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Financiamento;
