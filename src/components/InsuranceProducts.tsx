import { Heart, Smile, Shield, Car, Home, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const healthProducts = [
  {
    icon: Heart,
    title: "Plano de Saúde Individual",
    description: "Cobertura completa para você com as melhores operadoras: Amil, SulAmérica, Bradesco, Unimed",
    slug: "plano-saude-individual",
    featured: true,
  },
  {
    icon: Heart,
    title: "Plano de Saúde Familiar",
    description: "Proteção para toda sua família com coberturas personalizadas e rede credenciada ampla",
    slug: "plano-saude-familiar",
    featured: true,
  },
  {
    icon: Heart,
    title: "Plano de Saúde Empresarial",
    description: "Soluções corporativas para empresas de todos os portes com as melhores condições",
    slug: "plano-saude-empresarial",
    featured: true,
  },
  {
    icon: Smile,
    title: "Planos Odontológicos",
    description: "Cuide da saúde bucal da sua família com planos completos e rede credenciada em Sorocaba",
    slug: "plano-odontologico",
    featured: true,
  },
];

const insuranceProducts = [
  {
    icon: Shield,
    title: "Seguro de Vida",
    description: "Proteja sua família e garanta tranquilidade financeira em qualquer situação",
    slug: "seguro-vida",
    featured: false,
  },
  {
    icon: Car,
    title: "Seguro Auto",
    description: "Proteção completa para seu veículo com assistência 24h e coberturas flexíveis",
    slug: "seguro-auto",
    featured: false,
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    description: "Proteja seu lar contra imprevistos com cobertura total e assistência residencial",
    slug: "seguro-residencial",
    featured: false,
  },
  {
    icon: Building2,
    title: "Seguro Empresarial",
    description: "Soluções completas para proteger seu negócio e garantir continuidade operacional",
    slug: "seguro-empresarial",
    featured: false,
  },
];

const InsuranceProducts = () => {
  const [activeTab, setActiveTab] = useState<"saude" | "seguros">("saude");

  const currentProducts = activeTab === "saude" ? healthProducts : insuranceProducts;

  return (
    <section id="planos" className="section-padding bg-black-secondary relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-accent font-light text-sm tracking-[0.2em] uppercase mb-4 block">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="text-white mt-4 mb-6 font-raleway font-light text-4xl lg:text-5xl">
            Planos de Saúde e Seguros em Sorocaba
          </h2>
          <p className="text-gray-light text-lg max-w-2xl mx-auto font-extralight">
            Soluções completas com as melhores operadoras do mercado
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-black-primary border border-gray-dark rounded-none overflow-hidden">
            <button
              onClick={() => setActiveTab("saude")}
              className={`px-12 py-4 text-base font-light tracking-wider transition-all duration-300 ${
                activeTab === "saude"
                  ? "bg-gold-accent text-black-primary"
                  : "text-gray-light hover:text-white"
              }`}
            >
              SAÚDE
            </button>
            <button
              onClick={() => setActiveTab("seguros")}
              className={`px-12 py-4 text-base font-light tracking-wider transition-all duration-300 ${
                activeTab === "seguros"
                  ? "bg-gold-accent text-black-primary"
                  : "text-gray-light hover:text-white"
              }`}
            >
              SEGUROS
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="bg-black-primary relative group overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Gold Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="p-8 border border-gray-dark group-hover:border-gold-accent transition-all duration-500 flex flex-col h-full">
                  {product.featured && (
                    <div className="absolute -top-3 right-8 bg-gold-accent text-black-primary px-4 py-1 text-xs font-light uppercase tracking-wider">
                      Destaque
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <Icon className="text-gray-light group-hover:text-gold-accent transition-colors duration-300" size={48} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-white text-xl font-light mb-4 group-hover:text-gold-accent transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-medium leading-relaxed mb-6 font-extralight text-sm min-h-[60px]">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Link 
                      to={`/${product.slug}`}
                      className="inline-flex items-center text-gold-accent font-light hover:gap-3 gap-2 transition-all duration-300 text-sm"
                    >
                      Saiba mais
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsuranceProducts;
