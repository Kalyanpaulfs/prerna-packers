import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Prerna Packers and Movers",
  description: "Read our terms of service and service agreements for using our relocation and transport services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-zinc-50 min-h-screen pt-[140px] pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-200">
          <h1 className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tight mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-zinc max-w-none">
            <p className="text-lg text-zinc-600 font-medium mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-zinc-600 leading-relaxed">
                By accessing or using the services provided by Prerna Packers and Movers ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website or use any of our relocation services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Description of Service</h2>
              <p className="text-zinc-600 leading-relaxed">
                Prerna Packers and Movers provides professional packing, moving, transportation, and warehousing services. The specific details, timelines, and costs of the service will be agreed upon in writing via an official quote or contract prior to the commencement of any work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Estimates and Quotes</h2>
              <p className="text-zinc-600 leading-relaxed">
                Any estimates or quotes provided via our website calculator are preliminary and subject to change based on a physical or virtual survey of the goods to be moved. A binding contract is only formed once a final, formal quotation is accepted and signed by both parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Liability and Insurance</h2>
              <p className="text-zinc-600 leading-relaxed">
                While we take the utmost care with your belongings, transit carries inherent risks. We strongly recommend opting for our comprehensive transit insurance. Our liability for damaged or lost items is strictly limited to the terms outlined in the specific insurance policy purchased. Without insurance, our liability is restricted as per standard industry carrier laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Prohibited Items</h2>
              <p className="text-zinc-600 leading-relaxed">
                Customers agree not to hand over any hazardous, illegal, highly flammable, explosive, or perishable materials for transport. We also recommend that customers carry all high-value items (such as jewelry, cash, and critical documents) personally. We accept no liability for the loss of such items if packed into the transport vehicle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Governing Law</h2>
              <p className="text-zinc-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Bihar, India.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
