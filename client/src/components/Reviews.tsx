import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Jennifer Lee",
      company: "SaaS Startup",
      initials: "JL",
      quote: "Absolutely phenomenal work. Our conversion rates doubled after their video campaign.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      company: "Fitness Brand",
      initials: "MJ",
      quote: "The attention to detail and creativity exceeded all expectations. Highly recommend!",
      rating: 5,
    },
    {
      name: "Anna Kowalski",
      company: "E-learning Platform",
      initials: "AK",
      quote: "Professional team that truly cares about results. Worth every penny.",
      rating: 5,
    },
    {
      name: "Carlos Rivera",
      company: "Restaurant Chain",
      initials: "CR",
      quote: "They captured our brand essence perfectly. Our social media engagement is through the roof!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      company: "Tech Company",
      initials: "PP",
      quote: "Fast, reliable, and creative. Everything you want in a video production partner.",
      rating: 5,
    },
    {
      name: "Robert Chen",
      company: "Consulting Firm",
      initials: "RC",
      quote: "Outstanding quality and service. They've become an essential part of our marketing stack.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Reviews
          </h2>
          <p className="text-gray-400 text-lg">
            Trusted by businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-white/5 border-primary/20 p-6 hover-elevate"
              data-testid={`review-${index}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-12 h-12 border border-primary/30">
                  <AvatarImage src="" alt={review.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-semibold">
                    {review.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-semibold">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">"{review.quote}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
