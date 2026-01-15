import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import nossaAtuacaoImg from "@/assets/fundo_oficial.jpg.png";
import nossaAtuacaoBg from "@/assets/nossa-atuacao-bg.jpeg";

const NossaAtuacao = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);

  return (
    <section 
      className="relative py-4 md:py-6 overflow-hidden"
      style={{
        backgroundImage: `url(${nossaAtuacaoBg})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black-primary/40" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-3 md:mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-1 block">
            ÁREAS DE ATUAÇÃO
          </span>
          <h2 className="text-3xl md:text-5xl font-raleway font-light mb-3 text-white">
            Soluções
          </h2>
        </div>

        {/* Diagram Image */}
        <div
          ref={imageRef}
          className={`relative max-w-5xl mx-auto transition-all duration-1000 ${
            imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <img 
            src={nossaAtuacaoImg} 
            alt="Nossa Atuação - Benefícios, Private, Corporativo e Linhas Financeiras"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default NossaAtuacao;
