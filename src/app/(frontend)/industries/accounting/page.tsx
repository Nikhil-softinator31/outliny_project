import React from 'react'
import Image from 'next/image'

export default function AccountingPage() {
  const emailUseCases = [
    {
      text: 'Invoice emails and recurring billing notifications',
      image: '/vector6.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'Tax season reminders and document requests',
      image: '/vector2.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'Client onboarding and instructions',
      image: '/vector3.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'Internal memos for compliance and HR updates',
      image: '/vector4.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'CRM-integrated financial workflows (e.g., FreshBooks, QuickBooks)',
      image: '/vector1.svg',
      arrow: '/arrow.svg',
    },
  ]

  const pdfUseCases = [
    'Monthly or quarterly financial statements',
    'Invoices and receipts (with barcodes or QR codes)',
    'Tax documents and audit reports',
    'Profit & loss summaries for clients',
    'Signable agreements and disclosures',
  ]

  const securityFeatures = [
    { id: '01', text: 'ISO 27001:2022 and SOC 2 Type II certified' },
    { id: '02', text: 'No staff access to client data—encrypted at rest and in transit' },
    { id: '03', text: 'Logs disabled by default' },
    { id: '04', text: 'Audit trails via your system—no storage on our end' },
  ]

  const integrationFeatures = [
    {
      id: '01',
      title: 'Trigger emails or PDFs via API using data from ERP, CRM, or billing systems',
      image: '/pdf1.svg',
    },
    {
      id: '02',
      title: 'Use reusable modules for footers, disclaimers, and signatures',
      image: '/pdf1.svg',
    },
    {
      id: '03',
      title: 'Seamlessly export/import MJML email templates',
      image: '/pdf1.svg',
    },
    {
      id: '04',
      title: 'WordPress plugin for client portals and invoice delivery',
      image: '/pdf2.svg',
    },
  ]

  const testimonials = [
    {
      quote:
        'We send thousands of invoices per month. With Outliny, our branding is finally consistent—automated and client-ready.',
      person: 'Partner, LedgerWorks LLP',
    },
    {
      quote:
        'Outliny helped us turn manual reporting into a one-click API. Now we generate branded PDF reports straight from our accounting software.',
      person: 'CFO, Finlytix',
    },
  ]

  return (
    <div className="text-white  lg:mt-5 p-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-[24px] md:text-[30px] font-poppins font-semibold leading-[29px] capitalize">
           Outliny for Accounting
        </h1>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Automate reports, invoices, and secure client emails—without compromising on brand or
          compliance.
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          Outliny empowers accountants, CPAs, and finance teams to streamline their PDF and email
          workflows with branded, secure, and programmable templates.
        </p>
        <div className="flex justify-center items-center">
          <Image src="/pdf.svg" alt="accounting" width={578} height={323} />
        </div>
      </div>

      {/* Why Accounting Teams Use Outliny */}
      <div className="flex flex-col gap-4 mt-20 p-4">
        <h2 className="font-poppins font-semibold text-[25px] md:text-[30px] leading-7">
          Why Accounting Teams Use Outliny
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          Accounting is detail-driven—and that should reflect in your client communications too.
          Whether you&apos;re sending invoices, monthly reports, or compliance forms, Outliny
          ensures they&apos;re professionally branded, accurately generated, and securely delivered.
        </p>

        <div className="flex flex-col items-center gap-4 mt-10">
          <Image src="/pdf2.png" alt="accounting" width={700} height={100} />
          <Image src="/template.png" alt="accounting" width={700} height={100} />
          <Image src="/template.png" alt="accounting" width={700} height={100} />
        </div>
      </div>

      {/* Email Templates */}
      <div className="mt-20 p-4">
        <h2 className="font-poppins font-semibold text-[25px] md:text-[30px] mb-3">
          📧 Automate Financial Email Communication
        </h2>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Use our MJML-powered builder to create and manage financial email templates that look
          clean and professional on any device.
        </h2>

        <h3 className="font-semibold text-lg mt-5 mb-6 font-poppins text-[20px] leading-[29px] capitalize">
          Use Cases:
        </h3>

        <div className="flex flex-wrap justify-center lg:justify-start gap-5 items-center">
          {emailUseCases.map((text, index) => (
            <div
              key={index}
              className="flex items-center flex-col lg:flex-row gap-10 lg:gap-4 justify-center"
            >
              <div className="flex flex-col items-center max-w-[180px]">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-4">
                  <Image src={text.image} alt="icon" width={24} height={24} />
                </div>
                <p className="text-[13px] text-gray-300 font-poppins text-center">{text.text}</p>
              </div>
              {index < 4 && (
                <Image
                  src={text.arrow}
                  alt="arrow"
                  width={50}
                  height={20}
                  className="rotate-90 lg:rotate-0"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PDF Generation */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-2">
          📄 Generate PDFs with Financial Precision
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-300 font-poppins mb-6">
          Build dynamic, multi-page PDFs using drag-and-drop or custom code, powered by Jinja
          variables and Puppeteer rendering.
        </p>

        <div className="flex items-center flex-col lg:flex-row gap-20 lg:gap-40">
          <div className="space-y-4">
            {pdfUseCases.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b border-b-gray-600 pb-2"
                style={{
                  borderBottom: '1.16px solid',
                  borderImageSource:
                    'linear-gradient(270deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
                  borderImageSlice: 3,
                }}
              >
                <div className="w-12 h-12 rounded-md bg-[#181C25] flex items-center justify-center shrink-0 text-white text-sm font-semibold font-mono">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-sm md:text-base text-white font-poppins">{item}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg overflow-hidden max-w-[400px] shadow-lg">
            <Image src="/vector2.svg" alt="PDF Preview" width={300} height={300} />
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-3">
          🔐 Data Security That Meets Compliance
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-6">
          Handling sensitive financial data comes with serious responsibility. Outliny is built with
          that in mind.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {securityFeatures.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-md bg-[#181C25] flex items-center justify-center text-white text-sm font-semibold shrink-0 font-poppins">
                {item.id}
              </div>
              <p className="text-white text-sm md:text-base font-normal tracking-[0] capitalize font-poppins">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="mt-20 bg-custom-gradient22 p-6 rounded-xl">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-4 text-white">
          ⚙️ Built for Finance Tools & Platforms
        </h2>
        <div className="flex flex-col gap-10">
          {integrationFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-6">
              <span className="text-[#888] text-lg font-semibold">{feature.id}</span>
              <div>
                <p className="text-white font-semibold text-base md:text-lg mb-5">
                  {feature.title}
                </p>
                <div className="rounded-md overflow-hidden border border-[#333]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={100}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-20">
        <h2 className="text-[25px] font-poppins text-white font-semibold md:text-[30px] mb-3">
          💬 What Finance Teams Are Saying
        </h2>
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="mb-8">
            <p className="text-gray-300 font-poppins text-sm md:text-base mb-3 font-normal">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="py-3 mt-5 text-center border border-[#444] rounded-md bg-[#181C25] text-white w-[300px] h-[50px] font-poppins flex justify-center items-center">
              {testimonial.person}
            </div>
          </div>
        ))}
      </div>

      {/* Getting Started */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] font-poppins text-white font-semibold md:text-[30px] mb-3">
          🎯 Start With Confidence
        </h2>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <p className="text-white">300 professional emails/month</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <p className="text-white">100 secure PDFs/month</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <p className="text-white">Pay-as-you-go credits</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <p className="text-white">No vendor lock-in</p>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4 items-center mt-20">
        <button className="bg-custom-gradient21 p-4 rounded-xl text-black w-[300px] h-[50px] font-poppins font-bold text-[14px]  ">
          Start Free Today
        </button>

        <p className="text-gray-400 text-center">
            Or <span className="text-blue-500 cursor-pointer hover:underline">Book a Demo</span> to
            see how Outliny fits your marketing team or agency workflow.
          </p>
      </div>  
      </div>
    </div>
  )
}
