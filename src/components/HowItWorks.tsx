import { FileText, ListChecks, Scale, Shield } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Conte suas Necessidades",
    description: "Preencha um formulário rápido ou fale com nosso especialista",
  },
  {
    number: 2,
    icon: ListChecks,
    title: "Receba Propostas",
    description: "Analisamos e apresentamos as melhores opções do mercado",
  },
  {
    number: 3,
    icon: Scale,
    title: "Compare e Escolha",
    description: "Compare coberturas e preços para decidir a melhor opção",
  },
  {
    number: 4,
    icon: Shield,
    title: "Fique Protegido",
    description: "Contrate online e receba sua apólice imediatamente",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-black-primary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-accent font-semibold text-sm tracking-wider uppercase">
            PROCESSO SIMPLES
          </span>
          <h2 className="text-white mt-4 mb-6">
            Como Contratar Seu Seguro
          </h2>
          <p className="text-gray-medium text-lg max-w-2xl mx-auto">
            Em apenas 4 passos você garante a proteção ideal
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-dark" style={{ width: 'calc(100% - 10rem)', marginLeft: '5rem' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-gold flex items-center justify-center mb-6 shadow-elegant group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black-primary text-4xl font-bold font-montserrat">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="text-gold-accent" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
