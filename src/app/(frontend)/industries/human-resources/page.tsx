import React from 'react'
import Image from 'next/image'

export default function HumanResourcesPage() {
  const emailUseCases = [
    { text: 'Offer letters and welcome emails', image: '/vector6.svg', arrow: '/arrow.svg' },
    { text: 'Onboarding schedules and checklists', image: '/vector2.svg', arrow: '/arrow.svg' },
    { text: 'Performance review reminders', image: '/vector3.svg', arrow: '/arrow.svg' },
    { text: 'Policy change announcements', image: '/vector4.svg', arrow: '/arrow.svg' },
    {
      text: 'Exit process notifications and alumni outreach',
      image: '/vector1.svg',
      arrow: '/arrow.svg',
    },
  ]

  const pdfUseCases = [
    'Employment contracts and NDAs',
    'Payslip PDFs and salary revisions',
    'Certificates of employment',
    'Internal policy documents',
    'Leave summaries and appraisal reports',
  ]

  const devFriendlyFeatures = [
    { id: '01', title: 'No-code template editor for HR teams', image: '/pdf1.svg' },
    { id: '02', title: 'Developer-friendly API for automation', image: '/pdf1.svg' },
    { id: '03', title: 'Modular templates for easy customization', image: '/pdf1.svg' },
    { id: '04', title: 'WordPress plugin for internal HR portals', image: '/pdf2.svg' },
  ]

  const compliancePoints = [
    { id: '01', text: 'ISO 27001:2022 and SOC 2 Type II Certified' },
    { id: '02', text: 'Encrypted in transit and at rest' },
    { id: '03', text: 'Logs off by default, zero internal visibility' },
    { id: '04', text: 'Role-based access for template editing & sharing' },
  ]

  const testimonials = [
    {
      quote:
        'Outliny cut our onboarding time in half. Every welcome email and PDF is now branded, scheduled, and automated.',
      person: 'People Ops Lead, BrightHire',
    },
    {
      quote:
        'No more outdated HR documents. Our team can update, manage, and deliver offer letters and exit docs instantly.',
      person: 'HR Manager, TeamNest Global',
    },
  ]

  return (
    <div className="text-white  lg:mt-5 p-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-[24px] md:text-[30px] font-poppins font-semibold leading-[29px] capitalize">
          Outliny for Human Resources
        </h1>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Automate HR documents and emails with precision, personalization, and consistent branding.
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          From offer letters to onboarding emails, Outliny helps HR teams build, manage, and deliver
          polished, secure communications—at scale and with zero design overhead.
        </p>
        <div className="flex justify-center items-center">
          <Image src="/pdf.svg" alt="hr" width={578} height={323} />
        </div>
      </div>

      {/* Why HR Teams Use Outliny */}
      <div className="flex flex-col gap-4 mt-20 p-4">
        <h2 className="font-poppins font-semibold text-[25px] md:text-[30px] leading-7">
          Why HR Teams Use Outliny
        </h2>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Whether you&apos;re managing a growing workforce or building an internal culture, clarity
          and consistency in your communication are key.
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          Outliny helps you automate and streamline HR processes with dynamic templates for both
          emails and PDFs—so you can focus more on people, and less on paperwork.
        </p>

        <div className="flex flex-col items-center gap-4 mt-10">
          <Image src="/pdf2.png" alt="hr" width={700} height={100} />
          <Image src="/template.png" alt="hr" width={700} height={100} />
          <Image src="/template.png" alt="hr" width={700} height={100} />
        </div>
      </div>

      {/* Email Templates */}
      <div className="mt-20 p-4">
        <h2 className="font-poppins font-semibold text-[25px] md:text-[30px] mb-3">
          📧 HR Emails That Feel Personal, at Scale
        </h2>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Use our drag-and-drop MJML editor or start with pre-built templates to send branded,
          responsive emails across your entire employee lifecycle.
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

      {/* PDFs Section */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-2">
          📄 PDFs for Every HR Scenario
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-300 font-poppins mb-6">
          Generate clean, branded PDF documents with dynamic variables through the Outliny API.
          Build once, reuse forever.
        </p>

        <h3 className="font-semibold text-lg mt-5 mb-6 font-poppins text-[20px] leading-[29px] capitalize">
          Use Cases:
        </h3>

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

      {/* Compliance Section */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-poppins font-semibold mb-3">
          🔐 Built for HR Compliance & Confidentiality
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-6">
          HR data is sensitive by nature—Outliny protects it at every step.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {compliancePoints.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-md bg-[#181C25] flex items-center justify-center shrink-0 text-white text-sm font-semibold font-poppins">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-white text-sm md:text-base font-normal tracking-[0] capitalize font-poppins">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Friendly Section */}
      <div className="mt-20 bg-custom-gradient22 p-6 rounded-xl">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-4 text-white">
          🤝 Empower HR & IT Together
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-10">
          HR works best when it works with tech. Outliny gives both sides the tools they need:
        </p>
        <div className="flex flex-col gap-10">
          {devFriendlyFeatures.map((feature, idx) => (
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
          💬 What HR Teams Are Saying
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

      {/* Pricing Section */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] font-poppins text-white font-semibold md:text-[30px] mb-3">
          🎯 Start Building a Better Employee Experience
        </h2>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <p className="text-white">300 branded emails/month</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <p className="text-white">100 HR PDFs/month</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <p className="text-white">No monthly fee or subscription</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <p className="text-white">Credits never expire</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20">
        <button className="bg-custom-gradient21 p-4 rounded-xl text-black w-[300px] h-[50px] font-poppins font-bold text-[14px]  ">
          Start Free Today
        </button>
      </div>
    </div>
  )
}
