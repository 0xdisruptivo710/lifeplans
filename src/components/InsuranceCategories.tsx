import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import horseJumping from "@/assets/horse-jumping.jpg";
import bikeLuxury from "@/assets/bike-luxury.jpg";
import healthInsurance from "@/assets/health-insurance.jpg";
import privateJet from "@/assets/private-jet.jpg";
import luxuryYachts from "@/assets/luxury-yachts.jpg";
import businessTrucks from "@/assets/business-trucks.png";

const categories = [
  {
    image: horseJumping,
    title: "Seguro Equestre",
    description: "Proteção completa para cavalos e atividades equestres"
  },
  {
    image: bikeLuxury,
    title: "Seguro Bike",
    description: "Cobertura especializada para bicicletas de alto valor"
  },
  {
    image: healthInsurance,
    title: "Planos de Saúde",
    description: "Assistência médica completa para você e sua família"
  },
  {
    image: privateJet,
    title: "Seguro Aeronáutico",
    description: "Proteção para aeronaves e aviação executiva"
  },
  {
    image: luxuryYachts,
    title: "Seguro Náutico",
    description: "Cobertura para embarcações e iatess de luxo"
  },
  {
    image: businessTrucks,
    title: "Seguro Empresarial",
    description: "Soluções corporativas e proteção patrimonial"
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
                className={`relative h-[320px] overflow-hidden group transition-all duration-700 ${
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
