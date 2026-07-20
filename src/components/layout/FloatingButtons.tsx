import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-xl shadow-[#25D366]/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      
      {/* Call Button */}
      <a
        href="tel:+917279919201"
        className="w-14 h-14 bg-zinc-950 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-zinc-900/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 md:hidden"
        aria-label="Call Us"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
