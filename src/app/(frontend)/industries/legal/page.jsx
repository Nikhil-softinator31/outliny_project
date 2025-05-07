// pages/legal.js

import React from 'react'

const LegalPage = () => {
  return (
    <div className="bg-[#08090a] mt-24 max-w-7xl mx-auto text-white p-4">
      <section className="hero mb-12">
        <h1 className="text-3xl font-bold text-left text-white mb-4">⚖️ Outliny for Legal Teams</h1>
        <p className="text-lg text-left text-[#c0bfbf] mb-6">
          Automate legal document workflows with secure, branded emails and PDFs.
        </p>
        <p className="text-base text-left text-[#c0bfbf] max-w-3xl ">
          Outliny helps law firms and legal teams manage and deliver client-facing communications
          with speed, accuracy, and compliance—without sacrificing branding or control.
        </p>
      </section>

      <section className="trust mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Why Legal Professionals Trust Outliny
        </h2>
        <p className="text-base text-[#c0bfbf] mb-4">
          In the legal world, clarity and professionalism are non-negotiable. Outliny ensures your
          firm delivers consistent, secure, and compliant documents—while reducing manual overhead.
        </p>
        <p className="text-base text-[#c0bfbf]">
          Whether you're sending client updates, retainer agreements, or internal HR documents,
          Outliny helps you standardize your communications at scale.
        </p>
      </section>

      <section className="features mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">
          📧 Professional Email Templates, Done Right
        </h2>
        <p className="text-base text-[#c0bfbf] mb-4">
          Use our drag-and-drop MJML editor or start from a gallery of legal-focused templates to
          deliver well-structured, responsive emails that look great in every inbox.
        </p>
        <h3 className="text-xl font-semibold text-[#z2a2b61] mb-2">Use Cases:</h3>
        <ul className="list-disc list-inside text-[#c0bfbf] space-y-2">
          <li>Client intake and onboarding emails</li>
          <li>Case updates and appointment reminders</li>
          <li>Legal newsletter and educational content</li>
          <li>Internal compliance or HR notifications</li>
          <li>Automated emails triggered by your case management software</li>
        </ul>
      </section>

      <section className="pdf-generation mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">
          📄 Generate Legal PDFs with Confidence
        </h2>
        <p className="text-base text-[#c0bfbf] mb-4">
          Create templates once—then render dynamic, professional-grade PDFs anytime through our
          secure API.
        </p>
        <h3 className="text-xl font-semibold text-[#z2a2b61] mb-2">Use Cases:</h3>
        <ul className="list-disc list-inside text-[#c0bfbf] space-y-2">
          <li>Retainer and engagement letters</li>
          <li>Power of attorney forms</li>
          <li>Non-disclosure and contract templates</li>
          <li>Court filing cover sheets</li>
          <li>ID verifications, barcoded documents, and e-signature ready PDFs</li>
        </ul>
      </section>

      <section className="security mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">
          🔐 Security and Compliance Built In
        </h2>
        <p className="text-base text-[#c0bfbf] mb-4">
          Outliny is ISO 27001:2022 and SOC 2 Type II certified. We follow the highest standards for
          data handling and encryption.
        </p>
        <ul className="list-disc list-inside text-[#c0bfbf] space-y-2">
          <li>Zero visibility: even Outliny employees can’t see your data</li>
          <li>Logs disabled by default</li>
          <li>Fully encrypted at rest and in transit</li>
          <li>Share templates across teams securely</li>
        </ul>
      </section>

      <section className="integration mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">
          ⚙️ Integrate with Your Legal Stack
        </h2>
        <p className="text-base text-[#c0bfbf] mb-4">
          Use our REST API with your CMS, DMS, or legal CRMs.
        </p>
        <ul className="list-disc list-inside text-[#c0bfbf] space-y-2">
          <li>
            Build reusable components (modules) for disclaimers, legal clauses, headers/footers.
          </li>
          <li>Export or import MJML-based email templates—no vendor lock-in.</li>
          <li>WordPress plugin support for legal service sites and client portals.</li>
        </ul>
      </section>

      <section className="testimonials mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">💬 What Legal Teams Are Saying</h2>
        <div className="space-y-6">
          <blockquote className="text-lg text-[#c0bfbf] italic">
            “We automated our retainer letter process using Outliny—now our paralegals generate and
            send branded documents in seconds.”
            <br />
            <span className="block mt-2 font-semibold">— Managing Partner, Dalton & Rowe LLP</span>
          </blockquote>
          <blockquote className="text-lg text-[#dfd6d6] italic">
            “The security and compliance credentials gave us peace of mind. Outliny feels like a
            natural extension of our legal ops tech stack.”
            <br />
            <span className="block mt-2 font-semibold">
              — Legal Operations Manager, TechLaw Inc.
            </span>
          </blockquote>
        </div>
      </section>

      <section className=" text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">🎯 Get Started Today</h2>
        <ul className="text-lg text-[#c0bfbf] mb-6">
          <li>✔ 300 secure emails/month</li>
          <li>✔ 100 PDF documents/month</li>
          <li>✔ No subscription required</li>
          <li>✔ Credits never expire</li>
        </ul>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md">Start Free</button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  )
}

export default LegalPage
