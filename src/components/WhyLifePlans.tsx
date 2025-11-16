import { Headset, Award, Zap, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const differentials = [
  {
    icon: Headset,
    number: "13+",
    title: "Anos de Experiência",
    description: "Expertise consolidada em planos de saúde e seguros em Sorocaba",
  },
  {
    icon: Award,
    title: "Melhores Operadoras",
    description: "Amil, SulAmérica, Bradesco, Unimed, Intermédica e mais",
  },
  {
    icon: Zap,
    title: "Atendimento Personalizado",
    description: "Consultoria especializada pensando no seu perfil e necessidades",
  },
  {
    icon: Clock,
    title: "Custo x Benefício",
    description: "As melhores soluções com transparência e profissionalismo",
  },
];

const WhyLifePlans = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  
  return (
    <section id="sobre" className="section-padding bg-black-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold-accent font-semibold text-sm tracking-wider uppercase">
            DIFERENCIAIS
          </span>
          <h2 className="text-white mt-4 mb-6 font-raleway font-light">
            Por Que Escolher a Lifeplans
          </h2>
          <p className="text-gray-light text-lg max-w-2xl mx-auto font-extralight">
            Profissionais especializados com atendimento de excelência
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            const { ref, isVisible } = useScrollAnimation(0.1);
            return (
              <div
                key={index}
                ref={ref}
                className={`text-center group transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-gray-dark flex items-center justify-center group-hover:border-gold-accent transition-colors duration-300">
                    <Icon className="text-gray-light group-hover:text-gold-accent transition-colors duration-300" size={36} />
                  </div>
                </div>

                {item.number && (
                  <div className="text-5xl font-bold text-gold-accent mb-3 font-montserrat">
                    {item.number}
                  </div>
                )}

                <h3 className="text-white text-xl font-light mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-medium leading-relaxed font-extralight">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyLifePlans;
