"use client";

import { ArrowRight, Box, ShieldCheck, Clock, Users, IndianRupee, FileLock } from "lucide-react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-zinc-50/50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-zinc-200/40 to-transparent rounded-full blur-3xl -translate-y-1/4 -translate-x-1/4 pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Main 2-Column Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16 lg:mb-24">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-semibold text-blue-600 mb-8"
            >
              <ShieldCheck size={16} className="text-blue-500" />
              India's Most Trusted Relocation Partner
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tight text-zinc-950 mb-6 leading-[1.05]"
            >
              Move forward <br className="hidden md:block" />
              without the <span className="text-blue-600 relative inline-block">
                friction.
                {/* Simulated curved underline */}
                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-5 text-blue-600" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <path d="M0,10 Q100,20 200,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="max-w-xl text-lg md:text-xl text-zinc-500 mb-10 leading-relaxed"
            >
              Premium, zero-damage relocation services engineered for peace of mind. Experience a seamless transition to your new home or office.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
            >
              <Link
                href="/quote"
                className="group relative inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30"
              >
                <FileLock size={18} />
                Get Instant Quote
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 px-8 py-4 rounded-xl text-base font-semibold transition-colors shadow-sm"
              >
                <Box size={18} className="text-blue-600" />
                View Services
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                <Image src="/images/avatar_1.png" alt="Customer 1" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <Image src="/images/avatar_2.png" alt="Customer 2" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <Image src="/images/avatar_3.png" alt="Customer 3" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 text-white flex items-center justify-center text-xs font-bold z-10 shadow-sm">
                  +500
                </div>
              </div>
              <p className="text-sm font-medium text-zinc-600">
                Trusted by <span className="font-bold text-zinc-900">500+</span> happy customers
              </p>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/hero_movers.png" 
              alt="Professional movers packing a box near a Prerna Packers and Movers truck" 
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay for subtle shadowing */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent mix-blend-multiply" />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[220px]"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 shadow-inner">
                <ShieldCheck className="text-blue-600" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-blue-600 font-bold text-lg leading-tight">100%</span>
                <span className="text-xs font-semibold text-zinc-600 leading-tight">Safe & Secure<br/>Relocation</span>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Features Overlay Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="relative z-20 bg-white rounded-3xl shadow-xl shadow-zinc-200/50 border border-zinc-100 p-8 md:p-10 -mb-20 md:-mb-10 lg:mb-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
            
            <div className="flex items-start gap-4 lg:px-4 pt-6 md:pt-0 first:pt-0 lg:first:px-0">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Box className="text-blue-600" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-zinc-950 mb-1 text-base">Zero Damage</span>
                <span className="text-sm text-zinc-500 leading-relaxed">Safe & secure packing & moving</span>
              </div>
            </div>

            <div className="flex items-start gap-4 lg:px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <Clock className="text-green-600" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-zinc-950 mb-1 text-base">On-Time Delivery</span>
                <span className="text-sm text-zinc-500 leading-relaxed">Punctual & reliable relocation</span>
              </div>
            </div>

            <div className="flex items-start gap-4 lg:px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                <Users className="text-purple-600" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-zinc-950 mb-1 text-base">Expert Team</span>
                <span className="text-sm text-zinc-500 leading-relaxed">Trained professionals you can trust</span>
              </div>
            </div>

            <div className="flex items-start gap-4 lg:px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                <IndianRupee className="text-amber-600" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-zinc-950 mb-1 text-base">Affordable Pricing</span>
                <span className="text-sm text-zinc-500 leading-relaxed">Transparent pricing with no hidden costs</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
