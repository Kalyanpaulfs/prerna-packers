import { Home, Building2, Truck, PackageCheck, Car, Warehouse } from "lucide-react";
import { Link } from "@/i18n/routing";

const services = [
  {
    icon: <Home size={32} />,
    title: "Home Relocation",
    description: "Safe and hassle-free household shifting with premium packing materials and careful handling.",
    href: "/services/home-relocation",
  },
  {
    icon: <Building2 size={32} />,
    title: "Office Relocation",
    description: "Minimize downtime with our efficient corporate and office moving solutions.",
    href: "/services/office-relocation",
  },
  {
    icon: <Car size={32} />,
    title: "Vehicle Transport",
    description: "Secure car and bike transportation in specially designed enclosed carriers.",
    href: "/services/vehicle-transport",
  },
  {
    icon: <PackageCheck size={32} />,
    title: "Packing & Unpacking",
    description: "Professional packing using multi-layer protection for fragile and valuable items.",
    href: "/services/packing",
  },
  {
    icon: <Truck size={32} />,
    title: "Intercity Moving",
    description: "Dedicated transportation for long-distance and interstate relocation.",
    href: "/services/intercity",
  },
  {
    icon: <Warehouse size={32} />,
    title: "Warehouse Storage",
    description: "Climate-controlled, secure storage facilities for short and long-term needs.",
    href: "/services/storage",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Premium Moving Services
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive relocation solutions tailored to your specific needs. Experience a smooth transition to your new destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
