"use client";

import { ClipboardList, Package, Truck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Request a Quote",
    description: "Fill in your details online or give us a call. Get an instant, transparent estimate.",
  },
  {
    icon: Package,
    title: "2. Premium Packing",
    description: "Our experts arrive with industry-grade materials to safely pack your belongings.",
  },
  {
    icon: Truck,
    title: "3. Safe Transit",
    description: "Your assets are transported in secure, dedicated vehicles with GPS tracking.",
  },
  {
    icon: CheckCircle,
    title: "4. Unpacking & Setup",
    description: "We carefully unload and place everything exactly where you want it.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-[#0B1120] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6"
          >
            Process
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]"
          >
            A frictionless <br className="hidden md:block"/>relocation experience.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Four simple steps designed to completely eliminate the stress of moving. We handle the heavy lifting while you focus on your new beginning.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Glowing connecting line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-[12.5%] right-[12.5%] h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connecting line for mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-[120px] bottom-[-40px] left-1/2 w-0.5 bg-white/5 -translate-x-1/2 -z-10" />
                )}

                <div className="w-[120px] h-[120px] bg-[#0F172A] rounded-3xl flex items-center justify-center mb-8 relative z-10 border border-white/10 group-hover:border-blue-500/30 group-hover:bg-[#1E293B] group-hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <step.icon size={40} className="text-white group-hover:text-blue-400 transition-colors relative z-10" strokeWidth={1.5} />
                  
                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-lg shadow-blue-900/50">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{step.title.split('. ')[1]}</h3>
                <p className="text-zinc-400 font-medium leading-relaxed px-4 text-sm md:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
