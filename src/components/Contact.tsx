import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-padel-dark">
            Contattaci
          </h2>
          <p className="text-xl text-padel-gray max-w-3xl mx-auto leading-relaxed">
            Siamo qui per rispondere a tutte le tue domande e aiutarti a iniziare 
            la tua avventura nel padel con noi.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-padel-dark">Informazioni di Contatto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-padel-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-padel-dark">Indirizzo</h4>
                    <p className="text-padel-gray">
                      Via Boscaglie 71/P<br />
                      Marostica 36063 (VI)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-padel-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-padel-dark">Telefono</h4>
                    <p className="text-padel-gray">+39 351 421 9614</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-padel-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-padel-dark">Email</h4>
                    <p className="text-padel-gray">info@padel58.it</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-padel-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-padel-dark">Orari</h4>
                    <p className="text-padel-gray">
                      Lun-Ven: 09:00-23:00<br />
                      Sab-Dom: 09:00-20:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-primary text-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Prenota Subito
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  Vuoi prenotare un campo o una lezione? Chiamaci o vieni di persona!
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-white text-padel-blue hover:bg-white/90"
                  onClick={() => window.open('https://padel58.wansport.com/', '_blank')}
                >
                  Prenota Online
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-padel-dark">Invia un Messaggio</CardTitle>
                <p className="text-padel-gray">
                  Compila il form sottostante e ti risponderemo il prima possibile.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-padel-dark mb-2">
                        Nome *
                      </label>
                      <Input placeholder="Il tuo nome" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-padel-dark mb-2">
                        Cognome *
                      </label>
                      <Input placeholder="Il tuo cognome" className="h-12" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-padel-dark mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="La tua email" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-padel-dark mb-2">
                        Telefono
                      </label>
                      <Input type="tel" placeholder="Il tuo telefono" className="h-12" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-padel-dark mb-2">
                      Oggetto *
                    </label>
                    <Input placeholder="Oggetto del messaggio" className="h-12" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-padel-dark mb-2">
                      Messaggio *
                    </label>
                    <Textarea 
                      placeholder="Scrivi qui il tuo messaggio..." 
                      className="min-h-32 resize-none"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full bg-gradient-primary hover:bg-padel-blue-dark">
                    Invia Messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <div className="h-96 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.9!2d11.7084!3d45.7431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4779c5f5f5f5f5f5%3A0x1234567890123456!2sVia%20Boscaglie%2C%2071%2FP%2C%2036063%20Marostica%20VI%2C%20Italy!5e0!3m2!1sit!2sit!4v1704067200000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Padel Club 58 - Via Boscaglie 71/P, Marostica"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;