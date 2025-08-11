import React from 'react'
import { useState } from 'react'
import {
  FaUser,
  FaEnvelope,
  FaDesktop,
  FaFileAlt,
  FaCreditCard,
  FaBullhorn,
  FaChartLine,
} from 'react-icons/fa'
// import { X, ChevronDown } from 'lucide-react'
//  const [isMenuOpen, setIsMenuOpen] = useState(false)

const faqs = [
  {
    question: 'Can I work offline?',
    answer:
      'Yes! Outliny supports offline editing in desktop and mobile apps. Changes sync automatically when you reconnect.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'All data is encrypted in transit (TLS) and at rest (AES-256). You can also enable two-factor authentication on your account.',
  },
  {
    question: 'How do I use custom modules?',
    answer:
      'In the editor, open Modules to choose prebuilt components or upload your own JSON-based modules. Drag and drop to add them.',
  },
  {
    question: 'Can I invite team members?',
    answer:
      'Absolutely. Use the Invite button in your dashboard to send email invites. You can assign edit or view-only permissions.',
  },
  {
    question: 'How do I share a project or PDF?',
    answer:
      'Click Share on any project or generated PDF to create a link. Choose public access or restrict it to specific users without extra permissions.',
  },
]

const dataSections = [
  {
    icon: <FaUser size={24} />,
    title: 'Identity Data',
    items: ['Name, username, organization affiliation'],
  },
  {
    icon: <FaEnvelope size={24} />,
    title: 'Contact Data',
    items: ['Email address'],
  },
  {
    icon: <FaDesktop size={24} />,
    title: 'Technical Data',
    items: ['IP address, browser type, time zone, device ID, OS, access logs'],
  },
  {
    icon: <FaFileAlt size={24} />,
    title: 'Content Data',
    items: ['Templates, modules, documents, or assets you upload or generate'],
  },
  {
    icon: <FaCreditCard size={24} />,
    title: 'Transaction Data',
    items: ['Billing data, credits, invoices, payment method (via third-party processor)'],
  },
  {
    icon: <FaBullhorn size={24} />,
    title: 'Marketing & Communication Data',
    items: ['Preferences for receiving updates or promotional content'],
  },
  {
    icon: <FaChartLine size={24} />,
    title: 'Behavioral & Analytics Data',
    items: ['Feature usage, interaction patterns, error reports'],
  },
]

