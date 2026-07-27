"use client";

import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const contactCards = [
  { icon: Phone, title: "Call Us", lines: ["+91 72799 19201", "Mon — Sat: 9:00 AM – 8:00 PM"] },
  { icon: Mail, title: "Email Us", lines: ["pratikrajhans61@gmail.com"] },
  { icon: MapPin, title: "Head Office", lines: ["Prerna Packers & Movers", "Munger, Bihar, India 811201"] },
];

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pt-[104px] pb-10">
      {/* Premium Hero Section - Inset */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center mx-4 md:mx-8 rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-200/50">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/contact_hero.png"
            alt="Contact Prerna Packers and Movers"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-900/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6 backdrop-blur-sm"
            >
              Contact Us
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg"
            >
              Let's start the <br />
              <span className="text-blue-400">conversation.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed drop-shadow-md max-w-xl"
            >
              Whether you need a quick quote or a comprehensive moving plan, our team of experts is ready to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Split Contact Layout */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Left Side: Dark Mode Contact Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-5/12 bg-[#0B1120] p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10 mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Get in Touch</h2>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  Have questions about our services or need a specialized relocation plan? Reach out directly using the details below.
                </p>
              </div>

              <div className="relative z-10 space-y-10">
                {contactCards.map((card, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors duration-300">
                      <card.icon className="text-blue-400" size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{card.title}</h3>
                      {card.lines.map((line, j) => (
                        <p key={j} className="text-zinc-400 font-medium text-sm leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Premium Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full lg:w-7/12 bg-white rounded-[2.5rem] p-8 md:p-14 border border-zinc-200/60 shadow-2xl shadow-zinc-200/40 relative"
            >
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-black text-zinc-950 mb-3 tracking-tight">Send us a message</h2>
                <p className="text-zinc-500 font-medium">Fill out the form below and our relocation specialists will respond within 24 hours.</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-base font-medium text-zinc-900 placeholder:text-zinc-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-base font-medium text-zinc-900 placeholder:text-zinc-400"
                      placeholder="+91 72799 19201"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-base font-medium text-zinc-900 placeholder:text-zinc-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-base font-medium text-zinc-900 placeholder:text-zinc-400 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-5 rounded-xl font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all hover:scale-[1.02] text-lg mt-4"
                >
                  Send Message
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
