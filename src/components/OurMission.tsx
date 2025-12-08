import { useState, useEffect, useRef } from "react";
import mercadoParallax from "@/assets/mercado-parallax.jpeg";

const OurMission = () => {
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
          backgroundImage: `url(${mercadoParallax})`,
        }}
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black-primary/10" />
    </section>
  );
};

export default OurMission;
