"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { MapPin, Navigation, Globe, Zap, ShieldCheck, ArrowRight, Building2, Truck } from "lucide-react";

const majorHubs = [
  { name: "Delhi NCR", desc: "Corporate Hub & Northern Base", color: "from-blue-600 to-sky-400" },
  { name: "Mumbai", desc: "Financial Capital & Western Hub", color: "from-indigo-600 to-blue-400" },
  { name: "Bangalore", desc: "Tech Capital & Southern Core", color: "from-sky-500 to-cyan-300" },
  { name: "Hyderabad", desc: "IT Corridor & Logistics Center", color: "from-violet-600 to-purple-400" },
  { name: "Chennai", desc: "Manufacturing Hub & Port City", color: "from-emerald-500 to-teal-400" },
  { name: "Kolkata", desc: "Eastern Gateway & Trading Hub", color: "from-rose-500 to-pink-400" },
  { name: "Pune", desc: "Industrial Center & Auto Hub", color: "from-amber-500 to-orange-400" },
  { name: "Ahmedabad", desc: "Commercial Center & Textile Hub", color: "from-cyan-600 to-blue-500" },
];

export default function CitiesPage() {
  return (
    <main className="bg-white min-h-screen pt-[104px] pb-10 overflow-hidden">
      
      {/* 1. Nationwide Reach Hero */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center mx-4 md:mx-8 rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-800">
        <div className="absolute inset-0 z-0 bg-zinc-950">
          <Image 
            src="/images/service_intercity_moving_1784944715087.png"
            alt="Pan-India Logistics Network"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-40 mix-blend-luminosity"
          />
          {/* High-tech gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6 backdrop-blur-md"
            >
              <Globe size={16} /> 15+ Years of Excellence
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] mb-8"
            >
              Pan-India <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Coverage.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed max-w-2xl mb-10"
            >
              From bustling metropolitan hubs to the deepest corners of Tier 3 cities. We successfully serve over <strong className="text-white font-black">19,000+ Pin Codes</strong> across the nation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                <Navigation className="text-blue-400" size={24} />
                <div>
                  <div className="text-white font-black text-xl">28</div>
                  <div className="text-zinc-400 text-xs font-bold uppercase tracking-wider">States Covered</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                <Truck className="text-blue-400" size={24} />
                <div>
                  <div className="text-white font-black text-xl">8</div>
                  <div className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Union Territories</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Major Logistics Hubs Grid (Redesigned Premium UI) */}
      <section className="py-24 md:py-32 relative bg-[#0B1120] mx-4 md:mx-8 rounded-[2.5rem] mt-24">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-full h-[500px] bg-[url('/grid-pattern.svg')] opacity-[0.05] bg-repeat pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6">
              Strategic Network
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
              Primary Nodal Hubs
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
              Our infrastructure operates through 8 hyper-connected metropolitan hubs, ensuring zero-delay dispatch and receiving across the entire country.
            </p>
          </div>

          {/* Premium Balanced Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {majorHubs.map((hub, i) => (
              <motion.div
                key={hub.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Glowing Hover Effect */}
                <div className={`absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br ${hub.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`} />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shadow-lg group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
                      <Building2 className="text-white" size={20} />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] animate-pulse" />
                  </div>
                  
                  <div>
                    <h3 className="font-black text-white group-hover:text-blue-300 transition-colors duration-300 mb-2 text-2xl">
                      {hub.name}
                    </h3>
                    <p className="text-zinc-400 font-medium group-hover:text-zinc-300 transition-colors duration-300">
                        {hub.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tier 2 & 3 Abstract Coverage Section */}
      <section className="py-24 relative overflow-hidden bg-zinc-950 mx-4 md:mx-8 rounded-[2.5rem]">
        {/* Abstract animated lines background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6">
                <Zap size={16} /> Hyper-Local Reach
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-6">
                Tier 2 & Tier 3 Cities? <br className="hidden md:block"/>
                <span className="text-blue-400">We're already there.</span>
              </h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed mb-8">
                True Pan-India service isn't just about the metros. Our fleet navigates through the complex geography of local towns, districts, and remote pin codes with the exact same premium standards.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Direct door-to-door delivery in remote districts.",
                  "Localized fleet network for narrow street access.",
                  "Zero transshipment damage guarantees."
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-zinc-300 font-medium"
                  >
                    <ShieldCheck className="text-blue-500 shrink-0" size={20} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="relative h-[400px] w-full rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/images/prerna_real_truck_1784943313016.png')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-1000 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_100px_30px_rgba(37,99,235,0.4)] mb-4">
                  <MapPin className="text-white" size={40} />
                </div>
                <div className="text-3xl font-black text-white tracking-widest text-center">
                  19,000+
                  <div className="text-sm text-blue-400 uppercase font-bold mt-1">Pin Codes Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tight mb-6">
            Ready to move across India?
          </h2>
          <p className="text-lg text-zinc-500 font-medium mb-10">
            No matter where you are starting or where you are going, our network is ready to handle your relocation seamlessly.
          </p>
          <Link 
            href="/quote"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
          >
            Get Instant Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}
