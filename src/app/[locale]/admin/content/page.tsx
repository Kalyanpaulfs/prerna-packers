"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, FileText, Image as ImageIcon } from "lucide-react";

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState("Blog");

  const blogPosts = [
    { id: 1, title: "10 Essential Tips for a Stress-Free Home Relocation", status: "Published", date: "July 15, 2026" },
    { id: 2, title: "How to Pack Fragile Items: The Ultimate Guide", status: "Draft", date: "July 10, 2026" },
    { id: 3, title: "Why You Should Always Hire Professional Packers", status: "Published", date: "July 05, 2026" },
  ];

  const services = [
    { id: 1, title: "Home Relocation", status: "Active" },
    { id: 2, title: "Office Relocation", status: "Active" },
    { id: 3, title: "Vehicle Transport", status: "Active" },
    { id: 4, title: "Packing & Unpacking", status: "Active" },
  ];

  const tabs = ["Blog", "Services", "Testimonials"];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Published":
      case "Active": return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      case "Draft": return "bg-zinc-50 text-zinc-600 border-zinc-200/60";
      default: return "bg-zinc-50 text-zinc-600 border-zinc-200/60";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-950 tracking-tight">Content</h1>
          <p className="text-zinc-500 mt-1 text-sm font-medium">Manage your blog posts, services, and website content.</p>
        </div>
        
        <button className="flex items-center gap-2 px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-sm font-semibold transition-colors">
          <Plus size={16} /> Add {activeTab === "Blog" ? "Post" : activeTab === "Services" ? "Service" : "Testimonial"}
        </button>
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

      {/* Content Table */}
      <div className="bg-white rounded-2xl border border-zinc-200/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Title</th>
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Status</th>
                {activeTab === "Blog" && <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Date</th>}
                <th className="px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {(activeTab === "Blog" ? blogPosts : activeTab === "Services" ? services : []).map((item, i) => (
                <tr key={i} className="hover:bg-zinc-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-400 shrink-0">
                        {activeTab === "Blog" ? <FileText size={16} /> : <ImageIcon size={16} />}
                      </div>
                      <span className="font-medium text-sm text-zinc-950">{item.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg border ${getStatusStyles(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  {activeTab === "Blog" && (
                    <td className="px-6 py-4 text-sm text-zinc-500 font-medium">{"date" in item ? item.date : ""}</td>
                  )}
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
        
        {activeTab === "Testimonials" && (
          <div className="px-6 py-20 text-center">
            <div className="text-zinc-300 mb-3">
              <FileText size={40} className="mx-auto" strokeWidth={1.5} />
            </div>
            <p className="text-sm font-semibold text-zinc-400">No testimonials yet</p>
            <p className="text-xs text-zinc-400 mt-1">Add your first testimonial to showcase on the homepage.</p>
          </div>
        )}
      </div>
    </div>
  );
}
