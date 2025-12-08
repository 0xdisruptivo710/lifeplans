import missionImage from "@/assets/mission-image.jpg";
import { useParallax } from "@/hooks/use-parallax";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const OurMission = () => {
  const parallaxImage = useParallax(0.05);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.2);
  
  return (
    <section className="section-padding bg-black-primary relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left Content */}
          <div className="pr-0 lg:pr-16 mb-12 lg:mb-0">
            {/* Badge */}
            <div
              ref={titleRef}
              className={`transition-all duration-700 ${
                titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-gold-accent font-light text-sm tracking-[0.2em] uppercase mb-6 block">
                MERCADO
              </span>
              
              {/* Decorative Line */}
              <div className="w-full h-px bg-gradient-to-r from-gray-dark to-transparent mb-8"></div>
              
              {/* Title */}
              <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-8 tracking-tight">
                NOSSA ATUAÇÃO
              </h2>
            </div>
            
            {/* Description */}
            <div
              ref={textRef}
              className={`transition-all duration-700 delay-200 ${
                textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-gray-light text-base lg:text-lg leading-relaxed font-extralight">
                Cuidar de quem você ama e proteger o que você conquistou não deveria ser complicado. 
                Na Lifeplans, acreditamos que cada família, cada empresa e cada sonho merece a proteção certa. 
                Por isso, há mais de 16 anos conectamos pessoas aos melhores planos de saúde, seguros e consórcios 
                do mercado, sempre com atendimento consultivo e personalizado. Não vendemos produtos — 
                construímos soluções sob medida para a sua tranquilidade.
              </p>
            </div>
          </div>

          {/* Right Diagonal Image */}
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Gold Diagonal Background */}
            <div 
              className="absolute inset-0 bg-gold-accent"
              style={{
                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
              }}
            ></div>
            
            {/* Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${missionImage})`,
                clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 5% 100%)',
                transform: `translateY(${parallaxImage}px)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
