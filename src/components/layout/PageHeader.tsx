import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href: string }[];
}

export function PageHeader({ title, subtitle, breadcrumbs = [] }: PageHeaderProps) {
  return (
    <div className="bg-zinc-50 pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-zinc-200/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <div className="max-w-3xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-8">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-zinc-900">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-zinc-900 transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-zinc-950">{title}</h1>
          {subtitle && (
            <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-2xl">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
