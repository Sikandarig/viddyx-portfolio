import { Card } from "@/components/ui/card";
import { X, Check } from "lucide-react";

export default function Comparison() {
  const otherAgencies = [
    "Long turnaround times (2-4 weeks)",
    "Limited revisions or costly extras",
    "One-size-fits-all templates",
    "Poor communication & updates",
    "Hidden fees and surprise costs",
  ];

  const us = [
    "Fast delivery (3-5 business days)",
    "Unlimited revisions included",
    "100% custom content for your brand",
    "Daily updates & dedicated manager",
    "Transparent, all-inclusive pricing",
  ];

  return (
    <section id="comparison" className="py-20 px-6 lg:px-8 bg-gradient-to-b from-violet-950/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Viddyx?
          </h2>
          <p className="text-gray-400 text-lg">
            See the difference for yourself
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10 p-8" data-testid="card-other-agencies">
            <h3 className="text-2xl font-bold text-gray-400 mb-6">
              Other Agencies
            </h3>
            <ul className="space-y-4">
              {otherAgencies.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`other-${index}`}>
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card
            className="bg-gradient-to-br from-violet-600/20 to-blue-600/20 border-violet-500/50 p-8 relative overflow-hidden"
            data-testid="card-us"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-600/10" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-6">Us</h3>
              <ul className="space-y-4">
                {us.map((item, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`us-${index}`}>
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
