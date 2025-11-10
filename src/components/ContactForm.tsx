import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insurance: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", insurance: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 3456-7890",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@lifeplans.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Paulista, 1000 - São Paulo, SP",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(11) 98765-4321",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-black-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-white mb-6">Fale com a Life Plans</h2>
            <p className="text-gray-medium text-lg mb-12 leading-relaxed">
              Nossa equipe está pronta para ajudar você a encontrar a proteção ideal
            </p>

            <div className="space-y-8 mb-12">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gold-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-gold-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-medium">{item.info}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {["facebook", "instagram", "linkedin", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-12 h-12 rounded-full border border-gray-dark flex items-center justify-center hover:bg-gold-accent hover:border-gold-accent hover:text-black-primary transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <span className="text-lg">•</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Solicite sua Cotação
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-light">Nome Completo</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 bg-black-primary border-gray-dark text-white focus:border-gold-accent"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-light">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 bg-black-primary border-gray-dark text-white focus:border-gold-accent"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-light">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 bg-black-primary border-gray-dark text-white focus:border-gold-accent"
                />
              </div>

              <div>
                <Label htmlFor="insurance" className="text-gray-light">Tipo de Seguro</Label>
                <select
                  id="insurance"
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 bg-black-primary border border-gray-dark text-white rounded-md focus:border-gold-accent focus:outline-none focus:ring-2 focus:ring-gold-accent/20"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="vida">Seguro de Vida</option>
                  <option value="residencial">Seguro Residencial</option>
                  <option value="auto">Seguro Auto</option>
                  <option value="empresarial">Seguro Empresarial</option>
                  <option value="previdencia">Previdência Privada</option>
                  <option value="viagem">Seguro Viagem</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-light">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] resize-none bg-black-primary border-gray-dark text-white focus:border-gold-accent"
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1"
                />
                <Label htmlFor="privacy" className="text-sm text-gray-medium cursor-pointer">
                  Li e aceito a Política de Privacidade
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-14 bg-gradient-gold text-black-primary hover:opacity-90 font-semibold rounded-none hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider"
              >
                Enviar Solicitação
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
