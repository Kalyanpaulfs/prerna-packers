"use client";

import { Link } from "@/i18n/routing";
import { LayoutDashboard, Users, FileText, Settings, LogOut, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (pathname.includes("/admin/login")) {
    return <>{children}</>;
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Leads & Quotes", href: "/admin/leads", icon: Users },
    { name: "Content", href: "/admin/content", icon: FileText },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2.5 bg-white rounded-xl shadow-sm border border-zinc-200/60 text-zinc-700"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-40 w-[260px] bg-white border-r border-zinc-200/60 transition-transform duration-300 ease-in-out flex flex-col
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        {/* Logo */}
        <div className="px-6 py-6 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-950 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <div>
              <div className="font-bold text-zinc-950 text-sm tracking-tight">PRERNA</div>
              <div className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">Admin Panel</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.endsWith(item.href) || (item.href !== "/admin" && pathname.includes(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-zinc-100 text-zinc-950" 
                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon size={18} strokeWidth={2} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-zinc-100">
          <button 
            onClick={() => window.location.href = "/admin/login"}
            className="flex items-center gap-3 px-3 py-2.5 w-full text-left text-sm font-medium text-zinc-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-auto">
        <div className="p-6 md:p-10 pt-20 md:pt-10 max-w-7xl">
          {children}
        </div>
      </main>
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-zinc-950/20 backdrop-blur-sm z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
