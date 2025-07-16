import React from 'react'
import Image from 'next/image'
import { RiTeamLine } from "react-icons/ri";

export default function RealEstatePage() {
  const emailUseCases = [
    {
      text: 'Client onboarding & appointment confirmations',
      image: '/vector6.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'Property alerts and newsletter campaigns',
      image: '/vector2.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'Agent onboarding and internal HR emails',
      image: '/vector3.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'Feedback requests after showings or closings',
      image: '/vector4.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'CRM-triggered emails (e.g. WordPress plugins)',
      image: '/vector1.svg',
      arrow: '/arrow.svg',
    },
  ]

  const pdfUseCases = [
    'Lease agreements and offer letters',
    'Monthly rent receipts and invoices',
    'Property brochures and fact sheets',
    'ID verification documents with barcodes',
    'Legal disclosures and signable documents',
  ]

  const leaseWorkflow = [
    { id: '01', text: 'Create a lease agreement template with dynamic fields ' },
    { id: '02', text: 'Populate data through API (tenant name, property, rent, dates)' },
    { id: '03', text: 'Render & download instantly as PDF' },
    { id: '04', text: 'Send as email attachment or save to cloud' },
  ]

  const integrationFeatures = [
    { id: '01', title: 'WordPress Integration for client portals & CRM', image: '/pdf1.svg' },
    {
      id: '02',
      title: 'Reusable Modules for legal disclaimers, contact info, logos',
      image: '/pdf1.svg',
    },
    {
      id: '03',
      title: 'SOC 2 & ISO 27001 Certified for full data security',
      image: '/pdf1.svg',
    },
    {
      id: '04',
      title: 'MJML Import/Export to keep your workflow open',
      image: '/pdf2.svg',
    },
  ]

  const testimonials = [
    {
      quote:
        'We send over 2,000 lease agreements monthly through Outliny. The ability to maintain our brand while automating everything has been a game-changer.',
      person: 'Director of Operations, Skyline ',
    },
    {
      quote:
        'From client reminders to signed PDFs—Outliny has helped us reduce manual work by 80%.',
      person: 'Tech Lead, UrbanNest CRM',
    },
  ]

  return (
    <div className="text-white  lg:mt-5 p-4 ">
      {/* Header Section */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-[24px] md:text-[30px] font-poppins font-semibold leading-[29px] capitalize">
          Outliny for Real Estate
        </h1>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Streamline communications. Impress clients. Close deals faster.
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          Outliny helps real estate companies create branded, consistent, and automated emails and
          PDFs—without reinventing the wheel every time.
        </p>
        <div className="flex justify-center items-center">
          <Image src="/pdf.svg" alt="real estate" width={578} height={323} />
        </div>
      </div>

      {/* Why Real Estate Teams Choose Outliny */}
      <div className="flex flex-col gap-4 mt-20 p-4">
        <h2 className="text-[24px] md:text-[30px] font-poppins font-semibold leading-[29px] capitalize lg:leading-[35px] ">
          Why Real Estate Teams Choose Outliny
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          Whether you&apos;re sending appointment reminders, lease agreements, or promotional
          newsletters, your brand needs to shine in every message. Outliny gives you full control of
          your document and email branding—centrally managed, secure, and API-driven.
        </p>

        <div className="flex flex-col items-center gap-4 mt-10">
          <Image src="/pdf2.png" alt="real estate" width={625} height={211} />
          <Image src="/template.png" alt="real estate" width={700} height={100} />
          <Image src="/template.png" alt="real estate" width={700} height={100} />
        </div>
      </div>

      {/* Email Templates */}
      <div className="mt-20 p-4 flex flex-col  gap-4">
        <h2 className="text-[24px] md:text-[30px] font-poppins font-semibold leading-[29px] capitalize ">
          Emails That Make an Impression
        </h2>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Use Outliny to create stunning, responsive email templates using our MJML editor and
          drag-drop builder.
        </h2>

        <h3 className="font-semibold text-lg  mb-6 font-poppins text-[20px] leading-[29px] capitalize">
          Use Cases:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-start">
          {emailUseCases.map((text, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="flex flex-col items-center max-w-[180px]">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-4">
                  <Image src={text.image} alt="icon" width={24} height={24} />
                </div>
                <p className="text-[13px] text-gray-300  font-poppins text-center">{text.text}</p>
              </div>
              {index < 4 && (
                <div className="hidden lg:block absolute top-6 -right-4 transform translate-x-[30%]">
                  <Image src={text.arrow} alt="arrow" width={50} height={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PDF Generation */}
      <div className="mt-20 p-4 flex flex-col gap-4">
        <h2 className="text-[24px] md:text-[30px] font-poppins font-semibold leading-[29px] capitalize lg:leading-[35px] ">
          PDF Documents Branded & Automated
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-300 font-poppins mb-6">
          Generate high-quality, on-brand PDFs with dynamic content for every stage of the property
          lifecycle.
        </p>

        <div className="flex items-center justify-between flex-col lg:flex-row gap-20  max-w-[1000px]">
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
                <div className="w-12 h-12 rounded-md bg-[#181C25] flex items-center justify-center text-white text-sm font-semibold font-mono shrink-0">
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

      {/* Lease Agreement Workflow */}
      <div className="mt-20 p-4 ">
        <h2 className="text-[23px] md:text-[30px] font-poppins font-semibold leading-[29px] capitalize mb-10 md:leading-[35px]">
          Example Flow: Lease Agreement Automation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {leaseWorkflow.map((item, index) => (
            <div key={index} className="flex items-center gap-4  ">
              <div className="w-12 h-12 rounded-md bg-[#181C25] flex items-center justify-center text-white text-sm font-semibold font-poppins shrink-0 ">
                {item.id}
              </div>
              <p className="text-white text-sm md:text-base font-normal tracking-[0] capitalize font-poppins">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Section  bg-custom-gradient22 is optional*/}
      <div className="mt-20  p-6 rounded-xl bg-custom-gradient22 ">
        <h2 className="text-[25px] md:text-[30px] font-semibold flex gap-3 font-poppins mb-4 text-white text-balance">
           <RiTeamLine className='mt-1'/> Tools Your Team Will Love
        </h2>
        <div className="flex flex-col gap-10 mt-10">
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
          Real Estate Clients Say...
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
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
        <button className="bg-custom-gradient21 p-4 rounded-xl text-black w-[300px] h-[50px] font-poppins font-bold text-[14px]  ">
          Create a free account
        </button>
          <p className="text-gray-400 text-center">
            Or <span className="text-blue-500 font-poppins cursor-pointer hover:underline">Book a Demo</span> to
            see how Outliny can help your real estate operation scale smarter.
          </p>
        </div>
      </div>
    </div>
  )
}
