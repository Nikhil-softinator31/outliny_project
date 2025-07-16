import React from 'react'
import { FaArrowRightLong, FaGithub } from 'react-icons/fa6'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { BsRocketTakeoff } from 'react-icons/bs'
import { TbBrain } from 'react-icons/tb'
import { BiMessageDetail } from 'react-icons/bi'
import { BsStars } from "react-icons/bs";

const RoadmapPage = () => {
  const completedFeatures = [
    'SOC 2 Type II Certification',
    'ISO 27001:2022 Certification',
    'WordPress Plugin (WooCommerce, CRM Email Support)',
    'Modular Template Components (Emails and PDFs)',
    'Multi-Page PDF Editor (Drag and Drop with GrapeJS)',
    'Base64 API Output Option (for Email/PDF Downloads)',
    'Public Professional Template Gallery',
    'Free Open Source Release on GitHub',
    'Pay-As-You-Go Billing System (No Monthly Fees)',
  ]

  const inProgressFeatures = [
    {
      title: 'Template Versioning',
      description: 'Easily roll back, fork, and manage historical versions of templates.',
    },
    {
      title: 'Granular Team Permissions',
      description: 'Assign read/edit/publish permissions per user, per template.',
    },
    {
      title: 'Regional Hosting (EU/US options)',
      description: 'Choose where your data is stored, for compliance and performance.',
    },
    {
      title: 'Audit Trails',
      description: 'Enterprise-grade visibility into template edits, API usage, and data access.',
    },
    {
      title: 'Template Scheduling',
      description: 'Schedule when emails or PDFs should be generated/sent automatically.',
    },
    {
      title: 'Enhanced PDF Engine',
      description: 'Support for background images, dynamic tables, QR code generation inside PDFs.',
    },
  ]

  const plannedFeatures = [
    {
      title: 'Salesforce and HubSpot Integrations',
      description: 'Direct CRM integration to pull/push data into templates.',
    },
    {
      title: 'Template Approval Workflow',
      description: 'Approvals and review flow before publishing templates in production.',
    },
    {
      title: 'Whitelabeling',
      description: 'Customize Outliny UI with your brand for internal users.',
    },
    {
      title: 'Advanced Webhooks',
      description: 'Trigger external systems based on rendering or sending events.',
    },
    {
      title: 'Single Sign-On (SSO)',
      description: 'Enterprise-grade SSO support for easier onboarding.',
    },
    {
      title: 'Live Preview API',
      description: 'Instant preview links for PDFs and Emails without final rendering.',
    },
    {
      title: 'Full API SDKs',
      description: 'Official libraries for Node.js, Python, and PHP.',
    },
  ]

  return (
    <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-poppins">
        Roadmap
      </h1>

      <p className="mb-4 max-w-5xl mx-auto text-center text-sm sm:text-base font-inter">
        At Outliny, we&apos;re committed to building the world&apos;s most flexible, secure, and
        developer-friendly platform for branded Emails and PDFs. Here&apos;s a look at what&apos;s
        coming next!
      </p>

      {/* Recently Completed */}
      <div>
        <h2 className="text-2xl md:text-[30px] font-semibold text-white mt-20 mb-6 flex items-center gap-3">
          <IoCheckmarkCircle  />
          Recently Completed
        </h2>
        <ul className="space-y-3 ml-2">
          {completedFeatures.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm sm:text-base">
              <span >✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* In Progress */}
      <div>
        <h2 className="text-2xl md:text-[30px] font-semibold text-white mt-16 mb-6 flex items-center gap-3">
          <BsRocketTakeoff  />
          In Progress
        </h2>
        <div className="space-y-6 ml-2">
          {inProgressFeatures.map((feature, index) => (
            <div key={index} className="space-y-1">
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-sm sm:text-base text-[#d6d5d5] ml-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Planned (Next) */}
      <div>
        <h2 className="text-2xl md:text-[30px] font-semibold text-white mt-16 mb-6 flex items-center gap-3">
          <TbBrain  />
          Planned (Next)
        </h2>
        <div className="space-y-6 ml-2">
          {plannedFeatures.map((feature, index) => (
            <div key={index} className="space-y-1">
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-sm sm:text-base text-[#d6d5d5] ml-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open to Feedback */}
      <div className="mt-16   rounded-lg">
        <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-6 flex items-center gap-3">
          <BiMessageDetail  />
          Open to Feedback!
        </h2>
        <p className="text-sm sm:text-base mb-6">
          We build Outliny with our users — not just for them.
        </p>
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <FaArrowRightLong />
            <span>Have a feature request?</span>
          </div>
          <div className="flex items-center gap-2">
            <FaArrowRightLong />
            <span>Found something we can improve?</span>
          </div>
          <div className="flex items-center gap-2">
            <FaArrowRightLong />
            <span>Want to prioritize a specific integration?</span>
          </div>
        </div>
        <a className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer">
          Submit Feedback or Feature Request
        </a>
        <p className="mt-4 text-sm sm:text-base italic">We prioritize what matters most to you.</p>
      </div>

      {/* Thank You Note */}
      <div className="mt-16 text-center">
        <h2 className="text-xl font-semibold flex gap-2 items-center justify-center text-white mb-4">
        <BsStars /> Thank you for being part of Outliny&apos;s journey!
        </h2>
        <p className="text-sm sm:text-base max-w-3xl mx-auto">
          Every feature, every improvement — it&apos;s all to make sure your branding and
          communication are seamless, beautiful, and secure.
        </p>
      </div>
    </div>
  )
}

export default RoadmapPage
