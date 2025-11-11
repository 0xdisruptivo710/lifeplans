import { GradientButton } from "@/components/ui/gradient-button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/hero-geometric-3.jpg";
import heroImage2 from "@/assets/hero-geometric-4.jpg";

const slides = [
  {
    image: heroImage1,
    title: "Planos de Saúde e Seguros",
    subtitle: "Para Você e Sua Família",
    description: "16 anos protegendo o que realmente importa em Sorocaba-SP",
  },
  {
    image: heroImage2,
    title: "Proteção Completa",
    subtitle: "Com as Melhores Operadoras",
    description: "16 anos de experiência e confiança em Sorocaba-SP",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Troca a cada 8 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-all duration-[3000ms] ease-in-out ${
            index === currentSlide 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-full"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          
          {/* Diagonal Gold Accent Lines */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-0 right-0 w-96 h-2 bg-gradient-gold transform rotate-45 translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-1 bg-gold-accent transform -rotate-45"></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                index === currentSlide 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 absolute translate-y-4"
              }`}
            >
              <h1 className="text-white mb-6 text-balance font-raleway font-extralight">
                {slide.title}
                <br />
                {slide.subtitle}
              </h1>
              <p className="text-gray-light text-xl md:text-2xl font-extralight mb-12 leading-relaxed max-w-2xl">
                {slide.description}
              </p>
            </div>
          ))}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
              <GradientButton className="w-full sm:w-auto uppercase tracking-wider">
                Solicitar Cotação
              </GradientButton>
            </a>
            <a href="#planos">
              <GradientButton variant="variant" className="w-full sm:w-auto uppercase tracking-wider">
                Conhecer Planos
              </GradientButton>
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 transition-all duration-300 ${
              index === currentSlide ? "bg-gold-accent" : "bg-white/30"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <ChevronDown className="text-gold-accent" size={36} />
      </div>
    </section>
  );
};

export default Hero;
