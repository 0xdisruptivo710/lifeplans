import { GradientButton } from "@/components/ui/gradient-button";
import { MessageCircle } from "lucide-react";
import luxuryCarImage from "@/assets/luxury-car-diagonal.jpg";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${luxuryCarImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-cta" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-white mb-6">
          Pronto para Garantir Sua Tranquilidade?
        </h2>
        <p className="text-gray-light text-xl mb-10 max-w-2xl mx-auto">
          Fale com nossos especialistas e encontre o seguro ideal
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
            <GradientButton className="w-full sm:w-auto uppercase tracking-wider px-10 py-6 text-lg">
              Solicitar Cotação
            </GradientButton>
          </a>
          <a href="https://wa.me/551541412625?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
            <GradientButton variant="variant" className="w-full sm:w-auto uppercase tracking-wider px-10 py-6 text-lg">
              <MessageCircle className="mr-2" size={20} />
              Falar no WhatsApp
            </GradientButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
