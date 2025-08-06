import { Button } from "@/components/ui/button";
import { MapPin, Clock, Award } from "lucide-react";
import heroImage from "/lovable-uploads/7cd346ed-7095-4254-a2d9-b970353b19f3.png";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Padel Club 58 Courts" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-padel-dark/80 to-padel-dark/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            
            <br />
            <span className="text-white">Padel Club</span>
            <span className="text-padel-blue ml-4">58</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">Il centro padel di riferimento in Veneto. 5 campi regolamentari, 1 campo singolo, noleggio e shop, palestra attrezzata e bar panoramico per vivere il padel a 360°.</p>
          
          {/* Key Features */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5 text-padel-blue" />
              <span>Via Boscaglie 71/P, Marostica 36063 (VI)</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5 text-padel-blue" />
              <span>Aperto 7 giorni su 7</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Award className="w-5 h-5 text-padel-blue" />
              <span>Affiliato FITP</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-primary hover:bg-padel-blue-dark text-lg px-8 py-4" onClick={() => window.open('https://padel58.wansport.com/', '_blank')}>
              Prenota il Tuo Campo
            </Button>
            <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-padel-dark text-lg px-8 py-4 text-slate-950" onClick={() => document.getElementById('services')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Scopri i Nostri Servizi
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default Hero;