/**
 * ScrollProgress - Premium Scroll Indicator
 * Golden progress bar that fills as user scrolls through the page
 * Adds professional polish and helps users understand page length
 */

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const ScrollProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Smooth spring animation for the progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Show progress bar after scrolling 100px
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[9998] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #008896 0%, #00A8B9 100%)",
        boxShadow: "0 0 20px rgba(0, 136, 150, 0.6)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default ScrollProgress;

