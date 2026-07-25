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
              className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 right-0 z-[100] w-full sm:w-96 bg-white shadow-2xl flex flex-col border-l border-slate-100"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div className="relative w-[160px] h-[45px] flex items-center">
                <Image src="/prerna-logo.png" alt="Prerna Packers Logo" fill className="object-contain object-left" priority />
              </div>
              <button
                className="p-2 text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-full transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.includes(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block py-3 text-lg font-medium transition-colors ${isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col gap-4">
              <a
                href="tel:+917279919201"
                className="flex items-center justify-center gap-2 text-center font-semibold text-slate-800 py-3 bg-white rounded-md border border-slate-200"
              >
                <Phone size={18} className="text-blue-600" />
                +91 72799 19201
              </a>
              <Link
                href="/quote"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
