import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Work", id: "services" },
    { label: "Process", id: "comparison" },
    { label: "Pricing", id: "cta" },
    { label: "About", id: "social-proof" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <BrandMark />

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                data-testid={`link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => scrollToSection("cta")}
              className="border-primary/50 text-primary hover:bg-primary/10"
              data-testid="button-get-quote"
            >
              Get a Quote
            </Button>
            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg shadow-primary/30"
              data-testid="button-book-call"
            >
              Book a Call
            </Button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-white transition-colors text-left py-2"
                data-testid={`link-mobile-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <Button
                variant="outline"
                onClick={() => scrollToSection("cta")}
                className="border-primary/50 text-primary hover:bg-primary/10 w-full"
                data-testid="button-mobile-quote"
              >
                Get a Quote
              </Button>
              <Button
                onClick={() => scrollToSection("cta")}
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white w-full"
                data-testid="button-mobile-call"
              >
                Book a Call
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
