/**
 * SubpageHero - Dark Luxury Editorial Hero for Subpages
 * Simplified version of main Hero with consistent styling
 */

import { motion } from "motion/react";
import { ReactNode } from "react";

interface SubpageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  description?: string;
  backgroundImage: string;
  children?: ReactNode;
}

const SubpageHero = ({
  title,
  subtitle,
  label = "LIFEPLANS",
  description,
  backgroundImage,
  children
}: SubpageHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black-primary py-32 md:py-40">
      {/* Background with Frame Effect */}
      <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
        <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
          <div
            className="relative w-full max-w-[90%] h-[85%] rounded-3xl md:rounded-[3rem] overflow-hidden will-change-transform"
            style={{
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center will-change-transform"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                transform: 'translateZ(0) scale(1.05)',
              }}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black-primary via-black-primary/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black-primary/80 via-transparent to-black-primary/40" />

            {/* Gold Accent Lines */}
            <div className="absolute top-0 left-0 w-32 md:w-64 h-[2px] bg-gradient-to-r from-gold-accent to-transparent" />
            <div className="absolute bottom-0 right-0 w-32 md:w-64 h-[2px] bg-gradient-to-l from-gold-accent to-transparent" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <span className="label-premium text-gold-accent inline-block">
              {label}
            </span>
          </motion.div>

          {/* Title */}
          <div className="overflow-hidden mb-6 md:mb-8">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-raleway font-extralight text-white"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                textShadow: '0 4px 30px rgba(0,0,0,0.8), 0 0 80px rgba(0,136,150,0.15)'
              }}
            >
              {title}
            </motion.h1>
          </div>

          {/* Subtitle */}
          {subtitle && (
            <motion.h2
              className="text-2xl md:text-4xl lg:text-5xl font-raleway font-extralight text-gray-light mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
              {subtitle}
            </motion.h2>
          )}

          {/* Description */}
          {description && (
            <motion.p
              className="text-base md:text-xl text-gray-medium font-light mb-12 md:mb-16 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {description}
            </motion.p>
          )}

          {/* Custom Children (CTAs, etc) */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-white/5 rounded-full blur-[2px]" />
      <div className="absolute bottom-32 left-10 w-24 h-24 border border-gold-accent/10 rounded-full blur-[2px]" />
    </section>
  );
};

export default SubpageHero;

