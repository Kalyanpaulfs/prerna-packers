"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Tech Executive",
    content: "Absolutely flawless experience. They packed my entire 3BHK in hours and everything arrived at my new city in perfect condition. Highly recommended.",
    rating: 5,
    initial: "R",
    color: "bg-blue-500"
  },
  {
    name: "Priya Sharma",
    role: "Interior Designer",
    content: "As someone who deals with fragile decor, I was worried. But their 5-layer packing is incredible. Not a single scratch on my delicate items.",
    rating: 5,
    initial: "P",
    color: "bg-indigo-500"
  },
  {
    name: "Amit Patel",
    role: "Business Owner",
    content: "We used Prerna for our office relocation. The team was highly professional and ensured zero downtime for our operations. Worth every penny.",
    rating: 5,
    initial: "A",
    color: "bg-purple-500"
  },
  {
    name: "Neha Singh",
    role: "Software Engineer",
    content: "The real-time tracking feature gave me so much peace of mind during my interstate move. Their customer support is top-notch.",
    rating: 5,
    initial: "N",
    color: "bg-pink-500"
  },
  {
    name: "Vikram Mehta",
    role: "Banker",
    content: "Transparent pricing with no hidden surprises. The dedicated moving manager handled everything perfectly from start to finish.",
    rating: 5,
    initial: "V",
    color: "bg-emerald-500"
  },
  {
    name: "Anjali Desai",
    role: "Artist",
    content: "They handled my art studio move with such care. Every canvas and sculpture was packed meticulously. Prerna is the only mover I trust now.",
    rating: 5,
    initial: "A",
    color: "bg-rose-500"
  }
];

export function Testimonials() {
  const topRow = testimonials.slice(0, 3);
  const bottomRow = testimonials.slice(3, 6);

  return (
    <section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] bg-repeat pointer-events-none invert z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-16 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6"
            >
              Client Success
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]"
            >
              Don't just take <br className="hidden md:block" />our word for it.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-xl"
            >
              Thousands of families and businesses trust us with their most valuable possessions every single year.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10"
          >
            <Quote size={40} className="text-blue-500/50" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-6 overflow-x-hidden group">
        {/* Left and Right Fades for Dark Mode */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />
        
        {/* Top Marquee (Moves Left) */}
        <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap">
          {[...topRow, ...topRow, ...topRow, ...topRow].map((t, index) => (
            <TestimonialCard key={`top-${index}`} t={t} />
          ))}
        </div>

        {/* Bottom Marquee (Moves Right) */}
        <div className="flex animate-[marquee_40s_linear_infinite_reverse] group-hover:[animation-play-state:paused] whitespace-nowrap ml-[-15%]">
          {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map((t, index) => (
            <TestimonialCard key={`bottom-${index}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="inline-flex flex-col w-[300px] md:w-[360px] mx-4 p-6 bg-zinc-900/40 rounded-[2rem] border border-zinc-800 hover:bg-zinc-900/80 transition-colors duration-300 shrink-0 whitespace-normal">
      <div className="flex gap-1 mb-4">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      
      <p className="text-zinc-400 font-normal leading-relaxed mb-6 flex-1 text-sm md:text-base">
        "{t.content}"
      </p>
      
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-300 font-semibold flex items-center justify-center text-base">
          {t.initial}
        </div>
        <div>
          <h4 className="font-semibold text-zinc-200 tracking-tight text-sm">{t.name}</h4>
          <p className="text-xs text-zinc-500">{t.role}</p>
        </div>
      </div>
    </div>
  );
}
