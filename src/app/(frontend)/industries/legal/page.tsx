import React from 'react'
import Image from 'next/image'

export default function LegalPage() {
  const emailUseCases = [
    { text: 'Client intake and onboarding emails', image: '/vector6.svg', arrow: '/arrow.svg' },
    { text: 'Case updates and appointment reminders', image: '/vector2.svg', arrow: '/arrow.svg' },
    {
      text: 'Legal newsletter and educational content',
      image: '/vector3.svg',
      arrow: '/arrow.svg',
    },
    { text: 'Internal compliance or HR notifications', image: '/vector4.svg', arrow: '/arrow.svg' },
    {
      text: '"Automated emails from your case management software."',
      image: '/vector1.svg',
      arrow: '/arrow.svg',
    },
  ]

  const pdfUseCases = [
    'Retainer and engagement letters',
    'Power of attorney forms',
    'Non-disclosure and contract templates',
    'Court filing cover sheets',
    'ID verifications, barcoded documents, and e-signature ready PDFs',
  ]

  const securityFeatures = [
    { id: '01', text: 'Zero visibility: even Outliny employees can&apos;t see your data' },
    { id: '02', text: 'Logs disabled by default' },
    { id: '03', text: 'Fully encrypted at rest and in transit' },
    { id: '04', text: 'Share templates across teams securely' },
  ]

  const integrationFeatures = [
    { id: '01', title: 'Use our REST API with your CMS, DMS, or legal CRMs', image: '/pdf1.svg' },
    {
      id: '02',
      title: 'Build reusable components (modules) for disclaimers, legal clauses, headers/footers',
      image: '/pdf1.svg',
    },
    {
      id: '03',
      title: 'Export or import MJML-based email templates—no vendor lock-in',
      image: '/pdf1.svg',
    },
    {
      id: '04',
      title: 'WordPress plugin support for legal service sites and client portals',
      image: '/pdf2.svg',
    },
  ]

  const testimonials = [
    {
      quote:
        'We automated our retainer letter process using Outliny—now our paralegals generate and send branded documents in seconds.',
      person: 'Managing Partner',
    },
    {
      quote:
        'The security and compliance credentials gave us peace of mind. Outliny feels like a natural extension of our legal ops tech stack.',
      person: 'Legal Operations Manager',
    },
  ]

  return (
    <div className="text-white mt-28 lg:mt-5 p-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-[25px] md:text-[30px] font-poppins font-semibold leading-[29px] capitalize">
          ⚖️ Outliny for Legal Teams
        </h1>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Automate legal document workflows with secure, branded emails and PDFs.
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          Outliny helps law firms and legal teams manage and deliver client-facing communications
          with speed, accuracy, and compliance—without sacrificing branding or control.
        </p>
        <div className="flex justify-center items-center">
          <Image src="/pdf.svg" alt="legal" width={500} height={500} />
        </div>
      </div>

      {/* Why Legal Teams Trust Outliny */}
      <div className="flex flex-col gap-4 mt-20 p-4">
        <h2 className="font-poppins font-semibold text-[25px] md:text-[30px] leading-7">
          Why Legal Professionals Trust Outliny
        </h2>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          In the legal world, clarity and professionalism are non-negotiable. Outliny ensures your
          firm delivers consistent, secure, and compliant documents—while reducing manual overhead.
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          Whether you&apos;re sending client updates, retainer agreements, or internal HR documents,
          Outliny helps you standardize your communications at scale.
        </p>

        <div className="flex flex-col items-center gap-4 mt-10">
          <Image src="/pdf2.png" alt="legal" width={700} height={100} />
          <Image src="/template.png" alt="legal" width={700} height={100} />
          <Image src="/template.png" alt="legal" width={700} height={100} />
        </div>
      </div>

      {/* Email Templates */}
      <div className="mt-20 p-4">
        <h2 className="font-poppins font-semibold text-[25px] md:text-[30px] mb-3">
          📧 Professional Email Templates, Done Right
        </h2>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Use our drag-and-drop MJML editor or start from a gallery of legal-focused templates to
          deliver well-structured, responsive emails that look great in every inbox.
        </h2>

        <h3 className="font-semibold text-lg mt-5 mb-6 font-poppins text-[20px] leading-[29px] capitalize">
          Use Cases:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-start">
          {emailUseCases.map((text, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="flex flex-col items-center w-full max-w-[180px]">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-4">
                  <Image src={text.image} alt="icon" width={24} height={24} />
                </div>
                <p className="text-[13px] text-gray-300 font-poppins text-center">{text.text}</p>
              </div>
              {index < 4 && (
                <div className="hidden lg:block absolute top-6 -right-4 transform translate-x-full">
                  <Image src={text.arrow} alt="arrow" width={50} height={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PDF Generation */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-2">
          📄 Generate Legal PDFs with Confidence
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-300 font-poppins mb-6">
          Create templates once—then render dynamic, professional-grade PDFs anytime through our
          secure API.
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
                <div className="w-12 h-12 rounded-md bg-[#181C25] flex items-center justify-center text-white text-sm font-semibold font-mono">
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
        <h2 className="text-[25px] md:text-[30px] font-poppins font-semibold mb-3">
          🔐 Security and Compliance Built In
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-6">
          Outliny is ISO 27001:2022 and SOC 2 Type II certified. We follow the highest standards for
          data handling and encryption.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {securityFeatures.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-md bg-[#181C25] flex items-center justify-center text-white text-sm font-semibold font-poppins">
                {String(index + 1).padStart(2, '0')}
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
          ⚙️ Integrate with Your Legal Stack
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
          💬 What Legal Teams Are Saying
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
          🎯 Get Started Today
        </h2>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <p className="text-white">300 secure emails/month</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <p className="text-white">100 PDF documents/month</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <p className="text-white">No subscription required</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <p className="text-white">Credits never expire</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Start Free
          </button>
          <p className="text-gray-400 text-center">
            Or <span className="text-blue-500 cursor-pointer hover:underline">Schedule a Demo</span>{' '}
            with our team to learn how Outliny fits your firm&apos;s workflow.
          </p>
        </div>
      </div>
    </div>
  )
}
