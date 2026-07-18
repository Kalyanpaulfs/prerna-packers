import { QuoteCalculator } from "@/components/quote/QuoteCalculator";
import { PageHeader } from "@/components/layout/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Instant Quote | Prerna Packers and Movers",
  description: "Calculate your estimated moving costs instantly with our smart quote calculator.",
};

export default function QuotePage() {
  return (
    <>
      <PageHeader 
        title="Get Your Instant Estimate" 
        subtitle="Fill in the details below to receive a customized preliminary quote for your move."
        breadcrumbs={[{ label: "Get Quote", href: "/quote" }]}
      />
      
      <section className="py-20 bg-slate-50 relative">
        <div className="absolute inset-0 bg-blue-950 h-32" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <QuoteCalculator />
        </div>
      </section>
    </>
  );
}
