import { ShieldCheck, Users, Trophy, MapPin, BadgeCheck, Clock } from "lucide-react";

export function TrustBadges() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50k+", label: "Happy Families" },
    { value: "400+", label: "Cities Covered" },
    { value: "99%", label: "Damage-free Moves" }
  ];

  const features = [
    { icon: <ShieldCheck className="text-blue-500" size={24} />, text: "100% Safe & Secure" },
    { icon: <Trophy className="text-orange-500" size={24} />, text: "ISO Certified" },
    { icon: <Users className="text-blue-500" size={24} />, text: "Verified Professionals" },
    { icon: <Clock className="text-orange-500" size={24} />, text: "On-time Delivery" },
    { icon: <MapPin className="text-blue-500" size={24} />, text: "Pan India Network" },
    { icon: <BadgeCheck className="text-orange-500" size={24} />, text: "Transit Insurance" }
  ];

  return (
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 divide-x divide-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-blue-950 mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-medium text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-full border border-slate-100">
              {feature.icon}
              <span className="font-semibold text-slate-700 text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
