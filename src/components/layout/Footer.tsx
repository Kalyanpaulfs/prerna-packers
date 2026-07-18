import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">
                  PRERNA
                </span>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                  Packers & Movers
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premium packers and movers providing professional, secure, and hassle-free relocation services across India.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/cities" className="hover:text-white transition-colors text-sm">Coverage Area</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/home-relocation" className="hover:text-white transition-colors text-sm">Home Relocation</Link></li>
              <li><Link href="/services/office-relocation" className="hover:text-white transition-colors text-sm">Office Relocation</Link></li>
              <li><Link href="/services/car-transportation" className="hover:text-white transition-colors text-sm">Car Transportation</Link></li>
              <li><Link href="/services/bike-transportation" className="hover:text-white transition-colors text-sm">Bike Transportation</Link></li>
              <li><Link href="/services/warehouse-storage" className="hover:text-white transition-colors text-sm">Warehouse & Storage</Link></li>
              <li><Link href="/services/packing-unpacking" className="hover:text-white transition-colors text-sm">Packing & Unpacking</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm">Head Office: PRERNA Packers & Movers, Munger, Bihar, India - 811201</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span className="text-sm">support@prernapackers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Prerna Packers and Movers. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
