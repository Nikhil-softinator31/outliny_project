import React from 'react'
import { IoShieldCheckmarkSharp, IoLockClosed, IoEarthSharp } from 'react-icons/io5'
import { FaServer, FaUserShield } from 'react-icons/fa'
import { MdPrivacyTip } from 'react-icons/md'
import { CiMail } from 'react-icons/ci'

const SecurityPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-[#d6d5d5] font-poppins">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 mt-10 sm:mt-20 text-white">
        Security at Outliny
      </h1>
      <p className="mb-4 sm:mb-6 text-base sm:text-lg">
        Built with <span className="text-white font-semibold">Security</span>,{' '}
        <span className="text-white font-semibold">Privacy</span>, and{' '}
        <span className="text-white font-semibold">Compliance</span> from Day One.
      </p>
      <p className="mb-8 text-sm sm:text-base">
        At Outliny, we understand that email and document templates often carry sensitive business
        and customer data. That’s why we built our platform with security-first principles and
        strict compliance frameworks to ensure your data remains safe, encrypted, and never exposed
        — not even to us.
      </p>

      {[
        // Security sections
        {
          icon: <IoShieldCheckmarkSharp className="text-green-500" />,
          title: 'Certified & Compliant',
          points: ['✅ ISO 27001:2022 Certified', '✅ SOC 2 Type II Compliant'],
          description:
            'These certifications reflect our commitment to secure systems, employee practices, access controls, and operational resilience.',
        },
        {
          icon: <FaUserShield className="text-blue-400" />,
          title: 'Zero Visibility Architecture',
          points: [
            'All customer data is encrypted at rest and in transit',
            'No logs are stored by default',
            'Outliny employees cannot read or access your templates or parameters',
            "You're always in control of your content and your data",
          ],
        },
        {
          icon: <IoLockClosed className="text-yellow-400" />,
          title: 'End-to-End Encryption',
          points: [
            'TLS 1.2+ for all data in transit',
            'AES-256 encryption for data at rest',
            'Secrets and keys stored securely using cloud-native vaults',
            'Template variables and payloads are never persisted unless you opt-in',
          ],
        },
        {
          icon: <FaServer className="text-purple-400" />,
          title: 'Granular Access Controls',
          points: [
            'Role-based access for template editing and deployment',
            'Module-based templating for restricted shared components',
            'Audit-friendly configuration (including for self-hosted instances)',
          ],
        },
        {
          icon: <IoEarthSharp className="text-green-400" />,
          title: 'Self-Hosting? You’re in Charge',
          points: [
            'Full control over data residency and storage',
            'Internal network deployments behind your own firewall',
            'Integrate with your existing authentication systems',
          ],
        },
        {
          icon: <IoShieldCheckmarkSharp className="text-teal-400" />,
          title: 'Security Best Practices We Follow',
          points: [
            'Static code analysis on all releases',
            'CI/CD with signed artifacts',
            'Regular third-party penetration testing',
            'Principle of least privilege applied across services',
            'No third-party analytics or trackers in the editor or API services',
          ],
        },
        {
          icon: <FaServer className="text-orange-400" />,
          title: 'Data Handling Policy Highlights',
          points: [
            'No data is stored unless you opt in',
            'No template parameters are logged',
            'Logs (if enabled) are encrypted and kept short-lived',
            'PDF and Email outputs are deleted immediately after rendering',
          ],
        },
      ].map((section, index) => (
        <section key={index} className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold mb-2 text-white">
            {section.icon}
            {section.title}
          </div>
          <ul className="list-disc list-inside ml-4 text-sm sm:text-base">
            {section.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          {section.description && (
            <p className="mt-2 text-sm sm:text-base">{section.description}</p>
          )}
        </section>
      ))}

      {/* Privacy Philosophy */}
      <section className="mb-12">
        <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold mb-2 text-white">
          <MdPrivacyTip className="text-pink-400" />
          Privacy-First Philosophy
        </div>
        <p className="text-sm sm:text-base">
          Outliny was built with a simple rule:{' '}
          <strong className="text-white">your data is your data</strong>. We don’t read it, we don’t
          sell it, and we don’t use it to train any models. Ever.
        </p>
        <p className="mt-2 text-sm sm:text-base">
          →{' '}
          <a className="underline text-white cursor-pointer" href='/privacy'>Read our full Privacy Policy</a>
        </p>
      </section>

      {/* Contact */}
      <section className="mt-16">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
          🧠 Questions About Security?
        </h2>
        <p className="mb-2 text-sm sm:text-base">
          We’re happy to answer any specific security concerns or requirements. Reach out to us:
        </p>
        <div className="flex flex-wrap gap-2 items-center text-sm sm:text-base">
          <CiMail className="text-lg" />
          <span className="text-white font-medium">Email:</span> security@outliny.io
        </div>
      </section>
    </div>
  )
}

export default SecurityPage
