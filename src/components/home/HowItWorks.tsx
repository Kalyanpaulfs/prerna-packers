import { ClipboardList, PackageSearch, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList size={32} />,
    title: "1. Request a Quote",
    description: "Fill our simple form or call us. Get an instant estimate for your relocation needs."
  },
  {
    icon: <PackageSearch size={32} />,
    title: "2. Free Survey",
    description: "Our experts visit your location to assess the volume and plan the logistics."
  },
  {
    icon: <Truck size={32} />,
    title: "3. Safe Moving",
    description: "Our professional team securely packs, loads, and transports your belongings."
  },
  {
    icon: <CheckCircle size={32} />,
    title: "4. Unpacking & Settling",
    description: "We deliver on time, unload, unpack, and help set up your new home."
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900 rounded-full blur-[100px] opacity-50 transform translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-800 rounded-full blur-[120px] opacity-30 transform -translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple 4-Step Moving Process
          </h2>
          <p className="text-lg text-blue-200">
            We've streamlined our process to ensure your relocation is smooth, transparent, and completely stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-blue-800 border-t border-dashed border-blue-400" />
              )}
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-24 bg-blue-900 border border-blue-700 rounded-2xl flex items-center justify-center text-orange-400 mb-6 shadow-xl transform group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-200 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
