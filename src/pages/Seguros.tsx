import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, Car, Home, Building2, CheckCircle, ArrowRight, Bike, Truck, Dog, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import segurosHero1 from "@/assets/carro_1.jpg.png";
import segurosHero2 from "@/assets/carro_2.jpg.png";
import segurosHero3 from "@/assets/carro_3.jpg.png";
import jetskiLuxury from "@/assets/jetski-new.jpg.png";

const heroImages = [segurosHero1, segurosHero2, segurosHero3];
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a diferença entre os tipos de seguro?",
    answer: "Cada seguro protege um bem específico: o seguro de vida protege sua família financeiramente, o auto protege seu veículo, o residencial protege seu lar e patrimônio, e o empresarial protege seu negócio. Cada um tem coberturas específicas para suas necessidades."
  },
  {
    question: "Como funciona o pagamento de indenização?",
    answer: "Após a ocorrência de um sinistro coberto, você aciona a seguradora, que analisa o caso e realiza o pagamento da indenização conforme o valor segurado contratado. O prazo varia de acordo com o tipo de sinistro e seguradora, mas geralmente é de até 30 dias após a entrega de toda documentação."
  },
  {
    question: "Posso contratar mais de um seguro?",
    answer: "Sim, é altamente recomendável ter múltiplas proteções para diferentes aspectos da sua vida: seguro de vida para sua família, auto para seu veículo, residencial para seu lar. Oferecemos pacotes combinados com condições especiais."
  },
  {
    question: "O que fazer em caso de sinistro?",
    answer: "Entre em contato imediatamente com a Lifeplans através do nosso WhatsApp ou telefone. Nossa equipe especializada irá orientá-lo em todo o processo, cuidando da comunicação com a seguradora, documentação necessária e acompanhamento até o recebimento da sua indenização."
  },
  {
    question: "Como é calculado o valor do seguro?",
    answer: "O prêmio (valor pago) é calculado com base em diversos fatores: tipo de cobertura, valor segurado, perfil do segurado, histórico de sinistros, localização e características específicas do bem a ser segurado. Fazemos cotações personalizadas para encontrar o melhor custo-benefício."
  },
  {
    question: "O seguro cobre todos os tipos de danos?",
    answer: "Depende das coberturas contratadas. Cada apólice especifica quais riscos estão cobertos (incêndio, roubo, danos naturais, etc.) e quais são exclusões. Nossa consultoria ajuda a escolher as coberturas adequadas para sua necessidade real."
  },
];

const insurances = [
  {
    icon: Shield,
    title: "Seguro de Vida",
    description: "Proteção financeira para sua família",
    features: ["Coberturas personalizadas", "Indenizações rápidas", "Assistência funeral", "Invalidez permanente"],
    link: "/seguro-vida",
  },
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo",
    features: ["Assistência 24h", "Carro reserva", "Cobertura nacional", "Proteção vidros"],
    link: "/seguro-auto",
  },
  {
    icon: Bike,
    title: "Seguro de Motos",
    description: "Proteção especializada para sua moto",
    features: ["Assistência 24h", "Guincho especializado", "Cobertura de equipamentos", "Proteção total"],
    link: "/seguro-moto",
  },
  {
    icon: Truck,
    title: "Seguro de Frotas",
    description: "Gestão completa para sua frota empresarial",
    features: ["Múltiplos veículos", "Rastreamento", "Manutenção preventiva", "Assistência 24h"],
    link: "/seguro-frotas",
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Segurança total para seu lar",
    features: ["Incêndio e roubo", "Danos elétricos", "Responsabilidade civil", "Assistência residencial"],
    link: "/seguro-residencial",
  },
  {
    icon: Building2,
    title: "Seguro Empresarial",
    description: "Proteja seu patrimônio comercial",
    features: ["Proteção patrimonial", "Responsabilidade civil", "Lucros cessantes", "Equipamentos"],
    link: "/seguro-empresarial",
  },
  {
    icon: Dog,
    title: "Seguro Pet",
    description: "Cuidado completo para seu animal de estimação",
    features: ["Consultas veterinárias", "Cirurgias e internações", "Vacinas e exames", "Emergências 24h"],
    link: "/seguro-pet",
  },
  {
    icon: Smartphone,
    title: "Seguro Celular",
    description: "Proteção total para seu smartphone",
    features: ["Roubo e furto", "Quebra e danos", "Oxidação por água", "Aparelho reserva"],
    link: "/seguro-celular",
  },
];

