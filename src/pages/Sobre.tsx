import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Target, Award, Users, Heart, TrendingUp, Shield } from "lucide-react";
import missionImage from "@/assets/mission-image.jpg";
import corporateBuildings from "@/assets/corporate-buildings.jpg";

const values = [
  {
    icon: Heart,
    title: "Compromisso",
    description: "Dedicação total aos nossos clientes e suas necessidades",
  },
  {
    icon: Shield,
    title: "Confiança",
    description: "Transparência e ética em todas as nossas relações",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Busca constante pela qualidade em nossos serviços",
  },
  {
    icon: TrendingUp,
    title: "Inovação",
    description: "Soluções modernas e adaptadas ao mercado atual",
  },
];

const milestones = [
  { year: "2009", title: "Fundação", description: "Início das operações em Sorocaba" },
  { year: "2015", title: "Expansão", description: "Alcançamos 5.000 clientes atendidos" },
  { year: "2020", title: "Consolidação", description: "Parcerias com as maiores operadoras" },
  { year: "2024", title: "Liderança", description: "Referência regional em planos de saúde e seguros" },
  { year: "2025", title: "Prêmio Porto Bank", description: "Destaque em Consórcio no mercado regional" },
];

const Sobre = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation(0.2);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${corporateBuildings})`,
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
              Sobre a Lifeplans
            </h1>
            <p className="text-lg md:text-xl text-gray-light max-w-2xl mx-auto font-light">
              Transformando o mercado de planos de saúde e seguros em Sorocaba
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={missionRef}
              className={`transition-all duration-1000 ${
                missionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
                NOSSA MISSÃO
              </span>
              <h2 className="text-3xl md:text-4xl font-raleway font-light mb-6 text-white">
                Consultoria Especializada
              </h2>
              <p className="text-gray-light text-lg leading-relaxed mb-6 font-extralight">
                A Lifeplans nasceu com o propósito de revolucionar a forma como as pessoas contratam 
                planos de saúde e seguros. Acreditamos que cada cliente merece uma consultoria 
                personalizada, transparente e focada em suas reais necessidades.
              </p>
              <p className="text-gray-light text-lg leading-relaxed font-extralight">
                Ao longo dos anos, construímos uma reputação sólida baseada em confiança, 
                profissionalismo e resultados. Nossa equipe de especialistas trabalha 
                incansavelmente para garantir que você tenha acesso às melhores soluções do mercado.
              </p>
            </div>

            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
              <img 
                src={missionImage} 
                alt="Equipe Lifeplans" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container-custom">
          <div
            ref={valuesRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
              NOSSOS VALORES
            </span>
            <h2 className="text-3xl md:text-4xl font-raleway font-light text-foreground">
              O que nos Move
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              const { ref, isVisible } = useScrollAnimation(0.2);
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`bg-card border border-border p-8 rounded-lg hover:border-primary/50 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon className="text-primary" size={32} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-foreground text-xl font-light mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed font-extralight text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-black-primary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
              NOSSA HISTÓRIA
            </span>
            <h2 className="text-3xl md:text-4xl font-raleway font-light text-white">
              Trajetória de Sucesso
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => {
              const { ref, isVisible } = useScrollAnimation(0.2);
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`flex gap-8 mb-12 last:mb-0 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-gold-accent/10 border-2 border-gold-accent flex items-center justify-center">
                      <span className="text-gold-accent text-xl font-light">{milestone.year}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow pt-4">
                    <h3 className="text-white text-2xl font-light mb-2">{milestone.title}</h3>
                    <p className="text-gray-light font-extralight">{milestone.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sobre;