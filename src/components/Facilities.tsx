import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Wifi, Car, Coffee, Dumbbell, Eye, Users2 } from "lucide-react";
import barInteriorImage from "/lovable-uploads/bd9cb8dc-50c5-4ac8-aaef-156fe4c36ce4.png";
const Facilities = () => {
  const facilities = [{
    icon: Users2,
    title: "5 Campi Standard",
    description: "Campi regolamentari FITP con illuminazione LED professionale",
    features: ["Superficie professionale", "Illuminazione LED", "Standard FITP"]
  }, {
    icon: Users2,
    title: "1 Campo Singolo",
    description: "Innovativo campo 1vs1 per allenamenti specifici e sfide uniche",
    features: ["Primo in zona", "Allenamento intensivo", "Gioco dinamico"]
  }, {
    icon: Dumbbell,
    title: "Palestra Attrezzata",
    description: "Zona fitness con attrezzature specifiche per il padel",
    features: ["Functional training", "Recupero muscolare", "Preparazione atletica"]
  }, {
    icon: Eye,
    title: "Bar Panoramico",
    description: "Zona relax con vista diretta sui campi per aperitivi e socializzazione",
    features: ["Vista sui campi", "Aperitivi", "Area socializzazione"]
  }];
  const amenities = [{
    icon: Wifi,
    label: "WiFi Gratuito"
  }, {
    icon: Car,
    label: "Parcheggio Gratuito"
  }, {
    icon: Coffee,
    label: "Bar & Caffetteria"
  }, {
    icon: MapPin,
    label: "Posizione Strategica"
  }];
  return <section id="facilities" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-padel-dark">La Nostra Struttura</h2>
          <p className="text-xl text-padel-gray max-w-3xl mx-auto leading-relaxed">
            Un capannone moderno di nuova costruzione con tutto il necessario 
            per vivere il padel al massimo livello.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {facilities.map((facility, index) => <Card key={index} className="hover:shadow-card transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-padel-dark mb-2">{facility.title}</h3>
                    <p className="text-padel-gray mb-4 leading-relaxed">{facility.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {facility.features.map((feature, idx) => <Badge key={idx} variant="secondary" className="bg-padel-blue/10 text-padel-blue">
                          {feature}
                        </Badge>)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Bar Spotlight */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <img src={barInteriorImage} alt="Bar Panoramico Padel Club 58" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-padel-dark/40 to-transparent"></div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-padel-dark">
              Bar Panoramico Esclusivo
            </h3>
            <div className="space-y-4 text-lg text-padel-gray leading-relaxed">
              <p>
                Il nostro bar non è solo un luogo dove riposarsi dopo una partita: è il cuore 
                sociale del club. Con le sue ampie vetrate che si affacciano direttamente sui campi, 
                offre uno spettacolo unico.
              </p>
              <p>
                Goditi un aperitivo mentre osservi le partite in corso, socializza con altri 
                appassionati di padel o rilassati in un ambiente moderno e accogliente.
              </p>
            </div>
            
            <div className="mt-8 space-y-3">
              <h4 className="text-xl font-semibold text-padel-dark">Cosa Offriamo:</h4>
              <ul className="space-y-2 text-padel-gray">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-padel-blue rounded-full"></span>
                  Caffetteria professionale con barista qualificato
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-padel-blue rounded-full"></span>
                  Aperitivi serali con vista sui campi illuminati
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-padel-blue rounded-full"></span>
                  Snack e piatti leggeri per recuperare le energie
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-padel-blue rounded-full"></span>
                  Area lounge per eventi privati e aziendali
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-padel-dark">Servizi Inclusi</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => <div key={index} className="flex flex-col items-center gap-3 p-4">
                <div className="w-12 h-12 bg-padel-blue/10 rounded-full flex items-center justify-center">
                  <amenity.icon className="w-6 h-6 text-padel-blue" />
                </div>
                <span className="text-padel-dark font-medium">{amenity.label}</span>
              </div>)}
          </div>
        </div>

        {/* Opening Hours */}
        <Card className="mt-16 p-8 text-center bg-gradient-primary text-white">
          <h3 className="text-2xl font-bold mb-6">
            <Clock className="w-6 h-6 inline mr-2" />
            Orari di Apertura
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div>
              <h4 className="font-semibold mb-2">Lunedì - Venerdì</h4>
              <p className="text-white/90">09:00 - 23:00</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Sabato - Domenica</h4>
              <p className="text-white/90">09:00 - 20:00</p>
            </div>
          </div>
          <p className="mt-6 text-white/80">
            Prenota online 24/7 oppure chiamaci durante gli orari di apertura
          </p>
        </Card>
      </div>
    </section>;
};
export default Facilities;