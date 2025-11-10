import { Button } from "@/components/ui/button";
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
          <Button
            size="lg"
            className="bg-gradient-gold text-black-primary hover:opacity-90 font-semibold px-10 py-6 rounded-none text-lg hover:-translate-y-1 transition-all duration-300 shadow-elegant uppercase tracking-wider"
          >
            Solicitar Cotação
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-black-primary font-semibold px-10 py-6 rounded-none text-lg transition-all duration-300 uppercase tracking-wider"
          >
            <MessageCircle className="mr-2" size={20} />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
