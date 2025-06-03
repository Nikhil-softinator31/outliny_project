import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoMailOutline } from 'react-icons/io5'
import { PiFilePdf } from 'react-icons/pi'

const TemplateEditorPage = () => {
  const features = [
    { name: 'Drag-and-Drop Builder', emails: 'Yes', pdfs: 'Yes' },
    { name: 'Mobile-Responsive', emails: 'Yes', pdfs: 'No' },
    { name: 'Multi-Page Support', emails: 'No', pdfs: 'Yes' },
    { name: 'Dynamic Variables', emails: 'Yes', pdfs: 'Yes' },
    { name: 'Custom Modules', emails: 'Yes', pdfs: 'Yes' },
    { name: 'Version Control', emails: 'Coming Soon', pdfs: 'Coming Soon' },
    { name: 'Import/Export', emails: 'MJML', pdfs: 'JSON' },
  ]

  return (
    <div className=" max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-poppins">
        Template Editor
      </h1>

      <p className="mb-4 max-w-7xl mx-auto text-center text-sm sm:text-base font-inter ">
        Outliny&apos;s Template Editor gives you full creative control — design beautiful,
        brand-consistent Emails and PDFs with powerful drag-and-drop tools, dynamic data binding,
        and open standard exports. No more messy HTML, broken designs, or locked-in platforms.
      </p>

      {/* What You Can Create */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold text-white mt-20 mb-3">
          ✨ What You Can Create
        </h2>

        <div className="space-y-8 ml-2">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <IoMailOutline className="text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white">Emails</h3>
              <p className="text-sm sm:text-base">Responsive, mobile-ready, MJML-based designs.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <PiFilePdf className="text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white">PDFs</h3>
              <p className="text-sm sm:text-base">
                Multi-page documents, forms, invoices, certificates, barcodes, address labels, and
                more.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Easy Drag-and-Drop Design */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
          🎨 Easy Drag-and-Drop Design
        </h2>
        <p className="py-4 text-sm sm:text-base font-sans px-2">
          Our visual editors are built on top of industry-leading tools:
        </p>
        <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>Emails: Powered by the GrapeJS MJML email builder.</li>
          <li>
            PDFs: Powered by GrapeJS for multi-page design, or PDFme for fast single-page layouts.
          </li>
        </ul>
        <p className="py-2 italic text-sm sm:text-base font-inter px-2">
          You don&apos;t need to write a single line of HTML or CSS — just drag, drop, and style.
        </p>
      </div>

      {/* Dynamic Data with Jinja Variables */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
          🔥 Dynamic Data with Jinja Variables
        </h2>
        <p className="py-4 text-sm sm:text-base font-sans px-2">
          Easily insert dynamic fields into your templates using Jinja syntax:
        </p>
        <div className="bg-[#1a1a1a] p-4 rounded-md mb-4 overflow-x-auto ">
          <code className="text-sm sm:text-base font-mono">
            Hello {'{{ customer_name }}'}, your order {'{{ order_id }}'} is confirmed!
          </code>
        </div>
        <p className="py-2 italic text-sm sm:text-base font-inter px-2">
          When you generate the email or PDF, these variables are automatically replaced with real
          data.
        </p>
      </div>

      {/* Professional Template Gallery */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
          📚 Professional Template Gallery
        </h2>
        <p className="py-4 text-sm sm:text-base font-sans px-2">
          Get started faster with our curated library:
        </p>
        <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>
            Pre-built email templates for HRMS, CRM, client updates, internal notifications, and
            more.
          </li>
          <li>
            Pre-built PDF templates for invoices, HR letters, address labels, certificates, etc.
          </li>
        </ul>
        <p className="py-2 italic text-sm sm:text-base font-inter px-2">
          Customize them fully to match your brand identity.
        </p>
      </div>

      {/* Modular Design */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
          🧩 Modular Design
        </h2>
        <p className="py-4 text-sm sm:text-base font-sans px-2">
          Build custom modules — reusable blocks (like footers, headers, legal notices) that your
          team can easily drop into new templates without rebuilding them from scratch.
        </p>
        <p className="py-2 italic text-sm sm:text-base font-inter px-2">
          Perfect for maintaining branding and compliance across a growing organization.
        </p>
      </div>

      {/* Features Overview */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
          Features Overview
        </h2>
        <div className="overflow-x-auto  rounded-lg p-4">
          <table className="min-w-[500px] sm:min-w-full text-sm sm:text-base">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-white">Feature</th>
                <th className="text-left py-3 px-4 text-white">Emails</th>
                <th className="text-left py-3 px-4 text-white">PDFs</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className=' border-b-[1px] border-gray-700'
                >
                  <td className="py-3 px-4">{feature.name}</td>
                  <td className="py-3 px-4">{feature.emails}</td>
                  <td className="py-3 px-4">{feature.pdfs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Import and Export Templates */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
          📦 Import and Export Templates
        </h2>
        <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>Emails: Fully MJML compatible — import/export easily.</li>
          <li>PDFs: JSON format allows export and backup of your designs.</li>
        </ul>
        <p className="py-2 italic text-sm sm:text-base font-inter px-2">
          No vendor lock-in. You own your templates.
        </p>
      </div>

      {/* Built for Teams and Enterprises */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
          🎯 Built for Teams and Enterprises
        </h2>
        <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>Centralize all templates in one secure, organized place.</li>
          <li>Share templates across departments, apps, and brands.</li>
          <li>Control access and maintain version consistency.</li>
        </ul>
      </div>

      {/* Start Building Now */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
          🚀 Start Building Now!
        </h2>
        <div className="space-y-4 ml-4 sm:ml-6 md:ml-12">
          {[
            'Create Your First Email Template',
            'Design a Multi-Page PDF Template',
            'Explore Template Gallery',
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2 hover:opacity-90 cursor-pointer">
              <FaArrowRightLong />
              <span className="text-white underline">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Tips */}
      <div>
        <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white">
          🔥 Pro Tips
        </h2>
        <ul className="list-disc ml-7 md:ml-16 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>Use Jinja loops and conditionals for advanced dynamic content.</li>
          <li>Build your common elements (logos, footers) as modules for easy reuse.</li>
          <li>Save frequently — new autosave features coming soon!</li>
        </ul>
      </div>
    </div>
  )
}

export default TemplateEditorPage
