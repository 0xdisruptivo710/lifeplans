import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PartnerOperators } from "@/components/PartnerOperators";
import HowItWorks from "@/components/HowItWorks";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Heart, Users, Building2, Stethoscope, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroFamily from "@/assets/health-plan-hero.png";
import healthInsurance from "@/assets/health-insurance.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a diferença entre plano de saúde individual, familiar e empresarial?",
    answer: "O plano individual é para uma pessoa, o familiar cobre você e seus dependentes (cônjuge, filhos, pais), e o empresarial é voltado para empresas com colaboradores. Os planos empresariais geralmente têm melhores preços e condições, além de menos restrições na contratação."
  },
  {
    question: "Como funciona a carência dos planos de saúde?",
    answer: "A carência é o período de espera para utilizar determinados procedimentos. Consultas têm carência de 24h, exames simples de 3 meses, procedimentos de alta complexidade de 180 dias e partos de 300 dias. Urgência e emergência têm cobertura após 24h da contratação."
  },
  {
    question: "Quais são as principais operadoras disponíveis?",
    answer: "Trabalhamos com as melhores operadoras do mercado: Amil, SulAmérica, Bradesco Saúde, Unimed, Intermédica, entre outras. Cada uma oferece diferentes tipos de cobertura e redes credenciadas para atender suas necessidades específicas em todo o interior de São Paulo."
  },
  {
    question: "Como escolher o melhor plano de saúde?",
    answer: "Avaliamos diversos fatores: tamanho da rede credenciada na sua região, tipo de acomodação (enfermaria ou apartamento), cobertura nacional ou regional, tipos de procedimentos cobertos e seu orçamento. Nossa consultoria personalizada ajuda a encontrar o equilíbrio ideal."
  },
  {
    question: "O plano de saúde cobre exames e procedimentos?",
    answer: "Sim, os planos cobrem consultas, exames laboratoriais, de imagem, internações, cirurgias, tratamentos e terapias conforme o rol da ANS. A cobertura específica varia de acordo com o tipo de plano e segmentação escolhida (ambulatorial, hospitalar ou referência)."
  },
  {
    question: "Posso incluir dependentes no meu plano?",
    answer: "Sim, você pode incluir dependentes como cônjuge/companheiro(a), filhos (até 21 anos ou 24 anos se estudante universitário) e pais. A inclusão de dependentes pode ser feita no momento da contratação ou posteriormente, respeitando as carências."
  },
];

const plans = [
  {
    icon: Heart,
    title: "Plano de Saúde Individual",
    description: "Cobertura completa personalizada para você",
    features: ["Rede credenciada ampla", "Atendimento 24h", "Telemedicina incluída", "Cobertura nacional"],
    link: "/plano-saude-individual",
  },
  {
    icon: Users,
    title: "Plano de Saúde Familiar",
    description: "Proteção integral para toda sua família",
    features: ["Cobertura para dependentes", "Pediatria especializada", "Maternidade completa", "Descontos progressivos"],
    link: "/plano-saude-familiar",
  },
  {
    icon: Building2,
    title: "Plano de Saúde Empresarial",
    description: "Soluções corporativas completas",
    features: ["Gestão simplificada", "Planos personalizados", "Relatórios gerenciais", "Suporte dedicado"],
    link: "/plano-saude-empresarial",
  },
  {
    icon: Stethoscope,
    title: "Plano Odontológico",
    description: "Cuidados completos para seu sorriso",
    features: ["Prevenção e limpeza", "Tratamentos avançados", "Ortodontia incluída", "Emergências 24h"],
    link: "/plano-odontologico",
  },
];

const benefits = [
  "Acesso às melhores operadoras do mercado",
  "Consultoria especializada e personalizada",
  "Melhor custo-benefício garantido",
  "Atendimento ágil e humanizado",
  "Suporte durante toda a contratação",
  "Acompanhamento pós-venda contínuo",
];

const PlanosSaude = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroFamily})`,
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-raleway font-light text-white mb-6">
              Planos de Saúde
            </h1>
            <p className="text-lg md:text-xl text-gray-light max-w-2xl mx-auto font-light">
              Proteção completa para você e sua família com as melhores operadoras do mercado
            </p>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 bg-black-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const { ref, isVisible } = useScrollAnimation(0.2);
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    to={plan.link}
                    className="group bg-black-secondary border border-gray-dark p-10 hover:border-gold-accent transition-all duration-700 block h-full"
                  >
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="text-gold-accent group-hover:scale-110 transition-transform duration-300" size={48} strokeWidth={1.5} />
                    <ArrowRight className="text-gray-light group-hover:text-gold-accent group-hover:translate-x-2 transition-all duration-300" size={24} />
                  </div>
                  
                  <h3 className="text-white text-2xl font-light mb-4 group-hover:text-gold-accent transition-colors duration-300">
                    {plan.title}
                  </h3>
                  
                  <p className="text-gray-medium leading-relaxed font-extralight mb-6">
                    {plan.description}
                  </p>

                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-light text-sm">
                        <CheckCircle className="text-gold-accent mr-3 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={benefitsRef}
              className={`transition-all duration-1000 ${
                benefitsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
                DIFERENCIAIS
              </span>
              <h2 className="text-3xl md:text-4xl font-raleway font-light mb-8 text-foreground">
                Por que escolher a Lifeplans?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground font-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
              <img 
                src={healthInsurance} 
                alt="Profissionais de saúde" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="text-3xl md:text-5xl font-raleway font-light mb-6 text-white">
              Perguntas Sobre Planos de Saúde
            </h2>
            <p className="text-gray-light text-lg max-w-2xl mx-auto font-light">
              Tire suas principais dúvidas sobre nossos planos de saúde
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-black-secondary border border-gray-dark rounded-lg px-6 hover:border-gold-accent transition-colors"
                >
                  <AccordionTrigger className="text-white font-raleway font-light text-lg py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-light font-light leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <PartnerOperators />
      <HowItWorks />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PlanosSaude;