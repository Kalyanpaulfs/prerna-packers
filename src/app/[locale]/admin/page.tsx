"use client";

import { useState, useEffect } from "react";
import { Users, TrendingUp, DollarSign, CalendarCheck } from "lucide-react";
import { getLeads } from "@/app/actions/leads";

export default function AdminDashboardPage() {
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [stats, setStats] = useState({ total: 0, converted: 0, revenue: 0, active: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLeads();
      setRecentLeads(data.slice(0, 5)); // Show only 5 recent
      
      const total = data.length;
      const converted = data.filter(l => l.status === "Converted").length;
      const active = data.filter(l => l.status === "New" || l.status === "Contacted").length;
      
      setStats({
        total,
        converted,
        revenue: converted * 15000, // Dummy average
        active
      });
    };
    fetchData();
  }, []);

  const statsDisplay = [
    { title: "Total Leads", value: stats.total.toString(), increase: "+12%", icon: <Users className="text-blue-500" size={24} /> },
    { title: "Converted Quotes", value: stats.converted.toString(), increase: "+8%", icon: <TrendingUp className="text-orange-500" size={24} /> },
    { title: "Revenue (Est)", value: `₹${(stats.revenue / 100000).toFixed(1)}L`, increase: "+24%", icon: <DollarSign className="text-green-500" size={24} /> },
    { title: "Active Moves", value: stats.active.toString(), increase: "+2", icon: <CalendarCheck className="text-purple-500" size={24} /> },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsDisplay.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-50 rounded-xl">
                {stat.icon}
              </div>
              <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                {stat.increase}
              </span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium">{stat.title}</h3>
            <div className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-800">Recent Quote Requests</h2>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="px-6 py-4 font-medium">Lead ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Route</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Est. Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentLeads.map((lead, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{lead.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{lead.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{lead.route}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{lead.date}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{lead.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                      lead.status === 'Contacted' ? 'bg-orange-100 text-orange-700' :
                      'bg-green-100 text-green-700'
                    }`}>
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
