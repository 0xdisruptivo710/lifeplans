import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
  HardHat,
  Check,
  Shield,
  Wrench,
  Building2,
  Cog,
  AlertTriangle,
  FileCheck,
  CheckCircle
} from "lucide-react";
import { useEffect } from "react";

const SeguroEngenharia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categorias = [
    {
      icon: HardHat,
      title: "Riscos de Engenharia",
      description: "Proteção abrangente para obras e construções civis contra danos materiais, acidentes e imprevistos durante a execução.",
      features: [
        "Obras civis em construção",
        "Reformas e ampliações",
        "Montagem e instalação de equipamentos",
        "Danos a terceiros na obra",
      ],
    },
    {
      icon: Shield,
      title: "RC Geral e Profissional",
      description: "Cobertura de Responsabilidade Civil para profissionais e empresas que precisam se proteger contra reclamações de terceiros.",
      features: [
        "RC para engenheiros e arquitetos",
        "RC para construtoras",
        "Erros e omissões profissionais",
        "Danos corporais e materiais a terceiros",
      ],
    },
    {
      icon: Cog,
      title: "Máquinas e Equipamentos",
      description: "Seguro especializado para máquinas pesadas, equipamentos industriais e ferramentas utilizadas em obras e operações.",
      features: [
        "Equipamentos pesados e guindastes",
        "Máquinas industriais",
        "Ferramentas especializadas",
        "Cobertura contra danos e roubo",
      ],
    },
    {
      icon: Wrench,
      title: "RC de Montagem e Desmontagem",
      description: "Proteção durante operações de montagem e desmontagem de estruturas, equipamentos e instalações industriais.",
      features: [
        "Montagem de estruturas metálicas",
        "Instalação de equipamentos industriais",
        "Desmontagem planejada",
        "Cobertura para teste e comissionamento",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Riscos Maiores e Especializados",
      description: "Cobertura para projetos de grande porte e alta complexidade que exigem proteção especializada.",
      features: [
        "Obras de infraestrutura",
        "Projetos de energia",
        "Instalações industriais complexas",
        "Túneis, barragens e pontes",
      ],
    },
    {
      icon: FileCheck,
      title: "Garantia de Obras",
      description: "Seguros de garantia para licitações, contratos e obrigações em obras públicas e privadas.",
      features: [
        "Seguro garantia para licitações",
        "Garantia de execução contratual",
        "Garantia de manutenção corretiva",
        "Adiantamento de pagamento",
      ],
    },
  ];

  const beneficios = [
    "Proteção patrimonial durante toda a obra",
    "Cobertura para danos a terceiros",
    "Atendimento a exigências contratuais e licitatórias",
    "Segurança financeira contra imprevistos",
    "Proteção de equipamentos e maquinários",
    "Consultoria especializada no setor",
  ];

  return (
    <div className="min-h-screen bg-black-primary">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black-secondary">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-gold-accent font-light text-sm tracking-[0.2em] uppercase mb-4 block">
              SEGUROS ESPECIALIZADOS
            </span>
            <h1 className="text-white text-5xl lg:text-6xl font-raleway font-light mb-6">
              Engenharia & <span className="text-gold-accent">Responsabilidade Civil</span>
            </h1>
            <p className="text-gray-light text-xl font-extralight leading-relaxed mb-8">
              Soluções completas em seguros para o setor de construção civil, engenharia e
              responsabilidade civil. Proteção especializada para obras, equipamentos e profissionais.
            </p>
            <a href="https://wa.me/551534118501?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20de%20Engenharia%20e%20RC" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-gold text-black-primary hover:opacity-90 font-light px-10 py-6 rounded-none text-base shadow-elegant uppercase tracking-wider">
                Solicitar Cotação
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="section-padding bg-black-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
              NOSSAS COBERTURAS
            </span>
            <h2 className="text-white text-3xl md:text-4xl font-raleway font-light mb-4">
              Soluções em Engenharia e RC
            </h2>
            <p className="text-gray-light max-w-2xl mx-auto font-extralight">
              Coberturas específicas para cada necessidade do setor de construção e engenharia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div
                  key={index}
                  className="bg-black-secondary border border-gray-dark p-8 hover:border-gold-accent transition-all duration-700"
                >
                  <Icon className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
                  <h3 className="text-white text-xl font-light mb-4">
                    {cat.title}
                  </h3>
                  <p className="text-gray-medium font-extralight leading-relaxed mb-6 text-sm">
                    {cat.description}
                  </p>
                  <ul className="space-y-2">
                    {cat.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-light text-sm">
                        <CheckCircle className="text-gold-accent mr-3 flex-shrink-0" size={14} />
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

      {/* Benefícios */}
      <section className="section-padding bg-black-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-white text-4xl font-raleway font-light mb-8">
                Por Que Contratar Seguro de Engenharia?
              </h2>
              <p className="text-gray-light text-lg font-extralight leading-relaxed mb-6">
                Obras e projetos de engenharia envolvem riscos significativos que podem comprometer
                prazos, orçamentos e a segurança de todos os envolvidos. O seguro de engenharia
                garante proteção financeira e tranquilidade durante toda a execução.
              </p>
              <p className="text-gray-light text-lg font-extralight leading-relaxed">
                Com a Lifeplans, você conta com consultoria especializada para identificar os
                riscos específicos do seu projeto e montar uma proteção sob medida.
              </p>
            </div>
            <div className="space-y-4">
              {beneficios.map((beneficio, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-black-primary border border-gray-dark hover:border-gold-accent transition-all duration-300"
                >
                  <Check className="text-gold-accent flex-shrink-0 mt-1" size={24} strokeWidth={1.5} />
                  <p className="text-gray-light font-extralight">{beneficio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding bg-black-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black-secondary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Building2 className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Todos os Portes</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                De pequenas reformas a grandes obras de infraestrutura, temos a solução ideal.
              </p>
            </div>
            <div className="bg-black-secondary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <Shield className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Proteção Completa</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Coberturas para riscos de engenharia, RC profissional e garantias contratuais.
              </p>
            </div>
            <div className="bg-black-secondary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-300">
              <HardHat className="text-gold-accent mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-white text-2xl font-light mb-4">Especialistas</h3>
              <p className="text-gray-medium font-extralight leading-relaxed">
                Equipe com conhecimento técnico para avaliar e propor as melhores coberturas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black-secondary text-center">
        <div className="container-custom">
          <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-6">
            Proteja Sua Obra e Seu Negócio
          </h2>
          <p className="text-gray-light text-xl font-extralight mb-10 max-w-2xl mx-auto">
            Fale com nossos consultores especializados em seguros de engenharia e responsabilidade civil
          </p>
          <a href="https://wa.me/551534118501?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Seguro%20de%20Engenharia%20e%20RC" target="_blank" rel="noopener noreferrer">
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

export default SeguroEngenharia;
