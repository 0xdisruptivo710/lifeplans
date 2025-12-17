/**
 * Header - FLOATING ISLAND STYLE
 * Premium floating navigation bar with glassmorphism
 * Centralizado e moderno
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoLifePlans from "@/assets/lifeplans-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Quem Somos", href: "/sobre" },
    { label: "Missão & Valores", href: "/missao-visao-valores" },
    { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  ];

  const serviceItems = [
    { label: "Planos de Saúde", href: "/planos-saude" },
    { label: "Planos Odontológicos", href: "/planos-odontologicos" },
    { label: "Seguros", href: "/seguros" },
    { label: "Consórcios", href: "/consorcios" },
  ];

  return (
    <>
      {/* Desktop Floating Island */}
      <motion.header
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 pt-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-custom">
          <motion.div
            className={`mx-auto max-w-7xl rounded-full border backdrop-blur-xl transition-all duration-500 ${
              isScrolled
                ? "bg-black-secondary/90 border-white/10 shadow-gold-glow"
                : "bg-black-primary/40 border-white/5"
            }`}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-8 py-4">
              {/* Logo removido - agora está fixo no Hero */}

              {/* Navigation */}
              <nav className="flex items-center space-x-8">
                {navItems.slice(0, 2).map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="relative text-sm font-light text-gray-light hover:text-white transition-colors group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}

                {/* Services Dropdown */}
                <div ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="relative text-sm font-light text-gray-light hover:text-white transition-colors group flex items-center gap-1"
                  >
                    Soluções
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-4 w-64 bg-black-secondary/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-gold-glow overflow-hidden"
                      >
                        <div className="py-2">
                          {serviceItems.map((item, idx) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="block px-6 py-3 text-sm font-light text-gray-light hover:text-white hover:bg-white/5 transition-colors"
                            >
                              <motion.div
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                {item.label}
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navItems.slice(2).map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="relative text-sm font-light text-gray-light hover:text-white transition-colors group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <a
                href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="px-6 py-2.5 bg-gold-accent text-black-primary text-xs font-medium tracking-wider uppercase rounded-full hover:bg-gold-light transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cotação
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Header (Traditional) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black-secondary/95 backdrop-blur-xl border-b border-white/10">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logoLifePlans}
                alt="Lifeplans"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-white/10 bg-black-secondary/95 backdrop-blur-xl overflow-hidden"
            >
              <nav className="container-custom py-6 flex flex-col space-y-4">
                {navItems.slice(0, 2).map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-light hover:text-white font-light transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex items-center justify-between text-gray-light hover:text-white font-light transition-colors py-2"
                  >
                    Soluções
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-200 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 mt-2 space-y-2 border-l border-white/10"
                      >
                        {serviceItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-light hover:text-white font-light transition-colors py-2"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navItems.slice(2).map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-light hover:text-white font-light transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}

                <a
                  href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="w-full px-6 py-3 bg-gold-accent text-black-primary text-xs font-medium tracking-wider uppercase rounded-full hover:bg-gold-light transition-colors duration-300">
                    Solicitar Cotação
                  </button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
