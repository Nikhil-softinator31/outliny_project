import React from 'react'
import { FaMapPin } from "react-icons/fa";
import { CiUnlock } from "react-icons/ci";
import { ImUpload2 } from "react-icons/im";
import { BiSolidHandRight } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { PiMagnifyingGlassFill } from "react-icons/pi"; 
import { RiRestartFill } from "react-icons/ri";


const GeneratingPDFsFromHtml = () => {
const RequestBodyData = [
  {
    field: 'html',
    type: 'string',
    required: 'Optional',
    description: 'The full HTML content you want to render.',
  },
  {
    field: 'filename',
    type: 'string',
    required: 'Optional',
    description: 'Suggested filename for the generated PDF.',
  },
  {
    field: 'output_type',
    type: 'string',
    required: 'Optional',
    description: 'pdf (default) or base64.',
  },
  {
    field: 'page_settings',
    type: 'string',
    required: 'Optional',
    description: 'Customize page size, margins, orientation, etc.',
  },
]



  const ResponseData = [
    {
      field: 'status',
      type: 'string',
      description: 'success',
    },
    {
      field: 'file_url',
      type: 'string',
      description: '	(If output is URL) Downloadable link',
    },
    {
      field: 'file_base64',
      type: 'string',

      description: '(If output is base64) Encoded file content.',
    },
  ]

  const PageSettingsData = [
    {
      setting: 'format',
      description: 'Paper size (A4, Letter, etc.)',
      Example_Value: 'A4',
    },
    {
      setting: 'orientation',
      description: 'portrait or landscape',
      Example_Value: 'portrait',
    },
    {
      setting: 'margin',
      description: 'Margin size (e.g., "10mm", "1in")',
      Example_Value: '20mm',
    },
  ]


  return (
    <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-poppins">
        🧾 Generating PDFs from HTML
      </h1>

      <p className="max-w-5xl mx-auto text-center text-sm sm:text-base font-inter">
        Outliny allows you to generate beautiful, production-ready PDFs directly from raw HTML
        content. This is perfect if you already have a custom HTML layout or generate your document
        content dynamically.
      </p>

      <div className="mt-20">
        <h2 className="text-2xl md:text-[30px] flex gap-3 font-semibold text-white mt-20 mb-3">
        <PiMagnifyingGlassFill /> What is HTML-to-PDF Generation?
        </h2>
        <ul className="list-disc ml-6 md:ml-14 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>
            Instead of using a pre-designed template, you provide your own HTML code (optionally
            with inline CSS), and Outliny will render it into a clean, printable PDF file.
          </li>
          <li>It's fast, flexible, and gives you full control over layout and styling.</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold  flex gap-3 md:text-[30px] mb-3"> <FaMapPin/> Endpoint</h2>
        <ul className="list-disc ml-6 md:ml-14 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>POST /api/v1/render/pdf/html</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold md:text-[30px] flex gap-3 mb-3"><CiUnlock/> Authentication</h2>
        <ul className="list-disc ml-6 md:ml-14 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>Like all API requests, you must include your API Key:</li>
          <li>Authorization: Bearer YOUR_API_KEY</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold md:text-[30px] flex gap-3 mb-3"><ImUpload2/>  Request Body</h2>
        <table className="text-sm w-full table-auto border-collapse border border-gray-700 mb-6">
          <thead>
            <tr className="bg-[#1a1a1a] ">
              <th className="border border-gray-700 px-2 py-1 text-left">Field</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Type</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Required</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {RequestBodyData.map(({ field, type, required, description }) => (
              <tr key={field}>
                <td className="border border-gray-700 px-2 py-1">{field}</td>
                <td className="border border-gray-700 px-2 py-1 ">{type}</td>
                <td className="border border-gray-700 px-2 py-1 ">{required}</td>
                <td className="border border-gray-700 px-2 py-1">{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold flex gap-3 md:text-[30px] mb-3"><BsBoxSeam/> Example Request</h2>
        <pre className="overflow-hidden whitespace-pre-wrap bg-[#1a1a1a] p-4 rounded text-[13px] md:text-[14px] mb-6">
          {`POST https://api.outliny.com/api/v1/render/pdf/html
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "html": "<html><body><h1>Invoice #12345</h1><p>Thank you for your business!</p></body></html>",
  "filename": "invoice-12345.pdf",
  "page_settings": {
    "format": "A4",
    "margin": "20mm",
    "orientation": "portrait"
  }
}

OR

curl -X POST "https://outliny.com/api/getHtml" -H "Content-Type: application/json" -d
    '{
      "templateID": "67eb70b13db38972948a2597",
      "jsonData": {}
    }'
`}
        </pre>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold flex gap-3 md:text-[30px] mb-3"><ImUpload2/>  Response</h2>

        <table className="text-sm w-full table-auto border-collapse border border-gray-700 mb-6">
          <thead>
            <tr className="bg-[#1a1a1a]">
              <th className="border border-gray-700 px-2 py-1 text-left">Field</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Type</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {ResponseData.map(({ field, type, description }) => (
              <tr key={description}>
                <td className="border border-gray-700 px-2 py-1">{field}</td>
                <td className="border border-gray-700 px-2 py-1 ">{type}</td>

                <td className="border border-gray-700 px-2 py-1">{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Example Responses */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-10 flex gap-3 mb-3"><ImUpload2/>  Example Response</h2>
      <pre className=" overflow-auto  bg-[#1a1a1a] p-2 md:p-4 rounded text-sm overflow-x-auto mb-6">
        {`{
  "status": "success",
  "file_url": "https://api.outliny.com/files/generated/invoice-12345.pdf"
}

Or, if output_type: base64:

{
  "status": "success",
  "file_base64": "JVBERi0xLjQKJc..."
}
`}
      </pre>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-white md:text-[30px] mb-3">📐 Page Settings Options</h2>

        <table className="text-sm w-full table-auto border-collapse border border-gray-700 mb-6">
          <thead>
            <tr className="bg-[#1a1a1a]">
              <th className="border border-gray-700 px-2 py-1 text-left">Field</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Type</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {PageSettingsData.map(({ setting, description, Example_Value }) => (
              <tr key={description}>
                <td className="border border-gray-700 px-2 py-1">{setting}</td>
                <td className="border border-gray-700 px-2 py-1">{description}</td>
                <td className="border border-gray-700 px-2 py-1 ">{Example_Value}</td>

              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
          <p className="text-sm sm:text-base font-roboto mb-3">Default settings:</p>
          <ul className="list-disc ml-6 md:ml-14 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li>Format: A4</li>
            <li>Orientation: portrait</li>
            <li>Margin: 10mm</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl flex gap-3 font-semibold md:text-[30px] mb-3">
          <FaFireAlt/> Best Practices for HTML-to-PDF
        </h2>
        <ul className="list-disc ml-6 md:ml-14 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>Use inline styles (style="") where possible for more consistent rendering.</li>
          <li>
            Avoid using external CSS links — embed your styles inside <style></style> tags.
          </li>
          <li>
            Test your HTML for print-friendliness: avoid heavy scripts or non-printable elements.
          </li>
          <li>Keep content within standard page widths (~600px–800px) for best PDF layout.</li>
          <li>Use CSS @media print rules if needed for precise formatting.</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl flex gap-3 font-semibold md:text-[30px] mb-4">
         <RiRestartFill/>  Start Generating PDFs from HTML Today!
        </h2>
        <ul className="list-disc ml-6 md:ml-14 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li> Explore Full API Docs</li>
          <li> Learn More About Advanced PDF Options</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a
          href="/api-docs"
          className="bg-blue-600 flex gap-3 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition text-center"
        >
          <BiSolidHandRight className='mt-1'/> Explore Full API Docs
        </a>
        <a
          href="/advanced-pdf-options"
          className="bg-gray-100 text-gray-700 px-6 py-3 rounded shadow hover:bg-gray-200 transition flex gap-3 text-center"
        >
          <BiSolidHandRight className='mt-1'/> Learn More About Advanced PDF Options
        </a>
      </div>
    </div>
  )
}

export default GeneratingPDFsFromHtml

