import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href: string }[];
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-blue-950 pt-32 pb-16 lg:pt-40 lg:pb-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-white font-medium">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
          {subtitle && (
            <p className="text-lg text-blue-200">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
