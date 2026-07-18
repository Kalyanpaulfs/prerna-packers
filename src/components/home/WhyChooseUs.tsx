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
  { value: "50,000+", label: "Moves completed" },
  { value: "15+", label: "Years of trust" },
  { value: "4.9/5", label: "Customer rating" },
  { value: "200+", label: "Cities covered" },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left side — Content */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 mb-6 tracking-tight">
                Why companies and <br className="hidden md:block"/>families trust Prerna.
              </h2>
              <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-xl">
                We don't just move boxes — we move lives. Our commitment to excellence and customer-first approach makes us the preferred choice for hassle-free relocation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 py-2"
                >
                  <CheckCircle2 className="text-zinc-400 shrink-0 mt-0.5" size={18} strokeWidth={2} />
                  <span className="text-zinc-700 font-medium text-sm leading-relaxed">{reason}</span>
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
                className="group inline-flex items-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-full text-sm font-semibold transition-transform hover:scale-105 active:scale-95"
              >
                Learn more about us
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right side — Stats grid */}
          <div className="flex-1 w-full flex items-center">
            <div className="grid grid-cols-2 gap-6 w-full">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-zinc-950 tracking-tighter mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-zinc-500">
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
