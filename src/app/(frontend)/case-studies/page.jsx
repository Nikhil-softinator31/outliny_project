// pages/case-studies.tsx
import React from 'react'

const CaseStudiesPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 py-20 text-[#d6d5d5] font-poppins ">
      <h1 className="text-4xl font-bold mt-10 mb-5 text-white">📚 Case Studies</h1>
      <p className="text-lg mb-10">
        See how businesses around the world are using Outliny to streamline communication, automate
        documents, and deliver beautiful, consistent branding — effortlessly.
      </p>

      {/* Case Study 1 */}
      <section className="mb-16">
        <h2 className=" text-2xl font-semibold mb-2 text-white">
          🏢 Case Study 1: Scaling Customer Communications for a Growing SaaS Company
        </h2>
        <p className="mb-2 font-medium">Client: FastTrack CRM (B2B SaaS Platform)</p>
        <p className="mb-2">Challenge:</p>
        <p className="mb-2">
          FastTrack CRM needed a way to send branded onboarding emails, product updates, and billing
          invoices without engineering delays. Managing templates across marketing, sales, and
          billing teams was chaotic and time-consuming.
        </p>
        <p className="mb-2">Solution:</p>
        <ul className="list-disc ml-6 mb-2">
          <li>Used Outliny's email editor to create a centralized gallery of CRM emails.</li>
          <li>Integrated Outliny’s API into their app for dynamic onboarding sequences.</li>
          <li>Automated PDF invoice generation for every subscription renewal.</li>
        </ul>
        <p>Results:</p>
        <ul className="list-disc ml-6">
          <li>✅ 50% faster onboarding email setup.</li>
          <li>✅ Fully automated billing documentation (no manual invoices).</li>
          <li>✅ Consistent branding across all customer communications.</li>
        </ul>
      </section>

      {/* Case Study 2 */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          🛒 Case Study 2: Automating Invoices and Labels for an E-commerce Brand
        </h2>
        <p className="mb-2 font-medium">Client: TrendyGoods Online Store</p>
        <p className="mb-2">Challenge:</p>
        <p className="mb-2">
          TrendyGoods needed customized packing slips, shipping labels, and monthly customer
          invoices — all dynamically branded and integrated with WooCommerce.
        </p>
        <p className="mb-2">Solution:</p>
        <ul className="list-disc ml-6 mb-2">
          <li>Installed Outliny's WordPress plugin for WooCommerce.</li>
          <li>Customized PDF templates for shipping and billing.</li>
          <li>Used parameters to automatically inject order IDs, barcodes, and customer info.</li>
        </ul>
        <p>Results:</p>
        <ul className="list-disc ml-6">
          <li>✅ Saved 10+ hours per week in manual document generation.</li>
          <li>✅ Achieved 100% brand consistency across packages and emails.</li>
          <li>✅ Increased post-purchase customer satisfaction (fewer support tickets).</li>
        </ul>
      </section>

      {/* Case Study 3 */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          🧑‍💼 Case Study 3: Modernizing Internal HR Communications
        </h2>
        <p className="mb-2 font-medium">Client: GlobalConsult HR Solutions</p>
        <p className="mb-2">Challenge:</p>
        <p className="mb-2">
          The HR department needed to automate internal offer letters, employee onboarding packs,
          and policy updates without overwhelming their IT team.
        </p>
        <p className="mb-2">Solution:</p>
        <ul className="list-disc ml-6 mb-2">
          <li>Created modular email templates for HR updates.</li>
          <li>Built dynamic multi-page PDFs for offer letters and contracts.</li>
          <li>Integrated Outliny with their internal HRMS via the API.</li>
        </ul>
        <p>Results:</p>
        <ul className="list-disc ml-6">
          <li>✅ 75% reduction in time spent preparing new hire paperwork.</li>
          <li>✅ Seamless employee communication with customized templates.</li>
          <li>✅ Enhanced HR branding and employee experience.</li>
        </ul>
      </section>

      {/* Case Study 4 */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          🌍 Case Study 4: Secure Document Delivery for a Fintech Startup
        </h2>
        <p className="mb-2 font-medium">Client: FinPro Lending</p>
        <p className="mb-2">Challenge:</p>
        <p className="mb-2">
          FinPro needed highly secure, compliant document generation for sensitive loan offers,
          approval notices, and customer correspondence.
        </p>
        <p className="mb-2">Solution:</p>
        <ul className="list-disc ml-6 mb-2">
          <li>Leveraged Outliny's encrypted API for PDF generation.</li>
          <li>Turned off logs for full compliance with internal policies.</li>
          <li>Customized access control for templates and API keys.</li>
        </ul>
        <p>Results:</p>
        <ul className="list-disc ml-6">
          <li>✅ Full compliance with internal and regulatory security policies.</li>
          <li>✅ Automated personalized loan documents without manual work.</li>
          <li>✅ 99.9% uptime with secure document delivery to clients.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-white">🚀 Why Companies Choose Outliny</h2>
        <ul className="list-disc ml-6 mb-10">
          <li>✅ Fast integration and API-first approach.</li>
          <li>✅ Total branding control across Emails and PDFs.</li>
          <li>✅ Enterprise-grade security and compliance.</li>
          <li>✅ No vendor lock-in — open standards and export options.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-white">📈 Your Success Story Starts Here</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-black px-6 py-3 font-semibold rounded-xl">
            👉 Start Free with Outliny
          </button>
          <button className="border border-white px-6 py-3 font-semibold rounded-xl">
            👉 Talk to Our Team About Your Needs
          </button>
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage
