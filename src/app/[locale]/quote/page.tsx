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
        title="Get Your Estimate" 
        subtitle="Fill in the details below to receive a customized preliminary quote for your move."
        breadcrumbs={[{ label: "Get Quote", href: "/quote" }]}
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <QuoteCalculator />
        </div>
      </section>
    </>
  );
}
