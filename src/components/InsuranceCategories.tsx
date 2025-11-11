import { GlowingEffect } from "@/components/ui/glowing-effect";
import horseJumping from "@/assets/horse-jumping.jpg";
import bikeLuxury from "@/assets/bike-luxury.jpg";
import healthInsurance from "@/assets/health-insurance.jpg";
import privateJet from "@/assets/private-jet.jpg";
import luxuryYachts from "@/assets/luxury-yachts.jpg";
import corporateBuildings from "@/assets/corporate-buildings.jpg";

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
    image: corporateBuildings,
    title: "Seguro Empresarial",
    description: "Soluções corporativas e proteção patrimonial"
  }
];

const InsuranceCategories = () => {
  return (
    <section className="section-padding bg-black-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative h-[320px] overflow-hidden group"
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
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black-primary via-black-primary/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-raleway font-light mb-2 group-hover:text-gold-accent transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-light font-extralight text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-gold-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceCategories;
