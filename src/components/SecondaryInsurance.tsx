import { Shield, Car, Home, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const insurances = [
  {
    icon: Shield,
    title: "Seguro de Vida",
    description: "Proteja sua família e garanta tranquilidade financeira em qualquer situação",
  },
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo com assistência 24h",
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Proteja seu lar contra imprevistos com cobertura total",
  },
  {
    icon: Building2,
    title: "Seguro Empresarial",
    description: "Soluções completas para proteger seu negócio",
  },
];

const SecondaryInsurance = () => {
  return (
    <section id="seguros" className="py-16 md:py-20 bg-black-primary relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
            PROTEÇÃO COMPLETA
          </span>
          <h2 className="text-white mt-4 mb-6 font-raleway font-light">
            Seguros para Sua Tranquilidade
          </h2>
          <p className="text-gray-light text-lg max-w-2xl mx-auto font-extralight">
            Além de planos de saúde, oferecemos seguros para proteger o que você mais valoriza
          </p>
        </div>

        {/* Insurances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insurances.map((insurance, index) => {
            const Icon = insurance.icon;
            const { ref, isVisible } = useScrollAnimation(0.1);
            return (
              <div
                key={index}
                ref={ref}
                className={`bg-black-secondary border border-gray-dark p-8 hover:border-gold-accent group hover:-translate-y-2 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <Icon className="text-gray-light group-hover:text-gold-accent transition-colors duration-300" size={40} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-white text-xl font-light mb-4 group-hover:text-gold-accent transition-colors duration-300">
                  {insurance.title}
                </h3>
                
                <p className="text-gray-medium leading-relaxed font-extralight text-sm">
                  {insurance.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecondaryInsurance;
