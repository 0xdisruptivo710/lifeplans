import missionImage from "@/assets/mission-image.jpg";

const OurMission = () => {
  return (
    <section className="section-padding bg-black-primary relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left Content */}
          <div className="pr-0 lg:pr-16 mb-12 lg:mb-0">
            {/* Badge */}
            <span className="text-gold-accent font-light text-sm tracking-[0.2em] uppercase mb-6 block">
              MERCADO
            </span>
            
            {/* Decorative Line */}
            <div className="w-full h-px bg-gradient-to-r from-gray-dark to-transparent mb-8"></div>
            
            {/* Title */}
            <h2 className="text-white text-4xl lg:text-5xl font-raleway font-light mb-8 tracking-tight">
              NOSSA ATUAÇÃO
            </h2>
            
            {/* Description */}
            <p className="text-gray-light text-base lg:text-lg leading-relaxed font-extralight">
              A indústria brasileira de planos de saúde e seguros vem se modernizando e está cada vez mais alinhada ao nível de 
              governança e complexidade de mercados mais desenvolvidos. Neste cenário, a Life Plans vem contribuindo 
              para a consolidação de um novo modelo de corretoras que assumem um papel consultivo e 100% 
              orientado para o cliente. Oferecemos nossa competência técnica ao mercado para atender as expectativas 
              e demandas de toda a cadeia, construindo uma relação agregadora entre todas as partes.
            </p>
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
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
