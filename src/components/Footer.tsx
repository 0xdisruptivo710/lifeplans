import logoLifePlans from "@/assets/lifeplans-logo.png";

const Footer = () => {
  const products = [
    "Planos de Saúde Individual",
    "Planos de Saúde Familiar",
    "Planos de Saúde Empresarial",
    "Planos Odontológicos",
    "Seguro de Vida",
    "Seguro Auto",
  ];

  const company = [
    "Sobre a Life Plans",
    "Como Funciona",
    "Blog",
    "Trabalhe Conosco",
    "Perguntas Frequentes",
    "Política de Privacidade",
  ];

  return (
    <footer className="bg-black-secondary text-white border-t border-gray-dark">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <div>
            <div className="mb-6">
              <img 
                src={logoLifePlans} 
                alt="Life Plans" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-medium text-sm leading-relaxed mb-6 font-light">
              Há 13 anos protegendo famílias e empresas em Sorocaba com planos de saúde, odontológicos e seguros.
            </p>
            <div className="flex space-x-3">
              {["f", "i", "in", "t"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-dark flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent hover:text-black-primary transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <span className="text-sm">•</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Products */}
          <div>
            <h4 className="text-lg font-light mb-6 text-white">Nossos Serviços</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#planos"
                    className="text-gray-medium hover:text-gold-accent text-sm transition-colors duration-300 group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                      {product}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Institucional</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-medium hover:text-gold-accent text-sm transition-colors duration-300 group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Fale Conosco</h4>
            <ul className="space-y-4 text-sm">
              <li className="text-gray-medium">
                <span className="block font-light text-white mb-1">Telefone</span>
                (15) 4141-2625
              </li>
              <li className="text-gray-medium">
                <span className="block font-light text-white mb-1">WhatsApp</span>
                (15) 4141-2625
              </li>
              <li className="text-gray-medium">
                <span className="block font-light text-white mb-1">E-mail</span>
                financeiro@lifeplans.com.br
              </li>
              <li className="text-gray-medium">
                <span className="block font-light text-white mb-1">Localização</span>
                Sorocaba - SP
              </li>
            </ul>
            <div className="mt-6">
              <span className="inline-block bg-gradient-gold text-black-primary text-xs font-semibold px-4 py-2 rounded-full">
                Atendimento 24/7
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-dark pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-medium text-sm">
              © 2024 Life Plans. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
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
