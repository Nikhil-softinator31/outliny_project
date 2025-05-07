// app/generating-api/page.tsx
import React from 'react'

const GeneratingApiPage = () => {
  return (
    <section className="mt-24 md:mt-28 max-w-7xl mx-auto text-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">📄 PDF Generation API</h1>
      <p className="text-base sm:text-lg text-gray-400 mb-6">
        The Outliny PDF Generation API lets you create professional, dynamic PDFs from your
        templates with just one simple API call.
      </p>

      {/* Endpoint */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-3">📍 Endpoint</h2>
      <pre className="bg-gray-100 rounded p-4 overflow-auto text-sm text-black">
        POST /api/v1/render/pdf
      </pre>

      {/* Auth */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-3">🔐 Authentication</h2>
      <p className="text-gray-400 mb-4">Include your API Key in the Authorization header:</p>
      <pre className="bg-gray-100 rounded p-4 overflow-auto text-sm text-black">
        Authorization: Bearer YOUR_API_KEY
      </pre>
      <p className="text-sm text-gray-500 ">Need an API key? Create one in your dashboard.</p>

      {/* Request Body */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-3">📥 Request Body</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-400">
        <li>
          <strong>template_id</strong> (string, <span className="">required</span>) –
          ID of the template in Outliny
        </li>
        <li>
          <strong>parameters</strong> (object, <span className="">required</span>) –
          Key-value pairs replacing Jinja variables
        </li>
        <li>
          <strong>output_type</strong> (string, optional) – <code>pdf</code> (default) or{' '}
          <code>base64</code>
        </li>
        <li>
          <strong>filename</strong> (string, optional) – Suggested filename for the downloaded file
        </li>
      </ul>

      {/* Example Request */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-3">📦 Example Request</h2>
      <pre className="bg-gray-100 rounded p-4 overflow-auto text-sm text-black whitespace-pre-wrap">
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

      {/* Example Responses */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-3">📤 Example Response (URL)</h2>
      <pre className="bg-gray-100 rounded p-4 overflow-auto text-sm text-black">
        {`{
  "status": "success",
  "file_url": "https://api.outliny.com/files/generated/invoice-jane-doe.pdf"
}`}
      </pre>

      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-3">📤 Example Response (base64)</h2>
      <pre className="bg-gray-100 rounded p-4 overflow-auto text-sm text-black">
        {`{
  "status": "success",
  "file_base64": "JVBERi0xLjQKJc..."
}`}
      </pre>

      {/* Output Types */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-3">⚙️ Output Types</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-400">
        <li>
          <code>pdf</code>: Hosted URL (default)
        </li>
        <li>
          <code>base64</code>: Returns base64 string (for APIs, storage, etc.)
        </li>
      </ul>

      {/* Common Errors */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-3">❗ Common Errors</h2>
      <div className="overflow-x-auto">
        <table className="text-sm text-gray-500 w-full table-auto border-collapse border border-gray-700 mb-6">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-700 px-2 py-1 text-left">HTTP Code</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Error</th>
              <th className="border border-gray-700 px-2 py-1 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 px-2 py-1">400</td>
              <td className="border border-gray-700 px-2 py-1">invalid_request</td>
              <td className="border border-gray-700 px-2 py-1">Missing or invalid fields</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 py-1">401</td>
              <td className="border border-gray-700 px-2 py-1">unauthorized</td>
              <td className="border border-gray-700 px-2 py-1">Missing/incorrect API key</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 py-1">404</td>
              <td className="border border-gray-700 px-2 py-1">template_not_found</td>
              <td className="border border-gray-700 px-2 py-1">Template ID doesn't exist</td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-2 py-1">500</td>
              <td className="border border-gray-700 px-2 py-1">internal_error</td>
              <td className="border border-gray-700 px-2 py-1">Server error—try later</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notes */}
      <h2 className="text-xl sm:text-2xl font-semibold mt-10 mb-3">📚 Notes</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-400">
        <li>
          Parameters must match Jinja variable names like <code>amount_due</code>
        </li>
        <li>PDFs typically generate within 1–3 seconds</li>
        <li>Files are private, securely hosted, and expire after a set period</li>
      </ul>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
        <a
          href="/dashboard/pdf-generator"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition text-center"
        >
          🔗 Use the PDF Generator
        </a>
        <a
          href="/docs"
          className="bg-gray-100 text-gray-500 px-6 py-3 rounded shadow hover:bg-gray-200 transition text-center"
        >
          📘 See the Developer Docs
        </a>
        <a
          href="https://github.com/outliny"
          className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-900 transition text-center"
        >
          💬 Ask on GitHub
        </a>
      </div>
    </section>
  )
}

export default GeneratingApiPage
