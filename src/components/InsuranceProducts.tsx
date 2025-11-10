import { Card } from "@/components/ui/card";
import { Heart, Home, Car, Building2, PiggyBank, Plane, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "Proteção financeira para sua família com coberturas personalizadas e assistência completa",
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Proteja seu lar contra imprevistos com cobertura completa e assistência 24h",
  },
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção total para seu veículo com coberturas flexíveis e atendimento ágil",
  },
  {
    icon: Building2,
    title: "Seguro Empresarial",
    description: "Soluções corporativas para proteger seu negócio e garantir a continuidade operacional",
  },
  {
    icon: PiggyBank,
    title: "Previdência Privada",
    description: "Planeje seu futuro com tranquilidade através de investimentos seguros e rentáveis",
  },
  {
    icon: Plane,
    title: "Seguro Viagem",
    description: "Viaje com segurança total, cobertura internacional e assistência em qualquer lugar",
  },
];

const InsuranceProducts = () => {
  return (
    <section id="seguros" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            NOSSOS PRODUTOS
          </span>
          <h2 className="text-navy-primary mt-4 mb-6">
            Seguros para Cada Momento da Sua Vida
          </h2>
          <p className="text-gray-medium text-lg max-w-2xl mx-auto">
            Proteção completa e personalizada para o que você mais valoriza
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className="group p-8 bg-white border border-border hover-lift cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <Icon className="text-accent group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                </div>
                
                <h3 className="text-navy-primary mb-4 text-2xl font-semibold">
                  {product.title}
                </h3>
                
                <p className="text-gray-medium leading-relaxed mb-6">
                  {product.description}
                </p>
                
                <a
                  href="#contato"
                  className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all duration-300 group"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsuranceProducts;
