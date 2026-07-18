import { PageHeader } from "@/components/layout/PageHeader";
import { Link } from "@/i18n/routing";
import { Calendar, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Moving Tips | Prerna Packers and Movers",
  description: "Read our latest articles, guides, and tips on packing, moving, and settling into your new home.",
};

const DUMMY_POSTS = [
  {
    id: 1,
    title: "10 Essential Tips for a Stress-Free Home Relocation",
    excerpt: "Moving doesn't have to be overwhelming. Follow these 10 expert tips to ensure your next house move is completely stress-free and organized.",
    date: "July 15, 2026",
    category: "Moving Tips",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "How to Pack Fragile Items: The Ultimate Guide",
    excerpt: "Learn the professional techniques for packing glassware, electronics, and valuable art pieces to ensure zero damage during transit.",
    date: "July 10, 2026",
    category: "Packing Guides",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Why You Should Always Hire Professional Packers",
    excerpt: "While DIY moving might seem cheaper initially, the hidden costs and risks often make professional movers the smarter financial choice.",
    date: "July 05, 2026",
    category: "Cost Estimation",
    readTime: "4 min read"
  }
];

export default function BlogPage() {
  return (
    <>
      <PageHeader 
        title="Insights & Guides" 
        subtitle="Expert advice and company news to help you move better."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DUMMY_POSTS.map((post) => (
              <article key={post.id} className="group flex flex-col bg-white rounded-2xl border border-zinc-200/60 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-100/50 transition-all duration-300 overflow-hidden">
                
                {/* Category header bar */}
                <div className="px-8 pt-8 pb-0">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/60">
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-zinc-950 mb-4 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-zinc-500 mb-8 leading-relaxed text-sm font-medium flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                    <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                      <span className="text-zinc-300">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.id}`} 
                      className="inline-flex items-center gap-1 text-sm text-zinc-950 font-semibold group-hover:text-blue-600 transition-colors"
                    >
                      Read
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
