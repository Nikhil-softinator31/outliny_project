import React from 'react'
import { FaHandshake, FaCogs, FaGlobe, FaPuzzlePiece, FaRegLightbulb } from 'react-icons/fa'
import { MdVerifiedUser, MdAttachMoney, MdOpenInBrowser } from 'react-icons/md'
import { CiMail } from 'react-icons/ci'

const PartnersPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-20 text-[#d6d5d5] font-poppins">
      <h1 className="text-4xl font-bold mb-6 mt-20 text-white">🤝 Partner with Us</h1>
      <p className="mb-8 text-lg">
        Outliny is more than just a platform — it's a growing ecosystem of developers, agencies,
        technology providers, and innovators shaping the future of branded communication. We’re
        excited to collaborate with partners who share our vision of secure, flexible, and
        beautifully consistent branding.
      </p>

      {/* Why Partner */}
      <section className="mb-12">
        <div className="flex items-center gap-2 text-xl font-semibold mb-4 text-white">
          <MdVerifiedUser className="text-green-500" />
          Why Partner with Outliny?
        </div>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>
            <strong className="text-white">World-Class Security and Compliance:</strong> ISO
            27001:2022 and SOC 2 Type II certified — trusted by enterprises around the world.
          </li>
          <li>
            <strong className="text-white">Open and Extensible Platform:</strong> MJML, Jinja, JSON
            APIs — no vendor lock-in, full freedom for your clients and teams.
          </li>
          <li>
            <strong className="text-white">Developer-First Approach:</strong> Powerful APIs,
            WordPress plugin, soon-to-launch SDKs.
          </li>
          <li>
            <strong className="text-white">Attractive Revenue Opportunities:</strong> Earn
            commissions, expand services, or build new offerings using Outliny.
          </li>
          <li>
            <strong className="text-white">Collaborative Product Growth:</strong> Influence our
            roadmap with real-world use cases.
          </li>
        </ul>
      </section>

      {/* Partnership Opportunities */}
      <section className="mb-12">
        <div className="flex items-center gap-2 text-xl font-semibold mb-4 text-white">
          <FaPuzzlePiece className="text-yellow-300" />
          Partnership Opportunities
        </div>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>
            <strong className="text-white">🔥 Technology Partners:</strong> Integrate Outliny into
            CRMs, HRMS, SaaS apps for dynamic branded communication.
          </li>
          <li>
            <strong className="text-white">🧠 Agencies and Resellers:</strong> Offer your clients
            centralized branding and automation.
          </li>
          <li>
            <strong className="text-white">💡 Solution Providers:</strong> Build custom modules and
            templates for verticals like healthcare, finance, or education.
          </li>
          <li>
            <strong className="text-white">🌎 Integration Partners:</strong> Connect to platforms
            like Salesforce, Shopify, HubSpot, and more.
          </li>
          <li>
            <strong className="text-white">🛠️ Open Source Collaborators:</strong> Contribute to the
            open-source core, suggest features, build plugins.
          </li>
        </ul>
      </section>

      {/* Ideal Partner Profiles */}
      <section className="mb-12">
        <div className="flex items-center gap-2 text-xl font-semibold mb-4 text-white">
          <FaRegLightbulb className="text-indigo-300" />
          Ideal Partner Profiles
        </div>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Digital agencies looking to streamline client branding</li>
          <li>SaaS platforms wanting to embed communication features</li>
          <li>Integration experts in CRM, ERP, or HRMS systems</li>
          <li>Managed service providers in marketing, HR, or finance</li>
          <li>Open-source developers passionate about email and PDF tech</li>
        </ul>
      </section>

      {/* What You’ll Get */}
      <section className="mb-12">
        <div className="flex items-center gap-2 text-xl font-semibold mb-4 text-white">
          <MdAttachMoney className="text-orange-300" />
          What You’ll Get
        </div>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Dedicated partner support</li>
          <li>Early access to features and APIs</li>
          <li>Co-marketing opportunities (blog posts, webinars, case studies)</li>
          <li>Custom pricing and volume discounts for your clients</li>
          <li>Influence over product roadmap and releases</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="mb-12">
        <div className="flex items-center gap-2 text-xl font-semibold mb-4 text-white">
          <FaHandshake className="text-pink-400" />
          Ready to Partner with Outliny?
        </div>
        <ul className="list-inside ml-4 space-y-2">
          <li>
            👉{' '}
            <span className="underline text-white cursor-pointer">Apply to Become a Partner</span>
          </li>
          <li>
            👉{' '}
            <span className="underline text-white cursor-pointer">
              Contact Our Partnerships Team
            </span>
          </li>
        </ul>
      </section>

      {/* Contact Info */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-white">💬 Have Questions?</h2>
        <p className="mb-2">Reach out directly:</p>
        <div className="flex gap-3 items-center mb-1">
          <CiMail className="text-lg" />
          <span className="text-white font-medium">Email:</span> partners@outliny.com
        </div>
      </section>
    </div>
  )
}

export default PartnersPage
