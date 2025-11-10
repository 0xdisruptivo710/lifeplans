import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Seguros", href: "#seguros" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className={`text-2xl md:text-3xl font-bold font-montserrat transition-colors ${
                isScrolled ? "text-navy-primary" : "text-white"
              }`}>
                Life Plans
              </span>
              <span className={`text-xs tracking-wider transition-colors ${
                isScrolled ? "text-gray-medium" : "text-white/80"
              }`}>
                SEGUROS & PROTEÇÃO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-[15px] font-medium transition-colors group ${
                  isScrolled
                    ? "text-navy-primary hover:text-accent"
                    : "text-white hover:text-white/80"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="default"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-7 py-5 rounded-full shadow-elegant hover:scale-105 transition-all duration-300"
            >
              Faça sua Cotação
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-navy-primary" : "text-white"} size={28} />
            ) : (
              <Menu className={isScrolled ? "text-navy-primary" : "text-white"} size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="container-custom py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-navy-primary hover:text-accent font-medium transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="default"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full w-full"
            >
              Faça sua Cotação
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
