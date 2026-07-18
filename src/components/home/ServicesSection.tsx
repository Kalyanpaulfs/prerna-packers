"use client";

import { Home, Building2, Truck, PackageCheck, Car, Warehouse, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getServices } from "@/app/actions/content";

const IconMap: Record<string, any> = {
  Home,
  Building2,
  Car,
  PackageCheck,
  Truck,
  Warehouse
};

export function ServicesSection() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getServices();
      setServices(data.filter((s: any) => s.status === "Active"));
    }
    load();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-zinc-950 mb-6 tracking-tight"
            >
              Services engineered <br/>
              for seamless transitions.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-500 font-medium leading-relaxed"
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
              className="group inline-flex items-center gap-2 text-zinc-950 font-semibold text-sm hover:text-blue-600 transition-colors"
            >
              Explore all services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = IconMap[service.iconName] || Home;
            return (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block h-full bg-white p-8 rounded-2xl border border-zinc-200/60 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors duration-500 opacity-50" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-zinc-100 text-zinc-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent size={24} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
