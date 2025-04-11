'use client'

import React from 'react'
import Image from 'next/image'

// Define the type for testimonials
type Testimonial = {
  para: string
  img: string
  heading: string
  subHeading: string
}

const testimonials1: Testimonial[] = [
  {
    para: '“Outliny has dramatically streamlined our document generation workflow. Centralizing our brand assets has never been easier, a huge time saver!”',
    img: '/arrow-right.svg',
    heading: 'Alex Carter',
    subHeading: '@alexcarter',
  },
  {
    para: '“Finally, we have consistent branding across every PDF and email. Integration with our existing apps was effortless, and the version control is a lifesaver!”',
    img: '/arrow-right.svg',
    heading: 'Jordan Lee',
    subHeading: '@jordanlee',
  },
  {
    para: '“The reusable components alone are worth it. Our team creates templates in minutes rather than hours now. Exceptional product!”',
    img: '/arrow-right.svg',
    heading: 'Mia Bennett',
    subHeading: '@miabennett',
  },
  {
    para: '“Outliny’s focus on security and compliance made it easy to get internal buy-in. ISO 27001 and SOC 2 compliance gave our stakeholders confidence.”',
    img: '/arrow-right.svg',
    heading: 'Sam Patel',
    subHeading: '@sampatel',
  },
  {
    para: '“No vendor lock-in, open-source flexibility, and developer-friendly APIs. Outliny truly understands the needs of enterprise dev teams.”',
    img: '/arrow-right.svg',
    heading: 'Devon Harris',
    subHeading: '@devonharris',
  },
  {
    para: '“Bulk PDF generation at scale without downtime or hassle. Outliny just works exactly what enterprise software should be.”',
    img: '/arrow-right.svg',
    heading: 'Taylor Green',
    subHeading: '@taylorgreen',
  },
  {
    para: '“Outliny transformed our branding process overnight. PDFs, emails everything looks polished and professional.”',
    img: '/arrow-right.svg',
    heading: 'Chris Davis',
    subHeading: '@chrisdavis',
  },
]

const testimonials2: Testimonial[] = [
  {
    para: '“Managing email templates centrally through Outliny boosted our marketing team’s productivity significantly.”',
    img: '/arrow-right.svg',
    heading: 'Sophia Martin',
    subHeading: '@sophiamartin',
  },
  {
    para: '“The integration was seamless, and the developer documentation is top-notch. Outliny truly respects developer time.”',
    img: '/arrow-right.svg',
    heading: 'Liam Richardson',
    subHeading: '@liamrichardson',
  },
  {
    para: '“We cut our document creation time by more than half using Outliny’s reusable components. Huge efficiency win!”',
    img: '/arrow-right.svg',
    heading: 'Emma Thompson',
    subHeading: '@emmathompson',
  },
  {
    para: '“Outliny’s emphasis on privacy and compliance made the decision easy. No worries about data security anymore.”',
    img: '/arrow-right.svg',
    heading: 'Nate Simmons',
    subHeading: '@natesimmons',
  },
  {
    para: '“Open-source, reliable, and user-friendly. Our whole dev team loves Outliny for managing complex template workflows.”',
    img: '/arrow-right.svg',
    heading: 'Ava White',
    subHeading: '@avawhite',
  },
  {
    para: '“Easy version control means our templates stay accurate and organized. Branding consistency has never been simpler.”',
    img: '/arrow-right.svg',
    heading: 'Ryan Mitchell',
    subHeading: '@ryanmitchell',
  },
  {
    para: '“We replaced three different tools with Outliny. The centralized management saved both cost and complexity.”',
    img: '/arrow-right.svg',
    heading: 'Olivia Foster',
    subHeading: '@oliviafoster',
  },
  {
    para: '“Bulk generation and testing through CSVs is a game-changer. Our operational efficiency soared after adopting Outliny.”',
    img: '/arrow-right.svg',
    heading: 'Benjamin Cruz',
    subHeading: '@benjamincruz',
  },
  {
    para: '“The flexibility of using MJML and Jinja made integration straightforward. Outliny fits perfectly into our stack.”',
    img: '/arrow-right.svg',
    heading: 'Zoe Anderson',
    subHeading: '@zoeanderson',
  },
]

const TestimonialRow = ({
  direction,
  data,
}: {
  direction: 'left' | 'right'
  data: Testimonial[]
}) => (
  <div className="relative w-full overflow-hidden mt-6 group">
    <div className={`flex space-x-4 sm:space-x-6 animate-marquee-${direction}`}>
      {data.concat(data).map((test, index) => (
        <div
          key={index}
          className="min-w-[260px] sm:min-w-[320px] md:min-w-[400px] p-4 sm:p-6 rounded-xl bg-[#ffffff05] border border-gray-700 shadow-lg text-left cursor-pointer transition-all duration-300 hover:bg-custom-gradient1"
        >
          <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">{test.para}</p>
          <div className="flex items-center gap-3 sm:gap-4">
            <Image
              src={test.img}
              alt="User"
              width={48}
              height={48}
              className="w-10 sm:w-12 h-10 sm:h-12 object-cover rounded-full"
            />
            <div>
              <h2 className="text-white text-sm sm:text-lg font-semibold">{test.heading}</h2>
              <p className="text-gray-500 text-xs sm:text-sm">{test.subHeading}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const Testimonials = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 bg-[#08090a] text-white h-[500px] sm:h-[600px] md:h-[700px] flex flex-col justify-center items-center overflow-hidden mt-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center gradient-text">
        What People Are Saying
      </h2>
      <TestimonialRow direction="left" data={testimonials1} />
      <TestimonialRow direction="right" data={testimonials2} />
    </div>
  )
}

export default Testimonials
