import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Viddyx transformed our YouTube channel. Our views increased by 300% in just 3 months!",
      name: "Alex Turner",
      role: "CEO, TechStartup Inc",
    },
    {
      quote: "The quality of their short-form content is unmatched. Our engagement skyrocketed on all platforms.",
      name: "Maria Santos",
      role: "Marketing Director, FashionCo",
    },
    {
      quote: "Professional, creative, and always on time. They understood our brand vision perfectly.",
      name: "John Davis",
      role: "Founder, Wellness Brand",
    },
    {
      quote: "Our podcast editing has never been better. They make us sound like pros every single episode.",
      name: "Rachel Green",
      role: "Host, Business Podcast",
    },
    {
      quote: "The ad creatives they produced generated a 5x ROAS. Absolute game-changer for our campaigns.",
      name: "Tom Wilson",
      role: "CMO, E-commerce Brand",
    },
    {
      quote: "Working with Viddyx feels like having an in-house team, but with world-class expertise.",
      name: "Sophie Martinez",
      role: "Creative Director, Agency",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-transparent to-violet-950/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hear it directly from our clients
          </h2>
          <p className="text-gray-400 text-lg">
            Real stories from brands we've helped scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 overflow-hidden group hover-elevate"
              data-testid={`testimonial-${index}`}
            >
              <div className="aspect-video bg-gradient-to-br from-violet-900/30 to-blue-900/30 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40" />
                <Play className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform relative z-10" />
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
