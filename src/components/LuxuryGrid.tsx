const LuxuryGrid = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      alt: "Luxury Sports Car"
    },
    {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      alt: "Modern Architecture"
    },
    {
      url: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80",
      alt: "Luxury Yacht"
    },
    {
      url: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
      alt: "Private Jet"
    },
    {
      url: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
      alt: "Medical Equipment"
    },
    {
      url: "https://images.unsplash.com/photo-1622321663345-9c0c0a7d57c3?w=800&q=80",
      alt: "Luxury Watch"
    },
    {
      url: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80",
      alt: "Equestrian Sport"
    },
    {
      url: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
      alt: "Modern Architecture Interior"
    }
  ];

  return (
    <section className="section-padding bg-black-primary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-accent font-semibold text-sm tracking-wider uppercase">
            NOSSO POSICIONAMENTO
          </span>
          <h2 className="text-white mt-4 mb-6">
            Proteção Premium para um Estilo de Vida Exclusivo
          </h2>
          <p className="text-gray-medium text-lg max-w-3xl mx-auto">
            Soluções de seguros personalizadas para ativos de alto valor e momentos que realmente importam
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden group cursor-pointer"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              {/* Dark overlay with gold accent on hover */}
              <div className="absolute inset-0 bg-black-primary/40 group-hover:bg-gradient-to-t group-hover:from-black-primary/80 group-hover:via-transparent transition-all duration-500" />
              
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-accent transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryGrid;