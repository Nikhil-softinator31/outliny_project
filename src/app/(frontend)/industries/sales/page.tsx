import React from 'react'
import Image from 'next/image'

export default function SalesPage() {
  const UseCases1 = [
    { text: 'Cold outreach & inbound lead replies', image: '/vector6.svg', arrow: '/arrow.svg' },
    {
      text: 'Product demos & discovery call scheduling',
      image: '/vector2.svg',
      arrow: '/arrow.svg',
    },
    { text: 'Quote delivery and pricing breakdowns', image: '/vector3.svg', arrow: '/arrow.svg' },
    {
      text: 'Follow-ups and nudges with dynamic variables',
      image: '/vector4.svg',
      arrow: '/arrow.svg',
    },
    { text: 'CRM-triggered emails', image: '/vector1.svg', arrow: '/arrow.svg' },
  ]

  const UseCases2 = [
    'Proposals And Pitch Decks   Proposals And Pitch Decks ',
    'Custom Quotes And Pricing  Proposals And Pitch Decks ',
    'Contracts, SOWs, And NDAs Proposals And Pitch Decks ',
    'Case Studies And Sales  Proposals And Pitch Decks ',
    'One-Pagers, ROI Summaries  Proposals And Pitch Decks',
  ]

  const devFriendlyFeatures = [
    { id: '01', title: 'No-Code MJML Email Editor', image: '/pdf1.svg' },
    { id: '02', title: 'Drag-Drop PDF Builder With Jinja Templating', image: '/pdf1.svg' },
    { id: '03', title: 'Reusable Modules For Product, Pricing, Disclaimers', image: '/pdf1.svg' },
    { id: '04', title: 'CRM + ERP Integration Via API Or Zapier', image: '/pdf2.svg' },
    { id: '05', title: 'MJML Import/Export For Complete Control', image: '/pdf2.svg' },
  ]

  const compliancePoints = [
    { id: '01', text: 'ISO 27001:2022 & SOC 2 Type II Certified' },
    { id: '02', text: 'Templates Encrypted At Rest And In Transit' },
    { id: '03', text: 'Logs Off By Default, With No Internal Visibility' },
    { id: '04', text: 'Version Control For Template Accuracy And Consistency' },
  ]

  const testimonials = [
    {
      quote:
        'Outliny gave us a sales edge—proposals and quotes go out 10x faster and look 10x better',
      person: 'Director of Sales, ScaleUp CRM',
    },
    {
      quote:
        "We built a full branded proposal system using Outliny's PDF API. Now every rep can send deals with confidence.",
      person: 'Manager, LeadSprint',
    },
  ]

  return (
    <div className="text-white mt-28 lg:mt-5 p-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-[25px] md:text-[30px] font-poppins font-semibold leading-[29px] capitalize">
          Outliny For Sales
        </h1>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Close deals faster with branded proposals, pitch emails, and follow-ups—automated and on
          point.
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          Outliny helps sales teams deliver consistent, high-impact communication through dynamic
          email and PDF templates that are secure, reusable, and easy to personalize.
        </p>
        <div className="flex justify-center items-center">
          <Image src="/pdf.svg" alt="sales" width={500} height={500} />
        </div>
      </div>

      {/* Why Sales Teams Choose Outliny */}
      <div className="flex flex-col gap-4 mt-20 p-4">
        <h2 className="font-poppins font-semibold text-[25px] md:text-[30px] leading-7">
          Why Sales Teams Choose Outliny
        </h2>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Every touchpoint counts in sales. Outliny gives reps and sales ops teams the tools to
          automate communication and ensure that every quote, follow-up, and contract stays
          on-brand, accurate, and fast.
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          No more messy docs or outdated emails—just clean, professional templates your team can
          trust.
        </p>

        <div className="flex flex-col items-center gap-4 mt-10">
          <Image src="/pdf2.png" alt="sales" width={700} height={100} />
          <Image src="/template.png" alt="sales" width={700} height={100} />
          <Image src="/template.png" alt="sales" width={700} height={100} />
        </div>
      </div>

      {/* Email Templates */}
      <div className="mt-20 p-4">
        <h2 className="font-poppins font-semibold text-[25px] md:text-[30px] mb-3">
          Email Templates That Convert
        </h2>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Send personalized, branded emails across every stage of your funnel with modular MJML
          templates managed in one place.
        </h2>

        <h3 className="font-semibold text-lg mt-5 mb-6 font-poppins text-[20px] leading-[29px] capitalize">
          Use Cases:
        </h3>

        <div className="flex flex-wrap justify-center lg:justify-start gap-5 items-center">
          {UseCases1.map((text, index) => (
            <div key={index} className="flex items-center flex-col lg:flex-row gap-10 lg:gap-4 justify-center">
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

      {/* Sales PDFs */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-2">
          Sales PDFs That Seal The Deal
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-300 font-poppins mb-6">
          Auto-generate custom PDFs for quotes, proposals, and contracts—fully branded and
          dynamically filled via API.
        </p>

        <h3 className="font-semibold text-lg mt-5 mb-6 font-poppins text-[20px] leading-[29px] capitalize">
          Use Cases:
        </h3>

        <div className="flex  items-center flex-col lg:flex-row  gap-20 lg:gap-40">
          <div className="space-y-4">
            {UseCases2.map((item, index) => (
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

      {/* Developer Friendly Section */}
      <div className="mt-20 bg-custom-gradient22 p-6  rounded-xl">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-4 text-white">
          Sales-Ready, Developer-Friendly
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-10">
          Empower your sales ops and dev teams with:
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

      {/* Compliance Section */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-poppins font-semibold mb-3">
          Compliance & Brand Integrity, Always
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-6">
          Outliny Helps Protect Your Deals And Your Data
        </p>
        <h3 className="text-white font-semibold font-poppins mb-4 text-lg">Use Cases:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {compliancePoints.map((item, index) => (
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

      {/* Testimonials Section */}
      <div className="mt-20">
        <h2 className="text-[25px] font-poppins text-white font-semibold md:text-[30px] mb-3">
          What Sales Teams Are Saying
        </h2>
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="mb-8">
            <p className="text-gray-300 font-poppins text-sm md:text-base mb-3 font-normal">
              {testimonial.quote}
            </p>
            <div className="py-3 mt-5 text-center border border-[#444] rounded-md bg-[#181C25] text-white w-[300px] h-[50px] font-poppins flex justify-center items-center">
              {testimonial.person}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center items-center mt-20">
        <button className="bg-custom-gradient21 p-4 rounded-xl text-black w-[300px] h-[50px] font-poppins font-bold text-[14px]">
          Start Free Today
        </button>
      </div>
    </div>
  )
}
