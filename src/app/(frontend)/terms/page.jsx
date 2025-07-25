import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";

const TermsOfServicePage = () => {
  return (
    <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <div className="">
        <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-6 text-white font-poppins ">
          Terms & Condition
        </h1>

        {/* Section 1 */}
        <section className="pt-6 mt-20 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            1. Using Our Services
          </h2>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>Be at least 18 years old or have legal permission from a parent/guardian.</li>
            <li>Provide accurate and complete information when creating your account.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li className="max-w-2xl">
              Maintain the security of your account and API keys, and be responsible for all
              activity under your account.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="pt-6 mt-7 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            2. Acceptable Use
          </h2>
          <p className="text-sm sm:text-base">You agree not to use Outliny to:</p>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto ">
            <li>Violate any law or regulation.</li>
            <li>Send spam or unsolicited communications.</li>
            <li>Upload, generate, or distribute illegal, offensive, or harmful content.</li>
            <li>Attempt to reverse engineer, hack, or disrupt our services or systems.</li>
            <li>Misuse our APIs, consume excessive resources, or interfere with other users.</li>
          </ul>
          <p className="text-sm sm:text-base pt-5">
            We reserve the right to suspend or terminate accounts that violate these rules.
          </p>
        </section>

        {/* Section 3 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            3. API Usage Limits
          </h2>
          <p className="leading-relaxed text-sm sm:text-base max-w-4xl">
            We offer generous free tiers and pay-as-you-go pricing. Abuse of free tiers may result
            in suspension or throttling. Specific limits are outlined in your account dashboard and
            on our Pricing page.
          </p>
        </section>

        {/* Section 4 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            4. Data and Privacy
          </h2>
          <p className="text-sm sm:text-base">
            We take privacy seriously. Our practices are governed by our Privacy Policy.
          </p>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>You retain ownership of your templates, files, and generated documents.</li>
            <li>We do not claim rights to your input or output data.</li>
            <li>We only process and temporarily store your data to deliver our Services.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            5. Payment and Billing
          </h2>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>Certain features may require payment.</li>
            <li>Payments are securely handled by third-party providers.</li>
            <li>All sales are final unless required by law.</li>
            <li>Credits never expire but are non-refundable unless otherwise agreed.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            6. Open Source Notice
          </h2>
          <p className="text-sm sm:text-base max-w-4xl">
            Outliny's core is open source. Use or contributions are subject to the applicable
            open-source licenses (e.g., MIT License).
          </p>
        </section>

        {/* Section 7 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            7. Changes to the Services
          </h2>
          <p className="text-sm sm:text-base max-w-4xl">
            We may update or modify our Services. Major changes will be communicated via email or
            dashboard. We aim to maintain backward compatibility whenever possible.
          </p>
        </section>

        {/* Section 8 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">8. Termination</h2>
          <p className="text-sm sm:text-base">
            You may stop using Outliny at any time. We may suspend or terminate your account if:
          </p>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>You violate these Terms.</li>
            <li>Your usage causes legal liability.</li>
            <li>Termination is required by law or government order.</li>
          </ul>
          <p className="text-sm sm:text-base">
            Upon termination, you lose access to all stored data and templates.
          </p>
        </section>

        {/* Section 9 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">9. Disclaimers</h2>
          <p className="text-sm sm:text-base">
            Outliny is provided "as is" and "as available." We do not guarantee uninterrupted
            service or legal validity of outputs.
          </p>
        </section>

        {/* Section 10 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            10. Limitation of Liability
          </h2>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>We are not liable for indirect, incidental, or consequential damages.</li>
            <li>
              Our total liability is limited to the amount paid in the last 12 months before a
              claim.
            </li>
          </ul>
        </section>

        {/* Section 11 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            11. Governing Law
          </h2>
          <p className="text-sm sm:text-base">
            These Terms are governed by the laws of [Insert Jurisdiction]. Legal actions must be
            filed in the courts of [Insert Jurisdiction].
          </p>
        </section>

        {/* Section 12 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            12. Changes to These Terms
          </h2>
          <p className="text-sm sm:text-base">
            We may revise these Terms and will notify users of major updates. Continued use means
            you accept the new Terms.
          </p>
        </section>

        {/* Section 13 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">13. Contact</h2>
          <p className="text-sm sm:text-base flex gap-3">
          <MdOutlineMarkEmailUnread className='mt-1' /> Email:{' '}
            <a href="mailto:legal@outliny.com" className="text-blue-400 hover:underline">
              legal@outliny.com
            </a>
          </p>
          <p className="text-sm sm:text-base flex gap-3">
          <FaMapPin className='mt-1' /> Address: Outliny, Inc. [165 D & E, Vidur Nagar, Indore, Madhya Pradesh 452009]
          </p>

        
        </section>
      </div>
    </div>
  )
}

export default TermsOfServicePage
