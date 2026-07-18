import { PageHeader } from "@/components/layout/PageHeader";
import { CheckCircle2, Users, Truck, ShieldCheck, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Prerna Packers and Movers",
  description: "Learn more about Prerna Packers and Movers, India's most trusted premium relocation service with over 15 years of experience.",
};

export default function AboutPage() {
  const values = [
    { title: "Customer First", desc: "Your satisfaction is our primary goal. We go above and beyond to ensure a stress-free move.", icon: Users },
    { title: "Safety & Security", desc: "We treat your belongings with the utmost care, utilizing premium packing materials.", icon: ShieldCheck },
    { title: "Transparency", desc: "No hidden costs. What we quote is what you pay. Honest and upfront communication.", icon: CheckCircle2 },
    { title: "Reliability", desc: "We respect your time. Our team ensures on-time pickup and delivery for every move.", icon: Clock },
  ];

  const milestones = [
    { year: "2010", title: "Founded in Munger", desc: "Started as a small local moving company with a vision for excellence." },
    { year: "2014", title: "Pan-India Expansion", desc: "Expanded operations to cover major cities across India." },
    { year: "2018", title: "Fleet Modernization", desc: "Invested in GPS-enabled, climate-controlled vehicles." },
    { year: "2024", title: "50,000+ Moves", desc: "Crossed 50,000 successful relocations with a 4.9/5 rating." },
  ];

  return (
    <>
      <PageHeader 
        title="About Prerna" 
        subtitle="Moving families and businesses with care and precision since 2010."
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />
      
      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-6 tracking-tight">Our Journey</h2>
              <p className="text-zinc-500 mb-6 leading-relaxed font-medium">
                Founded in 2010 in Munger, Bihar, Prerna Packers and Movers started with a simple vision: to make relocation a completely stress-free experience for families and businesses. What began as a small local moving company has now grown into a Pan-India network.
              </p>
              <p className="text-zinc-500 mb-10 leading-relaxed font-medium">
                Over the past 15+ years, we have successfully completed over 50,000 moves. Our success is built on our unwavering commitment to quality, trust, and customer satisfaction. We invest heavily in training our staff and maintaining a state-of-the-art fleet of GPS-enabled vehicles to ensure your belongings are always safe.
              </p>
              
              <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                <h3 className="text-lg font-bold text-zinc-950 mb-3 tracking-tight">Our Mission</h3>
                <p className="text-zinc-500 font-medium leading-relaxed italic">
                  "To provide premium, reliable, and affordable relocation services across India, ensuring every move is handled with the utmost care and professionalism."
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              <h3 className="text-lg font-bold text-zinc-950 mb-8 tracking-tight">Key Milestones</h3>
              {milestones.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-zinc-950 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px h-full bg-zinc-200 my-2" />
                    )}
                  </div>
                  <div className="pb-10">
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">{item.year}</div>
                    <h4 className="text-base font-bold text-zinc-950 mb-1">{item.title}</h4>
                    <p className="text-sm text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200/60">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto font-medium">
              The principles that guide our everyday operations and ensure we deliver excellence consistently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-zinc-200/60 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100 transition-all duration-300">
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="text-zinc-700" size={24} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-zinc-950 mb-3 tracking-tight">{value.title}</h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
