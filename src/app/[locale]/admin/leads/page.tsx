"use client";

import { useState, useEffect } from "react";
import { Search, Filter, Edit, Trash2 } from "lucide-react";
import { getLeads, updateLeadStatus } from "@/app/actions/leads";

export default function LeadsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      const data = await getLeads();
      setLeads(data);
      setIsLoading(false);
    };
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
    await updateLeadStatus(id, newStatus);
  };

  const filteredLeads = activeTab === "All" ? leads : leads.filter(l => l.status === activeTab);
  const tabs = ["All", "New", "Contacted", "Converted", "Lost"];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "New": return "bg-blue-50 text-blue-700 border-blue-200/60";
      case "Contacted": return "bg-amber-50 text-amber-700 border-amber-200/60";
      case "Converted": return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      case "Lost": return "bg-red-50 text-red-700 border-red-200/60";
      default: return "bg-zinc-50 text-zinc-700 border-zinc-200/60";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-950 tracking-tight">Leads & Quotes</h1>
          <p className="text-zinc-500 mt-1 text-sm font-medium">Manage all customer inquiries and generated quotes.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none text-sm font-medium"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
            <Filter size={14} /> Filter
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-zinc-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors relative ${
              activeTab === tab 
                ? "text-zinc-950" 
                : "text-zinc-400 hover:text-zinc-700"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-950 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-zinc-200/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">ID</th>
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Customer</th>
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Route & Property</th>
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Moving Date</th>
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Est. Value</th>
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-20 text-center">
                    <div className="text-zinc-300 mb-3">
                      <Search size={40} className="mx-auto" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm font-semibold text-zinc-400">
                      {isLoading ? "Loading leads..." : "No leads found"}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">
                      {isLoading ? "" : "Leads will appear here when customers request quotes."}
                    </p>
                  </td>
                </tr>
              )}
              {filteredLeads.map((lead, i) => (
                <tr key={i} className="hover:bg-zinc-50/50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-medium text-zinc-950">{lead.id}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-zinc-950">{lead.name}</div>
                    <div className="text-xs text-zinc-400 font-medium mt-0.5">{lead.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-zinc-700">{lead.route}</div>
                    <div className="text-xs text-zinc-400 font-medium mt-0.5">{lead.property}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-500 font-medium">{lead.date}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-zinc-950">{lead.amount}</td>
                  <td className="px-6 py-4">
                    <select 
                      className={`text-[10px] font-bold uppercase tracking-widest rounded-lg px-2.5 py-1.5 outline-none appearance-none cursor-pointer border ${getStatusStyles(lead.status)}`}
                      value={lead.status}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Converted">Converted</option>
                      <option value="Lost">Lost</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors">
                        <Edit size={14} />
                      </button>
                      <button className="p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
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
