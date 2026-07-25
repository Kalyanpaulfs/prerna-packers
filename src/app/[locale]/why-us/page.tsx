"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, MapPin, Users, CheckCircle2, XCircle, ArrowRight, Zap } from "lucide-react";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Link } from "@/i18n/routing";

export default function WhyUsPage() {
  const comparison = [
    { label: "Pricing", industry: "Hidden fees & last-minute hikes", prerna: "100% Transparent upfront quotes" },
    { label: "Staff", industry: "Untrained third-party contractors", prerna: "Background-checked, in-house experts" },
    { label: "Materials", industry: "Used cartons and cheap tape", prerna: "5-layer premium export-grade packing" },
    { label: "Tracking", industry: "Calling drivers for updates", prerna: "Real-time GPS fleet tracking" },
    { label: "Insurance", industry: "Complicated claims process", prerna: "Instant transit insurance coverage" },
  ];

  return (
    <main className="bg-white min-h-screen pt-[104px] pb-10">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center mx-4 md:mx-8 rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-200/50">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/prerna_real_movers_1784943332030.png"
            alt="Why Prerna Packers - Professional Team"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-900/70 to-zinc-900/40" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6 backdrop-blur-sm"
            >
              The Prerna Difference
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg"
            >
              Elevating the Standard of <br />
              <span className="text-blue-400">Relocation.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed drop-shadow-md max-w-xl"
            >
              We don't just move boxes. We engineer a completely frictionless transition for your most valuable assets.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Asymmetrical Bento Box Grid */}
      <section className="py-24 md:py-32 relative bg-zinc-50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4">
              Why settle for less?
            </h2>
            <p className="text-lg text-zinc-500 font-medium max-w-2xl mx-auto">
              Our infrastructure is built to guarantee safety, speed, and absolute peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
            
            {/* Box 1 (Large) - Zero Damage */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-gradient-to-br from-zinc-950 to-[#0B1120] p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group shadow-xl"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[60px] group-hover:bg-blue-500/30 transition-all duration-500" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck className="text-blue-400" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Zero Damage Guarantee</h3>
                  <p className="text-zinc-400 font-medium text-lg leading-relaxed max-w-md">
                    We use proprietary 5-layer export-grade packing materials. Your fragile items, antiques, and electronics are protected against all transit shocks.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Box 2 (Small) - In House Staff */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-1 bg-blue-600 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group shadow-xl shadow-blue-600/20"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm group-hover:rotate-12 transition-transform duration-500">
                  <Users className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">100% In-House Team</h3>
                  <p className="text-blue-100 font-medium leading-relaxed">
                    We never use untrained daily-wage contractors. Our packers are full-time, background-checked professionals.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Box 3 (Small) - Real-time tracking */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1 bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group shadow-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:-translate-y-2 group-hover:bg-blue-500/20 transition-all duration-500">
                  <MapPin className="text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Real-Time Tracking</h3>
                  <p className="text-zinc-400 font-medium leading-relaxed">
                    Our entire modern fleet is GPS-enabled. Know exactly where your prized possessions are at any given moment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Box 4 (Large) - Transparent Pricing */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-gradient-to-bl from-[#312E81] via-[#1E1B4B] to-[#0B1120] p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group shadow-xl border border-indigo-500/20"
            >
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-[60px] group-hover:bg-indigo-400/40 transition-all duration-500" />
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400/10 via-transparent to-transparent opacity-50" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 mb-8 group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle2 className="text-emerald-400" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Absolute Price Transparency</h3>
                  <p className="text-indigo-200/70 font-medium text-lg leading-relaxed max-w-md">
                    No hidden charges, no last-minute "tax" surprises, and no toll-tax hostage situations. The quote you agree on is exactly what you pay.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* The Comparison Engine (The "Faru" Section) */}
      <section className="py-24 md:py-32 bg-[#0B1120] relative overflow-hidden mx-4 md:mx-8 rounded-[2.5rem] mb-10 border border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6"
            >
              <Zap size={14} className="text-blue-400" /> The Reality Check
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]"
            >
              The Industry Standard vs. <br className="hidden md:block"/><span className="text-blue-400">The Prerna Standard.</span>
            </motion.h2>
          </div>
          
          {/* Comparison Table / Cards */}
          <div className="bg-[#0F172A] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
            
            {/* Headers */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 bg-[#151E32]">
              <div className="hidden md:block p-6 text-sm font-bold text-zinc-400 uppercase tracking-widest">
                Feature
              </div>
              <div className="p-6 md:border-l border-white/10 text-sm font-bold text-zinc-500 uppercase tracking-widest text-center md:text-left bg-zinc-900/50">
                Average Movers
              </div>
              <div className="p-6 md:border-l border-white/10 text-sm font-bold text-blue-400 uppercase tracking-widest text-center md:text-left bg-blue-600/10">
                Prerna Standard
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-white/5">
              {comparison.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-3 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="p-6 flex items-center justify-center md:justify-start font-bold text-white text-lg border-b border-white/5 md:border-none">
                    {item.label}
                  </div>
                  
                  <div className="p-6 md:border-l border-white/5 flex items-center gap-4 bg-zinc-900/20 text-zinc-400 font-medium">
                    <XCircle className="text-red-400/70 shrink-0 hidden md:block" size={20} />
                    <span className="text-center md:text-left w-full md:w-auto">{item.industry}</span>
                  </div>
                  
                  <div className="p-6 md:border-l border-white/10 flex items-center gap-4 bg-blue-600/5 text-blue-100 font-bold relative overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                    <CheckCircle2 className="text-blue-400 shrink-0 hidden md:block relative z-10" size={20} />
                    <span className="relative z-10 text-center md:text-left w-full md:w-auto">{item.prerna}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA row inside table */}
            <div className="grid grid-cols-1 p-8 bg-gradient-to-r from-blue-900/20 to-blue-600/20 border-t border-blue-500/30 text-center">
              <p className="text-white font-bold text-lg md:text-xl mb-6 tracking-tight">Experience the difference for yourself.</p>
              <div>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all hover:scale-105"
                >
                  Get a Free Premium Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Integrate HowItWorks (Frictionless) */}
      <HowItWorks />
    </main>
  );
}
