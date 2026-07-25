"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

const reasons = [
  "GPS Enabled Fleet for Real-time Tracking",
  "Premium 5-Layer Packing Materials",
  "100% Transparent Pricing — No Hidden Charges",
  "Free Doorstep Survey & Consultation",
  "Dedicated Relocation Manager",
  "Transit Insurance Coverage",
  "Specialized Handling for Fragile Items",
  "On-time Delivery Guarantee"
];

const stats = [
  { value: "50k+", label: "Moves completed" },
  { value: "15+", label: "Years of trust" },
  { value: "4.9", label: "Customer rating" },
  { value: "200+", label: "Cities covered" },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] bg-repeat pointer-events-none invert" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left side — Content */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6">
                The Prerna Advantage
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Why companies and <br className="hidden md:block"/>families trust us.
              </h2>
              <p className="text-lg text-zinc-400 font-medium leading-relaxed max-w-xl">
                We don't just move boxes — we move lives. Our commitment to excellence and customer-first approach makes us the preferred choice for hassle-free relocation across India.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 py-2 group"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/40 transition-colors">
                    <CheckCircle2 className="text-blue-400" size={14} strokeWidth={2.5} />
                  </div>
                  <span className="text-zinc-300 font-medium text-sm leading-relaxed group-hover:text-white transition-colors">{reason}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-white text-zinc-950 px-8 py-4 rounded-full text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
              >
                Discover our story
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right side — Stats grid */}
          <div className="flex-1 w-full flex justify-end">
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-lg">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  className="bg-white/[0.03] backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center hover:bg-white/[0.06] transition-colors duration-300 relative overflow-hidden group"
                >
                  {/* Subtle hover glow inside the card */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/0 group-hover:to-blue-500/10 transition-all duration-500" />
                  
                  <div className="relative z-10 text-4xl md:text-5xl font-black text-white tracking-tighter mb-2 drop-shadow-md">
                    {stat.value}
                  </div>
                  <div className="relative z-10 text-sm font-semibold tracking-wide text-zinc-400 uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
