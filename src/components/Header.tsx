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

// Social Media Icons
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

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

              {/* Social Media Icons - Desktop */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/lifeplans_saude/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent hover:text-black-primary transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4 text-gray-light group-hover:text-black-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/company/life-plans-sa%C3%BAde-e-seguros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent hover:text-black-primary transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 text-gray-light group-hover:text-black-primary transition-colors" />
                </a>
                <a
                  href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent hover:text-black-primary transition-all duration-300 group"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-gray-light group-hover:text-black-primary transition-colors" />
                </a>
              </div>

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

                {/* Social Media Section */}
                <div className="pt-6 border-t border-white/10 mt-4">
                  <p className="text-xs font-light text-gray-medium mb-4 uppercase tracking-wider">
                    Redes Sociais
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/lifeplans_saude/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gray-dark flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent hover:text-black-primary transition-all duration-300 group"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-5 h-5 text-gray-light group-hover:text-black-primary transition-colors" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/life-plans-sa%C3%BAde-e-seguros"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gray-dark flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent hover:text-black-primary transition-all duration-300 group"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="w-5 h-5 text-gray-light group-hover:text-black-primary transition-colors" />
                    </a>
                    <a
                      href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gray-dark flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent hover:text-black-primary transition-all duration-300 group"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-gray-light group-hover:text-black-primary transition-colors" />
                    </a>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
