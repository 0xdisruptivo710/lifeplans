import { useState, useEffect, useRef } from "react";
import mercadoParallax from "@/assets/porshe.jpg.png";

const OurMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top * 0.15;
        setScrollOffset(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`relative w-full h-[100px] md:h-[220px] overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-[-20%] bg-cover"
        style={{
          backgroundImage: `url(${mercadoParallax})`,
          backgroundPosition: '50% center',
          backgroundSize: 'cover',
          transform: `translateY(${scrollOffset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black-primary/10" />
    </section>
  );
};

export default OurMission;
