"use client";

import { useState, useEffect } from "react";
import { Users, TrendingUp, DollarSign, CalendarCheck, ArrowUpRight } from "lucide-react";
import { getLeads } from "@/app/actions/leads";

export default function AdminDashboardPage() {
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [stats, setStats] = useState({ total: 0, converted: 0, revenue: 0, active: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLeads();
      setRecentLeads(data.slice(0, 5));
      
      const total = data.length;
      const converted = data.filter(l => l.status === "Converted").length;
      const active = data.filter(l => l.status === "New" || l.status === "Contacted").length;
      
      setStats({
        total,
        converted,
        revenue: converted * 15000,
        active
      });
    };
    fetchData();
  }, []);

  const statsDisplay = [
    { title: "Total Leads", value: stats.total.toString(), change: "+12%", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Converted", value: stats.converted.toString(), change: "+8%", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "Revenue (Est)", value: `₹${(stats.revenue / 100000).toFixed(1)}L`, change: "+24%", icon: DollarSign, color: "text-violet-600", bg: "bg-violet-50" },
    { title: "Active Moves", value: stats.active.toString(), change: "+2", icon: CalendarCheck, color: "text-amber-600", bg: "bg-amber-50" },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "New": return "bg-blue-50 text-blue-700 border-blue-200/60";
      case "Contacted": return "bg-amber-50 text-amber-700 border-amber-200/60";
      case "Converted": return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      default: return "bg-zinc-50 text-zinc-700 border-zinc-200/60";
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-950 tracking-tight">Dashboard</h1>
        <p className="text-zinc-500 mt-1 text-sm font-medium">Welcome back. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsDisplay.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-200/60">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center`}>
                <stat.icon size={20} className={stat.color} strokeWidth={2} />
              </div>
              <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-emerald-600">
                <ArrowUpRight size={14} />
                {stat.change}
              </span>
            </div>
            <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-1">{stat.title}</p>
            <p className="text-2xl font-bold text-zinc-950 tracking-tight">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white rounded-2xl border border-zinc-200/60 overflow-hidden">
        <div className="px-6 py-5 border-b border-zinc-100 flex justify-between items-center">
          <h2 className="text-base font-bold text-zinc-950 tracking-tight">Recent Quote Requests</h2>
          <button className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">ID</th>
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Customer</th>
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Route</th>
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {recentLeads.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center">
                    <p className="text-sm font-medium text-zinc-400">No leads yet. They will appear here when customers submit quote requests.</p>
                  </td>
                </tr>
              )}
              {recentLeads.map((lead, i) => (
                <tr key={i} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-zinc-950">{lead.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-700">{lead.name}</td>
                  <td className="px-6 py-4 text-sm text-zinc-500">{lead.route}</td>
                  <td className="px-6 py-4 text-sm text-zinc-500">{lead.date}</td>
                  <td className="px-6 py-4 text-sm font-medium text-zinc-950">{lead.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg border ${getStatusStyles(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
