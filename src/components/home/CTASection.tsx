"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full opacity-5 blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Ready to move?<br/>
          Let's make it effortless.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-zinc-400 font-medium mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Get a free, no-obligation estimate in under 2 minutes. Our team will handle everything from packing to delivery.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/quote"
            className="group inline-flex items-center gap-2 bg-white text-zinc-950 px-8 py-4 rounded-full text-sm font-semibold transition-transform hover:scale-105 active:scale-95"
          >
            Get Free Estimate
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+917279919201"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-semibold transition-colors px-8 py-4"
          >
            or call +91 72799 19201
          </a>
        </motion.div>
      </div>
    </section>
  );
}
