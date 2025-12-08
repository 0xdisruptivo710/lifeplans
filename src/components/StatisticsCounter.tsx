import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users, Award, Building2, ThumbsUp } from "lucide-react";

const StatisticsCounter = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [counts, setCounts] = useState({
    clients: 0,
    years: 0,
    partners: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      clients: 50000,
      years: 16,
      partners: 50,
      satisfaction: 98,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
        partners: Math.floor(targets.partners * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: counts.clients.toLocaleString("pt-BR"),
      suffix: "+",
      label: "Clientes Atendidos",
    },
    {
      icon: Award,
      value: counts.years,
      suffix: "+",
      label: "Anos de Experiência",
    },
    {
      icon: Building2,
      value: counts.partners,
      suffix: "+",
      label: "Parceiros Confiáveis",
    },
    {
      icon: ThumbsUp,
      value: counts.satisfaction,
      suffix: "%",
      label: "Satisfação dos Clientes",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-4 md:p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/10 mb-3 md:mb-4">
                    <Icon className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">
                    {stat.value}
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  <div className="text-muted-foreground font-medium text-xs md:text-base">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsCounter;
