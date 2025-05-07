import React from 'react'

const GeneratingPDFsFromHtml = () => {
  return (
    <section className="mt-24 p-4 max-w-[90rem] mx-auto text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 ">🧾 Generating PDFs from HTML</h1>
      <p className="text-base sm:text-lg text-gray-400 mb-6">
        Outliny allows you to generate beautiful, production-ready PDFs directly from raw HTML
        content. This is perfect if you already have a custom HTML layout or generate your document
        content dynamically.
      </p>

      <Section
        title="🛠️ What is HTML-to-PDF Generation?"
        items={[
          'Instead of using a pre-designed template, you provide your own HTML code (optionally with inline CSS), and Outliny will render it into a clean, printable PDF file.',
          'It’s fast, flexible, and gives you full control over layout and styling.',
        ]}
      />

      <Section title="📍 Endpoint" items={['POST /api/v1/render/pdf/html']} />

      <Section
        title="🔐 Authentication"
        items={[
          'Like all API requests, you must include your API Key:',
          'Authorization: Bearer YOUR_API_KEY',
        ]}
      />

      <Section
        title="📥 Request Body"
        items={[
          'html: The full HTML content you want to render.',
          'filename: Optional. Suggested filename for the generated PDF.',
          'output_type: Optional. pdf (default) or base64.',
          'page_settings: Optional. Customize page size, margins, orientation, etc.',
        ]}
      />

      <Section
        title="Example Request"
        items={[
          'POST https://api.outliny.com/api/v1/render/pdf/html',
          'Authorization: Bearer YOUR_API_KEY',
          'Content-Type: application/json',
          'Request body example: ',
          `{
            "html": "<html><body><h1>Invoice #12345</h1><p>Thank you for your business!</p></body></html>",
            "filename": "invoice-12345.pdf",
            "page_settings": {
              "format": "A4",
              "margin": "20mm",
              "orientation": "portrait"
            }
          }`,
        ]}
      />

      <Section
        title="📤 Response"
        items={[
          'status: "success"',
          'file_url: The downloadable link to the generated PDF.',
          'file_base64: The base64 encoded file content (if output_type: base64).',
        ]}
      />

      <Section
        title="Example Response"
        items={[
          `{
            "status": "success",
            "file_url": "https://api.outliny.com/files/generated/invoice-12345.pdf"
          }`,
          `Or, if output_type: base64:`,
          `{
            "status": "success",
            "file_base64": "JVBERi0xLjQKJc..."
          }`,
        ]}
      />

      <Section
        title="📐 Page Settings Options"
        items={[
          'You can control how the PDF is generated.',
          'format: Paper size (A4, Letter, etc.)',
          'orientation: portrait or landscape',
          'margin: Margin size (e.g., "10mm", "1in")',
        ]}
      />

      <Section
        title="Default Settings"
        items={['Format: A4', 'Orientation: portrait', 'Margin: 10mm']}
      />

      <Section
        title="🔥 Best Practices for HTML-to-PDF"
        items={[
          'Use inline styles (style="") where possible for more consistent rendering.',
          'Avoid using external CSS links — embed your styles inside <style> tags.',
          'Test your HTML for print-friendliness: avoid heavy scripts or non-printable elements.',
          'Keep content within standard page widths (~600px–800px) for best PDF layout.',
          'Use CSS @media print rules if needed for precise formatting.',
        ]}
      />

      <Section
        title="⚠️ Limitations"
        items={[
          'JavaScript execution inside HTML is limited — complex interactive pages might not render perfectly.',
          'Ensure all images are fully loaded URLs (absolute paths).',
          'Very long pages may auto-split into multiple PDF pages.',
        ]}
      />

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Start Generating PDFs from HTML Today!</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm sm:text-base">
          <li>👉 Explore Full API Docs</li>
          <li>👉 Learn More About Advanced PDF Options</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a
          href="/api-docs"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition text-center"
        >
          👉 Explore Full API Docs
        </a>
        <a
          href="/advanced-pdf-options"
          className="bg-gray-100 text-gray-700 px-6 py-3 rounded shadow hover:bg-gray-200 transition text-center"
        >
          👉 Learn More About Advanced PDF Options
        </a>
      </div>
    </section>
  )
}

const Section = ({ title, items }) => (
  <div className="mt-10">
    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm sm:text-base">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
)

export default GeneratingPDFsFromHtml
