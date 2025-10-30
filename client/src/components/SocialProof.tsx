import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SocialProof() {
  const teamMembers = [
    { name: "Sarah Mitchell", role: "Creative Director", initials: "SM" },
    { name: "James Chen", role: "Lead Editor", initials: "JC" },
    { name: "Emily Rodriguez", role: "Motion Designer", initials: "ER" },
    { name: "Michael Park", role: "Content Strategist", initials: "MP" },
    { name: "Lisa Thompson", role: "Producer", initials: "LT" },
    { name: "David Kim", role: "Colorist", initials: "DK" },
  ];

  return (
    <section id="social-proof" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Creative Team
          </h2>
          <p className="text-gray-400 text-lg">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 group"
              data-testid={`team-member-${index}`}
            >
              <Avatar className="w-24 h-24 border-2 border-violet-500/30 group-hover:border-violet-500 transition-all group-hover:scale-105">
                <AvatarImage src="" alt={member.name} />
                <AvatarFallback className="bg-gradient-to-br from-violet-600 to-blue-600 text-white text-xl font-semibold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-white font-medium text-sm">{member.name}</p>
                <p className="text-gray-500 text-xs">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
