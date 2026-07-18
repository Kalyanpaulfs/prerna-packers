import { PageHeader } from "@/components/layout/PageHeader";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Prerna Packers and Movers",
  description: "Learn more about Prerna Packers and Movers, India's most trusted premium relocation service with over 15 years of experience.",
};

export default function AboutPage() {
  const values = [
    { title: "Customer First", desc: "Your satisfaction is our primary goal. We go above and beyond to ensure a stress-free move." },
    { title: "Safety & Security", desc: "We treat your belongings with the utmost care, utilizing premium packing materials." },
    { title: "Transparency", desc: "No hidden costs. What we quote is what you pay. Honest and upfront communication." },
    { title: "Reliability", desc: "We respect your time. Our team ensures on-time pickup and delivery for every move." }
  ];

  return (
    <>
      <PageHeader 
        title="About Prerna Packers & Movers" 
        subtitle="Moving families and businesses with care and professionalism since 2010."
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Our Journey</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Founded in 2010 in Munger, Bihar, Prerna Packers and Movers started with a simple vision: to make relocation a completely stress-free experience for families and businesses. What began as a small local moving company has now grown into a Pan-India network.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Over the past 15+ years, we have successfully completed over 50,000 moves. Our success is built on our unwavering commitment to quality, trust, and customer satisfaction. We invest heavily in training our staff and maintaining a state-of-the-art fleet of GPS-enabled vehicles to ensure your belongings are always safe.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-blue-950 mb-3">Our Mission</h3>
                <p className="text-slate-600 italic">
                  "To provide premium, reliable, and affordable relocation services across India, ensuring every move is handled with the utmost care and professionalism."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-3xl transform -translate-x-4 translate-y-4 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Team" 
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Our Core Values</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16">
            The principles that guide our everyday operations and ensure we deliver excellence consistently.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
                <CheckCircle2 className="text-orange-500 mb-4" size={32} />
                <h3 className="text-xl font-bold text-blue-950 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
