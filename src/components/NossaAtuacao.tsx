import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import nossaAtuacaoImg from "@/assets/teste-reference.png";

const NossaAtuacao = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 md:py-28 bg-black-primary relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--gold-accent) / 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, hsl(var(--gold-accent) / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold-accent font-light text-sm tracking-wider uppercase mb-4 block">
            ÁREAS DE ATUAÇÃO
          </span>
          <h2 className="text-3xl md:text-5xl font-raleway font-light mb-6 text-white">
            Nossa Atuação
          </h2>
          <p className="text-gray-light text-lg max-w-3xl mx-auto font-light">
            Oferecemos soluções completas em seguros e benefícios para atender todas as suas necessidades
          </p>
        </div>

        {/* Image with dark background adaptation */}
        <div
          ref={imageRef}
          className={`relative max-w-5xl mx-auto transition-all duration-1000 ${
            imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-radial from-gold-accent/5 via-transparent to-transparent blur-3xl" />
          
          {/* Image container */}
          <div className="relative bg-white/95 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-gold-accent/30">
            <img 
              src={nossaAtuacaoImg} 
              alt="Nossa Atuação - Benefícios, Private, Corporativo e Linhas Financeiras"
              className="w-full h-auto"
            />
          </div>

          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-gold-accent/50" />
          <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-gold-accent/50" />
          <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-gold-accent/50" />
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-gold-accent/50" />
        </div>
      </div>
    </section>
  );
};

export default NossaAtuacao;
