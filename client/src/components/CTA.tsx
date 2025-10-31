import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

export default function CTA() {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (calendlyRef.current && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/msikandar/30min',
        parentElement: calendlyRef.current,
      });
    }
  }, []);

  return (
    <section id="cta" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Ready to scale? Let's talk!
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Book a free consultation call and discover how we can transform your video content strategy
          </p>
        </div>

        <Card
          className="bg-gradient-to-br from-primary/30 to-accent/30 border-primary/30 p-4 md:p-8 max-w-4xl mx-auto"
          data-testid="card-booking"
        >
          <div 
            className="calendly-inline-widget rounded-lg overflow-hidden" 
            data-url="https://calendly.com/msikandar/30min" 
            style={{ minWidth: '320px', height: '700px' }}
            ref={calendlyRef}
          />

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Or email us directly at{" "}
              <a
                href="mailto:contact@viddyx.com"
                className="text-accent hover:text-accent/80 transition-colors"
                data-testid="link-email"
              >
                contact@viddyx.com
              </a>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

declare global {
  interface Window {
    Calendly: any;
  }
}
