import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/07286f4f-ed4a-4ed6-adc6-e170dff5dabc.png",
      alt: "Facciata esterna Padel Club 58",
      title: "La Nostra Struttura",
      description: "Un design moderno che si integra perfettamente nell'ambiente"
    },
    {
      src: "/lovable-uploads/ab9eeb24-91ea-4ca8-ab3d-dbd223a4581f.png",
      alt: "Reception Padel Club 58",
      title: "Reception & Accoglienza",
      description: "Un'accoglienza professionale per tutti i nostri ospiti"
    },
    {
      src: "/lovable-uploads/24629e91-75c2-485c-a59c-0f1cfde369b4.png",
      alt: "Spogliatoi moderni",
      title: "Spogliatoi Attrezzati",
      description: "Comfort e funzionalità per tutti gli atleti"
    },
    {
      src: "/lovable-uploads/eade1fcb-3759-46da-a702-3f067e239f90.png",
      alt: "Pro Shop attrezzature",
      title: "Pro Shop",
      description: "Tutto l'equipaggiamento professionale di cui hai bisogno"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-padel-dark">
            La Nostra Gallery
          </h2>
          <p className="text-xl text-padel-gray max-w-3xl mx-auto leading-relaxed">
            Scopri ogni angolo del Padel Club 58 attraverso le nostre immagini
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-padel-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-white/90">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-primary text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Vieni a Trovarci!</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Niente batte l'esperienza dal vivo. Vieni a visitare le nostre strutture 
              e scopri perché siamo il centro padel più moderno del Veneto.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Visite Guidate Gratuite
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Prova Gratuita
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Consulenza Personalizzata
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;