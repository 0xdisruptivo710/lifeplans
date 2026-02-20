import logoLifePlans from "@/assets/lifeplans-logo.png";

const Footer = () => {
  const products = [
    { name: "Planos de Saúde Individual", link: "/plano-saude-individual" },
    { name: "Planos de Saúde Familiar", link: "/plano-saude-familiar" },
    { name: "Planos de Saúde Empresarial", link: "/plano-saude-empresarial" },
    { name: "Planos Odontológicos", link: "/planos-odontologicos" },
    { name: "Seguro de Vida", link: "/seguro-vida" },
    { name: "Seguro Auto", link: "/seguro-auto" },
  ];

  const company = [
    { name: "Sobre a Lifeplans", link: "/sobre" },
    { name: "Como Funciona", link: "/#como-funciona" },
    { name: "Blog", link: "/#" },
    { name: "Trabalhe Conosco", link: "/trabalhe-conosco" },
    { name: "Perguntas Frequentes", link: "/#faq" },
    { name: "Política de Privacidade", link: "/#" },
  ];

  return (
    <footer className="bg-black-secondary text-white border-t border-gray-dark">
      <div className="container-custom py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
          {/* Column 1 - Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 md:mb-6">
              <img 
                src={logoLifePlans} 
                alt="Lifeplans" 
                className="h-12 md:h-16 w-auto"
              />
            </div>
            <p className="text-gray-medium text-xs md:text-sm leading-relaxed mb-4 md:mb-6 font-light">
              Há 16 anos protegendo famílias e empresas em Todo o Brasil com planos de saúde, odontológicos e seguros.
            </p>
            <div className="flex space-x-2 md:space-x-3">
              {["f", "i", "in", "t"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-dark flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent hover:text-black-primary transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <span className="text-xs md:text-sm">•</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Products */}
          <div className="col-span-1">
            <h4 className="text-sm md:text-lg font-light mb-3 md:mb-6 text-white">Nossos Serviços</h4>
            <ul className="space-y-2 md:space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.link}
                    className="text-gray-medium hover:text-gold-accent text-xs md:text-sm transition-colors duration-300 group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                      {product.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="col-span-1">
            <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-6 text-white">Institucional</h4>
            <ul className="space-y-2 md:space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-gray-medium hover:text-gold-accent text-xs md:text-sm transition-colors duration-300 group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-6 text-white">Fale Conosco</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
              <li className="text-gray-medium">
                <span className="block font-light text-white mb-1">Telefone</span>
                <a href="tel:+551534118501" className="hover:text-gold-accent transition-colors">
                  (15) 3411-8501
                </a>
              </li>
              <li className="text-gray-medium">
                <span className="block font-light text-white mb-1">WhatsApp</span>
                <a href="https://wa.me/551534118501?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" className="hover:text-gold-accent transition-colors">
                  (15) 3411-8501
                </a>
              </li>
              <li className="text-gray-medium">
                <span className="block font-light text-white mb-1">E-mail</span>
                <a href="mailto:contato@lifeplans.com.br" className="hover:text-gold-accent transition-colors break-all">
                  contato@lifeplans.com.br
                </a>
              </li>
              <li className="text-gray-medium">
                <span className="block font-light text-white mb-1">Atendimento</span>
                Todo o Brasil
              </li>
            </ul>
            <div className="mt-4 md:mt-6">
              <span className="inline-block bg-gradient-gold text-black-primary text-[10px] md:text-xs font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                Atendimento 24/7
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-dark pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-gray-medium text-xs md:text-sm text-center md:text-left">
              © 2024 Lifeplans. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm">
              <a href="#" className="text-gray-medium hover:text-gold-accent transition-colors">
                Termos de Uso
              </a>
              <span className="text-gray-dark">|</span>
              <a href="#" className="text-gray-medium hover:text-gold-accent transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
