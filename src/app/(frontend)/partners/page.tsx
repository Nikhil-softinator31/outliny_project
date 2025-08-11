import React from 'react'
import Contact from '@/app/(frontend)/contact/page'
import {
  FaUser,
  FaEnvelope,
  FaDesktop,
  FaFileAlt,
  FaCreditCard,
  FaBullhorn,
  FaChartLine,
} from 'react-icons/fa'
const partnershipTracks = [
  {
    icon: <FaUser size={24} />,
    type: 'Technology Partners',
    benefits: ['Integrate Outliny into CRMs, HRMS, SaaS apps for dynamic branded communication.'],
  },
  {
    icon: <FaEnvelope size={24} />,
    type: 'Implementation Partners',
    benefits: ['Deliver turnkey deployments, custom modules, and training, backed by our expert support.'],
  },
  {
    icon: <FaDesktop size={24} />,
    type: 'Resellers & Referrers',
    benefits: ['Offer Outliny to your network; centralized branding and automation.'],
  },
  {
    icon: <FaFileAlt size={24} />,
    type: 'Agencies & Consultants',
    benefits: ['Bundle Outliny with your marketing, CRM, or digital transformation services.'],
  },
  {
    icon: <FaCreditCard size={24} />,
    type: 'Open Source Collaborators',
    benefits: ['Contribute to the open-source core, suggest features, build plugins.'],
  },
]

const partnerContent = [
 
  {
    title: 'Why Partner With Outliny?',
    content: (
      <ul className="list-disc ml-6 md:ml-11 space-y-4 text-sm sm:text-base font-roboto">
        <li>
          <b>Expand Your Portfolio</b>: Add a best-of-breed, enterprise-grade templating platform to your services—no heavy R&D required.
        </li>
        <li>
          <b>Shared Success</b>: Competitive revenue sharing, referral bonuses, and co-marketing opportunities to grow together.
        </li>
        <li>
          <b>Enterprise Trust</b>: Leverage our ISO 27001:2022 &amp; SOC 2 Type II certifications as a differentiator in your proposals.
        </li>
        <li>
          <b>Open &amp; Flexible</b>: MIT-licensed core, MJML import/export, and self-host options ensure zero lock-in for your clients.
        </li>
      </ul>
    ),
  },
  {
    title: 'Ideal Partner Profiles',
    content: (
      <ul className="list-disc ml-6 md:ml-11 space-y-4 text-sm sm:text-base font-roboto">
        <li>Digital agencies looking to streamline client branding</li>
        <li>SaaS platforms wanting to embed communication features</li>
        <li>Integration experts in CRM, ERP, or HRMS systems</li>
        <li>Managed service providers in marketing, HR, or finance</li>
        <li>Open-source developers passionate about email and PDF tech</li>
      </ul>
    ),
  },
  {
    title: 'What You’ll Get',
    content: (
      <ul className="list-disc ml-6 md:ml-11 space-y-4 text-sm sm:text-base font-roboto">
        <li>Dedicated partner support</li>
        <li>Early access to features and APIs</li>
        <li>Co-marketing opportunities (blog posts, webinars, case studies)</li>
        <li>Custom pricing and volume discounts for your clients</li>
        <li>Influence over product roadmap and releases</li>
      </ul>
    ),
  },
  {
    title: 'Partnership Tracks',
    content: (
      <div className="">
       
        
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:ml-6">
          {partnershipTracks.map((section, index) => {
            const isLast = index === partnershipTracks.length - 1
            const isIncompleteRow = partnershipTracks.length % 3 !== 0 && isLast

            return (
              <div
                key={index}
                className={`bg-[#08090a] border border-gray-700 rounded-xl p-8 ${
                  isIncompleteRow
                    ? 'lg:col-span-3 flex flex-col  justify-self-center lg:w-[33%]'
                    : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {section.icon}
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{section.type}</h3>
                </div>
                <ul className="text-sm sm:text-base text-[#dddddd] space-y-2">
                  {section.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div> */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:ml-6">
          {partnershipTracks.map((section, index) => {
            const isLast = index === partnershipTracks.length - 1
            const isIncompleteRow = partnershipTracks.length % 3 !== 0 && isLast

            return (
              <div
                key={index}
                className={`bg-[#08090a] border border-gray-700 rounded-xl p-8 `}
              >
                <div className="flex items-center gap-3 mb-3">
                  {section.icon}
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{section.type}</h3>
                </div>
                <ul className="text-sm sm:text-base text-[#dddddd] space-y-2">
                  {section.benefits.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    ),
  },
 
]

export default function PartnerPage() {
  return (
    <div className="mt-20">
      {partnerContent.map((section, idx) => (
        <section
          key={idx}
          id={`section-${idx + 1}`}
          className="space-y-8 scroll-mt-24 text-[#FFFFFFBF]"
        >
          <h2 className="text-xl font-semibold text-white mb-2 mt-10 ml-6">
            {idx + 1}. {section.title}
          </h2>
          {section.content}
        </section>
      
       
      ))}
      <section className="mt-16 scroll-mt-24 text-white">
        <h2 className="text-2xl font-bold mb-4 ml-6"></h2>
        <div className="ml-6 mr-6">
          <Contact />
        </div>
      </section>
    </div>
  )
}
