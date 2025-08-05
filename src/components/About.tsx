import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Target, Zap } from "lucide-react";
const About = () => {
  const stats = [{
    icon: Trophy,
    number: "6",
    label: "Campi indoor"
  }, {
    icon: Users,
    number: "500+",
    label: "Soci Attivi"
  }, {
    icon: Target,
    number: "2024",
    label: "Anno di Apertura"
  }, {
    icon: Zap,
    number: "100%",
    label: "Energia Green"
  }];
  return <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-padel-dark">
            Chi Siamo
          </h2>
          <p className="text-xl text-padel-gray max-w-3xl mx-auto leading-relaxed">
            Padel Club 58 è molto più di un semplice centro sportivo. È il punto di riferimento 
            per tutti gli appassionati di padel in Veneto.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-padel-blue mx-auto mb-4" />
                <div className="text-3xl font-bold text-padel-dark mb-2">{stat.number}</div>
                <div className="text-padel-gray font-medium">{stat.label}</div>
              </CardContent>
            </Card>)}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-padel-dark">
              La Nostra Missione
            </h3>
            <div className="space-y-6 text-lg text-padel-gray leading-relaxed">
              <p>
                Nato nel 2024 a Marostica, il Padel Club 58 rappresenta l'eccellenza nel mondo del padel veneto. 
                La nostra struttura all'avanguardia ospita <strong>5 campi standard</strong> e un innovativo 
                <strong> campo singolo (1vs1)</strong>, tutti realizzati secondo gli standard FITP.
              </p>
              <p>
                Il nostro obiettivo è diventare un <strong>punto di riferimento nazionale</strong>, 
                offrendo un'esperienza completa che va oltre il semplice gioco: dalla palestra 
                attrezzata al bar panoramico con vista diretta sui campi.
              </p>
              <p>
                Siamo orgogliosamente iscritti alla <strong>Federazione Italiana Tennis e Padel (FITP)</strong> 
                e puntiamo all'eccellenza in ogni aspetto della nostra offerta sportiva.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-primary text-white">
              <h4 className="text-xl font-bold mb-4">La Nostra Visione</h4>
              <p className="leading-relaxed">
                Diventare il centro padel di riferimento in Veneto, creando una community 
                di appassionati e promuovendo i valori dello sport a tutti i livelli.
              </p>
            </Card>
            
            <Card className="p-6 border-2 border-padel-blue/20">
              <h4 className="text-xl font-bold mb-4 text-padel-dark">I Nostri Valori</h4>
              <ul className="space-y-2 text-padel-gray">
                <li>• <strong>Eccellenza</strong> - Standard professionali in ogni dettaglio</li>
                <li>• <strong>Inclusività</strong> - Padel per tutti, dai bambini ai professionisti</li>
                <li>• <strong>Innovazione</strong> - Tecnologie e metodologie all'avanguardia</li>
                <li>• <strong>Community</strong> - Creare legami attraverso lo sport</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;