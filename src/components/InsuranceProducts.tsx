import { Heart, Smile, Shield, Car, Home, Building2 } from "lucide-react";

const products = [
  {
    icon: Heart,
    title: "Planos de Saúde",
    description: "Individual, familiar e empresarial com as melhores operadoras: Amil, SulAmérica, Bradesco, Unimed e mais",
    featured: true,
  },
  {
    icon: Smile,
    title: "Planos Odontológicos",
    description: "Cuide da saúde bucal da sua família com planos completos e rede credenciada",
    featured: true,
  },
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

const InsuranceProducts = () => {
  return (
    <section id="planos" className="section-padding bg-black-secondary relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="text-white mt-4 mb-6 font-raleway font-light">
            Planos de Saúde e Seguros em Sorocaba
          </h2>
          <p className="text-gray-light text-lg max-w-2xl mx-auto font-extralight">
            Soluções completas com as melhores operadoras do mercado
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className={`bg-black-primary border ${product.featured ? 'border-gold-accent' : 'border-gray-dark'} p-8 hover:border-gold-accent transition-all duration-500 group hover:-translate-y-2 relative`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {product.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-accent text-black-primary px-4 py-1 text-xs font-light uppercase tracking-wider">
                    Destaque
                  </div>
                )}
                
                <div className="mb-6">
                  <Icon className="text-gray-light group-hover:text-gold-accent transition-colors duration-300" size={48} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-white text-2xl font-light mb-4 group-hover:text-gold-accent transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-gray-medium leading-relaxed mb-6 font-extralight">
                  {product.description}
                </p>
                
                <a 
                  href="#contato"
                  className="inline-flex items-center text-gold-accent font-light hover:gap-3 gap-2 transition-all duration-300"
                >
                  Saiba mais
                  <span className="text-lg">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsuranceProducts;
