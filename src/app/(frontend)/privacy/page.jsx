import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { CiMail } from 'react-icons/ci'

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-20 text-neutral-200 font-poppins p-4">
      <h1 className="text-4xl font-bold mb-6 mt-20 text-white">Privacy Policy</h1>
      <p className="mb-4">
        Outliny ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy
        explains how we collect, use, store, and protect your personal data when you use our
        website, platform, APIs, or services. By using Outliny, you agree to the practices described
        in this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">1. Information We Collect</h2>
      <h3 className="text-xl font-medium mb-2 text-white">a) Information You Provide</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Account Information (e.g., name, email address, company name)</li>
        <li>Payment Information (processed securely by third-party payment providers)</li>
        <li>Support Requests (information you send us via tickets or email)</li>
      </ul>

      <h3 className="text-xl font-medium mb-2 text-white">
        b) Automatically Collected Information
      </h3>
      <ul className="list-disc list-inside mb-4">
        <li>Technical Data (IP address, browser type, device information)</li>
        <li>Usage Data (pages visited, features used, interactions)</li>
      </ul>
      <p className="mb-4 italic">
        Note: We minimize data collection and do not collect unnecessary personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Provide and improve our services.</li>
        <li>Process transactions and manage billing.</li>
        <li>Respond to your support requests and questions.</li>
        <li>Notify you about important updates, security alerts, or new features.</li>
        <li>Analyze usage trends to improve product functionality.</li>
      </ul>
      <p className="mb-4 font-semibold">We do not sell your personal information.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">3. Data Storage and Security</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Encryption: All data at rest and in transit is encrypted.</li>
        <li>
          Zero-Log Default: Generated templates and user payloads are not stored unless explicitly
          configured.
        </li>
        <li>Certifications: Outliny is ISO 27001:2022 and SOC 2 Type II certified.</li>
        <li>
          Access Control: Only authorized personnel can access systems, following the principle of
          least privilege.
        </li>
      </ul>
      <p className="mb-4">
        We implement strong technical and organizational measures to protect your data against
        unauthorized access or misuse.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">4. Cookies and Tracking</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Maintain your logged-in session.</li>
        <li>Analyze website usage for improvements.</li>
      </ul>
      <p className="mb-4">
        You can manage cookies through your browser settings. We do not use tracking cookies for
        advertising purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">5. Third-Party Services</h2>
      <p className="mb-4">We may share necessary information with trusted third parties for:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Payment processing (e.g., Stripe)</li>
        <li>Cloud hosting (e.g., AWS, GCP)</li>
        <li>Analytics (e.g., privacy-focused analytics tools)</li>
      </ul>
      <p className="mb-4">
        All third-party providers are bound by confidentiality and data protection agreements.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">6. Your Rights and Choices</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Access, update, or delete your personal information.</li>
        <li>Object to certain data processing activities.</li>
        <li>Withdraw consent at any time (without affecting prior lawful processing).</li>
      </ul>
      <p className="mb-4">To exercise your rights, please contact us.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">7. Data Retention</h2>
      <p className="mb-4">We retain personal data only as long as necessary to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide our services.</li>
        <li>Comply with legal obligations.</li>
        <li>Resolve disputes and enforce agreements.</li>
      </ul>
      <p className="mb-4">
        If you delete your account, we delete your associated personal data within 30 days, unless
        retention is legally required.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
        8. International Data Transfers
      </h2>
      <p className="mb-4">
        Outliny is a global service. If you are located outside of our primary hosting region, your
        data may be transferred to, and processed in, other countries. We take steps to ensure your
        data remains protected according to this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">
        9. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this policy from time to time. When we do, we will post the updated version
        here and notify users if significant changes are made. We encourage you to review this
        policy regularly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-white">10. Contact Us</h2>
      <p className="mb-1">
        If you have any questions about this Privacy Policy or our data practices:
      </p>
      <div className="flex gap-3">
        <span className="mt-1">
          <CiMail />
        </span>
        <p>
          <span className="text-white font-medium">Email:</span> info@softinator.com
        </p>
      </div>

      <p className="mb-4 flex gap-2">
        <span className="mt-1">
          <IoLocationOutline />
        </span>
        Address: Outliny, Inc. [165 D & E, Vidur Nagar, Indore, Madhya Pradesh 452009]
      </p>
    </div>
  )
}

export default PrivacyPolicyPage
