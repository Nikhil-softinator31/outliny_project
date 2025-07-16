import React from 'react'
import Image from 'next/image'
import { CiUnlock } from "react-icons/ci";
import { GiBrain } from "react-icons/gi";
import { PiTargetDuotone } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import { FaToolbox } from "react-icons/fa6";

export default function MarketingPage() {
  const emailUseCases = [
    {
      text: 'Welcome and onboarding emails',
      image: '/vector6.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'Newsletter and promotional campaigns',
      image: '/vector2.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'Event invitations and follow-ups',
      image: '/vector3.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'Post-purchase journeys (for eCommerce teams)',
      image: '/vector4.svg',
      arrow: '/arrow.svg',
    },
    {
      text: 'CRM-integrated campaigns (HubSpot, Mailchimp, etc.)',
      image: '/vector1.svg',
      arrow: '/arrow.svg',
    },
  ]

  const pdfUseCases = [
    'Client performance reports (SEO, Ads, CRM)',
    'Whitepapers and lead magnets',
    'Proposals, pitch decks, or case studies',
    'Downloadable event materials or brochures',
    'Personalized PDF thank-you notes or loyalty offers',
  ]

  const collaborationFeatures = [
    { id: '01', text: 'Drag-and-drop email + PDF editors' },
    { id: '02', text: 'Jinja templating for dynamic personalization' },
    { id: '03', text: 'Reusable design modules' },
    { id: '04', text: 'Full MJML import/export for compatibility' },
    { id: '05', text: 'Git-friendly workflow for template version control' },
  ]

  const securityFeatures = [
    { id: '01', text: 'SOC 2 Type II & ISO 27001:2022 Certified' },
    { id: '02', text: 'Templates and data encrypted in transit and at rest' },
    { id: '03', text: 'No template access by Outliny employees' },
    { id: '04', text: 'Logs disabled by default, ensuring GDPR & CCPA safety' },
  ]

  const testimonials = [
    {
      quote:
        'Outliny gave our agency the power to deliver branded PDF campaign reports—without spending hours in Canva or Docs.',
      person: 'Creative Director, Boost Digital',
    },
    {
      quote:
        'We run 20+ client campaigns at a time. Outliny helps us keep every email and downloadable asset perfectly on-brand.',
      person: 'Email Marketing Lead, SparkAgency',
    },
  ]

  return (
    <div className="text-white  lg:mt-5 p-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-[25px] md:text-[30px] font-poppins font-semibold leading-[29px] capitalize">
           Outliny for Marketing
        </h1>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Deliver branded campaigns, automate PDFs, and scale content across teams—with zero design
          bottlenecks.
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          Outliny helps marketing teams and agencies centralize their email and PDF templates,
          streamline creative workflows, and ensure brand consistency across every client
          touchpoint.
        </p>
        <div className="flex justify-center items-center">
          <Image src="/pdf.svg" alt="marketing" width={578} height={323} />
        </div>
      </div>

      {/* Why Marketing Teams Love Outliny */}
      <div className="flex flex-col gap-4 mt-20 p-4">
        <h2 className="font-poppins font-semibold text-[25px] md:text-[30px] leading-7">
          Why Marketing Teams Love Outliny
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#838484] font-poppins leading-5 md:leading-6 capitalize">
          From welcome emails to campaign reports, your brand is always on display. Outliny lets you
          build, reuse, and customize on-brand templates—while giving your developers and creatives
          complete flexibility.
        </p>

        <div className="flex flex-col items-center gap-4 mt-10">
          <Image src="/pdf2.png" alt="marketing" width={700} height={100} />
          <Image src="/template.png" alt="marketing" width={700} height={100} />
          <Image src="/template.png" alt="marketing" width={700} height={100} />
        </div>
      </div>

      {/* Email Templates */}
      <div className="mt-20 p-4">
        <h2 className="font-poppins flex gap-3 font-semibold text-[25px] md:text-[30px] mb-3">
          <HiOutlineMail className='mt-2'/>  Email Templates for Campaigns & Automation
        </h2>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Design beautiful, responsive emails using our MJML editor. Share and reuse blocks across
          campaigns, and collaborate across teams without code clashes.
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
        <h2 className="text-[25px] flex gap-3 md:text-[30px] font-semibold font-poppins mb-2">
          <IoIosPaper className='mt-2'/>  PDFs That Market Smarter
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-300 font-poppins mb-6">
          Generate automated PDFs for lead magnets, performance reports, or branded
          deliverables—directly from campaign data or CRM events.
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

      {/* Collaboration Features */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] flex gap-3 font-semibold font-poppins mb-3">
          <FaToolbox className='mt-2'/> Built for Creative-Dev Collaboration
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-6">
          Outliny bridges the gap between marketing teams and developers by offering:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {collaborationFeatures.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-md bg-[#181C25] flex items-center justify-center shrink-0 text-white text-sm font-semibold font-poppins">
                {item.id}
              </div>
              <p className="text-white text-sm md:text-base font-normal tracking-[0] capitalize font-poppins">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Security Section */}
      <div className="mt-20 bg-custom-gradient22 p-6 rounded-xl">
        <h2 className="text-[25px] md:text-[30px] flex gap-3 font-semibold font-poppins mb-4 text-white">
          <CiUnlock className='mt-2'/>  Secure, Scalable, Brand-Safe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {securityFeatures.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 rounded-md bg-[#181C25] flex items-center justify-center shrink-0 text-white text-sm font-semibold font-poppins">
                {item.id}
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
        <h2 className="text-[25px] font-poppins flex gap-3 text-white font-semibold md:text-[30px] mb-3">
          <GiBrain className='mt-2'/> What Marketing Teams Are Saying
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
        <h2 className="text-[25px] font-poppins flex gap-3 text-white font-semibold md:text-[30px] mb-3">
          <PiTargetDuotone className='mt-2'/> Try It Free – No Strings Attached
        </h2>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center gap-2">
            <span >✔</span>
            <p className="text-white">300 emails/month</p>
          </div>
          <div className="flex items-center gap-2">
            <span >✔</span>
            <p className="text-white">100 PDF documents/month</p>
          </div>
          <div className="flex items-center gap-2">
            <span >✔</span>
            <p className="text-white">Zero subscription fees</p>
          </div>
          <div className="flex items-center gap-2">
            <span >✔</span>
            <p className="text-white">Credits never expire</p>
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
