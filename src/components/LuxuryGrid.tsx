import { Shield, Heart, Award, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useParallax } from "@/hooks/use-parallax";
import porscheLuxury from "@/assets/porsche-gold.jpg";

const LuxuryGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxImage = useParallax(0.15);

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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / window.innerHeight;
        setScrollPosition(scrollProgress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Diagonal Luxury Section with Geometric Effect */}
      <section 
        ref={sectionRef}
        className={`relative w-full h-[200px] md:h-[280px] overflow-hidden transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Dark geometric background */}
        <div className="absolute inset-0 bg-black-primary" />
        
        {/* Left diagonal gold stripe */}
        <div 
          className="absolute left-0 top-0 w-[55%] h-full bg-gold-accent"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
            transform: `translateX(${Math.min(scrollPosition * 0.3, 30)}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        
        {/* Center dark diagonal section with car */}
        <div 
          className="absolute left-[25%] top-0 w-[60%] h-full overflow-hidden"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)",
          }}
        >
          <div
            className="absolute inset-[-20%] bg-cover bg-center"
            style={{
              backgroundImage: `url(${porscheLuxury})`,
              transform: `translateY(${parallaxImage}px) scale(1.2)`,
              transition: 'transform 0.1s ease-out',
            }}
          />
          <div className="absolute inset-0 bg-black-primary/30" />
        </div>
        
        {/* Right diagonal gold stripe */}
        <div 
          className="absolute right-0 top-0 w-[35%] h-full bg-gold-accent"
          style={{
            clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
            transform: `translateX(${Math.max(-scrollPosition * 0.3, -30)}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        
        {/* Right image section */}
        <div 
          className="absolute right-0 top-0 w-[30%] h-full overflow-hidden"
          style={{
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <div
            className="absolute inset-[-20%] bg-cover bg-right"
            style={{
              backgroundImage: `url(${porscheLuxury})`,
              transform: `translateY(${parallaxImage * 0.5}px) scale(1.3)`,
              transition: 'transform 0.1s ease-out',
            }}
          />
          <div className="absolute inset-0 bg-black-primary/20" />
        </div>
        
        {/* Subtle top and bottom borders */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-accent/50" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-accent/50" />
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
