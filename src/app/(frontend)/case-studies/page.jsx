// pages/case-studies.tsx
import React from 'react'

const CaseStudiesPage = () => {
  
  return (
    <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-poppins">
        📚 Case Studies
      </h1>

      <p className="mb-4 max-w-5xl mx-auto text-center text-sm sm:text-base font-inter">
        See how businesses around the world are using Outliny to streamline communication, automate
        documents, and deliver beautiful, consistent branding — effortlessly.
      </p>

      {/* Case Study 1 */}
      <h2 className="text-2xl md:text-[30px] font-semibold text-white mt-20 mb-3">
        🏢 Case Study 1: Scaling Customer Communications for a Growing SaaS Company
      </h2>
      <div className="">
        <p className="mb-2 font-medium">Client: FastTrack CRM (B2B SaaS Platform)</p>
        <p className="mb-2">Challenge:</p>
        <p className="mb-2 max-w-7xl">
          FastTrack CRM needed a way to send branded onboarding emails, product updates, and billing
          invoices without engineering delays. Managing templates across marketing, sales, and
          billing teams was chaotic and time-consuming.
        </p>
      </div>
      <p className="mb-2">Solution:</p>
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>Used Outliny's email editor to create a centralized gallery of CRM emails.</li>
        <li>Integrated Outliny’s API into their app for dynamic onboarding sequences.</li>
        <li>Automated PDF invoice generation for every subscription renewal.</li>
      </ul>
      <p className="mb-2">Results:</p>
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>50% faster onboarding email setup.</li>
        <li>Fully automated billing documentation (no manual invoices).</li>
        <li>Consistent branding across all customer communications.</li>
      </ul>

      {/* Case Study 2 */}
      <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
        🛒 Case Study 2: Automating Invoices and Labels for an E-commerce Brand
      </h2>
      <p className="mb-2 font-medium">Client: TrendyGoods Online Store</p>
      <p className="mb-2">Challenge:</p>
      <p className="mb-2">
        TrendyGoods needed customized packing slips, shipping labels, and monthly customer invoices
        — all dynamically branded and integrated with WooCommerce.
      </p>
      <p className="mb-2">Solution:</p>
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>Installed Outliny's WordPress plugin for WooCommerce.</li>
        <li>Customized PDF templates for shipping and billing.</li>
        <li>Used parameters to automatically inject order IDs, barcodes, and customer info.</li>
      </ul>
      <p className="mb-2">Results:</p>
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>Saved 10+ hours per week in manual document generation.</li>
        <li>Achieved 100% brand consistency across packages and emails.</li>
        <li>Increased post-purchase customer satisfaction (fewer support tickets).</li>
      </ul>

      {/* Case Study 3 */}
      <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
        🧑‍💼 Case Study 3: Modernizing Internal HR Communications
      </h2>
      <p className="mb-2 font-medium">Client: GlobalConsult HR Solutions</p>
      <p className="mb-2">Challenge:</p>
      <p className="mb-2">
        The HR department needed to automate internal offer letters, employee onboarding packs, and
        policy updates without overwhelming their IT team.
      </p>
      <p className="mb-2">Solution:</p>
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>Created modular email templates for HR updates.</li>
        <li>Built dynamic multi-page PDFs for offer letters and contracts.</li>
        <li>Integrated Outliny with their internal HRMS via the API.</li>
      </ul>
      <p className="mb-2">Results:</p>
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>75% reduction in time spent preparing new hire paperwork.</li>
        <li>Seamless employee communication with customized templates.</li>
        <li>Enhanced HR branding and employee experience.</li>
      </ul>

      {/* Case Study 4 */}
      <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
        🌍 Case Study 4: Secure Document Delivery for a Fintech Startup
      </h2>
      <p className="mb-2 font-medium">Client: FinPro Lending</p>
      <p className="mb-2">Challenge:</p>
      <p className="mb-2">
        FinPro needed highly secure, compliant document generation for sensitive loan offers,
        approval notices, and customer correspondence.
      </p>
      <p className="mb-2">Solution:</p>
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>Leveraged Outliny's encrypted API for PDF generation.</li>
        <li>Turned off logs for full compliance with internal policies.</li>
        <li>Customized access control for templates and API keys.</li>
      </ul>
      <p className="mb-2">Results:</p>
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>Full compliance with internal and regulatory security policies.</li>
        <li>Automated personalized loan documents without manual work.</li>
        <li>99.9% uptime with secure document delivery to clients.</li>
      </ul>

      {/* Why Outliny */}
      <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
        🚀 Why Companies Choose Outliny
      </h2>
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>Fast integration and API-first approach.</li>
        <li>Total branding control across Emails and PDFs.</li>
        <li>Enterprise-grade security and compliance.</li>
        <li>No vendor lock-in — open standards and export options.</li>
      </ul>

      {/* CTA */}
      <h2 className="text-2xl font-bold mb-4 text-white">📈 Your Success Story Starts Here</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-white text-black px-6 py-3 font-semibold rounded-xl hover:bg-[#c5c4c4] transition-all duration-200">
          👉 Start Free with Outliny
        </button>
        <button className="border  px-6 py-3 font-semibold rounded-xl hover:bg-[#1a1a1a] transition-all duration-200">
          👉 Talk to Our Team About Your Needs
        </button>
      </div>
    </div>
  )
}

export default CaseStudiesPage
