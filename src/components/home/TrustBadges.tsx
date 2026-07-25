"use client";

import { Shield, Award, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

const trustFactors = [
  { icon: Shield, label: "Fully Insured", sub: "100% Protection" },
  { icon: Award, label: "ISO Certified", sub: "Quality Assured" },
  { icon: Clock, label: "On-Time Delivery", sub: "Zero Delays" },
  { icon: Star, label: "4.9/5 Rating", sub: "Based on 2k+ reviews" },
];

export function TrustBadges() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="bg-white/80 backdrop-blur-2xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-zinc-200/50">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4 group"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                <factor.icon size={26} strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-extrabold text-zinc-950 tracking-tight mb-1">
                {factor.label}
              </h4>
              <p className="text-sm text-zinc-500 font-medium">
                {factor.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
