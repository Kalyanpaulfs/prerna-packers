import { CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";

const reasons = [
  "GPS Enabled Fleet for Real-time Tracking",
  "Premium 5-Layer Packing Materials",
  "100% Transparent Pricing - No Hidden Charges",
  "Free Doorstep Survey & Consultation",
  "Dedicated Relocation Manager",
  "Transit Insurance Coverage",
  "Specialized Handling for Fragile Items",
  "On-time Delivery Guarantee"
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-orange-500 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Professional Packing and Moving"
              className="rounded-3xl shadow-xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-blue-950 p-6 rounded-2xl shadow-2xl text-white hidden md:block border border-blue-800">
              <div className="text-4xl font-bold mb-1 text-orange-500">15+</div>
              <div className="text-sm font-medium">Years of Trust</div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Why PRERNA is India's most trusted moving company?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We don't just move boxes; we move lives. Our commitment to excellence, premium service standards, and customer-first approach makes us the preferred choice for hassle-free relocation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700 font-medium">{reason}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-block bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-full text-base font-medium transition-colors shadow-lg shadow-blue-950/20"
            >
              Know More About Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
