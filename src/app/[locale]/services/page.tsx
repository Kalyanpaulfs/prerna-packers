"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, ShieldCheck, Award, ThumbsUp, History } from "lucide-react";

const getCardImage = (index: number) => {
  switch (index % 6) {
    case 0: return "/images/home_relocation_final.png";
    case 1: return "/images/office_relocation_new.png";
    case 2: return "/images/vehicle_transport_red_truck.png";
    case 3: return "/images/premium_packing_new.png";
    case 4: return "/images/intercity_final.png";
    case 5: return "/images/warehouse_storage_new.png";
    default: return "/images/home_relocation_final.png";
  }
};

export default function ServicesPage() {
  const services = [
    {
      id: "1",
      title: "Home Relocation",
      description: "Comprehensive end-to-end household shifting services designed to transport your most valuable possessions safely and securely to your new home.",
      href: "/services/home-relocation"
    },
    {
      id: "2",
      title: "Office Relocation",
      description: "Minimize downtime with our precision-engineered corporate moving solutions. We handle sensitive IT equipment and office infrastructure with absolute care.",
      href: "/services/office-relocation"
    },
    {
      id: "3",
      title: "Vehicle Transport",
      description: "Secure, fully-enclosed transportation for your cars and two-wheelers. Our specialized fleet ensures zero-scratch delivery across the country.",
      href: "/services/vehicle-transport"
    },
    {
      id: "4",
      title: "Premium Packing",
      description: "Industry-leading 3-layer export grade packing materials. We safeguard your fragile items, antiques, and electronics against all transit shocks.",
      href: "/services/packing"
    },
    {
      id: "5",
      title: "Intercity Moving",
      description: "Long-distance relocation made effortless. Real-time GPS tracking and dedicated fleet management for a seamless pan-India moving experience.",
      href: "/services/intercity"
    },
    {
      id: "6",
      title: "Warehouse & Storage",
      description: "Secure, climate-controlled, and 24/7 monitored storage facilities for short-term or long-term warehousing of your household or commercial goods.",
      href: "/services/storage"
    }
  ];

  return (
    <main className="bg-gradient-to-b from-slate-50 via-[#F3F6FA] to-white min-h-screen text-zinc-900">
      {/* Light Seamless Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-blue-100/50 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.04] bg-repeat pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest text-blue-600 uppercase mb-6"
            >
              Our Solutions
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-zinc-950 tracking-tight leading-[1.1] mb-8"
            >
              Services engineered for seamless transitions.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed max-w-2xl"
            >
              From careful packaging to secure transportation, our end-to-end logistics infrastructure ensures your assets arrive exactly as they left.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Unique Inline Trust Badges */}
      <section className="border-b border-zinc-200/80 bg-white/70 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-8 text-zinc-600 font-bold text-sm uppercase tracking-wider">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600" size={24} />
              <span>100% Fully Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-amber-500" size={24} />
              <span>GST Certified Firm</span>
            </div>
            <div className="flex items-center gap-3">
              <ThumbsUp className="text-green-600" size={24} />
              <span>98% Satisfaction Rate</span>
            </div>
            <div className="flex items-center gap-3">
              <History className="text-purple-600" size={24} />
              <span>Serving since 2003</span>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Widescreen Cards */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col gap-16 md:gap-24">
            {services.map((service, index) => {
              const image = getCardImage(index);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center group`}
                >
                  <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/10 border border-zinc-200/50">
                    <Image
                      src={image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center relative bg-gradient-to-br from-white to-blue-50/30 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden">
                    {/* Decorative Background Accent */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="absolute -top-6 -left-4 text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-900/5 to-transparent z-0 font-mono select-none pointer-events-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Premium Service
                      </div>

                      <h2 className="text-3xl md:text-4xl font-black text-zinc-950 mb-6 tracking-tight">
                        {service.title}
                      </h2>

                      <p className="text-lg text-zinc-500 leading-relaxed mb-10 font-medium">
                        {service.description}
                      </p>

                      <div>
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-3 bg-zinc-950 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-blue-600 shadow-lg shadow-zinc-950/20 hover:shadow-blue-600/30 transition-all group/link"
                        >
                          Explore details
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
