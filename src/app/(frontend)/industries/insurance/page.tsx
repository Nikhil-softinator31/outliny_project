import React from 'react'
import Image from 'next/image'

export default function InsurancePage() {
  const challengePoints = [
    {
      heading: 'High Volume Documentation:',
      text: 'Policies, quotes, certificates, claims forms, and regulatory notices require consistent branding and accurate information.',
    },
    {
      heading: 'Regulatory Compliance:',
      text: 'Communications must adhere to strict regulatory requirements that vary by region and line of business.',
    },
    {
      heading: 'Customer Experience:',
      text: 'Clear, professional communications directly impact customer satisfaction and retention.',
    },
    {
      heading: 'Operational Efficiency:',
      text: 'Document preparation and email communications often involve manual processes that create bottlenecks.',
    },
    {
      heading: 'Multi-Channel Delivery:',
      text: 'Customers expect seamless communications across digital and print channels.',
    },
  ]

  const policyDocuments = [
    'Create multi-page policy documents with dynamic sections based on coverage options',
    'Generate certificates of insurance with proper legal language and formatting',
    'Include dynamic charts and tables for coverage summaries',
    'Automatically incorporate appropriate regulatory disclosures based on jurisdiction',
  ]

  const claimsCommunications = [
    'Automated claim acknowledgment emails',
    'Dynamic PDF claim forms with prepopulated customer information',
    'Status update communications with consistent branding',
    'Explanation of benefits documents with custom calculations',
    'Settlement letters with appropriate legal language',
  ]

  const quotesAndProposals = [
    {
      id: '01',
      text: 'Multi-option quote comparisons with dynamic tables ',
      image: '/vector6.svg',
      arrow: '/arrow.svg',
    },
    {
      id: '02',
      text: 'Personalized coverage recommendations',
      image: '/vector6.svg',
      arrow: '/arrow.svg',
    },
    {
      id: '03',
      text: 'Premium breakdown visualizations',
      image: '/vector6.svg',
      arrow: '/arrow.svg',
    },
    {
      id: '04',
      text: 'Digital delivery with tracking capabilities',
      image: '/vector6.svg',
      arrow: '/arrow.svg',
    },
    {
      id: '05',
      text: 'Automated follow-up email sequences',
      image: '/vector6.svg',
      arrow: '/arrow.svg',
    },
  ]

  const regulatoryNotices = [
    'Privacy notices with jurisdiction-specific language',
    'Cancellation and non-renewal notices with proper timing and content',
    'Annual disclosure documents',
    'Special event notifications (e.g., disaster preparedness)',
  ]

  const integrationCapabilities = [
    {
      id: '01',
      title: 'Policy Administration Systems: Direct integration with leading platforms',
      image: '/pdf1.svg',
    },
    {
      id: '02',
      title: 'CRM Systems: Connect customer data for personalized communications',
      image: '/pdf1.svg',
    },
    {
      id: '03',
      title: 'Claims Management Software: Trigger automated communications based on claim status',
      image: '/pdf1.svg',
    },
    {
      id: '04',
      title: 'Agency Management Systems: Enable agencies to generate branded materials',
      image: '/pdf2.svg',
    },
    {
      id: '05',
      title: 'Customer Portals: Deliver documents directly to customer self-service portals',
      image: '/pdf2.svg',
    },
  ]

  const compliancePoints = [
    { id: '01', text: 'ISO 27001:2022 and SOC 2 Type II certifications ensure data security' },
    { id: '02', text: 'End-to-end encryption protects sensitive policyholder information' },
    { id: '03', text: 'Detailed audit logs (optional) for compliance tracking' },
    { id: '04', text: 'Template versioning for historical reference and regulatory audits' },
  ]

  const roiPoints = [
    {
      id: '01',
      text: 'Cost Reduction: Eliminate pre-printed forms and reduce print/mail costs by 40-60%',
    },
    { id: '02', text: 'Operational Efficiency: Reduce document creation time by up to 90%' },
    {
      id: '03',
      text: 'Improved Customer Experience: Increase Net Promoter Scores by an average of 18 points',
    },
    { id: '04', text: 'Compliance Management: Reduce regulatory compliance issues by 75%' },
    {
      id: '05',
      text: 'Brand Consistency: Eliminate inconsistencies across all customer communications',
    },
  ]

  const caseStudy = {
    quote:
      'A mid-size regional insurer implemented Outliny to address inconsistent branding and slow document generation times. Reduced policy issuance time from 4 days to 20 minutes, achieved 87% reduction in document-related customer service calls, and completely eliminated branding inconsistencies.',
    person: 'Regional Insurance Provider',
  }

  return (
    <div className="text-white mt-28 lg:mt-5 p-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-[25px] md:text-[30px] font-poppins font-semibold leading-[29px] capitalize">
          Transform Insurance Communications with Outliny
        </h1>
        <h2 className="font-poppins text-[14px] md:text-[16px] leading-5 md:leading-6 capitalize">
          Streamline document generation, enhance customer communications, and maintain compliance
          across all policyholder touchpoints.
        </h2>
        <div className="flex justify-center items-center">
          <Image src="/pdf.svg" alt="insurance" width={500} height={500} />
        </div>
      </div>

      {/* Industry Challenges */}
      <div className="mt-20 p-4">
        <h2 className="font-poppins font-semibold text-[25px] md:text-[30px] mb-3">
          Industry Challenges
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-300 font-poppins mb-6">
          Insurance companies face unique challenges when managing customer communications:
        </p>

        <div className="grid gap-4">
          {challengePoints.map((point, index) => (
            <div
              key={index}
              className="p-4   flex gap-2"
              style={{
                borderBottom: '1.16px solid',
                borderImageSource:
                  'linear-gradient(270deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
                borderImageSlice: 3,
              }}
            >
              <p className="text-[16px] text-gray-300 font-poppins font-bold ">{point.heading}</p>
              <p className="text-[16px] text-gray-300 font-poppins">{point.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Policy Document Generation */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-2">
          📄 Policy Document Generation
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-300 font-poppins mb-6">
          Generate professionally branded policy documents, certificates of insurance, and
          endorsements on demand. Outliny&apos;s dynamic PDF templates ensure that all policy
          information is accurately presented while maintaining brand consistency.
        </p>

        <div className="flex items-center flex-col lg:flex-row gap-20 lg:gap-40">
          <div className="space-y-4">
            {policyDocuments.map((item, index) => (
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

      {/* Claims Communications */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-2">
          📱 Claims Communications
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-300 font-poppins mb-6">
          Streamline the entire claims communication process, from first notice of loss to
          resolution. Our templating system ensures that each touchpoint is professional,
          consistent, and contains the right information.
        </p>

        <div className="flex items-center flex-col lg:flex-row gap-20 lg:gap-40">
          <div className="space-y-4">
            {claimsCommunications.map((item, index) => (
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

      {/* Quotes and Proposals */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-2">
          💰 Quotes and Proposals
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-300 font-poppins mb-6">
          Create beautiful, professional quote documents that stand out from competitors.
          Outliny&apos;s templates allow you to showcase coverage options while maintaining
          compliance with regulatory requirements.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-5 items-center">
          {quotesAndProposals.map((text, index) => (
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
                <div className="hidden lg:block ">
                  <Image src={text.arrow} alt="arrow" width={50} height={20} className="" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Regulatory Notices */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-2">
          📋 Regulatory Notices
        </h2>
        <p className="text-[14px] md:text-[16px] text-gray-300 font-poppins mb-6">
          Manage the complex world of regulatory communications with templates that automatically
          include the correct language based on policy type, jurisdiction, and other variables.
        </p>

        <div className="flex items-center flex-col lg:flex-row gap-20 lg:gap-40">
          <div className="space-y-4">
            {regulatoryNotices.map((item, index) => (
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

      {/* Case Study */}
      <div className="mt-20">
        <h2 className="text-[25px] font-poppins text-white font-semibold md:text-[30px] mb-3">
          📊 Implementation Highlights: Case Study
        </h2>
        <div className="mb-8">
          <p className="text-gray-300 font-poppins text-sm md:text-base mb-3 font-normal">
            &ldquo;{caseStudy.quote}&rdquo;
          </p>
          <div className="py-3 mt-5 text-center border border-[#444] rounded-md bg-[#181C25] text-white w-[300px] h-[50px] font-poppins flex justify-center items-center">
            {caseStudy.person}
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-poppins font-semibold mb-3">
          🔐 Compliance & Security
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-6">
          Outliny&apos;s platform is designed with insurance compliance requirements in mind:
        </p>
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

      {/* Integration Capabilities */}
      <div className="mt-20 bg-custom-gradient22 p-6 rounded-xl">
        <h2 className="text-[25px] md:text-[30px] font-semibold font-poppins mb-4 text-white">
          🔄 Integration Capabilities
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-10">
          Seamlessly connect Outliny with your existing insurance technology stack:
        </p>
        <div className="flex flex-col gap-10">
          {integrationCapabilities.map((feature, idx) => (
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

      {/* ROI Section */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] md:text-[30px] font-poppins font-semibold mb-3">
          📈 ROI for Insurance Companies
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-6">
          Implementing Outliny delivers measurable return on investment:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roiPoints.map((item, index) => (
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

      {/* Getting Started */}
      <div className="mt-20 p-4">
        <h2 className="text-[25px] font-poppins text-white font-semibold md:text-[30px] mb-3">
          🚀 Getting Started
        </h2>
        <p className="text-gray-400 font-poppins text-sm md:text-base mb-6">
          Ready to transform your insurance communications?
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-blue-500">→</span>
            <p className="text-white">
              Schedule a Demo: See Outliny in action with insurance-specific examples
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">→</span>
            <p className="text-white">
              Proof of Concept: Test with a specific document type at no cost
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">→</span>
            <p className="text-white">
              Implementation Planning: Our experts will help map your communication workflows
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">→</span>
            <p className="text-white">
              Integration: Connect with your existing systems through our API
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">→</span>
            <p className="text-white">
              Template Development: Create or customize templates for your specific needs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