const termsContent = [
  {
    title: 'Introduction',
    content: (
      <>
        <p className="mb-4">Outliny helps you:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Structure ideas with nested outlines templates.</li>
          <li>Collaborate in real time with teammates.</li>
          <li>Organize templates, emails in one place.</li>
          <li>Export beautifully formatted documents or emails via API.</li>
        </ul>
        <p className="mt-4 w-auto">
          Whether you’re drafting a novel, brainstorming a presentation, or automating invoice
          generation, Outliny makes it simple to capture, arrange, and render your content.
        </p>
      </>
    ),
  },

  {
    title: ' Create an Account',
    content: (
      <>
        <div className="">
          <ol className="list-decimal ml-6 space-y-2">
            <li>Visit outliny.com/signup.</li>
            <li>Enter your email and choose a secure password.</li>
            <li>Verify your email address.</li>
          </ol>
        </div>
      </>
    ),
  },

  {
    title: 'Your First Outline',
    content: (
      <>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Log in and click New Outline.</li>
          <li>Give it a title (e.g. “Blog Post: The Future of AI”).</li>
          <li>Start typing your first item.</li>
        </ol>
      </>
    ),
  },

  {
    title: 'Core Concepts',
    content: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3  mt-10">
          {dataSections.map((section, index) => (
            <div key={index} className="bg-[#08090a] border border-gray-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-3">
                {section.icon}
                <h3 className="text-lg sm:text-xl font-semibold text-white">{section.title}</h3>
              </div>
              <ul className="text-sm sm:text-base text-[#dddddd] space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: 'Features',
    content: (
      <>
        <ul className="list-disc ml-6 space-y-4">
          <li>
            <b>Rich Text &amp; Media:</b> Bold, italics, code blocks, links, images, and file
            attachments right inside your outline.
          </li>
          <li>
            <b>Version History:</b> Track changes over time and revert to any previous version in a
            single click.
          </li>
          <li>
            <b>Export Options:</b> Download your outline or rendered document as Markdown, PDF,
            Word, or PowerPoint via our UI or API.
          </li>
          <li>
            <b>Custom &amp; Prebuilt Modules:</b> Use custom modules or select from our library of
            prebuilt modules to extend your outlines and templates effortlessly.
          </li>
          <li>
            <b>Team Invitations:</b> Invite anyone to join Outliny and collaborate in your
            workspace.
          </li>
          <li>
            <b>MJML &amp; HTML Conversion:</b> Convert MJML templates to HTML and render HTML
            directly to PDF or email formats within the platform.
          </li>
          <li>
            <b>CSV to PDF:</b> Upload CSV files and convert specific columns into PDF documents in
            bulk or individually.
          </li>
          <li>
            <b>Media Uploads:</b> Upload images, PDFs, and other media assets to include in your
            outlines and templates.
          </li>
          <li>
            <b>Shareable Projects &amp; PDFs:</b> Generate shareable links to your PDFs or projects,
            grant public access or restrict to specific users without extra permissions.
          </li>
        </ul>
      </>
    ),
  },

  {
    title: ' Base URL',
    content: (
      <pre className="bg-[#1a1a1a] p-4 rounded-md text-sm max-w-full">
        <code>https://outliny.com/api</code>
      </pre>
    ),
  },
  {
    title: 'Authentication',
    content: (
      <>
        <p>
          To interact with the Outliny API, you must authenticate your requests using an API key.{' '}
          <b>Keep this key private</b> and never expose it in frontend or client-side code.
        </p>
        <div className="ml-4 mt-3 mb-3">
          <span className="italic text-gray-300">Where to Find Your API Key:</span>
          <ol className="list-decimal ml-6 mt-1 space-y-1 text-[#dddddd]">
            <li>Login to your Outliny account.</li>
            <li>
              Navigate to <b>API Settings</b> in your dashboard.
            </li>
            <li>Copy your API key from the provided field.</li>
          </ol>
        </div>
        <span className="block mt-4 mb-1 font-semibold">Example: Include API Key in Requests</span>
        <pre className="overflow-auto bg-[#1a1a1a] p-4 rounded text-sm overflow-x-auto mb-6">
          {`POST /api/v1/emails/generate-html
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "template_id": "67eb70b13db3897294",
  "data": {
    "first_name": "Jane",
    "invoice_number": "INV-1001"
  }
}`}
        </pre>
        <p className=" mt-4 mb-1 font-semibold">Or using JavaScript (Fetch API):</p>
        <pre className="overflow-auto bg-[#1a1a1a] p-4 rounded text-sm overflow-x-auto mb-6">
          {`fetch('https://api.outliny.com/pdf/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ template_id: 'your-template-id',
   data: { name: 'Jane Doe', invoice_number: 'INV-1001' } })
})
.then(res => res.json())
.then(console.log);
`}
        </pre>

        <p className=" mt-4 mb-1 font-semibold">Security Best Practices:</p>
        <ul className="list-disc ml-5 space-y-4 text-sm sm:text-base font-roboto mt-5">
          <li>
            Never expose your API key in frontend code or public repos. Use environment variables
            instead.
          </li>
          <li>Regenerate your key immediately if compromised.</li>
          <li>Always use HTTPS to encrypt data in transit</li>
          <li>
            Use multiple keys for separate environments (development, production) for isolation.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: ' Postman Collection',
    content: (
      <>
        <p>
          Outliny provides a ready-to-use Postman Collection to help you explore and test our APIs
          effortlessly, without writing code.
          <br />
          <span className="text-blue-400 underline cursor-pointer">Download the Collection</span>
        </p>
        <p className=" mt-3 font-semibold text-white ">What’s Included?</p>
        <span className=" font-semibold  mb-1">
          The collection includes pre-configured requests for:
        </span>
        <ul className="list-disc ml-5 space-y-4 text-sm sm:text-base font-roboto mt-5">
          <li>Authentication headers</li>
          <li>Generate a PDF</li>
          <li>Batch Generate PDFs</li>
          <li>Get a Submission</li>
          <li>Expire Submission</li>
          <li>List Submissions</li>
          <li>Generate PDF Preview for Data</li>
          <li className="italic text-gray-400">(Coming Soon) Email generation endpoints</li>
        </ul>
        <span className="block mt-3 font-semibold text-white mb-1">How to Use:</span>
        <ol className="list-disc ml-5 space-y-4 text-sm sm:text-base font-roboto mt-5">
          <li>Open Postman and click Import.</li>
          <li>Choose Link or File and paste/upload the Outliny collection.</li>
          <li>Set your API Key in the Authorization header (Bearer Token).</li>
          <li>
            Replace placeholder variables (<span className="italic">template_id, data</span>) with
            your actual values.
          </li>
          <li>Hit Send to test!</li>
        </ol>
        <div className="mt-2 text-sm text-gray-400">
          <b>Pro Tip:</b> Save your API key as an environment variable in Postman for easier reuse.
        </div>
        <p className=" mt-4 font-semibold text-white mb-1">Example: Generate a PDF</p>
        <span className=""> Select the Generate a PDF request and fill in:</span>
        <ul className="list-disc ml-5 space-y-4 text-sm sm:text-base font-roboto mt-5">
          <li>
            <b>template_id</b> – found in your Outliny dashboard.
          </li>
          <li>
            <b>data</b> – dynamic date you want injected into the template.
          </li>
        </ul>
        <pre className="bg-[#1a1a1a] p-4 rounded-md text-sm  mt-6 mb-2 max-w-full">
          {`{
  "template_id": "abc123-template-id",
  "data": {
    "full_name": "John Doe",
    "invoice_id": "INV-2024-0091"
  }
}`}
        </pre>

        <p className="  font-semibold text-white ">Test Before You Code:</p>
        <p className="">
          Using Postman helps validate your request structure and data before implementing your
          integration in code. Ideal for:
        </p>
        <ul className="list-disc ml-5 space-y-4 text-sm sm:text-base font-roboto ">
          <li>Debugging data issues.</li>
          <li>Verifying template rendering</li>
          <li>Testing new endpoints</li>
        </ul>

        <p className=" mt-4 font-semibold text-white mb-1"> Next Steps:</p>
        <ul className="list-disc ml-5 space-y-4 text-sm sm:text-base font-roboto mt-5">
          <li>Install an API Client</li>
          <li>Authentication </li>
          <li>Testing new endpoints</li>
        </ul>
      </>
    ),
  },
  {
    title: ' Integrate the API',
    content: (
      <>
        <ol className="list-disc ml-5 space-y-4 text-sm sm:text-base font-roboto mt-5">
          <li>Create a Template using Outliny’s visual builder (PDF or Email).</li>
          <li>Retrieve the Template ID from your dashboard.</li>
          <li>Send API Request with your dynamic data (see examples above).</li>
          <li>Receive a rendered PDF or email payload in response.</li>
        </ol>
        <span className="block mt-4 font-semibold text-white mb-1">File Types Supported:</span>
        <ul className="list-disc ml-5 space-y-4 text-sm sm:text-base font-roboto mt-5">
          <li>
            <b>PDF Templates:</b> Single-page (PDFme) or multi-page (GrapesJS)
          </li>
          <li>
            <b>Email Templates:</b> Built with MJML and editable via drag-and-drop.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'FAQ',
    content: (
      <div className="space-y-6 mt-10">
        {faqs.map((item, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-white">Q: {item.question}</h4>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Support and Feedback',
    content: (
      <div className="space-y-3">
        <p>
          <b>Community Forum:</b> info@softinator.com
        </p>
        <p>
          <b>Email:</b> support@outliny.com
        </p>
        <p>Have a feature request or found a bug? Let us know &mdash; we’re always improving!</p>
        <p>Thank you for choosing Outliny. Happy outlining and integrating!</p>
      </div>
    ),
  },
]

export default function DocsPage() {
  return (
    <div className="mt-20">
      {termsContent.map((section, idx) => (
        <section
          key={idx}
          id={`section-${idx + 1}`}
          className=" scroll-mt-24 text-[#FFFFFFBF]"
        >
          <h2 className="text-xl  font-semibold text-white mb-2 mt-10 ">{section.title}</h2>
          {section.content}
        </section>
      ))}
    </div>
  )
}
