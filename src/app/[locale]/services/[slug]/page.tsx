"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Clock, MapPin, Truck, ChevronRight, Package, ArrowRight } from "lucide-react";
import { HowItWorks } from "@/components/home/HowItWorks";

const serviceData: Record<string, any> = {
  "home-relocation": {
    title: "Home Relocation",
    subtitle: "Premium household shifting with meticulous care.",
    image: "/images/home_relocation_final.png",
    description: "Our comprehensive home relocation service is designed to eliminate the stress of moving. We treat your personal belongings with the utmost respect, using specialized multi-layer packing materials to ensure every fragile item, furniture piece, and memory arrives safely at your new doorstep.",
    features: [
      { title: "5-Layer Premium Packing", desc: "Bubble wrap, corrugated sheets, stretch film, carton boxes, and foam.", icon: Package },
      { title: "Zero-Damage Guarantee", desc: "Fully insured moves with specialized handling for antiques and electronics.", icon: Shield },
      { title: "Real-time Tracking", desc: "GPS-enabled fleet allowing you to track your household goods 24/7.", icon: MapPin },
      { title: "On-time Delivery", desc: "Strict adherence to schedules ensuring you can settle into your new home instantly.", icon: Clock }
    ]
  },
  "office-relocation": {
    title: "Office Relocation",
    subtitle: "Seamless corporate moves with zero operational downtime.",
    image: "/images/office_relocation_new.png",
    description: "Relocating an office requires military precision. We specialize in moving IT infrastructure, confidential documents, and ergonomic furniture over a weekend, ensuring your business is fully operational by Monday morning.",
    features: [
      { title: "Server & IT Relocation", desc: "Specialized antistatic packing for servers and computer peripherals.", icon: Shield },
      { title: "Weekend execution", desc: "We work round the clock during weekends to ensure zero business disruption.", icon: Clock },
      { title: "Inventory Management", desc: "Barcoded tagging system for exact placement in the new facility.", icon: CheckCircle2 },
      { title: "Dedicated Manager", desc: "A single point of contact coordinating the entire corporate move.", icon: MapPin }
    ]
  },
  "vehicle-transport": {
    title: "Vehicle Transport",
    subtitle: "Secure, enclosed transportation for your prized vehicles.",
    image: "/images/vehicle_transport_red_truck.png",
    description: "Your vehicle is more than just a mode of transport. We use specialized, hydraulic-lift enclosed car carriers and customized bike stands to ensure your vehicle is transported without a single scratch, sheltered from weather and road debris.",
    features: [
      { title: "Zero-Scratch Vehicle Transport", desc: "Specialized hydraulic-lift carriers designed for the ultimate protection of your prized vehicles.", icon: Truck },
      { title: "Door-to-Door Delivery", desc: "We pick up from your current address and deliver directly to your new one.", icon: MapPin },
      { title: "Comprehensive Insurance", desc: "Full coverage transit insurance for complete peace of mind.", icon: Shield },
      { title: "Wheel-Chocking System", desc: "Advanced securing mechanisms to prevent any internal movement.", icon: CheckCircle2 }
    ]
  },
  "packing": {
    title: "Packing & Unpacking",
    subtitle: "Professional packing services for maximum protection.",
    image: "/images/premium_packing_new.png",
    description: "Don't want the hassle of moving a whole house but need help packing? Our team of trained packers uses export-quality materials to pack your belongings, categorizing and labeling everything for a seamless unpacking experience.",
    features: [
      { title: "Export-Quality Materials", desc: "High-grade corrugated boxes, edge guards, and custom crates.", icon: Shield },
      { title: "Fragile Items Specialization", desc: "Specialized packing for glassware, artwork, and electronics.", icon: CheckCircle2 },
      { title: "Detailed Labeling", desc: "Color-coded labeling system for easy room-by-room unpacking.", icon: MapPin },
      { title: "Unpacking & Setup", desc: "We don't just unpack; we help arrange heavy furniture in your new space.", icon: Clock }
    ]
  },
  "intercity": {
    title: "Intercity Moving",
    subtitle: "Reliable long-distance relocation across the country.",
    image: "/images/intercity_final.png",
    description: "Moving to a new state brings its own set of logistical challenges. With our extensive nationwide network and dedicated long-haul fleet, we guarantee a smooth, transparent, and timely interstate relocation.",
    features: [
      { title: "Dedicated Fleet", desc: "Exclusive trucks for your belongings without transshipment.", icon: Truck },
      { title: "Route Optimization", desc: "AI-driven route planning for the fastest and safest transit.", icon: MapPin },
      { title: "State Checkpoint Clearance", desc: "We handle all inter-state documentation and toll clearances.", icon: CheckCircle2 },
      { title: "24/7 Updates", desc: "Continuous location tracking and status updates from our dispatch team.", icon: Clock }
    ]
  },
  "storage": {
    title: "Warehouse Storage",
    subtitle: "Secure, climate-controlled storage facilities.",
    image: "/images/warehouse_storage_new.png",
    description: "Need a safe place for your belongings while you settle in? Our premium warehouse facilities offer short-term and long-term storage solutions with round-the-clock security, pest control, and climate management.",
    features: [
      { title: "24/7 CCTV Surveillance", desc: "Round-the-clock monitoring and strict access control.", icon: Shield },
      { title: "Climate Controlled", desc: "Protection against extreme temperatures, humidity, and moisture.", icon: CheckCircle2 },
      { title: "Regular Pest Control", desc: "Strict hygiene protocols and monthly pest control treatments.", icon: Shield },
      { title: "Flexible Tenure", desc: "Pay only for the space and time you need, from a week to years.", icon: Clock }
    ]
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const data = serviceData[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen pt-[104px]">
      {/* Premium Hero Section - Inset to prevent navbar overlap */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center mx-4 md:mx-8 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image 
            src={data.image}
            alt={data.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-900/70 to-zinc-900/40" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-white">{data.title}</span>
            </nav>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg"
            >
              {data.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed drop-shadow-md"
            >
              {data.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-[#F3F6FA] to-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 blur-3xl rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-xs font-bold tracking-widest text-blue-600 uppercase mb-6"
              >
                Service Overview
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-black text-zinc-950 mb-6 tracking-tight leading-[1.2]"
              >
                Engineered for maximum safety and precision.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-zinc-500 leading-relaxed mb-8"
              >
                {data.description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/quote"
                  className="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all hover:scale-105"
                >
                  Get a Free Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {data.features.map((feature: any, index: number) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-white to-blue-50/20 p-6 md:p-8 rounded-[2rem] shadow-lg shadow-blue-900/5 border border-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden group"
                    >
                      {/* Hover glow effect */}
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                          <Icon size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-zinc-950 mb-3">{feature.title}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrate HowItWorks to complete the professional funnel */}
      <HowItWorks />
    </main>
  );
}
