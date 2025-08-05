import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-padel-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/lovable-uploads/561c1d56-6077-47af-8d0c-529b0b0fea39.png" alt="Padel Club 58" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Il centro padel più moderno del Veneto. Vieni a scoprire le nostre strutture 
              all'avanguardia e unisciti alla nostra community di appassionati.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-padel-blue rounded-full flex items-center justify-center hover:bg-padel-blue-light transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-padel-blue rounded-full flex items-center justify-center hover:bg-padel-blue-light transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-padel-blue rounded-full flex items-center justify-center hover:bg-padel-blue-light transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contatti</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-padel-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90">Via Boscaglie 71/P</p>
                  <p className="text-white/90">Marostica 36063 (VI)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-padel-blue flex-shrink-0" />
                <p className="text-white/90">+39 0424 123 456</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-padel-blue flex-shrink-0" />
                <p className="text-white/90">info@padelclub58.it</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <Clock className="w-5 h-5 inline mr-2 text-padel-blue" />
              Orari
            </h3>
            <div className="space-y-2 text-white/90">
              <div>
                <p className="font-semibold">Lunedì - Venerdì</p>
                <p>09:00 - 23:00</p>
              </div>
              <div className="pt-2">
                <p className="font-semibold">Sabato - Domenica</p>
                <p>09:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-white/80">
              <a href="#home" className="hover:text-padel-blue transition-colors">Home</a>
              <a href="#about" className="hover:text-padel-blue transition-colors">Chi Siamo</a>
              <a href="#services" className="hover:text-padel-blue transition-colors">Servizi</a>
              <a href="#facilities" className="hover:text-padel-blue transition-colors">Strutture</a>
              <a href="#contact" className="hover:text-padel-blue transition-colors">Contatti</a>
            </div>
            <div className="text-white/60 text-sm">
              © 2024 Padel Club 58. Tutti i diritti riservati.
            </div>
          </div>
        </div>

        {/* FITP Badge */}
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="text-white/80 text-sm">
            Centro affiliato <span className="text-padel-blue font-semibold">FITP</span> - Federazione Italiana Tennis e Padel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;