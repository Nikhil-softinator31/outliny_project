import React from 'react'
import {
  FaUser,
  FaEnvelope,
  FaDesktop,
  FaFileAlt,
  FaCreditCard,
  FaBullhorn,
  FaChartLine,
} from 'react-icons/fa'
import {
  FaBullseye,
  FaBalanceScale,
  FaEnvelopeOpenText,
  FaCog,
  FaShieldAlt,
  FaBell,
} from 'react-icons/fa'
import { FaCloud, FaChartBar, FaLifeRing, FaGavel } from 'react-icons/fa'

const dataSections = [
  {
    icon: <FaUser size={24} />,
    title: 'Identity Data',
    items: ['Name, username, organization affiliation'],
  },
  {
    icon: <FaEnvelope size={24} />,
    title: 'Contact Data',
    items: ['Email address'],
  },
  {
    icon: <FaDesktop size={24} />,
    title: 'Technical Data',
    items: ['IP address, browser type, time zone, device ID, OS, access logs'],
  },
  {
    icon: <FaFileAlt size={24} />,
    title: 'Content Data',
    items: ['Templates, modules, documents, or assets you upload or generate'],
  },
  {
    icon: <FaCreditCard size={24} />,
    title: 'Transaction Data',
    items: ['Billing data, credits, invoices, payment method (via third-party processor)'],
  },
  {
    icon: <FaBullhorn size={24} />,
    title: 'Marketing & Communication Data',
    items: ['Preferences for receiving updates or promotional content'],
  },
  {
    icon: <FaChartLine size={24} />,
    title: 'Behavioral & Analytics Data',
    items: ['Feature usage, interaction patterns, error reports'],
  },
]

const purposeSections = [
  {
    icon: <FaBullseye size={24} />,
    title: 'To provide and operate the Services',
    items: ['Performance of a contract'],
  },
  {
    icon: <FaBalanceScale size={24} />,
    title: 'To personalize your user experience',
    items: ['Legitimate interest'],
  },
  {
    icon: <FaEnvelopeOpenText size={24} />,
    title: 'To send transactional communications',
    items: ['Performance of a contract'],
  },
  {
    icon: <FaCog size={24} />,
    title: 'To improve platform functionality',
    items: ['Legitimate interest'],
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: 'To ensure security and compliance',
    items: ['Legal obligation / legitimate interest'],
  },
  {
    icon: <FaCreditCard size={24} />,
    title: 'To process payments',
    items: ['Performance of a contract'],
  },
  {
    icon: <FaBell size={24} />,
    title: 'To send optional marketing updates',
    items: ['Consent (opt-in only)'],
  },
]

const recipientSections = [
  {
    icon: <FaCloud size={24} />,
    title: 'Cloud hosting providers',
    items: ['Infrastructure, scalability, and performance (e.g., AWS)'],
  },
  {
    icon: <FaChartBar size={24} />,
    title: 'Analytics tools',
    items: ['Understanding usage trends (e.g., Google Analytics)'],
  },
  {
    icon: <FaCreditCard size={24} />,
    title: 'Payment providers',
    items: ['Processing billing (e.g., Stripe)'],
  },
  {
    icon: <FaLifeRing size={24} />,
    title: 'Support platforms',
    items: ['Responding to user inquiries (e.g., Crisp, Intercom)'],
  },
  {
    icon: <FaGavel size={24} />,
    title: 'Legal and regulatory',
    items: ['To comply with legal obligations or respond to valid requests'],
  },
]

