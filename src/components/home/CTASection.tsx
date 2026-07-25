"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-zinc-950 rounded-[3rem] p-10 md:p-20 overflow-hidden shadow-2xl shadow-blue-900/10"
        >
          {/* Animated Background Mesh Gradient */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-600 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite_alternate]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite_alternate-reverse]" />
          </div>
          
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] bg-repeat pointer-events-none invert z-0" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                Ready to move?<br/>
                <span className="text-blue-400">Let's make it effortless.</span>
              </h2>
              <p className="text-lg text-zinc-400 font-medium max-w-xl mx-auto md:mx-0 leading-relaxed">
                Get a free, transparent estimate in under 2 minutes. Experience the new standard of premium relocation services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 shrink-0">
              <Link
                href="/quote"
                className="group inline-flex items-center justify-center gap-2 bg-white text-zinc-950 px-8 py-5 rounded-full text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
              >
                Get Free Estimate
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+917279919201"
                className="group inline-flex items-center justify-center gap-2 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 text-white px-8 py-5 rounded-full text-base font-bold transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
              >
                <Phone size={18} className="text-blue-400" />
                Call +91 72799 19201
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
