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
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-3xl text-slate-900 flex flex-col lg:hidden overflow-hidden"
          >
            {/* Premium Background Glow Effects for Light Mode */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="flex flex-col h-full relative z-10">
              {/* Header inside menu */}
              <div className="flex items-center justify-between p-6">
                <div className="relative w-[150px] h-[45px] flex items-center">
                  <Image src="/prerna-logo.png" alt="Prerna Packers Logo" fill className="object-contain object-left" priority />
                </div>
                <button
                  className="p-3 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-all active:scale-95 shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={24} strokeWidth={2.5} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 px-8 py-4 flex flex-col justify-center gap-8 overflow-y-auto">
                {navLinks.map((link, index) => {
                  const isActive = link.href === "/" ? pathname === "/" : pathname.includes(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.href}
                        className={`group inline-flex items-center gap-4 text-4xl sm:text-5xl font-black tracking-tighter transition-all duration-300 ${isActive ? "text-blue-600" : "text-slate-800 hover:text-blue-600 hover:translate-x-4"}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                        {isActive && <motion.span layoutId="mobile-active" className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-2" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer inside menu */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 mt-auto"
              >
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                  <a href="tel:+917279919201" className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-4 hover:text-blue-600 transition-colors">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    +91 72799 19201
                  </a>
                  <Link
                    href="/quote"
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-[0_4px_20px_rgba(37,99,235,0.25)] active:scale-[0.98]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Instant Quote
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
