"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-zinc-200/50 py-4 shadow-sm"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 blur-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative font-black text-xl italic tracking-tighter pr-1">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-700 leading-none tracking-tight">
                  PRERNA
                </span>
                <span className="text-[10px] text-blue-600 font-bold uppercase tracking-[0.2em] mt-1">
                  Packers & Movers
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = link.href === "/" ? pathname === "/" : pathname.includes(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-sm font-semibold transition-colors duration-200 relative pb-1 ${
                        isActive ? "text-blue-600" : "text-zinc-600 hover:text-blue-600"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Call to action & Mobile Toggle */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                <a 
                  href="tel:+917279919201"
                  className="flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-blue-600 transition-colors"
                >
                  <Phone size={16} className="text-blue-600" />
                  +91 72799 19201
                </a>
                <Link
                  href="/quote"
                  className="group relative inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Quote
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>

              <button
                className="md:hidden p-2 text-zinc-950 -mr-2"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-white md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 px-6 border-b border-zinc-100">
              <div className="font-bold text-lg text-zinc-950 tracking-tight">Menu</div>
              <button
                className="p-2 text-zinc-500 hover:text-zinc-950 bg-zinc-50 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.includes(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-2xl font-semibold tracking-tight ${
                      isActive ? "text-blue-600" : "text-zinc-900"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="p-6 border-t border-zinc-100 bg-zinc-50/50 flex flex-col gap-4">
              <a
                href="tel:+917279919201"
                className="flex items-center justify-center gap-2 text-center font-semibold text-zinc-900 py-3"
              >
                <Phone size={18} className="text-blue-600" />
                +91 72799 19201
              </a>
              <Link
                href="/quote"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-full font-semibold shadow-lg shadow-blue-600/20"
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
