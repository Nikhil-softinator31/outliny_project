import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";



const termsContent = [
  {
    title: 'Definitions',
    content: (
      <ul className="list-disc ml-6 md:ml-11 space-y-8 text-sm sm:text-base font-roboto">
        <li>
          <b>"Service"</b> refers to the cloud-based platform provided by Outliny for creating,
          managing, and rendering PDF documents and email templates, including our website, editors,
          APIs, and related technologies.
        </li>
        <li>
          <b>"User Content"</b> means all data, information, templates, code, and other materials
          that you create, upload, submit, or otherwise transmit to or through the Service. This
          includes the templates you design and the data you send to our API for rendering.
        </li>
        <li>
          <b>"Template"</b> refers to the design layouts for PDFs and emails created using our
          Service.
        </li>
        <li>
          <b>"API"</b> means the Application Programming Interface provided by Outliny for
          programmatic access to the Service.
        </li>
        <li>
          <b>"Free Tier"</b> refers to the free usage limits of the Service as described on our
          Pricing page.
        </li>
        <li>
          <b>"Paid Services"</b> refers to any aspect of the Service that requires the payment of
          fees, typically through the purchase of credits.
        </li>
      </ul>
    ),
  },
  {
    title: 'Description of Service',
    content: (
      <>
        <p className="ml-6">
          Outliny provides a centralized platform for developers and enterprises to design, manage,
          and programmatically generate branded communications. This includes:
        </p>
        <ul className="list-disc ml-6 md:ml-11 space-y-8 text-sm sm:text-base font-roboto ">
          <li>Web-based editors for multi-page PDFs and responsive MJML emails.</li>
          <li>A REST API for rendering Templates with dynamic data.</li>
          <li>A gallery of pre-built professional Templates.</li>
          <li>Management of Templates and reusable modules.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'User Accounts',
    content: (
    
        <ul className="list-disc ml-6 md:ml-11 space-y-8 text-sm sm:text-base font-roboto">
          <li>
            <b>Account Creation:</b> To use most features of the Service, you must register for an
            account. You agree to provide accurate, current, and complete information during the
            registration process.
          </li>
          <li>
            <b>Account Responsibility:</b> You are solely responsible for all activities that occur
            under your account. You must keep your account password and API keys confidential and
            secure. You must notify us immediately of any unauthorized use of your account.
          </li>
          <li>
            <b>Eligibility:</b> You must be at least 18 years old to use the Service.
          </li>
        </ul>
    
    ),
  },
  {
    title: 'Acceptable Use Policy',
    content: (
      <>
        <p className="ml-6">You agree not to use the Service to:</p>
        <ul className="list-disc ml-6 md:ml-11 space-y-8 text-sm sm:text-base font-roboto">
          <li>
            Engage in any activity that is illegal, fraudulent, or violates the rights of others.
            This includes creating or distributing content related to phishing, scams, or other
            malicious activities.
          </li>
          <li>
            Send unsolicited commercial emails (spam) or any communications that violate applicable
            laws like the CAN-SPAM Act.
          </li>
          <li>
            Infringe upon the intellectual property rights of others. You must have the necessary
            rights to all User Content you process through the Service.
          </li>
          <li>
            Attempt to disrupt, compromise, or reverse-engineer the integrity or security of the
            Service, its infrastructure, or the data of other users.
          </li>
          <li>
            Exceed reasonable request volume, or otherwise abuse the API in a manner that could
            degrade the Service for other users.
          </li>
          <li>
            Resell, sublicense, or lease the Service to third parties without our express written
            permission.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'User Content and Data',
    content: (
      <ul className="list-disc ml-6 md:ml-11 space-y-8 text-sm sm:text-base font-roboto">
        <li>
          <b>Ownership:</b> You retain all ownership rights to your User Content. We do not claim
          any ownership over the Templates you create or the data you send to our API.
        </li>
        <li>
          <b>Our License to Your Content:</b> By using the Service, you grant Outliny a worldwide,
          non-exclusive, royalty-free license to host, store, process, and transmit your User
          Content solely for the purpose of providing and improving the Service to you.
        </li>
        <li>
          <b>Data Privacy and Security:</b> We are committed to protecting your data. Our security
          measures are detailed on our Security page and include ISO 27001:2022 and SOC 2 Type II
          certifications. All User Content is encrypted at rest and in transit.
        </li>
        <li>
          <b>Data Processing:</b> You are the "Data Controller" of the personal data within your
          User Content, and Outliny is the "Data Processor." We will only process data according to
          your instructions (i.e., your API calls) and these Terms. By default, we do not log the
          sensitive data payloads sent to our rendering endpoints, and our architecture is designed
          to prevent even Outliny employees from reading your encrypted User Content. For more
          information, please see our Privacy Policy.
        </li>
      </ul>
    ),
  },
  {
    title: 'Fees, Payment, and Credits',
    content: (
      <ul className="list-disc ml-6 md:ml-11 space-y-8 text-sm sm:text-base font-roboto">
        <li>
          <b>Paid Services:</b> Certain features of the Service require payment. We operate on a
          pay-as-you-go model where you purchase credits in advance to use for PDF and email
          generation beyond the Free Tier.
        </li>
        <li>
          <b>Credits:</b> Purchased credits are non-refundable and will be deducted from your
          account balance based on your usage as detailed on our Pricing page. Your credits never
          expire.
        </li>
        <li>
          <b>Pricing:</b> We reserve the right to change our pricing at any time. We will provide
          you with reasonable notice of any price changes by posting the new prices on the website
          or sending you an email notification.
        </li>
        <li>
          <b>Taxes:</b> All fees are exclusive of any applicable taxes, levies, or duties imposed by
          taxing authorities. You are responsible for payment of all such taxes.
        </li>
      </ul>
    ),
  },
  {
    title: 'Open Source Software',
    content: (
      <ul className="list-disc ml-6 md:ml-11 space-y-8 text-sm sm:text-base font-roboto">
        <li>
          Outliny is proudly built on and with open-source software. The core Outliny platform is
          also available as an open-source project on GitHub.
        </li>
        <li>
          <b>Hosted Service:</b> These Terms govern your use of our managed, hosted Service.
        </li>
        <li>
          <b>Self-Hosted Version:</b> If you choose to download, modify, or run your own instance of
          the Outliny software from our public repository, your use of that software is governed by
          the terms of the applicable open-source license (e.g., MIT, AGPL) accompanying the code,
          not these Terms.
        </li>
      </ul>
    ),
  },
  {
    title: 'Intellectual Property',
    content: (
      <ul className="list-disc ml-6 md:ml-11 space-y-8 text-sm sm:text-base font-roboto">
        <li>
          <b>Our IP:</b> The Service, its visual interfaces, features, branding, the Outliny name
          and logo, and all pre-built Templates in our gallery are the exclusive property of Outliny
          and its licensors.
        </li>
        <li>
          <b>No Vendor Lock-in:</b> We believe in developer freedom. For email templates, we use the
          MJML standard, which allows you to easily import and export your templates for use with
          other services.
        </li>
      </ul>
    ),
  },
  {
    title: 'Term and Termination',
    content: (
      <ul className="list-disc ml-6 md:ml-11 space-y-8 text-sm sm:text-base font-roboto">
        <li>
          <b>Termination by You:</b> You may terminate your account at any time by following the
          instructions within the Service dashboard or by contacting support.
        </li>
        <li>
          <b>Termination by Us:</b> We may suspend or terminate your access to the Service at any
          time, with or without cause, if we believe you have breached these Terms. We will make a
          reasonable effort to notify you before termination.
        </li>
        <li>
          <b>Effect of Termination:</b> Upon termination, your right to use the Service will
          immediately cease. We will have no obligation to maintain your User Content and may delete
          it permanently after a reasonable grace period (e.g., 30 days), unless legally required to
          retain it. All provisions of these Terms which by their nature should survive termination
          shall survive, including ownership provisions, warranty disclaimers, indemnity, and
          limitations of liability.
        </li>
      </ul>
    ),
  },
  {
    title: 'Warranties and Disclaimers',
    content: (
      <p className="ml-6">
        The service is provided on an "as is" and "as available" basis. To the fullest extent
        permitted by law, Outliny and its affiliates and licensors disclaim all warranties, whether
        express, implied, statutory, or otherwise, including but not limited to any implied
        warranties of merchantability, fitness for a particular purpose, and non-infringement. We do
        not warrant that the service will be uninterrupted, secure, or error-free
      </p>
    ),
  },
  {
    title: 'Limitation of Liability',
    content: (
      <>
        <p className="ml-6">
          To the fullest extent permitted by law, in no event shall Outliny, its directors,
          employees, or agents be liable for any indirect, incidental, special, consequential, or
          punitive damages, including without limitation, loss of profits, data, use, or goodwill,
          arising out of or in connection with your use of the service, whether based on warranty,
          contract, tort (including negligence), or any other legal theory.
        </p>
        <p className="ml-6 mt-4">
          In no event shall Outliny's aggregate liability for all claims relating to the service
          exceed the total amount of fees paid by you to Outliny during the twelve (12) months
          immediately preceding the event giving rise to the claim.
        </p>
      </>
    ),
  },
  {
    title: 'Indemnification',
    content: (
      <p className="ml-6">
        You agree to defend, indemnify, and hold harmless Outliny and its affiliates, officers,
        directors, employees, and agents from and against any and all claims, damages, obligations,
        losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's
        fees) arising from: (i) your use of and access to the Service; (ii) your violation of any
        term of these Terms; or (iii) your violation of any third-party right, including any
        intellectual property or privacy right, related to your User Content.
      </p>
    ),
  },
  {
    title: 'Governing Law and Dispute Resolution',
    content: (
      <p className="ml-6">
        These Terms shall be governed by and construed in accordance with the laws of the Republic
        of India, without regard to its conflict of law principles. You agree to submit to the
        exclusive jurisdiction of the courts located in Indore, Madhya Pradesh, India to resolve any
        legal matter arising from these Terms.
      </p>
    ),
  },
  {
    title: 'Changes to Terms',
    content: (
      <p className="ml-6">
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
        If a revision is material, we will provide at least 30 days' notice prior to any new terms
        taking effect. What constitutes a material change will be determined at our sole discretion.
        By continuing to access or use our Service after those revisions become effective, you agree
        to be bound by the revised terms.
      </p>
    ),
  },
  {
    title: 'Contact Information',
    content: (
      <p className="ml-6">
        For any questions or concerns regarding these Terms, please contact us at:
      </p>
    ),
  },
]

export default function TermsPage() {
  return (
    <div className=" mt-20">
      {termsContent.map((section, idx) => (
        <section
          key={idx}
          id={`section-${idx + 1}`}
          className="space-y-8 scroll-mt-24 text-[#FFFFFFBF]"
        >
          <h2 className="text-xl  font-semibold text-white mb-2 mt-10 ml-5">
            {idx + 1}. {section.title}
          </h2>
          {section.content}
        </section>
      ))}
    </div>
  )
}
