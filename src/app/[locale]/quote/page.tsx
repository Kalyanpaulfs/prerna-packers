import { QuoteCalculator } from "@/components/quote/QuoteCalculator";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Get a Premium Quote | Prerna Packers and Movers",
  description: "Calculate your estimated moving costs instantly with our precise quote generator.",
};

export default function QuotePage() {
  return (
    <main className="bg-zinc-50 min-h-screen pt-[104px] pb-20">
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center mx-4 md:mx-8 rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-200/50 mb-12 md:mb-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/prerna_real_boxes_1784943352192.png"
            alt="Get a Quote"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-900/80 to-zinc-900/40" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-blue-400 uppercase mb-6 backdrop-blur-sm">
              Customized Estimate
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
              Get Your <br className="hidden md:block"/>
              <span className="text-blue-400">Premium Quote.</span>
            </h1>
            <p className="text-lg text-zinc-300 font-medium leading-relaxed drop-shadow-md max-w-lg">
              Provide us with a few precise details about your move, and our system will notify our team instantly.
            </p>
          </div>
        </div>
      </section>
      
      {/* Calculator Section */}
      <section className="relative z-20 -mt-24 md:-mt-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <QuoteCalculator />
        </div>
      </section>
    </main>
  );
}
