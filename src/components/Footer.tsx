const Footer = () => {
  const products = [
    "Seguro de Vida",
    "Seguro Residencial",
    "Seguro Auto",
    "Seguro Empresarial",
    "Previdência Privada",
    "Seguro Viagem",
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
    <footer className="bg-navy-dark text-white">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-bold font-montserrat">Life Plans</span>
              <span className="text-xs text-white/60 tracking-wider mt-1">
                SEGUROS & PROTEÇÃO
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Protegendo o que realmente importa há mais de 15 anos. Especialistas em soluções personalizadas de seguros.
            </p>
            <div className="flex space-x-3">
              {["f", "i", "in", "t"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-navy-dark transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <span className="text-sm">•</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Seguros</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#seguros"
                    className="text-white/70 hover:text-white text-sm transition-colors duration-300 group"
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
            <h4 className="text-lg font-semibold mb-6">Institucional</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white text-sm transition-colors duration-300 group"
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
            <h4 className="text-lg font-semibold mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-sm">
              <li className="text-white/70">
                <span className="block font-medium text-white mb-1">Telefone</span>
                (11) 3456-7890
              </li>
              <li className="text-white/70">
                <span className="block font-medium text-white mb-1">WhatsApp</span>
                (11) 98765-4321
              </li>
              <li className="text-white/70">
                <span className="block font-medium text-white mb-1">E-mail</span>
                contato@lifeplans.com.br
              </li>
              <li className="text-white/70">
                <span className="block font-medium text-white mb-1">Horário</span>
                Seg - Sex: 8h às 18h
              </li>
            </ul>
            <div className="mt-6">
              <span className="inline-block bg-accent text-white text-xs font-semibold px-4 py-2 rounded-full">
                Atendimento 24/7
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Life Plans. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <span className="text-white/40">|</span>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
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
