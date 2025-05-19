import React from 'react'

const ComparePayloadPage = () => {
      const RequestBodyData = [
        {
          field: 'template_id',
          type: 'string',
          required: 'Yes',
          description: "The ID of the template you're comparing against.",
        },
        {
          field: 'old_parameters',
          type: 'object',
          required: 'Yes',
          description: 'The original parameters used previously.',
        },
        {
          field: 'new_parameters',
          type: 'string',
          required: 'object',
          description: 'The new parameters you want to compare.',
        },
      ]
  return (
    <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-[#ebebeb] font-poppins space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-20 text-white font-poppins">
          Compare Payload
        </h1>
        <p className="mb-4 max-w-4xl mx-auto text-center text-sm sm:text-base font-inter">
          Outliny's <span className="text-white font-semibold">Compare Payload</span> feature helps
          you detect differences between two versions of input data used for rendering templates
          (Emails or PDFs).
        </p>
      </div>

      <div>
        <p className="text-lg  mb-4  md:text-[30px] font-semibold text-white">
          This is useful for:
        </p>
        <ul className="list-disc ml-6 sm:ml-10 space-y-3 text-sm sm:text-base font-roboto ">
          <li>Verifying if dynamic content has changed before regenerating documents.</li>
          <li>Auditing changes over time (e.g., invoice updates, contract version tracking).</li>
          <li>Avoiding redundant API calls if the payload is identical.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-[30px] font-semibold text-white">
          What is a Compare Payload?
        </h2>
        <p className="text-sm sm:text-base">
          A Compare Payload request checks if two sets of template parameters would generate
          different outputs — <strong className="text-white">without</strong> fully rendering the
          Email or PDF. Instead of producing a document, it compares the incoming variables against
          a previous version and tells you if there’s any difference.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-[30px] font-semibold text-white">📍 Endpoint</h2>
        <code className="block bg-[#1a1a1a] p-4 rounded text-sm">POST /api/v1/compare/payload</code>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-[30px] font-semibold text-white">🔐 Authentication</h2>
        <p className="text-sm sm:text-base">
          Just like all other API calls, you must include your API Key:
        </p>
        <code className="block bg-[#1a1a1a] p-4 rounded text-sm">
          Authorization: Bearer YOUR_API_KEY
        </code>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-[30px] font-semibold text-white">🧾 Request Body</h2>
    

        <table className="text-sm w-full table-auto border-collapse border border-gray-700 mb-6 leading-6">
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
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-[30px] font-semibold text-white">📦 Example Request</h2>
        <pre className="bg-[#1a1a1a] p-4 rounded text-sm overflow-x-auto">
          {`POST https://api.outliny.com/api/v1/compare/payload
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "template_id": "template_abc123",
  "old_parameters": {
    "customer_name": "Alice Johnson",
    "invoice_total": "$500"
  },
  "new_parameters": {
    "customer_name": "Alice Johnson",
    "invoice_total": "$500"
  }
}`}
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl md:text-[30px] font-semibold text-white">📤 Response</h2>
        <p className="text-sm sm:text-base">Fields returned:</p>
        <ul className="list-disc ml-6 space-y-2 text-sm sm:text-base font-roboto ">
          <li>
            <code>status</code> (string): "success"
          </li>
          <li>
            <code>is_different</code> (boolean): true if payloads differ, false if identical
          </li>
          <li>
            <code>differences</code> (object): fields that changed, if any
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-white">Example Response (Identical)</h3>
        <pre className="bg-[#1a1a1a] p-4 rounded text-sm overflow-x-auto">
          {`{
       "status": "success",
       "is_different": false,
       "differences": {}
}`}
        </pre>

        <h3 className="text-lg font-semibold text-white">Example Response (Differences Found)</h3>
        <pre className="bg-[#1a1a1a] p-4 rounded text-sm overflow-x-auto">
          {`{
  "status": "success",
  "is_different": true,
  "differences": {
    "invoice_total": {
      "old": "$500",
      "new": "$550"
    }
  }
}`}
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold md:text-[30px] text-white">
          🔥 When to Use Compare Payload
        </h2>
        <ul className="list-disc ml-6 sm:ml-16 space-y-3 text-sm sm:text-base font-roboto ">
          <li>
            <strong className="text-white">Efficiency:</strong> Only regenerate PDFs or Emails when
            data has actually changed.
          </li>
          <li>
            <strong className="text-white">Auditing:</strong> Track small but critical updates in
            contracts, invoices, HR letters, etc.
          </li>
          <li>
            <strong className="text-white">Versioning:</strong> Decide when to store or archive
            updated document versions.
          </li>
          <li>
            <strong className="text-white">Optimization:</strong> Save API credits and system
            processing by skipping unnecessary rendering.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold md:text-[30px] text-white">🧠 Important Notes</h2>
        <ul className="list-disc ml-6 sm:ml-16 space-y-3 text-sm sm:text-base font-roboto ">
          <li>Compare Payload only compares input parameters, not full rendered outputs.</li>
          <li>Deep object comparison is supported (nested data structures too).</li>
          <li>Only available for templates that use Jinja variables for dynamic content.</li>
          <li>Fields not used in the template are ignored automatically for comparison.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold md:text-[30px] text-white">
          🚀 Start Using Compare Payload!
        </h2>
        <div className="flex  flex-col gap-2 ml-8">
          <a
            href="https://www.google.com/"
            target="_blank"
            className="underline text-white cursor-pointer"
          >
            👉 Check the Full API Reference
          </a>

          <a
            href="https://www.google.com/"
            target="_blank"
            className="underline text-white cursor-pointer"
          >
            👉 Learn How to Optimize API Usage
          </a>
        </div>
      </div>
    </div>
  )
}

export default ComparePayloadPage
