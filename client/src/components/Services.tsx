import { Card } from "@/components/ui/card";
import { Play, Video, Podcast, TrendingUp, FileVideo, Briefcase } from "lucide-react";

export default function Services() {
  const youtubeVideos = [
    { title: "Product Launch Video", views: "1.2M views" },
    { title: "Brand Story Documentary", views: "850K views" },
    { title: "Tutorial Series", views: "2.1M views" },
    { title: "Behind the Scenes", views: "650K views" },
  ];

  const shortFormVideos = [
    { title: "Instagram Reel #1", type: "Reel" },
    { title: "TikTok Viral", type: "TikTok" },
    { title: "YouTube Short", type: "Short" },
    { title: "Instagram Reel #2", type: "Reel" },
    { title: "TikTok Trend", type: "TikTok" },
    { title: "YouTube Short #2", type: "Short" },
  ];

  const additionalServices = [
    {
      icon: Podcast,
      title: "Podcast Editing",
      description: "Professional audio editing, mixing, and mastering for your podcast episodes.",
    },
    {
      icon: TrendingUp,
      title: "Ad Creatives & VSLs",
      description: "High-converting video ads and sales letters that drive measurable results.",
    },
    {
      icon: FileVideo,
      title: "Explainer Videos",
      description: "Clear, engaging explainer videos that simplify complex concepts.",
    },
    {
      icon: Briefcase,
      title: "LinkedIn Videos",
      description: "Professional B2B content optimized for LinkedIn's algorithm.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How can we help you?
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive video solutions tailored to your needs
          </p>
        </div>

        <div className="space-y-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              YouTube Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {youtubeVideos.map((video, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 overflow-hidden group hover-elevate"
                  data-testid={`youtube-video-${index}`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/40 to-accent/40 relative flex items-center justify-center">
                    <Play className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-4">
                    <p className="text-white font-medium mb-1">{video.title}</p>
                    <p className="text-gray-500 text-sm">{video.views}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Short Form Videos
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {shortFormVideos.map((video, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 overflow-hidden group hover-elevate"
                  data-testid={`short-video-${index}`}
                >
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary/40 to-accent/40 relative flex items-center justify-center">
                    <Video className="w-10 h-10 text-white/80 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-3">
                    <p className="text-white font-medium text-sm mb-1">{video.title}</p>
                    <p className="text-gray-500 text-xs">{video.type}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Additional Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 p-6 hover-elevate"
                    data-testid={`service-${index}`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-lg mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
