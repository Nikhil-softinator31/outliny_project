// app/generating-api/page.tsx
import React from 'react'
import { FaMapPin } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { ImUpload2 } from "react-icons/im";
import { CiUnlock } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaExclamation } from "react-icons/fa6";
import { RiBookShelfLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi2";
import { FaBook } from "react-icons/fa";

const GeneratingApiPage = () => {
  const errorRows = [
    { code: 400, error: 'invalid_request', description: 'Missing or invalid fields' },
    { code: 401, error: 'unauthorized', description: 'Missing/incorrect API key' },
    { code: 404, error: 'template_not_found', description: "Template ID doesn't exist" },
    { code: 500, error: 'internal_error', description: 'Server error—try later' },
  ]
  const RequestBodyData = [
    {
      field: 'template_id',
      type: 'string',
      required: 'Yes',
      description: 'ID of the PDF template you created in Outliny.',
    },
    {
      field: 'parameters',
      type: 'object',
      required: 'Yes',
      description: 'Key-value pairs replacing Jinja variables in template.',
    },
    {
      field: 'output_type',
      type: 'string',
      required: 'Optional',
      description: 'pdf (default) or base64.',
    },
    {
      field: 'filename',
      type: 'string',
      required: 'Optional',
      description: 'Suggested filename for downloaded file',
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
      description: '	(If hosted) URL to download the PDF',
    },
    {
      field: 'file_url',
      type: 'string',

      description: '(If output_type=base64) Base64-encoded PDF.',
    },
  ]

  const OutputTypeData = [
    {
      value: 'pdf',
      description: 'Hosted URL (default).',
    },
    {
      value: 'base64',
      description:
        'Returns the PDF directly encoded in base64 string (useful for APIs, internal storage, etc.).',
    },
  ]
  return (
    <>
      <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
        <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-poppins">
          📄 PDF Generation API
        </h1>
        <p className="mb-4 max-w-3xl mx-auto text-center text-sm sm:text-base font-inter">
          The Outliny PDF Generation API lets you create professional, dynamic PDFs from your
          templates with just one simple API call.
        </p>

        {/* Endpoint */}
        <h2 className="text-xl sm:text-2xl flex gap-3 font-semibold  md:text-[30px]  mb-3 mt-20">
          <FaMapPin/> Endpoint
        </h2>
        <pre className=" overflow-auto bg-[#1a1a1a] p-4 rounded text-sm overflow-x-auto mb-6">
          POST /api/v1/render/pdf
        </pre>

        {/* Auth */}
        <h2 className="text-xl sm:text-2xl flex gap-3 font-semibold mt-10 mb-3  md:text-[30px]">
         <CiUnlock/> Authentication
        </h2>
        <p className="text-gray-400 mb-4">Include your API Key in the Authorization header:</p>
        <pre className=" overflow-auto bg-[#1a1a1a] p-4 rounded text-sm overflow-x-auto mb-3">
          Authorization: Bearer YOUR_API_KEY
        </pre>
        <p className="text-sm text-gray-500 ">Need an API key? Create one in your dashboard.</p>

        {/* Request Body */}
        <h2 className="text-xl sm:text-2xl flex gap-3 font-semibold mt-9 mb-3  md:text-[30px]">
          <ImUpload2/> Request Body
        </h2>
        <table className="text-sm w-full table-auto border-collapse border border-gray-700 mb-6">
          <thead>
            <tr className=" bg-[#1a1a1a]">
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

        {/* Example Request */}
        <h2 className="text-xl sm:text-2xl flex gap-3 font-semibold mt-9 mb-3  md:text-[30px]">
          <BsBoxSeam/> Example Request
        </h2>
        <pre className=" overflow-hidden  whitespace-pre-wrap bg-[#1a1a1a] p-4 rounded text-[13px] md:text-[14px]  mb-6">
          {`POST https://api.outliny.com/api/v1/render/pdf
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "template_id": "template_123abc",
  "parameters": {
    "customer_name": "Jane Doe",
    "invoice_number": "INV-2025-001",
    "amount_due": "$500",
    "due_date": "2025-05-10"
  },
  "filename": "invoice-jane-doe.pdf"
}`}
        </pre>

        {/* Response */}
        <h2 className="text-xl sm:text-2xl flex gap-2 font-semibold mt-10 mb-3  md:text-[30px]">
        <ImUpload2/>Response
        </h2>
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

        {/* Example Responses */}
        <h2 className="text-xl sm:text-2xl flex gap-3 font-semibold mt-10 mb-3  md:text-[30px]">
        <ImUpload2/> Example Response (default output)
        </h2>
        <pre className=" overflow-auto  bg-[#1a1a1a] p-4 rounded text-sm overflow-x-auto mb-6">
          {`{
  "status": "success",
  "file_url": "https://api.outliny.com/files/generated/invoice-jane-doe.pdf"
}`}
        </pre>

        <h2 className="text-xl flex gap-3 sm:text-2xl font-semibold mt-10 mb-3  md:text-[30px]">
        <ImUpload2/> Example Response (base64)
        </h2>
        <pre className="overflow-auto bg-[#1a1a1a] p-4 rounded text-sm overflow-x-auto mb-6">
          {`{
  "status": "success",
  "file_base64": "JVBERi0xLjQKJc..."
}`}
        </pre>

        {/* Output Types */}
        <h2 className="text-xl sm:text-2xl flex gap-3 font-semibold mt-10 mb-3  md:text-[30px]">
        <IoSettingsOutline /> Output Types Explained
        </h2>
        <table className="text-sm w-full table-auto border-collapse border border-gray-700 mb-6">
          <thead>
            <tr className="bg-[#1a1a1a]">
              <th className="border border-gray-700 px-2 py-1 text-left">Value</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {OutputTypeData.map(({ value, description }) => (
              <tr key={value}>
                <td className="border border-gray-700 px-2 py-1">{value}</td>

                <td className="border border-gray-700 px-2 py-1">{description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Common Errors */}
        <h2 className="text-xl sm:text-2xl flex gap-3 font-semibold mt-10 mb-3  md:text-[30px]">
        <FaExclamation /> Common Errors
        </h2>
        <div className="overflow-x-auto">
          <table className="text-sm  w-full table-auto border-collapse border border-gray-700 mb-6">
            <thead>
              <tr className="bg-[#1a1a1a] ">
                <th className="border border-gray-700 px-2 py-1 text-left">HTTP Code</th>
                <th className="border border-gray-700 px-2 py-1 text-left">Error</th>
                <th className="border border-gray-700 px-2 py-1 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {errorRows.map(({ code, error, description }) => (
                <tr key={code}>
                  <td className="border border-gray-700 px-2 py-1">{code}</td>
                  <td className="border border-gray-700 px-2 py-1 text-red-600">{error}</td>
                  <td className="border border-gray-700 px-2 py-1">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-4 mb-3  md:text-[30px] flex gap-3"><RiBookShelfLine />
        Notes</h2>
        <ul className="list-disc ml-6 md:ml-12 mb-4 space-y-2  text-sm sm:text-base font-roboto">
          <li>
            Parameters must match Jinja variable names like <code>amount_due</code>
          </li>
          <li>PDFs typically generate within 1-3 seconds</li>
          <li>Files are private, securely hosted, and expire after a set period</li>
        </ul>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">
          <a
            href="/dashboard/pdf-generator"
            className="bg-blue-600 text-white px-6 flex gap-3 py-3 rounded shadow hover:bg-blue-700 transition text-center"
          >
           <HiLink className='mt-1'/> Use the PDF Generator
          </a>
          <a
            href="/docs"
            className="bg-gray-100 text-black flex gap-3 px-6 py-3 rounded shadow hover:bg-gray-200 transition duration-200 text-center"
          >
            <FaBook className='mt-1'/> See the Developer Docs
          </a>
          <a
            href="https://github.com/outliny"
            className="bg-gray-800 flex gap-3 text-white px-6 py-3 rounded shadow hover:bg-gray-900 transition text-center"
          >
            <FaGithub className='mt-1' /> Ask on GitHub
          </a>
        </div>
      </div>
    </>
  )
}
export default GeneratingApiPage
