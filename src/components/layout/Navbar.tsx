"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { Menu, X, PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Cities", href: "/cities" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-950 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-blue-950 leading-tight">
                PRERNA
              </span>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                Packers & Movers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-l pl-6 border-slate-200">
              <div className="flex items-center gap-2 text-blue-950">
                <div className="p-2 bg-orange-100 rounded-full text-orange-600">
                  <PhoneCall size={16} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Call Now</div>
                  <div className="text-sm font-bold">+91 98765 43210</div>
                </div>
              </div>
              <Link
                href="/quote"
                className="bg-blue-950 hover:bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-slate-700 py-2 border-b border-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 bg-orange-50 text-orange-600 py-3 rounded-xl font-medium"
            >
              <PhoneCall size={18} />
              Call +91 98765 43210
            </a>
            <Link
              href="/quote"
              className="flex items-center justify-center bg-blue-950 text-white py-3 rounded-xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Instant Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
