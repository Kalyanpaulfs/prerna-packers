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

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Content Management</h1>
          <p className="text-slate-500 mt-1 text-sm">Manage your blog posts, services, and website content.</p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-colors shadow-lg shadow-blue-600/20">
          <Plus size={18} /> Add New {activeTab}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200">
        {["Blog", "Services", "Testimonials"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === tab 
                ? "border-blue-600 text-blue-600" 
                : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm border-b border-slate-100">
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Status</th>
                {activeTab === "Blog" && <th className="px-6 py-4 font-medium">Date</th>}
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {(activeTab === "Blog" ? blogPosts : services).map((item, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                        {activeTab === "Blog" ? <FileText size={20} /> : <ImageIcon size={20} />}
                      </div>
                      <span className="font-medium text-slate-800">{item.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      item.status === 'Published' || item.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  {activeTab === "Blog" && (
                    <td className="px-6 py-4 text-sm text-slate-600">{"date" in item ? item.date : ""}</td>
                  )}
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
        
        {activeTab === "Testimonials" && (
          <div className="p-12 text-center text-slate-500 flex flex-col items-center">
            <FileText size={48} className="text-slate-300 mb-4" />
            <p>No testimonials found. Add your first testimonial to showcase on the homepage.</p>
          </div>
        )}
      </div>
    </div>
  );
}
