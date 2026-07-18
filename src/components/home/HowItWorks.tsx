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
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-zinc-950 mb-6 tracking-tight"
          >
            How it works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-500 font-medium max-w-2xl mx-auto"
          >
            A frictionless four-step process designed to eliminate the stress of relocation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[1px] bg-zinc-200" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white border border-zinc-200 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-sm shadow-zinc-100">
                <step.icon size={32} className="text-zinc-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">{step.title}</h3>
              <p className="text-zinc-500 font-medium leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
