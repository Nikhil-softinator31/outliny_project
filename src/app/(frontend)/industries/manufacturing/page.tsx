import React from 'react'
import Image from 'next/image'

export default function SalesPage() {
  const UseCases1 = [
    {
      text: 'Order confirmations and shipping updates',
      image: '/vector6.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'Inventory alerts and stock status reports',
      image: '/vector2.svg',
      arrow: '/arrow.svg',
    },
    { text: 'Quality assurance notifications', image: '/vector3.svg', arrow: '/arrow.svg' },
    {
      text: 'Internal communications for HR, safety, or compliance',
      image: '/vector4.svg',
      arrow: '/arrow.svg',
    },

  ]

  const UseCases2 = [
    'Packing slips and shipping labels (with barcodes) ',
    'Invoices and purchase orders ',
    'Safety reports and compliance forms',
    'Machine maintenance logs ',
    'Quality certificates and batch tracking summaries',
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
    { id: '02', text: 'All data encrypted in transit and at rest' },
    { id: '03', text: 'Logs disabled by default' },
    { id: '04', text: 'No employee access to your templates or payloads' },
  ]
  const compliancePoints2 = [
    { id: '01', text: 'Integrate with ERPs, MES, or logistics software via REST API' },
    {
      id: '02',
      text: 'Reuse modules for legal text, disclaimers, part references, and signatures',
    },
    { id: '03', text: 'Full MJML import/export support' },
    { id: '04', text: 'WordPress plugin available for distributor portals or internal dashboards' },
  ]

  const testimonials = [
    {
      quote:
        'We automated our shipping PDFs and inventory alerts using Outliny. It cut our manual email workload by 80%.',
      person: 'Plant Operations Manager, ',
    },
    {
      quote:
        "Our team no longer wastes time fixing document formatting. Outliny ensures every slip and email is right—every time.",
      person: ' Systems Lead, DeltaForge ',
    },
  ]

  return (
    <div className="text-white mt-28 lg:mt-5 p-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-[25px] md:text-[30px] font-poppins font-semibold leading-[29px] capitalize">
          Outliny for Manufacturing
        </h1>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Streamline operations, automate documents, and keep every stakeholder informed—with
          branded consistency.
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          Outliny helps manufacturing and logistics teams automate essential PDF and email
          workflows—ensuring accurate, compliant, and professional communication from floor to front
          office.e.
        </p>
        <div className="flex justify-center items-center">
          <Image src="/pdf.svg" alt="sales" width={500} height={500} />
        </div>
      </div>

      {/* Why Sales Teams Choose Outliny */}
      <div className="flex flex-col gap-4 mt-20 p-4">
        <h2 className="font-poppins font-semibold text-[25px] md:text-[30px] leading-7">
          Why Manufacturing Teams Trust Outliny
        </h2>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          In manufacturing, efficiency and precision are everything. Outliny helps teams eliminate
          manual formatting and scattered templates by centralizing their document creation and
          email delivery—backed by robust APIs and secure infrastructure.
        </h2>

        <div className="flex flex-col items-center gap-4 mt-10">
          <Image src="/pdf2.png" alt="sales" width={700} height={100} />
          <Image src="/template.png" alt="sales" width={700} height={100} />
        </div>
      </div>

      {/* Email Templates */}
      <div className="mt-20 p-4">
        <h2 className="font-poppins font-semibold text-[25px] md:text-[30px] mb-3">
          📧 Operational Emails, Automated & Branded
        </h2>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Design and manage all your operational and logistics-related emails in one place, with
          powerful MJML editing and modular design.
        </h2>

        <h3 className="font-semibold text-lg mt-5 mb-6 font-poppins text-[20px] leading-[29px] capitalize">
          Use Cases:
        </h3>

        <div className="flex flex-wrap justify-center lg:justify-start gap-5 items-center">
          {UseCases1.map((text, index) => (
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
              {index < 3 && (
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
          📄 PDF Templates for Mission-Critical Documents
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-300 font-poppins mb-6">
          Generate and deliver production-grade PDF documents using dynamic data and pre-approved
          templates—rendered automatically via API.
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
          🔐 Industrial-Grade Security & Compliance
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-6">
          With data moving across departments, vendors, and regions, security is non-negotiable.
          Outliny meets the highest enterprise standards:
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

      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-poppins font-semibold mb-3">
          🧰 Built to Fit Your Manufacturing Tech Stack
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-6">
          With data moving across departments, vendors, and regions, security is non-negotiable.
          Outliny meets the highest enterprise standards:
        </p>
        <h3 className="text-white font-semibold font-poppins mb-4 text-lg">Use Cases:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {compliancePoints2.map((item, index) => (
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
          💬 What Manufacturing Teams Are Saying
        </h2>
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="mb-8">
            <p className="text-gray-300 font-poppins text-sm md:text-base mb-3 font-normal">
              {testimonial.quote}
            </p>
            <div className=" mt-5 px-4 text-center border border-[#444] rounded-md bg-[#181C25] text-white w-[300px] h-[50px] font-poppins flex justify-center items-center">
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
