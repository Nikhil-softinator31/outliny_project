'use client'
import React from 'react'

const securitySections = [
  {
    title: 'Certified & Compliant',
    items: [
      'ISO 27001:2022 Certified',
      'SOC 2 Type II Compliant',
      'These certifications reflect our commitment to secure systems, employee practices, access controls, and operational resilience.',
    ],
  },
  {
    title: 'Zero Visibility Architecture',
    items: [
      'All customer data is encrypted at rest and in transit',
      'No logs are stored by default',
      'Outliny employees cannot read or access your templates or parameters',
      'You’re always in control of your content and your data.',
    ],
  },
  {
    title: 'End-to-End Encryption',
    items: [
      'TLS 1.2+ for all data in transit',
      'AES-256 encryption for data at rest',
      'Secrets and keys stored securely using cloud-native vaults',
      'Template variables and payloads are never persisted unless you opt-in',
    ],
  },
  {
    title: 'Granular Access Controls',
    items: [
      'Role-based access for template editing and deployment',
      'Module-based templating for restricted shared components',
      'Audit-friendly configuration (including for self-hosted instances)',
    ],
  },
  {
    title: 'Self-Hosting? You’re in Charge',
    items: [
      'Full control over data residency and storage',
      'Internal network deployments behind your own firewall',
      'Integrate with your existing authentication systems',
    ],
  },
  {
    title: 'Security Best Practices We Follow',
    items: [
      'Static code analysis on all releases',
      'CI/CD with signed artifacts',
      'Regular third-party penetration testing',
      'Principle of least privilege applied across services',
    ],
  },
  {
    title: 'Data Handling Policy Highlights',
    items: [
      'No data is stored unless you opt in',
      'No template parameters are logged',
      'Logs (if enabled) are encrypted and kept short-lived',
      'PDF and Email outputs are deleted immediately after rendering',
    ],
  },
  {
    title: 'Privacy-First Philosophy',
    items: [
      'Outliny was built with a simple rule: your data is your data. We don’t read it, we don’t sell it, or use it to train any models.',
      <a href="/privacy" target="_blank" className="text-blue-400 underline" key="privacy">
        Read our full Privacy Policy
      </a>,
    ],
  },
  {
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

const chunkArray = (arr, size) => {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

const SecurityPage = () => {
  const rows = chunkArray(securitySections, 3)

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

      {/* Table-style layout */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 border-collapse">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="align-top">
                {row.map((section, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-700 p-5 min-w-[300px] align-top bg-[#08090a] "
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                      {section.title}
                    </h3>
                    <ul className="text-sm sm:text-base text-[#dddddd] space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </td>
                ))}
                {/* Fill empty cells if not full row */}
                {row.length < 3 &&
                  [...Array(3 - row.length)].map((_, i) => (
                    <td key={`empty-${i}`} className="border border-gray-700 p-5 bg-[#121212]"></td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SecurityPage
