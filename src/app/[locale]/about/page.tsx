"use client";

import { CheckCircle2, Users, Truck, ShieldCheck, Clock, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    { title: "Customer First", desc: "Your satisfaction is our primary goal. We go above and beyond to ensure a stress-free move.", icon: Users },
    { title: "Safety & Security", desc: "We treat your belongings with the utmost care, utilizing premium packing materials.", icon: ShieldCheck },
    { title: "Transparency", desc: "No hidden costs. What we quote is what you pay. Honest and upfront communication.", icon: CheckCircle2 },
    { title: "Reliability", desc: "We respect your time. Our team ensures on-time pickup and delivery for every move.", icon: Clock },
  ];

  const milestones = [
    { year: "2003", title: "Founded in Munger", desc: "Started as a small local moving company with a vision for excellence." },
    { year: "2014", title: "Pan-India Expansion", desc: "Expanded operations to cover major cities across India." },
    { year: "2018", title: "Fleet Modernization", desc: "Invested in GPS-enabled, climate-controlled vehicles." },
    { year: "2024", title: "30,000+ Moves", desc: "Crossed 30,000 successful relocations with a 4.9/5 rating." },
  ];

  return (
    <main className="bg-white min-h-screen pt-[104px] pb-10">
      {/* Premium Hero Section - Inset */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center mx-4 md:mx-8 rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-200/50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/intercity_final.png"
            alt="About Prerna Packers and Movers"
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
              Our Story
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg"
            >
              Driven by Precision.<br />
              <span className="text-blue-400">Defined by Trust.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed drop-shadow-md max-w-xl"
            >
              Moving families and businesses with unparalleled care and logistical excellence since 2003.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Editorial Story Layout */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left Column: Big Typography & Mission */}
            <div className="lg:col-span-5">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-zinc-950 mb-8 tracking-tight leading-[1.1]"
              >
                A legacy built on <br className="hidden md:block" />safeguarding your memories.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 rounded-[2rem] border border-blue-100 shadow-xl shadow-blue-900/5 relative mt-12"
              >
                <Quote className="absolute -top-6 -left-2 text-blue-200" size={64} />
                <h3 className="text-xl font-bold text-zinc-950 mb-4 tracking-tight relative z-10">Our Mission</h3>
                <p className="text-zinc-600 font-medium leading-relaxed italic relative z-10 text-lg">
                  "To provide premium, reliable, and affordable relocation services across India, ensuring every move is handled with the utmost care, professionalism, and absolute transparency."
                </p>
              </motion.div>
            </div>

            {/* Right Column: The Journey & Milestones */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg text-zinc-500 font-medium leading-relaxed mb-16"
              >
                <p>
                  Founded in 2003 in Munger, Bihar, Prerna Packers and Movers started with a simple vision: to completely eliminate the friction and stress associated with relocation. What began as a small, highly-dedicated local moving company has organically grown into a robust Pan-India logistics network.
                </p>
                <p>
                  Over the past 20+ years, we have successfully completed over 30,000 moves. We do not just move boxes; we transport lives, careers, and critical business infrastructure. Our success is directly attributed to our unwavering commitment to quality, intensive staff training programs, and heavy investments in a state-of-the-art, GPS-enabled fleet.
                </p>
              </motion.div>

              {/* Modernized Glowing Timeline */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-zinc-950 mb-10 tracking-tight">Key Milestones</h3>

                {/* Vertical Line */}
                <div className="absolute top-[60px] bottom-10 left-[19px] w-[2px] bg-gradient-to-b from-blue-600 via-indigo-400 to-transparent rounded-full" />

                <div className="space-y-12 relative z-10">
                  {milestones.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="flex gap-8 group"
                    >
                      {/* Timeline Dot */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-white border-[3px] border-blue-600 shadow-lg shadow-blue-600/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-600 group-hover:bg-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Timeline Content */}
                      <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm group-hover:shadow-xl group-hover:border-blue-100 transition-all duration-300 flex-1">
                        <div className="text-sm font-black text-blue-600 tracking-widest mb-2">{item.year}</div>
                        <h4 className="text-xl font-bold text-zinc-950 mb-2">{item.title}</h4>
                        <p className="text-base text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* High-Contrast Core Values (Dark Mode) */}
      <section className="py-24 md:py-32 bg-[#0B1120] relative overflow-hidden mx-4 md:mx-8 rounded-[2.5rem] mb-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6"
            >
              Our DNA
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]"
            >
              The Core Values that drive us.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              The fundamental principles that guide our everyday operations and ensure we deliver excellence consistently, without compromise.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0F172A] p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-blue-500/30 hover:bg-[#1E293B] group transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors duration-300">
                    <value.icon className="text-white group-hover:text-blue-400 transition-colors" size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">{value.title}</h3>
                    <p className="text-zinc-400 text-base font-medium leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