const advantages = [
  "Parcerias com as melhores seguradoras",
  "Análise detalhada de coberturas",
  "Cotação sem compromisso",
  "Renovação facilitada",
  "Suporte em sinistros",
  "Atendimento personalizado",
];

const Seguros = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: advantagesRef, isVisible: advantagesVisible } = useScrollAnimation(0.2);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Reorganizado para dar MÁXIMO espaço aos carros */}
      <section className="relative h-[75vh] md:h-[85vh] overflow-hidden flex flex-col">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
            }}
          />
        ))}
        
        {/* Conteúdo Reorganizado */}
        <div className="relative h-full flex flex-col justify-between px-4">
          {/* Título BEM NO TOPO */}
          <div className="flex-none pt-24 md:pt-28 text-center">
            <div
              ref={heroRef}
              className={`transition-all duration-1000 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-raleway font-light text-white mb-0">
                Pronto para Garantir Sua Tranquilidade?
              </h1>
            </div>
          </div>
          
          {/* MÁXIMO ESPAÇO CENTRAL para ver os carros */}
          <div className="flex-1 min-h-[200px] md:min-h-[300px]"></div>
          
          {/* Subtítulo e Botões BEM EMBAIXO */}
          <div className="flex-none pb-16 md:pb-20 text-center">
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto font-light mb-10">
              Fale com nossos especialistas e encontre o seguro ideal
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contato"
                className="bg-gold-accent hover:bg-gold-light text-black-primary px-8 py-4 font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                SOLICITAR COTAÇÃO
              </Link>
              <a
                href="https://wa.me/551541412625"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-black-primary px-8 py-4 font-medium transition-all duration-300"
              >
                FALAR NO WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Insurances Grid */}
      <section className="py-20 bg-black-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
              NOSSAS SOLUÇÕES
            </span>
            <h2 className="text-3xl md:text-4xl font-raleway font-light text-white">
              Seguros para Todas as Necessidades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insurances.map((insurance, index) => {
              const Icon = insurance.icon;
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
                    to={insurance.link}
                    className="group bg-black-secondary border border-gray-dark p-10 hover:border-gold-accent transition-all duration-700 block h-full"
                  >
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="text-gold-accent group-hover:scale-110 transition-transform duration-300" size={48} strokeWidth={1.5} />
                    <ArrowRight className="text-gray-light group-hover:text-gold-accent group-hover:translate-x-2 transition-all duration-300" size={24} />
                  </div>
                  
                  <h3 className="text-white text-2xl font-light mb-4 group-hover:text-gold-accent transition-colors duration-300">
                    {insurance.title}
                  </h3>
                  
                  <p className="text-gray-medium leading-relaxed font-extralight mb-6">
                    {insurance.description}
                  </p>

                  <ul className="space-y-3">
                    {insurance.features.map((feature, idx) => (
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

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg order-2 lg:order-1">
              <img 
                src={jetskiLuxury} 
                alt="Proteção premium" 
                className="w-full h-full object-cover"
              />
            </div>

            <div
              ref={advantagesRef}
              className={`transition-all duration-1000 order-1 lg:order-2 ${
                advantagesVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
                VANTAGENS
              </span>
              <h2 className="text-3xl md:text-4xl font-raleway font-light mb-8 text-foreground">
                Expertise em Seguros
              </h2>
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground font-light">{advantage}</span>
                  </li>
                ))}
              </ul>
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
              Perguntas Sobre Seguros
            </h2>
            <p className="text-gray-light text-lg max-w-2xl mx-auto font-light">
              Tire suas principais dúvidas sobre nossos seguros
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Seguros;