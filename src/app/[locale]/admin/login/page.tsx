"use client";

import { useState } from "react";
import { Lock, Mail, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy login action - redirects to admin dashboard
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-sm w-full relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
            P
          </div>
          <h1 className="text-2xl font-bold text-zinc-950 tracking-tight">Welcome back</h1>
          <p className="text-sm text-zinc-500 font-medium mt-1">Sign in to the admin panel</p>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl border border-zinc-200/60 shadow-sm">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none text-sm font-medium"
                  placeholder="admin@prernapackers.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none text-sm font-medium"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-zinc-950 hover:bg-zinc-800 text-white py-3.5 rounded-xl font-semibold flex justify-center items-center gap-2 transition-colors text-sm"
            >
              Sign in <ArrowRight size={16} />
            </button>
          </form>
        </div>
        
        <p className="text-center text-xs text-zinc-400 font-medium mt-6">
          Protected area. Authorized personnel only.
        </p>
      </div>
    </div>
  );
}
