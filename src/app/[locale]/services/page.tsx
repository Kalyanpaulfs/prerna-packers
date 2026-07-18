"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { ServicesSection } from "@/components/home/ServicesSection";

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="End-to-end relocation solutions engineered for precision, safety, and peace of mind."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />
      <div className="bg-white">
        <ServicesSection />
      </div>
    </>
  );
}
