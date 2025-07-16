'use client'
import React from 'react'
import { CiMail, CiUnlock } from 'react-icons/ci'
import { FaArrowRightLong, FaRegEye } from 'react-icons/fa6'
import { BsBox } from 'react-icons/bs'
import { MdLockOutline } from 'react-icons/md'
import { IoSettingsOutline, IoEarthOutline } from 'react-icons/io5'
import { FiShield } from 'react-icons/fi'
import { GiBrain } from 'react-icons/gi'

const securitySections = [
  {
    icon: <CiUnlock size={24} />,
    title: 'Certified & Compliant',
    items: [
      'ISO 27001:2022 Certified',
      'SOC 2 Type II Compliant',
      'These certifications reflect our commitment to secure systems, employee practices, access controls, and operational resilience.',
    ],
  },
  {
    icon: <BsBox size={24} />,
    title: 'Zero Visibility Architecture',
    items: [
      'All customer data is encrypted at rest and in transit',
      'No logs are stored by default',
      'Outliny employees can’t access your templates or data — you’re always in control.',
    ],
  },
  {
    icon: <MdLockOutline size={24} />,
    title: 'End-to-End Encryption',
    items: [
      'TLS 1.2+ for all data in transit',
      'AES-256 encryption for data at rest',
      'Secrets and keys stored securely using cloud-native vaults',
      'Template variables and payloads are never persisted unless you opt-in',
    ],
  },
  {
    icon: <IoSettingsOutline size={24} />,
    title: 'Granular Access Controls',
    items: [
      'Role-based access for template editing and deployment',
      'Module-based templating for restricted shared components',
      'Audit-friendly configuration (including for self-hosted instances)',
    ],
  },
  {
    icon: <IoEarthOutline size={24} />,
    title: 'Self-Hosting? You’re in Charge',
    items: [
      'Full control over data residency and storage',
      'Internal network deployments behind your own firewall',
      'Integrate with your existing authentication systems',
    ],
  },
  {
    icon: <FiShield size={24} />,
    title: 'Security Best Practices We Follow',
    items: [
      'Static code analysis on all releases',
      'CI/CD with signed artifacts',
      'Regular third-party penetration testing',
      'Principle of least privilege applied across services',
    ],
  },
  {
    icon: <BsBox size={24} />,
    title: 'Data Handling Policy Highlights',
    items: [
      'No data is stored unless you opt in',
      'No template parameters are logged',
      'Logs (if enabled) are encrypted and kept short-lived',
      'PDF and Email outputs are deleted immediately after rendering',
    ],
  },
  {
    icon: <FaRegEye size={24} />,
    title: 'Privacy-First Philosophy',
    items: [
      'Outliny was built with a simple rule: your data is your data. We don’t read it, we don’t sell it, or use it to train any models.',
      <a href="/privacy" target="_blank" className="text-blue-400 underline" key="privacy">
        Read our full Privacy Policy
      </a>,
    ],
  },
  {
    icon: <GiBrain size={24} />,
    title: 'Questions About Security?',
    items: [
      'We’re happy to answer any specific security concerns or requirements. Reach out to us:',
      <a
        href="mailto:security@outliny.io"
        target="_blank"
        className="text-blue-400 underline"
        key="email"
      >
        security@outliny.io
      </a>,
    ],
  },
]

const SecurityPage = () => {
  return (
    <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-poppins">
        Security at Outliny
      </h1>

      <p className="mb-12 max-w-7xl mx-auto text-center text-sm sm:text-base font-inter">
        At Outliny, we understand that email and document templates often carry sensitive business
        and customer data. That’s why we built our platform with security-first principles and
        strict compliance frameworks to ensure your data remains safe, encrypted, and never exposed
        — not even to us.
      </p>

      {/* Responsive grid layout (1 on mobile, 2 on tablet, 3 on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {securitySections.map((section, index) => (
          <div key={index} className="bg-[#08090a] border border-gray-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-3">
              {section.icon}
              <h3 className="text-lg sm:text-xl font-semibold text-white">{section.title}</h3>
            </div>
            <ul className="text-sm sm:text-base text-[#dddddd] space-y-2">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecurityPage
