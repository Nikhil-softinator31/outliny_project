import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaRegHandshake } from "react-icons/fa6";
import { FaPuzzlePiece } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { BsGraphUp } from "react-icons/bs";
import { GiJusticeStar } from "react-icons/gi";
import { BiSolidHandRight } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";

const PartnersPage = () => {
  return (
    <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a] ">
      <h1 className=" flex items-center justify-center gap-3 text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-poppins ">
      <FaRegHandshake /> Partner with Us
      </h1>
      <p className="mb-4 max-w-7xl mx-auto text-center text-sm sm:text-base font-inter">
        Outliny is more than just a platform — it's a growing ecosystem of developers, agencies,
        technology providers, and innovators shaping the future of branded communication. We’re
        excited to collaborate with partners who share our vision of secure, flexible, and
        beautifully consistent branding.
      </p>

      {/* Why Partner */}

      <h2 className="text-2xl md:text-[30px] flex gap-3 font-semibold text-white mt-20 mb-4 ">
      <FaPuzzlePiece /> Why Partner with Outliny?
      </h2>
      <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2  text-sm sm:text-base font-roboto">
        <li>
          <strong className="text-white">World-Class Security and Compliance:</strong> ISO
          27001:2022 and SOC 2 Type II certified — trusted by enterprises around the world.
        </li>
        <li>
          <strong className="text-white">Open and Extensible Platform:</strong> MJML, Jinja, JSON
          APIs — no vendor lock-in, full freedom for your clients and teams.
        </li>
        <li>
          <strong className="text-white">Developer-First Approach:</strong> Powerful APIs, WordPress
          plugin, soon-to-launch SDKs.
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

      {/* Partnership Opportunities */}

      <h2 className="text-2xl md:text-[30px] flex gap-3 font-semibold text-white mt-10 mb-4 ">
      <FaRegHandshake /> Partnership Opportunities
      </h2>
      <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2  text-sm sm:text-base font-roboto">
        <li>
          <strong className="text-white"> Technology Partners:</strong> Integrate Outliny into
          CRMs, HRMS, SaaS apps for dynamic branded communication.
        </li>
        <li>
          <strong className="text-white"> Agencies and Resellers:</strong> Offer your clients
          centralized branding and automation.
        </li>
        <li>
          <strong className="text-white"> Solution Providers:</strong> Build custom modules and
          templates for verticals like healthcare, finance, or education.
        </li>
        <li>
          <strong className="text-white"> Integration Partners:</strong> Connect to platforms like
          Salesforce, Shopify, HubSpot, and more.
        </li>
        <li>
          <strong className="text-white"> Open Source Collaborators:</strong> Contribute to the
          open-source core, suggest features, build plugins.
        </li>
      </ul>

      {/* Ideal Partner Profiles */}

      <h2 className="text-2xl md:text-[30px] flex gap-3 font-semibold text-white mt-10 mb-4 ">
      <GoGoal />
      Ideal Partner Profiles
      </h2>
      <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2  text-sm sm:text-base font-roboto">
        <li>Digital agencies looking to streamline client branding</li>
        <li>SaaS platforms wanting to embed communication features</li>
        <li>Integration experts in CRM, ERP, or HRMS systems</li>
        <li>Managed service providers in marketing, HR, or finance</li>
        <li>Open-source developers passionate about email and PDF tech</li>
      </ul>

      {/* What You’ll Get */}

      <h2 className="text-2xl md:text-[30px] flex gap-3 font-semibold text-white mt-10 mb-4 ">
      <BsGraphUp /> What You’ll Get
      </h2>
      <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2  text-sm sm:text-base font-roboto">
        <li>Dedicated partner support</li>
        <li>Early access to features and APIs</li>
        <li>Co-marketing opportunities (blog posts, webinars, case studies)</li>
        <li>Custom pricing and volume discounts for your clients</li>
        <li>Influence over product roadmap and releases</li>
      </ul>

      {/* Call to Action */}

      <h2 className="text-2xl md:text-[30px] flex gap-3  font-semibold text-white mt-10 mb-4 ">
      <GiJusticeStar /> Ready to Partner with Outliny?
      </h2>

      <div className="flex flex-col">
        <div className="flex  gap-3 items-center mb-1 ml-10">
        <BiSolidHandRight />
          <a href="https://outliny.com/partners" className="underline text-white cursor-pointer">

            Apply to Become a Partner
          </a>
        </div>
        <div className="flex  gap-3 items-center mb-1 ml-10">
        <BiSolidHandRight />
          <a href="https://outliny.com/partners" className="underline text-white cursor-pointer">
          
            Contact Our Partnerships Team
          </a>
        </div>
      </div>

      {/* Contact Info */}

      <h2 className="text-2xl font-semibold mb-3  flex gap-3   text-white mt-10"><GiBrain/> Have Questions?</h2>
      <p className="mb-1 ml-10">Reach out directly:</p>
      <div className="flex gap-3 items-center mb-1 ml-10">
        <CiMail className="text-lg" />
        <span className="text-white font-medium">Email:</span> partners@outliny.com
      </div>
    </div>
  )
}

export default PartnersPage
