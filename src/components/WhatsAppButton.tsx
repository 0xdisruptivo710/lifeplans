import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511987654321"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-slow group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="text-white" size={32} />
      
      {/* Tooltip */}
      <span className="absolute right-20 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;
