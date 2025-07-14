import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { CiMail } from 'react-icons/ci'

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a] ">
      <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-poppins ">
        Privacy Policy
      </h1>
      <p className="mb-4 max-w-7xl mx-auto text-center text-sm sm:text-base font-inter">
        Outliny ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy
        explains how we collect, use, store, and protect your personal data when you use our
        website, platform, APIs, or services. By using Outliny, you agree to the practices described
        in this policy.
      </p>

     
    
        <div>
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mt-20 mb-3 ">
            1. Information We Collect
          </h2>

          <h3 className="text-lg md:text-xl font-medium mb-3 text-white font-inter ">
            a) Information You Provide
          </h3>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2  text-sm sm:text-base font-roboto">
            <li>Account Information (e.g., name, email address, company name)</li>
            <li>Payment Information (processed securely by third-party payment providers)</li>
            <li>Support Requests (information you send us via tickets or email)</li>
          </ul>

          <h3 className="text-lg md:text-xl font-medium mb-3 text-white font-inter">
            b) Automatically Collected Information
          </h3>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>Technical Data (IP address, browser type, device information)</li>
            <li>Usage Data (pages visited, features used, interactions)</li>
          </ul>
          <p className="py-4 italic text-sm sm:text-base font-inter">
            Note: We minimize data collection and do not collect unnecessary personal information.
          </p>
        </div>

        {/* Repeat structure for each section */}
        <div>
          <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white ">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>Provide and improve our services.</li>
            <li>Process transactions and manage billing.</li>
            <li>Respond to your support requests and questions.</li>
            <li>Notify you about important updates, security alerts, or new features.</li>
            <li>Analyze usage trends to improve product functionality.</li>
          </ul>
          <p className="py-4 italic text-sm sm:text-base font-inter">
            We do not sell your personal information.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white ">
            3. Data Storage and Security
          </h2>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>Encryption: All data at rest and in transit is encrypted.</li>
            <li>
              Zero-Log Default: Generated templates and user payloads are not stored unless
              explicitly configured.
            </li>
            <li>Certifications: Outliny is ISO 27001:2022 and SOC 2 Type II certified.</li>
            <li>
              Access Control: Only authorized personnel can access systems, following the principle
              of least privilege.
            </li>
          </ul>
          <p className="py-4 italic text-sm sm:text-base font-inter">
            We implement strong technical and organizational measures to protect your data against
            unauthorized access or misuse.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white ">
            4. Cookies and Tracking
          </h2>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>Maintain your logged-in session.</li>
            <li>Analyze website usage for improvements.</li>
          </ul>
          <p className="py-4 italic text-sm sm:text-base font-inter">
            You can manage cookies through your browser settings. We do not use tracking cookies for
            advertising purposes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white ">
            5. Third-Party Services
          </h2>
          <p className="py-4 text-sm sm:text-base font-sans">
            We may share necessary information with trusted third parties for:
          </p>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>Payment processing (e.g., Stripe)</li>
            <li>Cloud hosting (e.g., AWS, GCP)</li>
            <li>Analytics (e.g., privacy-focused analytics tools)</li>
          </ul>
          <p className="py-4 italic text-sm sm:text-base font-inter">
            All third-party providers are bound by confidentiality and data protection agreements.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white ">
            6. Your Rights and Choices
          </h2>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>Access, update, or delete your personal information.</li>
            <li>Object to certain data processing activities.</li>
            <li>Withdraw consent at any time (without affecting prior lawful processing).</li>
          </ul>
          <p className="py-4 italic text-sm sm:text-base font-inter">
            To exercise your rights, please contact us.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white ">
            7. Data Retention
          </h2>
          <p className="mb-4 text-sm sm:text-base font-sans">
            We retain personal data only as long as necessary to:
          </p>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>Provide our services.</li>
            <li>Comply with legal obligations.</li>
            <li>Resolve disputes and enforce agreements.</li>
          </ul>
          <p className="py-4 italic text-sm sm:text-base font-sans">
            If you delete your account, we delete your associated personal data within 30 days,
            unless retention is legally required.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white ">
            8. International Data Transfers
          </h2>
          <p className="mb-4 text-sm sm:text-base max-w-4xl font-sans">
            Outliny is a global service. If you are located outside of our primary hosting region,
            your data may be transferred to, and processed in, other countries. We take steps to
            ensure your data remains protected according to this Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white ">
            9. Changes to This Privacy Policy
          </h2>
          <p className="mb-4 text-sm sm:text-base max-w-4xl font-sans">
            We may update this policy from time to time. When we do, we will post the updated
            version here and notify users if significant changes are made. We encourage you to
            review this policy regularly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white ">
            10. Contact Us
          </h2>
          <p className="mb-1 text-sm sm:text-base font-sans">
            If you have any questions about this Privacy Policy or our data practices:
          </p>
          <div className="flex flex-col  gap-2 mt-3 ">
            <div className="flex items-center gap-2">
              <CiMail />
              <p className="font-sans">
                <span className="text-white font-medium">Email:</span> info@softinator.com
              </p>
            </div>

            <div className="flex items-start sm:items-center gap-2">
              <IoLocationOutline className="mt-1 sm:mt-0" />
              <p className="font-sans">
                Address: Outliny, Inc. [165 D & E, Vidur Nagar, Indore Madhya Pradesh]
              </p>
            </div>
          </div>
        </div>
    
    </div>
  )
}

export default PrivacyPolicyPage

