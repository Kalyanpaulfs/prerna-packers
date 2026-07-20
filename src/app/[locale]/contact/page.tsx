import { PageHeader } from "@/components/layout/PageHeader";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Prerna Packers and Movers",
  description: "Get in touch with Prerna Packers and Movers for premium relocation services. Call us or request a free quote today.",
};

const contactCards = [
  { icon: Phone, title: "Call Us", lines: ["+91 72799 19201"] },
  { icon: Mail, title: "Email Us", lines: ["hello@prernapackers.com", "sales@prernapackers.com"] },
  { icon: MapPin, title: "Head Office", lines: ["Prerna Packers & Movers", "Munger, Bihar, India 811201"] },
  { icon: Clock, title: "Business Hours", lines: ["Mon — Sat: 9:00 AM – 8:00 PM", "Sunday: Closed"] },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Have questions or need a quote? We're here to help."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      
      {/* Contact Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactCards.map((card, i) => (
              <div key={i} className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 border border-zinc-200/60">
                  <card.icon size={20} className="text-zinc-700" strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-zinc-950 mb-3 tracking-tight">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-sm text-zinc-500 font-medium">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4 tracking-tight">Send us a message</h2>
              <p className="text-zinc-500 font-medium">Fill out the form below and our team will respond within 24 hours.</p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-zinc-200/60">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none text-sm font-medium"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none text-sm font-medium"
                      placeholder="+91 72799 19201"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none text-sm font-medium"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none text-sm font-medium resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-zinc-950 hover:bg-zinc-800 text-white font-semibold py-4 rounded-xl transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
