import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Target, Eye, Heart, Users, Shield, Sparkles } from "lucide-react";

const MissaoVisaoValores = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation(0.2);
  const { ref: visionRef, isVisible: visionVisible } = useScrollAnimation(0.2);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.2);

  const values = [
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Tratamos cada cliente de forma única, com respeito e empatia, buscando sempre entender suas necessidades individuais."
    },
    {
      icon: Shield,
      title: "Transparência",
      description: "Atuamos com clareza e honestidade em todas as nossas relações, garantindo que nossos clientes tomem decisões informadas."
    },
    {
      icon: Heart,
      title: "Compromisso",
      description: "Estamos comprometidos com a qualidade e a excelência em tudo o que fazemos, sempre buscando superar expectativas."
    },
    {
      icon: Sparkles,
      title: "Inovação",
      description: "Buscamos constantemente novas soluções e melhorias para oferecer os melhores serviços aos nossos clientes."
    }
  ];

  return (
    <div className="min-h-screen bg-black-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div 
          ref={headerRef}
          className={`container-custom text-center transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold-accent font-semibold text-sm tracking-wider uppercase">
            QUEM SOMOS
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6 font-raleway font-light">
            Missão, Visão e Valores
          </h1>
          <p className="text-gray-light text-lg max-w-2xl mx-auto font-extralight">
            Conheça os pilares que guiam a Lifeplans há mais de 16 anos
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black-secondary">
        <div className="container-custom">
          <div 
            ref={missionRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
              missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-gold-accent flex items-center justify-center">
                <Target className="text-gold-accent" size={48} />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl text-white mb-6 font-raleway font-light">
              Nossa Missão
            </h2>
            <p className="text-gray-light text-lg leading-relaxed font-extralight">
              Proporcionar soluções completas em planos de saúde e seguros, garantindo tranquilidade e 
              segurança para nossos clientes através de um atendimento personalizado e de excelência. 
              Buscamos ser a ponte entre as melhores operadoras do mercado e as necessidades específicas 
              de cada pessoa, família ou empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-black-primary">
        <div className="container-custom">
          <div 
            ref={visionRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
              visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-gold-accent flex items-center justify-center">
                <Eye className="text-gold-accent" size={48} />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl text-white mb-6 font-raleway font-light">
              Nossa Visão
            </h2>
            <p className="text-gray-light text-lg leading-relaxed font-extralight">
              Ser referência em Sorocaba e região como a principal consultoria em planos de saúde e 
              seguros, reconhecida pela qualidade do atendimento, expertise no mercado e pelo 
              compromisso inabalável com a satisfação de nossos clientes. Queremos ser a primeira 
              escolha quando se trata de proteção e cuidado com a saúde e patrimônio.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black-secondary">
        <div className="container-custom">
          <div 
            ref={valuesRef}
            className={`text-center mb-16 transition-all duration-700 ${
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl text-white mb-6 font-raleway font-light">
              Nossos Valores
            </h2>
            <p className="text-gray-light text-lg max-w-2xl mx-auto font-extralight">
              Os princípios que norteiam todas as nossas ações e decisões
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className={`text-center group p-8 rounded-lg border border-gray-dark hover:border-gold-accent transition-all duration-500 ${
                    valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-gray-dark flex items-center justify-center group-hover:border-gold-accent transition-colors duration-300">
                      <Icon className="text-gray-light group-hover:text-gold-accent transition-colors duration-300" size={32} />
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-light mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-medium leading-relaxed font-extralight">
                    {value.description}
                  </p>
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

export default MissaoVisaoValores;
