import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import amilLogo from "@/assets/logos/amil-logo.jpg";
import sulamericaLogo from "@/assets/logos/sulamerica-logo.webp";
import bradescoLogo from "@/assets/logos/bradesco-saude-logo.png";
import unimedLogo from "@/assets/logos/unimed-logo-new.png";
import portoLogo from "@/assets/logos/porto-saude-logo.png";
import notredameLogo from "@/assets/logos/notredame-logo.png";

const operators = [
  {
    name: "Amil",
    logo: amilLogo,
    coverage: "Nacional",
    plans: "Individual e Empresarial",
  },
  {
    name: "SulAmérica",
    logo: sulamericaLogo,
    coverage: "Nacional",
    plans: "PME e Grandes Empresas",
  },
  {
    name: "Bradesco Saúde",
    logo: bradescoLogo,
    coverage: "Nacional",
    plans: "Todos os Portes",
  },
  {
    name: "Unimed",
    logo: unimedLogo,
    coverage: "Nacional",
    plans: "Apenas CNPJ",
  },
  {
    name: "Porto Saúde",
    logo: portoLogo,
    coverage: "Regional e Nacional",
    plans: "Empresarial",
  },
  {
    name: "NotreDame Intermédica",
    logo: notredameLogo,
    coverage: "Nacional",
    plans: "PME e Corporativo",
  },
];

export const PartnerOperators = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-black-secondary">
      <div className="container mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-4 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-raleway text-4xl md:text-5xl font-light text-white mb-4">
            Operadoras Parceiras
          </h2>
        </div>
        
        <p 
          ref={subtitleRef}
          className={`font-raleway text-lg text-gray-light text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Trabalhamos com as principais operadoras do mercado para oferecer as melhores opções de planos de saúde
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {operators.map((operator, index) => {
            const { ref, isVisible } = useScrollAnimation(0.2);
            return (
              <div
                key={index}
                ref={ref}
                className={`bg-black-primary border border-gray-dark rounded-lg p-8 hover:border-gold-accent transition-all duration-500 hover:shadow-elegant ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center mb-6 h-24">
                  <img 
                    src={operator.logo} 
                    alt={`Logo ${operator.name}`}
                    className="max-h-20 max-w-[160px] object-contain"
                  />
                </div>
                
                <h3 className="font-raleway text-2xl font-light text-white text-center mb-4">
                  {operator.name}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center border-b border-gray-dark pb-2">
                    <span className="font-raleway text-sm text-gray-light">Cobertura:</span>
                    <span className="font-raleway text-sm text-white font-light">{operator.coverage}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-raleway text-sm text-gray-light">Planos:</span>
                    <span className="font-raleway text-sm text-white font-light">{operator.plans}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="font-raleway text-gray-light font-light">
            E muitas outras operadoras disponíveis para atender suas necessidades
          </p>
        </div>
      </div>
    </section>
  );
};
