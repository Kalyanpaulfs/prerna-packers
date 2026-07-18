import { PageHeader } from "@/components/layout/PageHeader";
import { Link } from "@/i18n/routing";
import { Calendar, User, ArrowRight } from "lucide-react";
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
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "July 15, 2026",
    author: "Prerna Team",
    category: "Moving Tips"
  },
  {
    id: 2,
    title: "How to Pack Fragile Items: The Ultimate Guide",
    excerpt: "Learn the professional techniques for packing glassware, electronics, and valuable art pieces to ensure zero damage during transit.",
    image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "July 10, 2026",
    author: "Expert Packers",
    category: "Packing Guides"
  },
  {
    id: 3,
    title: "Why You Should Always Hire Professional Packers",
    excerpt: "While DIY moving might seem cheaper initially, the hidden costs and risks often make professional movers the smarter financial choice.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "July 05, 2026",
    author: "Industry Insights",
    category: "Cost Estimation"
  }
];

export default function BlogPage() {
  return (
    <>
      <PageHeader 
        title="Moving Tips & Insights" 
        subtitle="Expert advice, guides, and company news to help you move better."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />
      
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DUMMY_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-950 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-orange-500 transition-colors mt-auto"
                  >
                    Read Article
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
