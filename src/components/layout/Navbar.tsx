"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Cities", href: "/cities" },
    { name: "About Us", href: "/about" },
    { name: "Why Us", href: "/why-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b ${isScrolled
            ? "bg-slate-100/60 backdrop-blur-xl border-slate-200/50 shadow-sm py-1.5"
            : "bg-transparent border-transparent py-4"
          }`}
      >
        <div className="max-w-[1536px] w-full mx-auto px-4 md:px-8 xl:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className={`relative flex items-center transition-all duration-300 ${isScrolled ? 'w-[220px] h-[55px] md:w-[300px] md:h-[75px]' : 'w-[280px] h-[75px] md:w-[400px] md:h-[110px]'}`}>
              <Image
                src="/prerna-logo.png"
                alt="Prerna Packers Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-8 xl:gap-12">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.includes(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[15px] font-medium transition-colors duration-200 relative py-2 ${isActive
                        ? "text-blue-600"
                        : "text-slate-700 hover:text-blue-600"
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Call to action & Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:+917279919201"
                className="flex items-center gap-2 text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                <Phone size={18} className="text-blue-600" />
                +91 72799 19201
              </a>
              <Link
                href="/quote"
                className="group relative inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-md text-[15px] font-semibold transition-all hover:bg-blue-700 shadow-md shadow-blue-600/20"
              >
                <span>Get Quote</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <button
              className="lg:hidden relative w-11 h-11 flex items-center justify-center group bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(37,99,235,0.12)] hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 active:scale-95"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className="flex flex-col items-end justify-center gap-[4.5px] w-5">
                <span className="h-[2px] w-full bg-slate-700 rounded-full transition-all duration-300 group-hover:bg-blue-600"></span>
                <span className="h-[2px] w-[75%] bg-slate-700 rounded-full transition-all duration-300 group-hover:w-full group-hover:bg-blue-600"></span>
                <span className="h-[2px] w-[50%] bg-slate-700 rounded-full transition-all duration-300 group-hover:w-full group-hover:bg-blue-600"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[90] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              className="fixed inset-y-0 right-0 z-[100] w-[90%] sm:w-96 bg-white/95 backdrop-blur-2xl shadow-2xl flex flex-col border-l border-white/50"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-200/50">
                <div className="relative w-[140px] h-[40px] flex items-center">
                  <Image src="/prerna-logo.png" alt="Prerna Packers Logo" fill className="object-contain object-left" priority />
                </div>
                <button
                  className="p-2.5 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-all active:scale-95"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={20} strokeWidth={2.5} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-4 flex flex-col gap-2">
                {navLinks.map((link, index) => {
                  const isActive = link.href === "/" ? pathname === "/" : pathname.includes(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        className={`group flex items-center justify-between py-3.5 px-4 rounded-2xl text-lg font-bold transition-all ${isActive ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                          }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="flex items-center gap-3">
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                          {link.name}
                        </span>
                        <ArrowRight size={18} className={`transition-all duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="p-6 border-t border-slate-200/50 bg-slate-50/50 flex flex-col gap-4">
                <a
                  href="tel:+917279919201"
                  className="flex items-center justify-center gap-3 text-center font-bold text-slate-900 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all active:scale-[0.98]"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                    <Phone size={16} className="text-blue-600" />
                  </div>
                  +91 72799 19201
                </a>
                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-[0_4px_14px_rgba(37,99,235,0.25)] active:scale-[0.98]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Instant Quote
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
