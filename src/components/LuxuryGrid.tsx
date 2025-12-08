import { Shield, Heart, Award, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import luxuryParallaxBanner from "@/assets/luxury-parallax-banner.jpeg";

const LuxuryGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Parallax Section */}
      <section 
        ref={sectionRef}
        className={`relative w-full h-[180px] md:h-[220px] overflow-hidden transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Background image with mobile-friendly approach */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: `url(${luxuryParallaxBanner})`,
          }}
        />
        {/* Subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-black-primary/10" />
      </section>

      {/* Features Section */}
      <FeatureGrid />
    </>
  );
};

const FeatureGrid = () => {
  const features = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção completa para você e sua família com as melhores operadoras"
    },
    {
      icon: Heart,
      title: "Cuidado",
      description: "Atendimento humanizado e personalizado para suas necessidades"
    },
    {
      icon: Award,
      title: "Excelência",
      description: "16 anos de experiência e credibilidade no mercado"
    },
    {
      icon: Users,
      title: "Família",
      description: "Planos adaptados para indivíduos, famílias e empresas"
    }
  ];

  return (
    <section className="section-padding bg-black-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-black-primary p-8 border border-gray-dark hover:border-gold-accent transition-all duration-500 overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <feature.icon 
                  className="text-gold-accent mb-6 group-hover:scale-110 transition-transform duration-300" 
                  size={40} 
                  strokeWidth={1.5} 
                />
                <h3 className="text-white text-2xl font-raleway font-light mb-4 group-hover:text-gold-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-medium font-extralight leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryGrid;
