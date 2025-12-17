/**
 * LuxuryGrid 2.0 - DARK LUXURY EDITORIAL
 * Aggressive glow effects, animated gradient borders, dramatic interactions
 * Bento Grid with moving borders and color-shifting icons
 */

import { Shield, Heart, Award, Users, LucideIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import luxuryParallaxBanner from "@/assets/medical-parallax-1.jpg.png";

const LuxuryGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setScrollOffset(-rect.top * 0.15);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Parallax Banner with Vignette */}
      <section
        ref={sectionRef}
        className={`relative w-full h-[200px] md:h-[350px] overflow-hidden transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          style={{
            backgroundImage: `url(${luxuryParallaxBanner})`,
            backgroundPosition: '60% center',
            backgroundSize: 'cover',
            transform: `translateY(${scrollOffset}px) scale(1.05)`,
            transition: "transform 0.1s ease-out",
          }}
          className="absolute inset-0"
        />
        {/* Stronger vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-primary via-black-primary/40 to-black-primary" />
      </section>

      {/* Divider Line */}
      <div className="h-[1px] bg-white/10" />

      {/* Bento Grid Section */}
      <BentoGrid />
    </>
  );
};

// Features Data
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  span: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "Segurança",
    description: "Proteção completa para você e sua família com as melhores operadoras do mercado",
    stat: "16",
    statLabel: "anos de experiência",
    span: "md:col-span-2",
  },
  {
    icon: Heart,
    title: "Cuidado",
    description: "Atendimento humanizado e personalizado para todas as suas necessidades",
    stat: "24/7",
    statLabel: "atendimento disponível",
    span: "md:col-span-1",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Credibilidade e confiança construídas ao longo de anos no mercado",
    stat: "5.000+",
    statLabel: "clientes atendidos",
    span: "md:col-span-1",
  },
  {
    icon: Users,
    title: "Família",
    description: "Planos adaptados para indivíduos, famílias e empresas de todos os portes",
    stat: "50+",
    statLabel: "cidades em todo Brasil",
    span: "md:col-span-2",
  },
];

// Main Bento Grid
const BentoGrid = () => {
  return (
    <section className="py-20 md:py-32 bg-black-secondary relative">
      {/* Section Header */}
      <div className="container-custom mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="label-premium text-gold-accent mb-6 block">
            NOSSOS PILARES
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-raleway font-extralight text-white mb-6">
            Excelência em Cada Detalhe
          </h2>
          <p className="text-lg md:text-xl text-gray-medium font-light max-w-2xl">
            Construímos relacionamentos baseados em confiança, segurança e atendimento excepcional.
          </p>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <GlowCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="container-custom mt-20 md:mt-32">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
};

// Individual Glow Card with Animated Border
interface GlowCardProps {
  feature: Feature;
  index: number;
}

const GlowCard = ({ feature, index }: GlowCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Mouse tracking for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  // Animated border rotation
  useEffect(() => {
    if (!isHovered) return;
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 20);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);
  };

  const Icon = feature.icon;

  return (
    <motion.div
      ref={cardRef}
      className={`group relative h-full ${feature.span}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Gradient Border Container */}
      <motion.div
        className="relative h-full p-[2px] rounded-2xl overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Rotating Gradient Border (only on hover) */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `conic-gradient(from ${rotation}deg at 50% 50%, #008896, #00A8B9, #008896, #00A8B9, #008896)`,
          }}
        />

        {/* Static border when not hovering */}
        <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 rounded-2xl border-2 border-white/10" />

        {/* Card Content */}
        <div className="relative h-full bg-neutral-900 rounded-2xl p-8 md:p-10 overflow-hidden">
          {/* Spotlight Effect */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle 600px at ${smoothMouseX.get()}px ${smoothMouseY.get()}px, rgba(0, 136, 150, 0.15), transparent 60%)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}

          {/* Blue Glow (stronger on hover) */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.3 : 0 }}
            transition={{ duration: 0.5 }}
            style={{
              boxShadow: "inset 0 0 60px rgba(0, 136, 150, 0.3)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon - Animates color on hover */}
            <motion.div
              className="mb-8"
              whileHover={{ scale: 1.15, rotate: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Icon
                className="transition-colors duration-500"
                size={56}
                strokeWidth={1.5}
                style={{
                  color: isHovered ? "#FFFFFF" : "#008896",
                  filter: isHovered ? "drop-shadow(0 0 20px rgba(255,255,255,0.5))" : "none",
                }}
              />
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-raleway font-light text-white mb-4 transition-colors duration-300 group-hover:text-gold-light">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-medium font-light leading-relaxed mb-8 flex-grow">
              {feature.description}
            </p>

            {/* Stats - Dramatic Typography */}
            <div className="pt-6 border-t border-white/5">
              <div className="flex items-baseline gap-2">
                <motion.span
                  className="text-5xl md:text-6xl lg:text-7xl font-raleway font-extralight text-gold-accent"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.stat}
                </motion.span>
                <span className="label-premium text-gray-light text-[0.65rem]">
                  {feature.statLabel}
                </span>
              </div>
            </div>

            {/* Decorative Corner */}
            <motion.div
              className="absolute top-0 right-0 w-20 h-20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-gold-accent/50 rounded-tr-2xl" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LuxuryGrid;
