import React from 'react'

const TermsOfServicePage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-20 font-poppins px-4 text-gray-300">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-20 text-white">Terms and Conditions</h1>
      <p className="mb-4">
        <strong>Last Updated:</strong> April 28, 2025
      </p>

      <section className="mt-4 space-y-4">
        <h2 className="text-xl font-bold text-white">1. Using Our Services</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Be at least 18 years old or have legal permission from a parent/guardian.</li>
          <li>Provide accurate and complete information when creating your account.</li>
          <li>Comply with all applicable laws and regulations.</li>
          <li>
            Maintain the security of your account and API keys, and be responsible for all activity
            under your account.
          </li>
        </ul>
      </section>

      <section className="mt-4 space-y-4">
        <h2 className="text-xl font-bold text-white">2. Acceptable Use</h2>
        <p>You agree not to use Outliny to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Violate any law or regulation.</li>
          <li>Send spam or unsolicited communications.</li>
          <li>Upload, generate, or distribute illegal, offensive, or harmful content.</li>
          <li>Attempt to reverse engineer, hack, or disrupt our services or systems.</li>
          <li>Misuse our APIs, consume excessive resources, or interfere with other users.</li>
        </ul>
        <p>We reserve the right to suspend or terminate accounts that violate these rules.</p>
      </section>

      <section className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-white">3. API Usage Limits</h2>
        <p className='max-w-7xl'>
          We offer generous free tiers and pay-as-you-go pricing. Abuse of free tiers may result in
          suspension or throttling. Specific limits are outlined in your account dashboard and on
          our Pricing page.
        </p>
      </section>

      <section className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-white">4. Data and Privacy</h2>
        <p>We take privacy seriously. Our practices are governed by our Privacy Policy.</p>
        <ul className="list-disc list-inside ml-4">
          <li>You retain ownership of your templates, files, and generated documents.</li>
          <li>We do not claim rights to your input or output data.</li>
          <li>We only process and temporarily store your data to deliver our Services.</li>
        </ul>
      </section>

      <section className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-white">5. Payment and Billing</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Certain features may require payment.</li>
          <li>Payments are securely handled by third-party providers.</li>
          <li>All sales are final unless required by law.</li>
          <li>Credits never expire but are non-refundable unless otherwise agreed.</li>
        </ul>
      </section>

      <section className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-white">6. Open Source Notice</h2>
        <p>
          Outliny's core is open source. Use or contributions are subject to the applicable
          open-source licenses (e.g., MIT License).
        </p>
      </section>

      <section className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-white">7. Changes to the Services</h2>
        <p>
          We may update or modify our Services. Major changes will be communicated via email or
          dashboard. We aim to maintain backward compatibility whenever possible.
        </p>
      </section>

      <section className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-white">8. Termination</h2>
        <p>You may stop using Outliny at any time. We may suspend or terminate your account if:</p>
        <ul className="list-disc list-inside ml-4">
          <li>You violate these Terms.</li>
          <li>Your usage causes legal liability.</li>
          <li>Termination is required by law or government order.</li>
        </ul>
        <p>Upon termination, you lose access to all stored data and templates.</p>
      </section>

      <section className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-white">9. Disclaimers</h2>
        <p>
          Outliny is provided "as is" and "as available." We do not guarantee uninterrupted service
          or legal validity of outputs.
        </p>
      </section>

      <section className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-white">10. Limitation of Liability</h2>
        <ul className="list-disc list-inside ml-4">
          <li>We are not liable for indirect, incidental, or consequential damages.</li>
          <li>
            Our total liability is limited to the amount paid in the last 12 months before a claim.
          </li>
        </ul>
      </section>

      <section className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-white">11. Governing Law</h2>
        <p>
          These Terms are governed by the laws of [Insert Jurisdiction]. Legal actions must be filed
          in the courts of [Insert Jurisdiction].
        </p>
      </section>

      <section className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-white">12. Changes to These Terms</h2>
        <p>
          We may revise these Terms and will notify users of major updates. Continued use means you
          accept the new Terms.
        </p>
      </section>

      <section className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-white">13. Contact</h2>
        <p>
          📧 Email:{' '}
          <a href="mailto:legal@outliny.com" className="text-blue-400 hover:underline">
            legal@outliny.com
          </a>
        </p>
        <p>📍 Address: Outliny, Inc. [165 D & E, Vidur Nagar, Indore, Madhya Pradesh 452009]</p>
      </section>
    </div>
  )
}

export default TermsOfServicePage
