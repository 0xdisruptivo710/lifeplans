import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoLifePlans from "@/assets/lifeplans-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    { label: "Missão, Visão e Valores", href: "/missao-visao-valores" },
    { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  ];

  const serviceItems = [
    { label: "Planos de Saúde", href: "/planos-saude" },
    { label: "Planos Odontológicos", href: "/planos-odontologicos" },
    { label: "Seguros", href: "/seguros" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black-secondary/95 backdrop-blur-md shadow-lg border-b border-gray-dark"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoLifePlans} 
              alt="Lifeplans - Planos de Saúde e Seguros" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="relative text-[14px] font-light text-gray-light hover:text-gold-accent transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="relative text-[14px] font-light text-gray-light hover:text-gold-accent transition-colors group flex items-center gap-1"
              >
                Serviços
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-accent transition-all duration-300 group-hover:w-full" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-black-secondary border border-gray-dark rounded-lg shadow-xl z-50">
                  <div className="py-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-3 text-[14px] font-light text-gray-light hover:text-gold-accent hover:bg-black-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.slice(3).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="relative text-[14px] font-light text-gray-light hover:text-gold-accent transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
              <GradientButton className="uppercase tracking-wider text-sm px-7 py-3">
                Faça sua Cotação
              </GradientButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="text-white" size={28} />
            ) : (
              <Menu className="text-white" size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black-secondary shadow-lg border-t border-gray-dark">
          <nav className="container-custom py-6 flex flex-col space-y-4">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-light hover:text-gold-accent font-medium transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between text-gray-light hover:text-gold-accent font-medium transition-colors py-2"
              >
                Serviços
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l border-gray-dark">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-light hover:text-gold-accent font-light transition-colors py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(3).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-light hover:text-gold-accent font-medium transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            
            <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" className="w-full">
              <GradientButton className="w-full uppercase tracking-wider">
                Faça sua Cotação
              </GradientButton>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
