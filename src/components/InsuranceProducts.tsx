import { User, Users, Building2, Smile, Heart, Car, Home, Briefcase, Bike, Truck, Dog, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const healthProducts = [
  {
    icon: User,
    title: "Plano de Saúde Individual",
    description: "Cobertura completa para você com as melhores operadoras: Amil, SulAmérica, Bradesco, Unimed",
    slug: "plano-saude-individual",
    featured: false,
  },
  {
    icon: Users,
    title: "Plano de Saúde Familiar",
    description: "Proteção para toda sua família com coberturas personalizadas e rede credenciada ampla",
    slug: "plano-saude-familiar",
    featured: false,
  },
  {
    icon: Building2,
    title: "Plano de Saúde Empresarial",
    description: "Soluções corporativas para empresas de todos os portes com as melhores condições",
    slug: "plano-saude-empresarial",
    featured: false,
  },
  {
    icon: Smile,
    title: "Planos Odontológicos",
    description: "Cuide da saúde bucal da sua família com planos completos e ampla rede credenciada regional",
    slug: "plano-odontologico",
    featured: false,
  },
];

const insuranceProducts = [
  {
    icon: Heart,
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
    icon: Bike,
    title: "Seguro de Motos",
    description: "Proteção especializada para sua motocicleta com coberturas personalizadas",
    slug: "seguro-moto",
    featured: false,
  },
  {
    icon: Truck,
    title: "Seguro de Frotas",
    description: "Gestão completa e proteção para sua frota empresarial com monitoramento",
    slug: "seguro-frotas",
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
    icon: Briefcase,
    title: "Seguro Empresarial",
    description: "Soluções completas para proteger seu negócio e garantir continuidade operacional",
    slug: "seguro-empresarial",
    featured: false,
  },
  {
    icon: Dog,
    title: "Seguro Pet",
    description: "Cuidado completo para seu animal de estimação com cobertura veterinária e assistência",
    slug: "seguro-pet",
    featured: false,
  },
  {
    icon: Smartphone,
    title: "Seguro Celular",
    description: "Proteção total para seu smartphone contra roubo, furto, quebra e danos acidentais",
    slug: "seguro-celular",
    featured: false,
  },
];

// Card component separado para evitar chamada de hook dentro do map
const ProductCard = ({ product, index }: { product: typeof healthProducts[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = product.icon;

  return (
    <div
      ref={ref}
      className={`bg-black-primary relative group overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gold Accent Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
      {/* Content */}
      <div className="p-4 md:p-8 border border-gray-dark group-hover:border-gold-accent transition-all duration-500 flex flex-col h-full">
        <div className="mb-3 md:mb-6">
          <Icon className="text-gray-light group-hover:text-gold-accent transition-colors duration-300" size={32} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-white text-sm md:text-xl font-light mb-2 md:mb-4 group-hover:text-gold-accent transition-colors duration-300 leading-tight">
          {product.title}
        </h3>
        
        <p className="text-gray-medium leading-relaxed mb-3 md:mb-6 font-extralight text-xs md:text-sm min-h-[40px] md:min-h-[60px] hidden md:block">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <Link 
            to={`/${product.slug}`}
            className="inline-flex items-center text-gold-accent font-light hover:gap-3 gap-2 transition-all duration-300 text-xs md:text-sm"
          >
            <span className="hidden md:inline">Saiba mais</span>
            <span className="md:hidden">Ver</span>
            <span className="text-base md:text-lg">→</span>
          </Link>
        </div>
      </div>

      {/* Hover Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

const InsuranceProducts = () => {
  const [activeTab, setActiveTab] = useState<"saude" | "seguros">("saude");

  const currentProducts = activeTab === "saude" ? healthProducts : insuranceProducts;

  return (
    <section id="planos" className="py-16 md:py-20 lg:py-28 bg-black-secondary relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 px-2">
          <span className="text-gold-accent font-light text-xs md:text-sm tracking-[0.2em] uppercase mb-4 block">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="text-white mt-4 mb-4 md:mb-6 font-raleway font-light text-2xl md:text-4xl lg:text-5xl">
            Planos de Saúde e Seguros - Localizada em Sorocaba com Atendimento em Todo Brasil
          </h2>
          <p className="text-gray-light text-sm md:text-lg max-w-2xl mx-auto font-extralight">
            Soluções completas com as melhores operadoras do mercado
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 md:mb-16">
          <div className="inline-flex gap-2 md:gap-4">
            <button
              onClick={() => setActiveTab("saude")}
              className={`px-6 md:px-12 py-3 md:py-4 text-sm md:text-base font-light tracking-wider border transition-all duration-300 ${
                activeTab === "saude"
                  ? "bg-gradient-gold text-black-primary border-gold-accent"
                  : "bg-transparent text-gray-light border-gray-dark hover:border-gold-accent hover:text-gold-accent"
              }`}
            >
              SAÚDE
            </button>
            <button
              onClick={() => setActiveTab("seguros")}
              className={`px-6 md:px-12 py-3 md:py-4 text-sm md:text-base font-light tracking-wider border transition-all duration-300 ${
                activeTab === "seguros"
                  ? "bg-gradient-gold text-black-primary border-gold-accent"
                  : "bg-transparent text-gray-light border-gray-dark hover:border-gold-accent hover:text-gold-accent"
              }`}
            >
              SEGUROS
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {currentProducts.map((product, index) => (
            <ProductCard key={`${activeTab}-${product.slug}`} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceProducts;
