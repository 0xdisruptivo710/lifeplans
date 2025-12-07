import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "Quais são as principais operadoras de planos de saúde disponíveis?",
    answer: "Trabalhamos com as melhores operadoras do mercado: Amil, SulAmérica, Bradesco Saúde, Unimed, Intermédica, entre outras. Cada uma oferece diferentes tipos de cobertura e redes credenciadas para atender suas necessidades específicas."
  },
  {
    question: "Como funciona a carência dos planos de saúde?",
    answer: "A carência é o período de espera para utilizar determinados procedimentos após a contratação do plano. Geralmente, consultas têm carência de 24h, exames simples de 3 meses, procedimentos de alta complexidade de 180 dias e partos de 300 dias. Algumas situações, como urgência e emergência, têm cobertura após 24h."
  },
  {
    question: "Qual a diferença entre plano de saúde individual, familiar e empresarial?",
    answer: "O plano individual é para uma pessoa, o familiar cobre você e seus dependentes (cônjuge, filhos, pais), e o empresarial é voltado para empresas com colaboradores. Os planos empresariais geralmente têm melhores preços e condições, além de menos restrições na contratação."
  },
  {
    question: "Como escolher o melhor plano de saúde para minha família?",
    answer: "Avaliamos diversos fatores: tamanho da rede credenciada na sua região, tipo de acomodação (enfermaria ou apartamento), cobertura nacional ou regional, tipos de procedimentos cobertos e seu orçamento. Nossa consultoria personalizada ajuda a encontrar o equilíbrio ideal entre custo e benefício."
  },
  {
    question: "O que está incluído no seguro residencial?",
    answer: "O seguro residencial oferece cobertura contra incêndio, raio, explosão, roubo e furto qualificado, danos elétricos, vendaval, granizo, entre outros. Também pode incluir assistência 24h para chaveiro, encanador, eletricista, além de responsabilidade civil familiar."
  },
  {
    question: "Como funciona o processo de contratação?",
    answer: "É muito simples: 1) Entre em contato conosco pelo WhatsApp, formulário ou telefone; 2) Nossa equipe analisa seu perfil e necessidades; 3) Apresentamos as melhores opções do mercado; 4) Você escolhe o plano ideal; 5) Fazemos toda a documentação e contratação online. Todo o processo é rápido e sem burocracia."
  },
  {
    question: "Posso cancelar meu plano quando quiser?",
    answer: "Sim, os planos de saúde individuais e familiares não têm fidelidade obrigatória e podem ser cancelados a qualquer momento. Já os planos empresariais podem ter condições específicas de acordo com o contrato estabelecido com a operadora."
  },
  {
    question: "Qual a área de atuação da Lifeplans?",
    answer: "Atendemos mais de 50 cidades do interior de São Paulo, com profundo conhecimento da rede credenciada regional. Também auxiliamos na contratação de planos com cobertura nacional, atendendo clientes em todo o Brasil."
  }
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="section-padding bg-black-secondary relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-accent font-light text-sm tracking-[0.2em] uppercase mb-4 block">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-white mt-4 mb-6 font-raleway font-light text-4xl lg:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-light text-lg max-w-2xl mx-auto font-extralight">
            Tire suas principais dúvidas sobre planos de saúde e seguros
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-black-primary border border-gray-dark hover:border-gold-accent transition-all duration-300 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
                  <span className="text-white font-light text-lg group-hover:text-gold-accent transition-colors duration-300">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-gray-light font-extralight leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-light font-light mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center text-gold-accent font-light hover:gap-3 gap-2 transition-all duration-300 text-lg"
          >
            Entre em contato conosco
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
