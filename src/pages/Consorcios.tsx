import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GradientButton } from "@/components/ui/gradient-button";
import { 
  Car, 
  Home, 
  Bike, 
  Trophy, 
  TrendingUp, 
  CheckCircle, 
  Calculator,
  Shield,
  Clock,
  Users,
  Award,
  Wallet
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const Consorcios = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    setIsHeroVisible(true);
  }, []);

  const consorcioTypes = [
    {
      icon: Car,
      title: "Consórcio de Automóveis",
      description: "Adquira seu veículo novo ou seminovo com parcelas que cabem no seu bolso, sem os juros do financiamento tradicional.",
      benefits: ["Cartas de R$ 30 mil a R$ 300 mil", "Parcelas de 60 a 100 meses", "Use como entrada ou valor total"],
    },
    {
      icon: Home,
      title: "Consórcio Imobiliário",
      description: "Realize o sonho da casa própria, apartamento ou terreno com planejamento financeiro inteligente.",
      benefits: ["Cartas de R$ 100 mil a R$ 1 milhão", "Parcelas de 120 a 240 meses", "Use para construção ou reforma"],
    },
    {
      icon: Bike,
      title: "Consórcio de Motos",
      description: "Sua moto nova com as melhores condições do mercado e sem complicações.",
      benefits: ["Cartas de R$ 10 mil a R$ 50 mil", "Parcelas de 36 a 72 meses", "Contemplação rápida"],
    },
  ];

  const advantages = [
    {
      icon: Wallet,
      title: "Sem Juros",
      description: "Apenas taxa de administração diluída nas parcelas",
    },
    {
      icon: Calculator,
      title: "Parcelas Fixas",
      description: "Planejamento financeiro com parcelas previsíveis",
    },
    {
      icon: TrendingUp,
      title: "Poder de Compra",
      description: "Na contemplação, você negocia como pagamento à vista",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Regulamentado pelo Banco Central do Brasil",
    },
    {
      icon: Clock,
      title: "Flexibilidade",
      description: "Prazos de 36 a 240 meses conforme sua necessidade",
    },
    {
      icon: Users,
      title: "Para Todos",
      description: "Pessoas físicas e jurídicas podem participar",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Escolha seu Consórcio",
      description: "Defina o tipo de bem, valor da carta e prazo ideal para você",
    },
    {
      step: "02",
      title: "Pague as Parcelas",
      description: "Mensalmente você contribui com o grupo de consórcio",
    },
    {
      step: "03",
      title: "Aguarde a Contemplação",
      description: "Por sorteio mensal ou ofertando lances para antecipar",
    },
    {
      step: "04",
      title: "Adquira seu Bem",
      description: "Com a carta contemplada, compre à vista com todo poder de negociação",
    },
  ];

  const faqs = [
    {
      question: "O que é consórcio?",
      answer: "Consórcio é uma modalidade de compra programada onde um grupo de pessoas se reúne para formar uma poupança comum, possibilitando a aquisição de bens de alto valor sem juros.",
    },
    {
      question: "Qual a diferença entre consórcio e financiamento?",
      answer: "No financiamento você paga juros sobre o valor do bem. No consórcio, você paga apenas uma taxa de administração diluída nas parcelas, resultando em economia significativa.",
    },
    {
      question: "Como funciona a contemplação?",
      answer: "A contemplação pode ocorrer por sorteio mensal (todos têm chance igual) ou por lance (você oferta um valor para antecipar sua carta de crédito).",
    },
    {
      question: "Posso usar o FGTS no consórcio imobiliário?",
      answer: "Sim! Você pode usar o FGTS para dar lances, complementar o valor da carta ou amortizar parcelas no consórcio imobiliário.",
    },
    {
      question: "E se eu desistir do consórcio?",
      answer: "Você pode solicitar a desistência e receberá os valores pagos de forma proporcional, conforme regras do contrato e legislação vigente.",
    },
  ];

  return (
    <div className="min-h-screen bg-black-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="text-gold-accent" size={36} />
              <span className="text-gold-accent uppercase tracking-widest text-sm font-medium">
                Prêmio Porto Bank 2025 - Categoria Consórcio
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6">
              Consórcios <span className="text-gold-accent font-normal">Premiados</span>
            </h1>
            
            <p className="text-gray-light text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Há 16 anos ajudando famílias e empresas do interior de São Paulo a 
              conquistarem seus sonhos com planejamento financeiro inteligente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20cons%C3%B3rcios" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GradientButton className="uppercase tracking-wider text-lg px-10 py-4">
                  Simular Agora
                </GradientButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Award Highlight */}
      <section className="py-12 bg-gradient-to-r from-gold-accent/20 via-gold-accent/10 to-gold-accent/20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <Award className="text-gold-accent" size={48} />
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-foreground">
                Reconhecimento de Excelência
              </h3>
              <p className="text-gray-light">
                Em 2025, a Lifeplans foi premiada pelo Porto Bank na categoria Consórcio, 
                reafirmando nosso compromisso com a qualidade e atendimento diferenciado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Consórcio */}
      <section className="py-20 md:py-32 bg-black-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Tipos de Consórcio
            </h2>
            <p className="text-gray-light max-w-2xl mx-auto">
              Oferecemos opções para todos os perfis e objetivos. Encontre o consórcio 
              ideal para realizar seus planos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consorcioTypes.map((tipo, index) => (
              <div
                key={tipo.title}
                className="group bg-black-primary border border-gray-dark rounded-2xl p-8 hover:border-gold-accent/50 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-accent/20 to-gold-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tipo.icon className="text-gold-accent" size={32} />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {tipo.title}
                </h3>
                <p className="text-gray-light text-sm leading-relaxed mb-6">
                  {tipo.description}
                </p>
                <ul className="space-y-2">
                  {tipo.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-gold-accent shrink-0" size={16} />
                      <span className="text-gray-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 md:py-32 bg-black-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Vantagens do <span className="text-gold-accent">Consórcio</span>
            </h2>
            <p className="text-gray-light max-w-2xl mx-auto">
              Por que milhares de pessoas escolhem o consórcio para realizar seus sonhos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className="flex items-start gap-4 p-6 bg-black-secondary rounded-xl border border-gray-dark hover:border-gold-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-accent/10 flex items-center justify-center shrink-0">
                  <advantage.icon className="text-gold-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-light text-sm">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 md:py-32 bg-black-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-gray-light max-w-2xl mx-auto">
              Entenda o passo a passo do consórcio de forma simples e clara
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="text-6xl font-bold text-gold-accent/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-light text-sm">
                  {step.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-0.5 bg-gradient-to-r from-gold-accent/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-black-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-light max-w-2xl mx-auto">
              Tire suas dúvidas sobre consórcios
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-black-secondary border border-gray-dark rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-foreground font-medium pr-4">{faq.question}</span>
                  <span className="text-gold-accent text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-light">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black-secondary to-black-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Pronto para Realizar seu Sonho?
            </h2>
            <p className="text-gray-light text-lg mb-10">
              Fale com nossos especialistas e descubra o consórcio ideal para você. 
              Atendimento personalizado em mais de 50 cidades do interior de São Paulo.
            </p>
            <a 
              href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20cons%C3%B3rcios" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GradientButton className="uppercase tracking-wider text-lg px-12 py-4">
                Falar com Especialista
              </GradientButton>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Consorcios;
