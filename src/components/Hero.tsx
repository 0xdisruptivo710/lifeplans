/**
 * Hero Section - DARK LUXURY EDITORIAL STYLE
 * Dramatic typography, masked text reveal, framed imagery
 * High-impact visual transformation
 */

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroImage1 from "@/assets/Foto_1.jpg.png";
import heroImage2 from "@/assets/Foto_2.jpg.png";
import logoLifePlans from "@/assets/lifeplans-logo.png";
import { Link } from "react-router-dom";

const slides = [
  {
    image: heroImage1,
    title: "Planos de Saúde e Seguros",
    subtitle: "Para Você e Sua Família",
    label: "PROTEÇÃO PREMIUM",
    description: "16 anos protegendo o que realmente importa - Localizada em Sorocaba com atendimento em todo Brasil"
  },
  {
    image: heroImage2,
    title: "Proteção Completa",
    subtitle: "Com as Melhores Operadoras",
    label: "CONFIANÇA GARANTIDA",
    description: "Localizada em Sorocaba com atendimento em todo Brasil"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effect - image moves slower than scroll
  const imageY = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black-primary py-32 md:py-40">
      {/* Logo Fixo no Hero - MAIOR */}
      <Link to="/" className="fixed top-8 left-8 z-50 hidden lg:block">
        <img
          src={logoLifePlans}
          alt="Lifeplans"
          className="h-32 w-auto object-contain transition-all duration-500 hover:scale-105 drop-shadow-2xl"
        />
      </Link>

      {/* Background with Frame Effect */}
      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Framed Image Container - 90% width with rounded corners */}
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
              <div
                className="relative w-full max-w-[90%] h-[85%] rounded-3xl md:rounded-[3rem] overflow-hidden hero-frame-fix"
                style={{ 
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  isolation: 'isolate',
                  contain: 'paint'
                }}
              >
                {/* Image with Scale Animation */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    y: imageY,
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden'
                  }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: index === currentSlide ? 1 : 1.1 }}
                  transition={{ duration: 8, ease: "easeOut" }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-primary via-black-primary/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black-primary/80 via-transparent to-black-primary/40" />
                
                {/* Gold Accent Lines */}
                <div className="absolute top-0 left-0 w-32 md:w-64 h-[2px] bg-gradient-to-r from-gold-accent to-transparent" />
                <div className="absolute bottom-0 right-0 w-32 md:w-64 h-[2px] bg-gradient-to-l from-gold-accent to-transparent" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={index === currentSlide ? "block" : "hidden"}
            >
              {/* Label - Small, Uppercase, Tracked */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 md:mb-8"
              >
                <span className="label-premium text-gold-accent inline-block">
                  {slide.label}
                </span>
              </motion.div>

              {/* Massive Display Title - Editorial Style */}
              <div className="overflow-hidden mb-6 md:mb-8">
                <motion.h1
                  className="display-massive text-white font-raleway"
                  initial={{ y: 100, opacity: 0 }}
                  animate={index === currentSlide ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{
                    textShadow: '0 4px 30px rgba(0,0,0,0.8), 0 0 80px rgba(0,136,150,0.15)'
                  }}
                >
                  {slide.title}
                </motion.h1>
              </div>

              {/* Subtitle - Thin, Large */}
              <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl font-raleway font-extralight text-gray-light mb-8 md:mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 20px rgba(0,0,0,0.8)'
                }}
              >
                {slide.subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-base md:text-xl text-gray-medium font-light mb-12 md:mb-16 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={index === currentSlide ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {slide.description}
              </motion.p>

              {/* Premium Outline Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <a
                  href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="group relative px-8 md:px-12 py-4 md:py-5 bg-transparent border-2 border-gold-accent text-gold-accent label-premium overflow-hidden transition-all duration-500 hover:text-black-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Fill on hover */}
                    <span className="absolute inset-0 bg-gold-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                    <span className="relative z-10">Solicitar Cotação</span>
                  </motion.button>
                </a>

                <a href="#planos">
                  <motion.button
                    className="group relative px-8 md:px-12 py-4 md:py-5 bg-transparent border border-white/30 text-white label-premium overflow-hidden transition-all duration-500 hover:border-white hover:text-black-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Fill on hover */}
                    <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                    <span className="relative z-10">Conhecer Planos</span>
                  </motion.button>
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-500 ${
              index === currentSlide 
                ? "w-16 bg-gold-accent shadow-gold-glow" 
                : "w-8 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-white/5 rounded-full blur-[2px]" />
      <div className="absolute bottom-32 left-10 w-24 h-24 border border-gold-accent/10 rounded-full blur-[2px]" />
    </section>
  );
};

export default Hero;
