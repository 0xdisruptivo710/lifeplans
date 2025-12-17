import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import fleetTrucks from "@/assets/fleet-trucks.png";
import bikeLuxury from "@/assets/bike-luxury.jpg";
import healthInsurance from "@/assets/health-insurance.jpg";
import luxuryMotorcycle from "@/assets/luxury-motorcycle.png";
import luxuryYachts from "@/assets/luxury-yachts.jpg";
import corporateBuildings from "@/assets/corporate-buildings.jpg";

const categories = [
  {
    image: fleetTrucks,
    title: "Seguro Frota",
    description: "Gestão completa e proteção para frotas empresariais com monitoramento 24h"
  },
  {
    image: bikeLuxury,
    title: "Seguro Bike",
    description: "Cobertura especializada para bicicletas premium e bikes de alto valor"
  },
  {
    image: healthInsurance,
    title: "Planos de Saúde",
    description: "Assistência médica completa com as melhores operadoras do mercado"
  },
  {
    image: luxuryMotorcycle,
    title: "Seguro Moto",
    description: "Proteção completa para motocicletas com cobertura contra roubo e acidentes"
  },
  {
    image: luxuryYachts,
    title: "Seguro Náutico",
    description: "Cobertura premium para embarcações, iates e lanchas de luxo"
  },
  {
    image: corporateBuildings,
    title: "Seguro Empresarial",
    description: "Soluções corporativas completas e proteção patrimonial para seu negócio"
  }
];

const InsuranceCategories = () => {
  return (
    <section className="section-padding bg-black-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const { ref, isVisible } = useScrollAnimation(0.1);
            return (
              <div
                key={index}
                ref={ref}
                className={`relative h-[320px] overflow-hidden group cursor-pointer transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
              <div className="relative h-full rounded-lg border-[0.75px] border-gray-dark p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative h-full rounded-md overflow-hidden">
                  {/* Image */}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black-primary via-black-primary/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Text Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    {/* Label */}
                    <span className="label-premium text-gold-accent mb-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      PROTEÇÃO PREMIUM
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-raleway font-light text-white mb-3 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {category.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-light font-light leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      {category.description}
                    </p>
                    
                    {/* Decorative Line */}
                    <div className="mt-4 w-0 group-hover:w-16 h-[2px] bg-gold-accent transition-all duration-500 delay-100" />
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsuranceCategories;
