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
    <section className="border-t border-zinc-200/50 bg-white py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-200/50">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <factor.icon className="text-zinc-400 mb-3" size={28} strokeWidth={1.5} />
              <h4 className="text-sm font-bold text-zinc-950 uppercase tracking-widest mb-1">
                {factor.label}
              </h4>
              <p className="text-xs text-zinc-500 font-medium">
                {factor.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
