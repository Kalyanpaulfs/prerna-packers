"use client";

import { ArrowRight, Box, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
            India's most trusted relocation partner
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-950 mb-6 leading-[1.1]"
          >
            Move forward <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              without the friction.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl text-lg md:text-xl text-zinc-500 mb-10 leading-relaxed font-medium"
          >
            Premium, zero-damage relocation services engineered for peace of mind. Experience a seamless transition to your new home or office.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/quote"
              className="group relative inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-zinc-950 text-white px-8 py-4 rounded-full text-base font-semibold transition-transform hover:scale-105 active:scale-95"
            >
              Get Instant Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 px-8 py-4 rounded-full text-base font-semibold transition-colors"
            >
              View Services
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="mt-16 pt-10 border-t border-zinc-200/60 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
          >
            <div className="flex flex-col items-center justify-center gap-2 text-zinc-600">
              <Box className="text-zinc-400 mb-2" size={24} />
              <span className="font-semibold text-zinc-950">Zero Damage</span>
              <span className="text-sm text-center">Premium multi-layer packing</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-zinc-600">
              <ShieldCheck className="text-zinc-400 mb-2" size={24} />
              <span className="font-semibold text-zinc-950">Fully Insured</span>
              <span className="text-sm text-center">Complete coverage for peace of mind</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-zinc-600">
              <MapPin className="text-zinc-400 mb-2" size={24} />
              <span className="font-semibold text-zinc-950">Pan India</span>
              <span className="text-sm text-center">Seamless intercity relocation</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
