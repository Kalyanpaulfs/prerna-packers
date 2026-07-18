"use client";

import { useState, useEffect } from "react";
import { Search, Filter, MoreVertical, Edit, Trash2 } from "lucide-react";
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

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Leads & Quotes CRM</h1>
          <p className="text-slate-500 mt-1 text-sm">Manage all customer inquiries and generated quotes.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {["All", "New", "Contacted", "Converted", "Lost"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab 
                ? "bg-blue-950 text-white" 
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-100">
                <th className="px-6 py-4 font-medium">Lead ID</th>
                <th className="px-6 py-4 font-medium">Customer Info</th>
                <th className="px-6 py-4 font-medium">Route & Property</th>
                <th className="px-6 py-4 font-medium">Moving Date</th>
                <th className="px-6 py-4 font-medium">Est. Value</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLeads.map((lead, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-bold text-blue-600">{lead.id}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-slate-800">{lead.name}</div>
                    <div className="text-xs text-slate-500">{lead.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-slate-800">{lead.route}</div>
                    <div className="text-xs text-slate-500">{lead.property}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{lead.date}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">{lead.amount}</td>
                  <td className="px-6 py-4">
                    <select 
                      className={`text-xs font-semibold rounded-full px-3 py-1 outline-none appearance-none cursor-pointer border-r-8 border-transparent ${
                        lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                        lead.status === 'Contacted' ? 'bg-orange-100 text-orange-700' :
                        lead.status === 'Converted' ? 'bg-green-100 text-green-700' :
                        'bg-red-100 text-red-700'
                      }`}
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
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 size={16} />
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
