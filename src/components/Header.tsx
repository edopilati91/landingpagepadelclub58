import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Chi Siamo" },
    { href: "#services", label: "Servizi" },
    { href: "#facilities", label: "Strutture" },
    { href: "#contact", label: "Contatti" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/561c1d56-6077-47af-8d0c-529b0b0fea39.png" alt="Padel Club 58" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-padel-blue-dark"
              onClick={() => window.location.href = 'https://padel58.wansport.com/'}
            >
              Prenota Ora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-padel-blue-dark mt-4"
                onClick={() => window.location.href = 'https://padel58.wansport.com/'}
              >
                Prenota Ora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;