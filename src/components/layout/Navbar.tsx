"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { Menu, X, ArrowRight } from "lucide-react";
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
    { name: "Services", href: "/services" },
    { name: "Cities", href: "/cities" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-zinc-200/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-zinc-950 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-zinc-950 leading-none tracking-tight">
                  PRERNA
                </span>
                <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-[0.2em] mt-1">
                  Relocation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-8 bg-white/50 backdrop-blur-md px-6 py-2 rounded-full border border-zinc-200/50 shadow-sm">
                {navLinks.map((link) => {
                  const isActive = pathname.includes(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-sm font-medium transition-colors duration-200 relative ${
                        isActive ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-950"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-zinc-950 rounded-full"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Call to action & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <a 
                  href="tel:+917279919201"
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
                >
                  +91 72799 19201
                </a>
                <Link
                  href="/quote"
                  className="group relative inline-flex items-center justify-center gap-2 bg-zinc-950 text-white px-5 py-2.5 rounded-full text-sm font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Quote
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-semibold text-zinc-900 tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="p-6 border-t border-zinc-100 bg-zinc-50/50 flex flex-col gap-4">
              <a
                href="tel:+917279919201"
                className="text-center font-medium text-zinc-900 py-3"
              >
                +91 72799 19201
              </a>
              <Link
                href="/quote"
                className="flex items-center justify-center gap-2 bg-zinc-950 text-white py-4 rounded-full font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Instant Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
