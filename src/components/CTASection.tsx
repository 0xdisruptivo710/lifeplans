import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=2000')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-cta" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-white mb-6">
          Pronto para Garantir Sua Tranquilidade?
        </h2>
        <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
          Fale com nossos especialistas e encontre o seguro ideal
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button
            size="lg"
            className="bg-white text-navy-primary hover:bg-white/90 font-semibold px-10 py-6 rounded-full text-lg hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            Solicitar Cotação
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold px-10 py-6 rounded-full text-lg transition-all duration-300"
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
