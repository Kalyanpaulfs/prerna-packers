import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin, MoveRight } from "lucide-react";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900">
      <div className="container mx-auto px-4 py-20 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center group mb-6 hover:scale-105 transition-all duration-300">
              <div className="relative w-[280px] h-[80px]">
                <Image src="/prerna-logo.png" alt="Prerna Packers Logo" fill className="object-contain object-left" priority />
              </div>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed font-medium">
              Elite relocation infrastructure. Secure, efficient, and precise moving services engineered for peace of mind.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-tight">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"><MoveRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"><MoveRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Our Services</Link></li>
              <li><Link href="/cities" className="hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"><MoveRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Coverage Area</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"><MoveRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-tight">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/home-relocation" className="hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"><MoveRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Home Relocation</Link></li>
              <li><Link href="/services/office-relocation" className="hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"><MoveRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Office Relocation</Link></li>
              <li><Link href="/services/vehicle-transport" className="hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"><MoveRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Vehicle Transport</Link></li>
              <li><Link href="/services/storage" className="hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"><MoveRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Secure Storage</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-tight">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-white" />
                </div>
                <span className="text-sm font-medium leading-relaxed">HQ: Prerna Packers & Movers<br/>Munger, Bihar, India 811201</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-white" />
                </div>
                <span className="text-sm font-medium">+91 72799 19201</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-white" />
                </div>
                <span className="text-sm font-medium">pratikrajhans61@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Prerna Packers & Movers. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
