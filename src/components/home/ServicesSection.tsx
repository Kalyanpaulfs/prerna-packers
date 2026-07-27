"use client";

import { Home, Building2, Truck, Package, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import Image from "next/image";

const IconMap: Record<string, any> = {
  Home,
  Building2,
  Truck,
  Package,
  ShieldCheck
};

interface ServicesSectionProps {
  hideHeader?: boolean;
}

export function ServicesSection({ hideHeader = false }: ServicesSectionProps) {
  const services = [
    {
      id: "1",
      title: "Home Relocation",
      description: "Comprehensive end-to-end household shifting services designed to transport your most valuable possessions safely and securely to your new home.",
      icon: "Home",
      href: "/services/home-relocation"
    },
    {
      id: "2",
      title: "Office Relocation",
      description: "Minimize downtime with our precision-engineered corporate moving solutions. We handle sensitive IT equipment and office infrastructure with absolute care.",
      icon: "Building2",
      href: "/services/office-relocation"
    },
    {
      id: "3",
      title: "Vehicle Transport",
      description: "Secure, fully-enclosed transportation for your cars and two-wheelers. Our specialized fleet ensures zero-scratch delivery across the country.",
      icon: "Truck",
      href: "/services/vehicle-transport"
    },
    {
      id: "4",
      title: "Premium Packing",
      description: "Industry-leading 3-layer export grade packing materials. We safeguard your fragile items, antiques, and electronics against all transit shocks.",
      icon: "Package",
      href: "/services/packing"
    }
  ];

  const getCardImage = (index: number) => {
    switch (index % 6) {
      case 0: return "/images/home_relocation_final.png";
      case 1: return "/images/office_relocation_new.png";
      case 2: return "/images/vehicle_transport_red_truck.png";
      case 3: return "/images/premium_packing_new.png";
      case 4: return "/images/intercity_final.png";
      case 5: return "/images/warehouse_storage_new.png";
      default: return null;
    }
  };

  const getGridClasses = (index: number) => {
    switch (index % 6) {
      case 0:
        return "md:col-span-2 md:row-span-2 text-white shadow-xl shadow-zinc-900/10";
      case 1:
        return "md:col-span-2 md:row-span-2 text-white shadow-xl shadow-zinc-900/10";
      case 2:
        return "md:col-span-2 md:row-span-1 text-white shadow-xl shadow-zinc-900/10";
      case 3:
        return "md:col-span-2 md:row-span-1 text-white shadow-lg shadow-zinc-900/10";
      case 4:
        return "md:col-span-2 md:row-span-1 text-white shadow-lg shadow-zinc-900/10";
      case 5:
        return "md:col-span-2 md:row-span-1 text-white shadow-lg shadow-zinc-900/10";
      default:
        return "md:col-span-1 md:row-span-1 bg-white text-zinc-950 border border-zinc-200/60";
    }
  };

  const getIconContainerClasses = (index: number) => {
    return "bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg shadow-black/10";
  };

  const getTitleClasses = (index: number) => {
    if (index % 6 === 0 || index % 6 === 1) return "text-white text-2xl md:text-3xl lg:text-4xl drop-shadow-md";
    return "text-white text-xl drop-shadow-md";
  };

  const getDescriptionClasses = (index: number) => {
    if (index % 6 === 0 || index % 6 === 1) return "hidden md:block text-zinc-200 text-base md:text-lg max-w-md mt-4 drop-shadow-sm";
    return "hidden md:block text-zinc-300 text-sm mt-3 drop-shadow-sm";
  };

  return (
    <section className={`bg-[#F8FAFC] relative overflow-hidden ${hideHeader ? 'py-12 md:py-20' : 'py-24 md:py-32'}`}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 text-xs font-bold tracking-widest text-blue-600 uppercase mb-6"
              >
                Our Solutions
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-950 mb-6 tracking-tight leading-[1.1]"
              >
                Services engineered <br />
                for seamless transitions.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed"
              >
                From careful packaging to secure transportation, our end-to-end logistics infrastructure ensures your assets arrive exactly as they left.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 bg-white border border-zinc-200 text-zinc-950 px-6 py-3 rounded-full font-semibold text-sm hover:bg-zinc-50 hover:border-zinc-300 shadow-sm transition-all"
              >
                Explore all services
                <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] md:auto-rows-[300px] gap-4 md:gap-6">
          {services.map((service, index) => {
            const IconComponent = IconMap[service.icon] || Home;
            const bgImage = getCardImage(index);
            const isImageCard = bgImage !== null;

            return (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={`${getGridClasses(index)} rounded-3xl p-8 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500 flex flex-col`}
              >
                <Link href={service.href} className="absolute inset-0 z-30" aria-label={service.title}></Link>

                {/* Background Image and Gradient Overlay for Image Cards */}
                {isImageCard && (
                  <>
                    <Image
                      src={bgImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 z-10 transition-colors duration-500 ${(index % 6 === 0 || index % 6 === 1) ? "bg-gradient-to-t from-zinc-950/90 via-zinc-900/60 to-zinc-900/20 group-hover:from-blue-950/90" :
                        "bg-zinc-900/60 group-hover:bg-zinc-900/70"
                      }`} />
                  </>
                )}

                {/* Decorative background glow for solid cards */}
                {!isImageCard && (
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-100/50 blur-3xl rounded-full pointer-events-none group-hover:bg-blue-200/50 transition-colors duration-700" />
                )}

                <div className="relative z-20 flex flex-col h-full justify-between">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${getIconContainerClasses(index)}`}>
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className={`font-bold tracking-tight mb-2 ${getTitleClasses(index)}`}>
                      {service.title}
                    </h3>
                    <p className={`leading-relaxed font-medium ${getDescriptionClasses(index)}`}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Overlay Arrow */}
                <div className={`absolute bottom-8 right-8 w-10 h-10 rounded-full flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-20 ${isImageCard ? "bg-white/20 backdrop-blur-md text-white border border-white/20 shadow-lg shadow-black/20" : "bg-blue-50 text-blue-600 border border-blue-100"
                  }`}>
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
