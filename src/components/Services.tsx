import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, GraduationCap, Trophy, Dumbbell, Zap } from "lucide-react";
import padelLessonImage from "/lovable-uploads/61494a17-d8cf-450a-941c-be29e012be33.png";
import kidsSchoolImage from "/lovable-uploads/fdaee351-54be-46b7-a8e8-673977b1fdc6.png";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Lezioni di Gruppo",
      description: "Corsi per adulti in piccoli gruppi con istruttori qualificati FITP",
      features: ["Massimo 4 persone", "Tutti i livelli", "Progressione garantita"],
      price: "Da €25/persona"
    },
    {
      icon: User,
      title: "Lezioni Individuali",
      description: "Coaching personalizzato per migliorare rapidamente la tua tecnica",
      features: ["Programma personalizzato", "Analisi video", "Feedback costante"],
      price: "Da €50/ora"
    },
    {
      icon: GraduationCap,
      title: "Scuola Padel Bambini",
      description: "Programmi specifici per giovani atleti dai 6 ai 16 anni",
      features: ["Metodo ludico-educativo", "Attrezzature junior", "Sviluppo coordinazione"],
      price: "Da €20/lezione"
    },
    {
      icon: Trophy,
      title: "Squadre Agonistiche",
      description: "Training avanzato per competizioni regionali e nazionali",
      features: ["Preparazione tornei", "Strategia di gioco", "Mental coaching"],
      price: "Su richiesta"
    },
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "Allenamento funzionale specifico per il padel nella nostra palestra",
      features: ["Prevenzione infortuni", "Forza specifica", "Recupero attivo"],
      price: "Da €45/ora"
    },
    {
      icon: Zap,
      title: "Training Atleti",
      description: "Preparazione atletica specifica per giocatori professionisti",
      features: ["Analisi prestazione", "Periodizzazione", "Recupero ottimale"],
      price: "Su richiesta"
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-padel-dark">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-padel-gray max-w-3xl mx-auto leading-relaxed">
            Dal giocatore principiante al professionista, offriamo servizi su misura 
            per ogni esigenza e livello di gioco.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-padel-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-padel-gray mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-padel-gray flex items-center">
                      <span className="w-2 h-2 bg-padel-blue rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-padel-blue">{service.price}</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-padel-blue text-padel-blue hover:bg-padel-blue hover:text-white"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Info
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative rounded-2xl overflow-hidden group">
            <img 
              src={padelLessonImage} 
              alt="Lezioni di Padel" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-padel-dark/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Corsi per Adulti</h3>
              <p className="mb-4 opacity-90">Programmi strutturati per tutti i livelli, dalla tecnica di base alle strategie avanzate.</p>
              <Button 
                className="bg-white text-padel-dark hover:bg-white/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Scopri di Più
              </Button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group">
            <img 
              src={kidsSchoolImage} 
              alt="Scuola Padel Bambini" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-padel-dark/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Scuola Bambini</h3>
              <p className="mb-4 opacity-90">Metodologie innovative per far crescere i campioni di domani in un ambiente divertente e sicuro.</p>
              <Button 
                className="bg-white text-padel-dark hover:bg-white/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Iscriviti Ora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;