import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustedByLogos = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 via-transparent to-blue-600/10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto text-center pt-32 pb-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Elevate Your Brand with{" "}
          <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Stunning
          </span>{" "}
          Video Content
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Professional video editing and content creation that drives engagement, builds trust, and scales your business to new heights.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button
            size="lg"
            onClick={() => scrollToSection("cta")}
            className="bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/40 px-8 py-6 text-lg"
            data-testid="button-hero-book"
          >
            Book a Call
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("services")}
            className="border-violet-500/50 text-violet-400 hover:bg-violet-500/10 px-8 py-6 text-lg group"
            data-testid="button-hero-work"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            See Our Work
          </Button>
        </div>

        <div className="space-y-6">
          <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustedByLogos.map((logo, index) => (
              <div
                key={index}
                className="w-32 h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-white/10 transition-all hover-elevate"
                data-testid={`logo-${index}`}
              >
                <span className="text-gray-500 text-sm font-medium group-hover:text-gray-400">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