const termsContent = [
  {
    title: 'Who We Are and How to Contact Us',
    content: (
      <>
        <div className="ml-6">
          <p className="mb-4 text-sm sm:text-base font-roboto ">
            Outliny is a secure, developer-focused platform that empowers enterprises to design,
            manage, and deliver consistent branding across all internal and external
            communications&mdash;especially emails and PDF documents. Whether you're building HRMS
            notifications, CRM emails, dynamic invoices, or personalized PDF attachments, Outliny
            helps you streamline and centralize all your branded communication templates in one
            place.
          </p>
          <ul className="list-disc  md:ml-5 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>Drag-and-drop multi-page PDF template creation (via GrapeJS + Puppeteer)</li>
            <li>Single-page PDF generation (via PDFme)</li>
            <li>MJML-based responsive email templates (with GrapeJS email editor)</li>
            <li>Jinja templating support for variable logic and reuse</li>
            <li>Modular developer tools to build once and reuse templates across departments</li>
            <li>WordPress plugin integration for WooCommerce and CRM emails</li>
            <li>ISO 27001:2022 and SOC 2 Type II level security across everything we do</li>
          </ul>
          <p className="mb-4 text-sm sm:text-base font-roboto">
            Outliny is open-source and developer-friendly&mdash;use our hosted version with a
            generous free tier or self-host using our GitHub codebase.
          </p>
          <h3 className="text-lg md:text-xl font-medium mb-3 text-white font-inter">Contact Us:</h3>
          <ul className="  mb-4 text-sm sm:text-base font-roboto">
            <li className="mb-1">📍 Outliny Technologies</li>
            <li className="mb-1">
              🌐 Website:{' '}
              <a href="https://www.outliny.com" className="underline">
                www.outliny.com
              </a>
            </li>
          </ul>
          <p className="mb-4 text-sm sm:text-base font-roboto">
            We are here to support secure, branded, and scalable communication for your
            organization.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Your Rights Regarding Your Personal Data',
    content: (
      <>
        <p className="mb-3 text-sm sm:text-base font-roboto ml-6">
          Depending on your jurisdiction, you have the following rights:
        </p>
        <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>
            <span className="font-medium">Access:</span> Request a copy of your personal data.
          </li>
          <li>
            <span className="font-medium">Correction:</span> Request correction of incomplete or
            inaccurate data.
          </li>
          <li>
            <span className="font-medium">Erasure:</span> Request deletion of your data when it’s no
            longer necessary.
          </li>
          <li>
            <span className="font-medium">Objection:</span> Object to data processing based on
            legitimate interest or for direct marketing.
          </li>
          <li>
            <span className="font-medium">Restriction:</span> Request a temporary pause in data
            processing under certain conditions.
          </li>
          <li>
            <span className="font-medium">Portability:</span> Request to receive your data in a
            machine-readable format.
          </li>
          <li>
            <span className="font-medium">Withdraw Consent:</span> Where processing is based on
            consent, you may withdraw it at any time.
          </li>
        </ul>
        <p className="mb-3 text-sm sm:text-base font-roboto ml-6">
          To exercise any of these rights, email us at{' '}
          <a href="mailto:info@softinator.com" className="underline">
            info@softinator.com
          </a>
          . We may ask you to verify your identity before proceeding. We aim to respond within one
          month.
        </p>
      </>
    ),
  },
  {
    title: ' Whose Personal Data We Collect',
    content: (
      <>
        <p className="mb-3 text-sm sm:text-base font-roboto ml-6">
          We may collect personal data from:
        </p>
        <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>Our users (individuals or developers using our platform)</li>
          <li>Employees or representatives of companies using Outliny</li>
          <li>Contributors to our open-source codebase</li>
          <li>Individuals interacting with us through support, email, or our website</li>
        </ul>
      </>
    ),
  },
  {
    title: 'When We Collect Personal Data',
    content: (
      <>
        <p className="mb-3 text-sm sm:text-base font-roboto ml-6">We may process your data when:</p>
        <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>You create an account or sign in (including via OAuth)</li>
          <li>You use our template editors or APIs</li>
          <li>You send or receive emails through our services</li>
          <li>You communicate with us (e.g., support, inquiries)</li>
          <li>You interact with our website, documentation, or integrations</li>
        </ul>
      </>
    ),
  },
  {
    title: 'What Personal Data We Collect',
    content: (
      <>
        <div className="ml-6">
          <p className="mb-3 text-sm sm:text-base font-roboto ">
            Outliny collects minimal and essential personal data to deliver our services
            effectively, support security and compliance, improve functionality, and provide support
            when needed. We are fully committed to respecting user privacy and following strict
            security protocols aligned with our ISO 27001:2022 and SOC 2 Type II certifications.
            <br />
            We do not store or access your content (email bodies, PDFs, variables, etc.) unless
            explicitly enabled for debugging. Logs are disabled by default.
          </p>
          <h3 className="text-lg md:text-xl font-medium mb-3 text-white font-inter">
            Information You Provide to Us
          </h3>
          <p className="mb-3 text-sm sm:text-base font-roboto">
            While using Outliny, you may share certain information that identifies you as an
            individual ("Personal Data"). Below is an overview of the types of personal data we may
            collect:
          </p>
        </div>

        {/* Personal Data Table */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
        {dataSections.map((section, index) => (
          <div key={index} className="bg-[#08090a] border border-gray-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-3 ">
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
      </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:ml-6">
          {dataSections.map((section, index) => {
            const isLast = index === dataSections.length - 1
            const isIncompleteRow = dataSections.length % 3 !== 0 && isLast

            return (
              <div
                key={index}
                className={`bg-[#08090a] border border-gray-700 rounded-xl p-8 ${
                  isIncompleteRow
                    ? 'lg:col-span-3 flex flex-col  justify-self-center lg:w-[33%]'
                    : ''
                }`}
              >
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
            )
          })}
        </div>
        <div className="ml-6">
          <p className="mb-3 mt-4 text-sm sm:text-base font-roboto">
            We do not collect any special categories of personal data (e.g. ethnicity, political
            beliefs, health data) or knowingly collect information from individuals under the age of
            18.
          </p>
          <h3 className="text-lg md:text-xl font-medium mb-3 text-white font-inter">
            Aggregated Data
          </h3>
          <p className="mb-3 text-sm sm:text-base font-roboto ">
            We may collect, use, and share aggregated, anonymized data (e.g., total number of
            templates created, average API response times) to monitor platform performance and usage
            patterns. This data does not identify any individual and is used solely for improving
            our services.
          </p>
          <h3 className="text-lg md:text-xl font-medium mb-3 text-white font-inter">
            We Do Not Collect or Process:
          </h3>
          <ul className="list-disc ml-6 md:ml-5 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>
              Special categories of personal data (e.g., race, religion, political opinions,
              biometric data)
            </li>
            <li>Criminal or legal background data</li>
            <li>Content data unless voluntarily shared for debugging</li>
            <li>Persistent behavioral tracking or third-party advertising data</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'Cookies and Tracking Technologies',
    content: (
      <>
        <div className="ml-6">
          <p className="mb-3 text-sm sm:text-base font-roboto ">
            Outliny uses cookies and similar technologies for:
          </p>
          <ul className="list-disc ml-6 md:ml-5 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>Essential functionality (e.g., session management)</li>
            <li>Analytics and performance (e.g., via Google Analytics)</li>
            <li>Customization (e.g., remembering editor preferences)</li>
          </ul>
          <p className="mb-3 text-sm sm:text-base font-roboto">
            You can manage or disable cookies via your browser settings. Some features may not
            function properly without cookies.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'How We Use Your Data and Why',
    content: (
      <>
        <p className="mb-3 text-sm sm:text-base font-roboto ml-6">
          We only share your personal data in the following situations:
        </p>
        {/* Sharing Table */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ml-6">
          {recipientSections.map((section, index) => {
            const isLast = index === dataSections.length - 1
            const isIncompleteRow = dataSections.length % 3 !== 0 && isLast

            return (
              <div
                key={index}
                className={`bg-[#08090a] border border-gray-700 rounded-xl p-8 ${
                  isIncompleteRow
                    ? 'lg:col-span-3 flex flex-col  justify-self-center lg:w-[33%]'
                    : ''
                }`}
              >
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
            )
          })}
        </div>
      </>
    ),
  },
  {
    title: 'Sharing Your Personal Data',
    content: (
      <>
        <p className="mb-3 text-sm sm:text-base font-roboto ml-6">
          We only share your personal data in the following situations:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ml-6">
          {recipientSections.map((section, index) => {
            const isLast = index === dataSections.length - 1
            const isIncompleteRow = dataSections.length % 3 !== 0 && isLast

            return (
              <div
                key={index}
                className={`bg-[#08090a] border border-gray-700 rounded-xl p-8 ${
                  isIncompleteRow
                    ? 'lg:col-span-3 flex flex-col  justify-self-center lg:w-[33%]'
                    : ''
                }`}
              >
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
            )
          })}
        </div>
      </>
    ),
  },
  {
    title: 'Data Retention',
    content: (
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>Templates and configurations remain until deleted by the user.</li>
        <li>Billing records are retained as required by law.</li>
        <li>API logs, if enabled, are stored for up to 7 days.</li>
      </ul>
    ),
  },
  {
    title: 'International Data Transfers',
    content: (
      <p className="mb-4 text-sm sm:text-base font-roboto ml-6 ">
        Your data may be stored or processed in countries outside your jurisdiction. We implement
        standard contractual clauses and safeguard mechanisms to ensure lawful international
        transfers.
      </p>
    ),
  },
  {
    title: 'How We Protect Your Data',
    content: (
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>Data in transit: Encrypted using TLS 1.3</li>
        <li>Data at rest: Encrypted using AES-256</li>
        <li>Logging: Disabled by default</li>
        <li>Access: Restricted to authorized personnel only, based on least privilege</li>
        <li>Monitoring: Regular audits and vulnerability scanning</li>
        <li>We are ISO 27001:2022 and SOC 2 Type II certified.</li>
      </ul>
    ),
  },
  {
    title: 'Google Authentication',
    content: (
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>
          If you choose to log in via Google: We access basic profile data (name, email) for
          authentication only.
        </li>
        <li>We do not access your emails, calendar, or documents.</li>
        <li>This data is handled securely and in accordance with this policy.</li>
      </ul>
    ),
  },
  {
    title: 'External Links',
    content: (
      <p className="ml-6 text-sm sm:text-base font-roboto">
        Outliny’s platform may contain links to third-party websites. We are not responsible for the
        privacy practices of those websites. Always review their privacy policies separately.
      </p>
    ),
  },
  {
    title: 'Changes to This Policy',
    content: (
      <p className="ml-6 text-sm sm:text-base font-roboto">
        We may revise this Privacy Policy periodically. Changes will be posted here with an updated
        “Effective Date.” Your continued use of Outliny after any update constitutes your acceptance
        of the revised policy.
      </p>
    ),
  },
  {
    title: 'Contact Us (Privacy)',
    content: (
      <div>
        <p className="ml-6">Have questions, feedback, or a data access request?</p>
        <ul className="ml-6 md:ml-11 mb-3 text-sm sm:text-base font-roboto">
          <li className="mb-1">
            📩 Email:{' '}
            <a href="mailto:info@softinator.com" className="underline">
              info@softinator.com
            </a>
          </li>
        </ul>
        <p className="mb-8 text-sm sm:text-base font-roboto ml-6">
          We’re committed to protecting your privacy and maintaining transparency.
        </p>
      </div>
    ),
  },
]

// const PrivacyPolicyPage = () => {
//   return (
//     <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a] ">
//       <p className="mb-4 text-sm sm:text-base font-roboto">
//         We recognize that your privacy is very important and take it seriously. This Privacy Policy
//         describes how Outliny Technologies (
//         <span className="italic">"Outliny", "we", "us", or "our"</span>) collects, uses, discloses,
//         and secures personal information when:
//       </p>
//       <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
//         <li>
//           You visit or interact with our platform at{' '}
//           <a href="https://www.outliny.com" className="underline">
//             www.outliny.com
//           </a>{' '}
//           and related services (the “Platform”)
//         </li>
//         <li>You use our APIs or integrations</li>
//         <li>You sign up for and use our products and services (“Services”)</li>
//         <li>You otherwise communicate with us (e.g., email, support, or social platforms)</li>
//       </ul>
//       <p className="mb-4 text-sm sm:text-base font-roboto">
//         By accessing or using the Services, you consent to our use of your information as described
//         in this Privacy Policy. We will not use or share your personal information with anyone
//         except as outlined here.
//       </p>
//       <p className="mb-4 text-sm sm:text-base font-roboto">
//         This policy meets our obligations under global data protection regulations. We may update
//         this Privacy Policy periodically and will post any changes on this page.
//       </p>

//       <div>
//         <p className="mb-4 text-sm sm:text-base font-roboto">
//           Outliny is a secure, developer-focused platform that empowers enterprises to design,
//           manage, and deliver consistent branding across all internal and external
//           communications&mdash;especially emails and PDF documents. Whether you're building HRMS
//           notifications, CRM emails, dynamic invoices, or personalized PDF attachments, Outliny
//           helps you streamline and centralize all your branded communication templates in one place.
//         </p>
//         <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
//           <li>Drag-and-drop multi-page PDF template creation (via GrapeJS + Puppeteer)</li>
//           <li>Single-page PDF generation (via PDFme)</li>
//           <li>MJML-based responsive email templates (with GrapeJS email editor)</li>
//           <li>Jinja templating support for variable logic and reuse</li>
//           <li>Modular developer tools to build once and reuse templates across departments</li>
//           <li>WordPress plugin integration for WooCommerce and CRM emails</li>
//           <li>ISO 27001:2022 and SOC 2 Type II level security across everything we do</li>
//         </ul>
//         <p className="mb-4 text-sm sm:text-base font-roboto">
//           Outliny is open-source and developer-friendly&mdash;use our hosted version with a generous
//           free tier or self-host using our GitHub codebase.
//         </p>
//         <h3 className="text-lg md:text-xl font-medium mb-3 text-white font-inter">Contact Us:</h3>
//         <ul className="ml-6 md:ml-11 mb-4 text-sm sm:text-base font-roboto">
//           <li className="mb-1">📍 Outliny Technologies</li>
//           <li className="mb-1">
//             🌐 Website:{' '}
//             <a href="https://www.outliny.com" className="underline">
//               www.outliny.com
//             </a>
//           </li>
//         </ul>
//         <p className="mb-4 text-sm sm:text-base font-roboto">
//           We are here to support secure, branded, and scalable communication for your organization.
//         </p>
//       </div>

//       {/* Repeat structure for each section */}
//       <div>
//         <p className="mb-3 text-sm sm:text-base font-roboto">
//           Depending on your jurisdiction, you have the following rights:
//         </p>
//         <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
//           <li>
//             <span className="font-medium">Access:</span> Request a copy of your personal data.
//           </li>
//           <li>
//             <span className="font-medium">Correction:</span> Request correction of incomplete or
//             inaccurate data.
//           </li>
//           <li>
//             <span className="font-medium">Erasure:</span> Request deletion of your data when it’s no
//             longer necessary.
//           </li>
//           <li>
//             <span className="font-medium">Objection:</span> Object to data processing based on
//             legitimate interest or for direct marketing.
//           </li>
//           <li>
//             <span className="font-medium">Restriction:</span> Request a temporary pause in data
//             processing under certain conditions.
//           </li>
//           <li>
//             <span className="font-medium">Portability:</span> Request to receive your data in a
//             machine-readable format.
//           </li>
//           <li>
//             <span className="font-medium">Withdraw Consent:</span> Where processing is based on
//             consent, you may withdraw it at any time.
//           </li>
//         </ul>
//         <p className="mb-3 text-sm sm:text-base font-roboto">
//           To exercise any of these rights, email us at{' '}
//           <a href="mailto:info@softinator.com" className="underline">
//             info@softinator.com
//           </a>
//           . We may ask you to verify your identity before proceeding. We aim to respond within one
//           month.
//         </p>
//       </div>

//       <div>
//         <p className="mb-3 text-sm sm:text-base font-roboto">We may collect personal data from:</p>
//         <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
//           <li>Our users (individuals or developers using our platform)</li>
//           <li>Employees or representatives of companies using Outliny</li>
//           <li>Contributors to our open-source codebase</li>
//           <li>Individuals interacting with us through support, email, or our website</li>
//         </ul>
//       </div>

//       <div>
//         <p className="mb-3 text-sm sm:text-base font-roboto">We may process your data when:</p>
//         <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
//           <li>You create an account or sign in (including via OAuth)</li>
//           <li>You use our template editors or APIs</li>
//           <li>You send or receive emails through our services</li>
//           <li>You communicate with us (e.g., support, inquiries)</li>
//           <li>You interact with our website, documentation, or integrations</li>
//         </ul>
//       </div>

//       <div>
//         <p className="mb-3 text-sm sm:text-base font-roboto">
//           Outliny collects minimal and essential personal data to deliver our services effectively,
//           support security and compliance, improve functionality, and provide support when needed.
//           We are fully committed to respecting user privacy and following strict security protocols
//           aligned with our ISO 27001:2022 and SOC 2 Type II certifications.
//           <br />
//           We do not store or access your content (email bodies, PDFs, variables, etc.) unless
//           explicitly enabled for debugging. Logs are disabled by default.
//         </p>
//         <h3 className="text-lg md:text-xl font-medium mb-3 text-white font-inter">
//           Information You Provide to Us
//         </h3>
//         <p className="mb-3 text-sm sm:text-base font-roboto">
//           While using Outliny, you may share certain information that identifies you as an
//           individual ("Personal Data"). Below is an overview of the types of personal data we may
//           collect:
//         </p>

//         {/* Personal Data Table */}
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
//         {dataSections.map((section, index) => (
//           <div key={index} className="bg-[#08090a] border border-gray-700 rounded-xl p-8">
//             <div className="flex items-center gap-3 mb-3 ">
//               {section.icon}
//               <h3 className="text-lg sm:text-xl font-semibold text-white">{section.title}</h3>
//             </div>
//             <ul className="text-sm sm:text-base text-[#dddddd] space-y-2">
//               {section.items.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div> */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//           {dataSections.map((section, index) => {
//             const isLast = index === dataSections.length - 1
//             const isIncompleteRow = dataSections.length % 3 !== 0 && isLast

//             return (
//               <div
//                 key={index}
//                 className={`bg-[#08090a] border border-gray-700 rounded-xl p-8 ${
//                   isIncompleteRow
//                     ? 'lg:col-span-3 flex flex-col  justify-self-center lg:w-[33%]'
//                     : ''
//                 }`}
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   {section.icon}
//                   <h3 className="text-lg sm:text-xl font-semibold text-white">{section.title}</h3>
//                 </div>
//                 <ul className="text-sm sm:text-base text-[#dddddd] space-y-2">
//                   {section.items.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           })}
//         </div>

//         <p className="mb-3 mt-4 text-sm sm:text-base font-roboto">
//           We do not collect any special categories of personal data (e.g. ethnicity, political
//           beliefs, health data) or knowingly collect information from individuals under the age of
//           18.
//         </p>
//         <h3 className="text-lg md:text-xl font-medium mb-3 text-white font-inter">
//           Aggregated Data
//         </h3>
//         <p className="mb-3 text-sm sm:text-base font-roboto">
//           We may collect, use, and share aggregated, anonymized data (e.g., total number of
//           templates created, average API response times) to monitor platform performance and usage
//           patterns. This data does not identify any individual and is used solely for improving our
//           services.
//         </p>
//         <h3 className="text-lg md:text-xl font-medium mb-3 text-white font-inter">
//           We Do Not Collect or Process:
//         </h3>
//         <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
//           <li>
//             Special categories of personal data (e.g., race, religion, political opinions, biometric
//             data)
//           </li>
//           <li>Criminal or legal background data</li>
//           <li>Content data unless voluntarily shared for debugging</li>
//           <li>Persistent behavioral tracking or third-party advertising data</li>
//         </ul>
//       </div>

//       <div>
//         {/* 6. Cookies and Tracking Technologies */}
//         <p className="mb-3 text-sm sm:text-base font-roboto">
//           Outliny uses cookies and similar technologies for:
//         </p>
//         <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
//           <li>Essential functionality (e.g., session management)</li>
//           <li>Analytics and performance (e.g., via Google Analytics)</li>
//           <li>Customization (e.g., remembering editor preferences)</li>
//         </ul>
//         <p className="mb-3 text-sm sm:text-base font-roboto">
//           You can manage or disable cookies via your browser settings. Some features may not
//           function properly without cookies.
//         </p>
//       </div>

//       <div>
//         {/* 7. How We Use Your Data and Why */}
//         <p className="mb-3 text-sm sm:text-base font-roboto">
//           We use personal data for the following purposes:
//         </p>
//         {/* Purposes Table */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//           {purposeSections.map((section, index) => {
//             const isLast = index === dataSections.length - 1
//             const isIncompleteRow = dataSections.length % 3 !== 0 && isLast

//             return (
//               <div
//                 key={index}
//                 className={`bg-[#08090a] border border-gray-700 rounded-xl p-8 ${
//                   isIncompleteRow
//                     ? 'lg:col-span-3 flex flex-col  justify-self-center lg:w-[33%]'
//                     : ''
//                 }`}
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   {section.icon}
//                   <h3 className="text-lg sm:text-xl font-semibold text-white">{section.title}</h3>
//                 </div>
//                 <ul className="text-sm sm:text-base text-[#dddddd] space-y-2">
//                   {section.items.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       <div>
//         {/* 8. Sharing Your Personal Data */}
//         <p className="mb-3 text-sm sm:text-base font-roboto">
//           We only share your personal data in the following situations:
//         </p>
//         {/* Sharing Table */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//           {recipientSections.map((section, index) => {
//             const isLast = index === dataSections.length - 1
//             const isIncompleteRow = dataSections.length % 3 !== 0 && isLast

//             return (
//               <div
//                 key={index}
//                 className={`bg-[#08090a] border border-gray-700 rounded-xl p-8 ${
//                   isIncompleteRow
//                     ? 'lg:col-span-3 flex flex-col  justify-self-center lg:w-[33%]'
//                     : ''
//                 }`}
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   {section.icon}
//                   <h3 className="text-lg sm:text-xl font-semibold text-white">{section.title}</h3>
//                 </div>
//                 <ul className="text-sm sm:text-base text-[#dddddd] space-y-2">
//                   {section.items.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       <div>
//         {/* 9. Data Retention */}
//         <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
//           <li>Templates and configurations remain until deleted by the user.</li>
//           <li>Billing records are retained as required by law.</li>
//           <li>API logs, if enabled, are stored for up to 7 days.</li>
//         </ul>
//         <p className="mb-3 text-sm sm:text-base font-roboto">
//           You can request data deletion by emailing{' '}
//           <a href="mailto:info@softinator.com" className="underline">
//             info@softinator.com
//           </a>
//         </p>
//       </div>

//       <div>
//         <p className="mb-4 text-sm sm:text-base font-roboto">
//           Your data may be stored or processed in countries outside your jurisdiction. We implement
//           standard contractual clauses and safeguard mechanisms to ensure lawful international
//           transfers.
//         </p>
//       </div>

//       <div>
//         {/* 11. How We Protect Your Data */}
//         <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
//           <li>Data in transit: Encrypted using TLS 1.3</li>
//           <li>Data at rest: Encrypted using AES-256</li>
//           <li>Logging: Disabled by default</li>
//           <li>Access: Restricted to authorized personnel only, based on least privilege</li>
//           <li>Monitoring: Regular audits and vulnerability scanning</li>
//           <li>We are ISO 27001:2022 and SOC 2 Type II certified.</li>
//         </ul>
//       </div>

//       <div>
//         {/* 12. Google Authentication */}
//         <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
//           <li>
//             If you choose to log in via Google: We access basic profile data (name, email) for
//             authentication only.
//           </li>
//           <li>We do not access your emails, calendar, or documents.</li>
//           <li>This data is handled securely and in accordance with this policy.</li>
//         </ul>
//       </div>

//       <div>
//         {/* 13. External Links */}
//         <p className="mb-4 text-sm sm:text-base font-roboto">
//           Outliny’s platform may contain links to third-party websites. We are not responsible for
//           the privacy practices of those websites. Always review their privacy policies separately.
//         </p>
//       </div>

//       <div>
//         {/* 14. Changes to This Policy */}
//         <p className="mb-4 text-sm sm:text-base font-roboto">
//           We may revise this Privacy Policy periodically. Changes will be posted here with an
//           updated “Effective Date.” Your continued use of Outliny after any update constitutes your
//           acceptance of the revised policy.
//         </p>
//       </div>

//       <div>
//         <ul className="ml-6 md:ml-11 mb-3 text-sm sm:text-base font-roboto">
//           <li className="mb-1">
//             📩 Email:{' '}
//             <a href="mailto:info@softinator.com" className="underline">
//               info@softinator.com
//             </a>
//           </li>
//         </ul>
//         <p className="mb-8 text-sm sm:text-base font-roboto">
//           We’re committed to protecting your privacy and maintaining transparency.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default PrivacyPolicyPage
export default function PrivacyPolicyPage() {
  return (
    <div className=" mt-20">
      {termsContent.map((section, idx) => (
        <section
          key={idx}
          id={`section-${idx + 1}`}
          className="space-y-8 scroll-mt-24 text-[#FFFFFFBF]"
        >
          <h2 className="text-xl  font-semibold text-white mb-2 mt-10 ml-6">
            {idx + 1}. {section.title}
          </h2>
          {section.content}
        </section>
      ))}
    </div>
  )
}
