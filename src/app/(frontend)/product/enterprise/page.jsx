import React from 'react'

const EnterpriseFeaturesPage = () => {
  return (
    <section className="mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Enterprise Features</h1>
      <p className="text-base sm:text-lg text-gray-400 mb-6">
        Outliny is built for enterprises that demand security, scalability, and seamless brand
        consistency — across all emails and PDFs. Whether you're a fast-growing startup or a global
        enterprise, Outliny provides the infrastructure, compliance, and flexibility you need to
        operate at scale.
      </p>

      <Section
        title="🔒 Enterprise-Grade Security"
        items={[
          'ISO 27001:2022 Certified — World-class information security management.',
          'SOC 2 Type II Compliant — Independently audited data security and operational excellence.',
          'End-to-End Encryption — All data at rest and in transit is always encrypted.',
          'Zero-Log by Default — We do not store any content unless you choose to enable logging.',
          'Employee Data Isolation — Outliny employees cannot view your templates or payloads.',
        ]}
      />

      <Section
        title="🌎 Global Scalability"
        items={[
          'High-Availability Cloud Infrastructure — Always-on systems designed for reliability.',
          'Auto-Scaling — Seamlessly handle traffic spikes across APIs.',
          'Fast PDF and Email Generation — 1–3 seconds average rendering times globally.',
          'Regional Hosting Options — Choose your data residency for compliance needs (Coming Soon).',
        ]}
      />

      <Section
        title="🔥 Centralized Template Management"
        items={[
          'Enterprise Template Libraries — Centralize your PDFs and Emails across teams, brands, and departments.',
          'Granular Access Control — Coming soon: Define who can edit, publish, or view templates.',
          'Version History — Safely update templates while maintaining full version control (Coming Soon).',
        ]}
      />

      <Section
        title="🛡️ Compliance and Privacy by Design"
        items={[
          'Fully GDPR Ready — Outliny follows the highest standards for data privacy.',
          'Customizable Data Retention — Control how long generated assets are stored, or disable storage entirely.',
          'Audit Trails (Coming Soon) — Track changes across templates and settings for enterprise transparency.',
        ]}
      />

      <Section
        title="🛠️ Developer Flexibility"
        items={[
          'Open Standards — MJML for Emails, JSON APIs, Jinja templating — no vendor lock-in.',
          'Custom Modules — Build and share reusable components across your organization.',
          'Extensible Platform — Host your own instance of Outliny if you need 100% control.',
        ]}
      />

      <Section
        title="🧩 Integrations"
        items={[
          'WordPress Plugin — Power your WooCommerce, CRM, and HRMS emails using Outliny templates.',
          'CRM and ERP Integrations — Coming soon: Direct integrations with Salesforce, HubSpot, and more.',
          'Custom Webhooks — Trigger events across your internal systems easily.',
        ]}
      />

      <Section
        title="💳 Flexible Billing for Enterprises"
        items={[
          'Pay-As-You-Go Credits — No monthly minimums. Scale at your own pace.',
          'Volume Discounts — Special rates for high-volume users.',
          'Custom Contracts and Invoicing — Work directly with our enterprise sales team for tailored agreements.',
        ]}
      />

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">🚀 Why Enterprises Choose Outliny</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm sm:text-base">
          <li>✅ Branding consistency across millions of emails and PDFs.</li>
          <li>✅ Bank-level security standards.</li>
          <li>✅ No vendor lock-in — you own your templates.</li>
          <li>✅ Rapid API integration and world-class uptime.</li>
          <li>✅ Open-source freedom and collaboration.</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a
          href="/contact-sales"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition text-center"
        >
          👉 Talk to Our Team
        </a>
        <a
          href="/security"
          className="bg-gray-100 text-gray-700 px-6 py-3 rounded shadow hover:bg-gray-200 transition text-center"
        >
          👉 View Security and Compliance
        </a>
        <a
          href="/signup"
          className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-900 transition text-center"
        >
          👉 Sign Up and Start Free
        </a>
      </div>
    </section>
  )
}

const Section = ({ title, items }) => (
  <div className="mt-10">
    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm sm:text-base">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
)

export default EnterpriseFeaturesPage
