import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GradientButton } from "@/components/ui/gradient-button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Briefcase, TrendingUp, Users, Heart, Award, Target } from "lucide-react";
import corporateBuildings from "@/assets/corporate-buildings.jpg";
import { useState } from "react";
import { toast } from "sonner";

const benefits = [
  {
    icon: TrendingUp,
    title: "Crescimento Profissional",
    description: "Oportunidades de desenvolvimento e crescimento na carreira",
  },
  {
    icon: Users,
    title: "Ambiente Colaborativo",
    description: "Equipe unida e focada em resultados",
  },
  {
    icon: Heart,
    title: "Qualidade de Vida",
    description: "Horários flexíveis e benefícios competitivos",
  },
  {
    icon: Award,
    title: "Reconhecimento",
    description: "Valorizamos e premiamos bons resultados",
  },
];

const positions = [
  {
    title: "Consultor de Vendas",
    type: "Presencial",
    description: "Atendimento consultivo a clientes, prospecção e fechamento de contratos de planos de saúde e seguros.",
  },
  {
    title: "Assistente Comercial",
    type: "Presencial",
    description: "Suporte ao time comercial, análise de propostas e acompanhamento de processos.",
  },
  {
    title: "Corretor de Seguros",
    type: "Autônomo",
    description: "Profissional com SUSEP ativa para atuar com seguros diversos e construir sua própria carteira.",
  },
];

const TrabalheConosco = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.2);
  const { ref: positionsRef, isVisible: positionsVisible } = useScrollAnimation(0.2);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.2);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Meu nome é ${formData.name}.%0A%0A` +
      `Email: ${formData.email}%0A` +
      `Telefone: ${formData.phone}%0A` +
      `Vaga de interesse: ${formData.position}%0A%0A` +
      `Mensagem: ${formData.message}`;
    
    window.open(`https://wa.me/551541412625?text=${message}`, '_blank');
    
    toast.success("Redirecionando para o WhatsApp...");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${corporateBuildings})`,
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-gold-accent font-light text-sm md:text-base tracking-wider uppercase mb-4 block">
              FAÇA PARTE DO TIME
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-raleway font-light text-white mb-6">
              Trabalhe Conosco
            </h1>
            <p className="text-lg md:text-xl text-gray-light max-w-3xl mx-auto mb-8 font-light">
              Junte-se à Lifeplans e construa uma carreira de sucesso no mercado 
              de planos de saúde e seguros
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-black-secondary">
        <div className="container-custom">
          <div
            ref={benefitsRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
              BENEFÍCIOS
            </span>
            <h2 className="text-3xl md:text-5xl font-raleway font-light mb-6 text-white">
              Por Que Trabalhar na Lifeplans?
            </h2>
            <p className="text-gray-light text-lg max-w-2xl mx-auto font-light">
              Oferecemos um ambiente de trabalho estimulante e oportunidades reais de crescimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`bg-black-primary p-8 rounded-lg border border-gray-dark hover:border-gold-accent transition-all duration-500 group ${
                    benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-gold-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-raleway font-light text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-light font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-20 md:py-28 bg-black-primary">
        <div className="container-custom">
          <div
            ref={positionsRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              positionsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
              OPORTUNIDADES
            </span>
            <h2 className="text-3xl md:text-5xl font-raleway font-light mb-6 text-white">
              Vagas Disponíveis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {positions.map((position, index) => (
              <div
                key={index}
                className={`bg-black-secondary p-8 rounded-lg border border-gray-dark hover:border-gold-accent transition-all duration-500 ${
                  positionsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Briefcase className="w-10 h-10 text-gold-accent" />
                  <span className="text-xs bg-gold-accent/10 text-gold-accent px-3 py-1 rounded-full">
                    {position.type}
                  </span>
                </div>
                <h3 className="text-2xl font-raleway font-light text-white mb-3">
                  {position.title}
                </h3>
                <p className="text-gray-light font-light leading-relaxed">
                  {position.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-28 bg-black-secondary">
        <div className="container-custom max-w-3xl">
          <div
            ref={formRef}
            className={`transition-all duration-1000 ${
              formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="text-center mb-12">
              <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
                CANDIDATE-SE
              </span>
              <h2 className="text-3xl md:text-4xl font-raleway font-light mb-4 text-white">
                Envie Seu Currículo
              </h2>
              <p className="text-gray-light font-light">
                Preencha o formulário abaixo e entraremos em contato
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-light mb-2 font-light">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black-primary border border-gray-dark rounded-lg text-white focus:border-gold-accent focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-light mb-2 font-light">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black-primary border border-gray-dark rounded-lg text-white focus:border-gold-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-light mb-2 font-light">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black-primary border border-gray-dark rounded-lg text-white focus:border-gold-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="position" className="block text-gray-light mb-2 font-light">
                  Vaga de Interesse *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black-primary border border-gray-dark rounded-lg text-white focus:border-gold-accent focus:outline-none transition-colors"
                >
                  <option value="">Selecione uma vaga</option>
                  <option value="Consultor de Vendas">Consultor de Vendas</option>
                  <option value="Assistente Comercial">Assistente Comercial</option>
                  <option value="Corretor de Seguros">Corretor de Seguros</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-light mb-2 font-light">
                  Mensagem / Experiência Profissional
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-black-primary border border-gray-dark rounded-lg text-white focus:border-gold-accent focus:outline-none transition-colors resize-none"
                  placeholder="Conte um pouco sobre sua experiência e objetivos profissionais..."
                />
              </div>

              <div className="text-center">
                <GradientButton type="submit" className="uppercase tracking-wider px-12 py-4">
                  Enviar Candidatura
                </GradientButton>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TrabalheConosco;
