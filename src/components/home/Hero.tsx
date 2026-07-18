import { Link } from "@/i18n/routing";
import { ArrowRight, Star, ShieldCheck, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply z-10" />
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Professional Moving Services"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
            <Star size={14} className="fill-orange-400" />
            <span>India's #1 Premium Relocation Service</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Seamless moving for a <span className="text-orange-500">stress-free</span> tomorrow.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Professional packers and movers delivering safe, secure, and on-time relocation services across India. Trusted by 50,000+ happy families.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-base font-medium transition-all"
            >
              Get Instant Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-base font-medium transition-all"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <ShieldCheck size={24} />
              </div>
              <div className="text-sm font-medium text-white leading-tight">100% Safe<br/>& Secure</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <MapPin size={24} />
              </div>
              <div className="text-sm font-medium text-white leading-tight">Pan India<br/>Network</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
