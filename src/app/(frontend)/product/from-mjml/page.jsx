// app/generating-pdf/page.tsx
import React from 'react'

const GeneratingPdfPage = () => {
  return (
    <main className="mt-24 max-w-7xl mx-auto text-white p-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Generate HTML from MJML for Email Templates
      </h1>
      <p className="text-lg text-gray-400 mb-6">
        Convert MJML into production-ready responsive HTML with a single API call—fully integrated
        into your email workflow.
      </p>

      <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded-full mb-4">
        🌱 Open Source Supported
      </span>

      <h2 className="text-2xl font-semibold mt-10 mb-3">✨ Why MJML?</h2>
      <p className="text-gray-400 mb-4">
        MJML is the open-source framework that makes responsive email design simple and reliable.
        But rendering it into robust HTML across all email clients can be tricky. That’s where
        Outliny comes in. We let you write in MJML and instantly generate HTML optimized for all
        major email clients—using our fast, scalable, and secure API.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">🛠️ How It Works</h2>
      <ol className="list-decimal list-inside space-y-2 text-gray-400">
        <li>
          <strong>Create your MJML template:</strong> Use Outliny's drag-and-drop GrapeJS Email
          Editor or write manually via API.
        </li>
        <li>
          <strong>Send to Outliny API:</strong> Pass your MJML and variables to our{' '}
          <code className="bg-gray-100 text-black px-2 py-1 rounded text-sm">/generate-html</code>{' '}
          endpoint.
        </li>
        <li>
          <strong>Get responsive, production-ready HTML:</strong> Instantly returned, minified, and
          email-ready.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-10 mb-3">🔧 Example API Usage</h2>
      <pre className="bg-gray-100 rounded p-4 overflow-auto text-sm text-black">
        <code>
          {`POST /api/v1/emails/generate-html
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "template_id": "welcome-email",
  "data": {
    "first_name": "Jane",
    "signup_date": "2025-05-01"
  }
}`}
        </code>
      </pre>

      <p className="text-sm mt-2 text-gray-500">📩 Response:</p>
      <pre className="bg-gray-100 rounded p-4 overflow-auto text-sm text-black">
        <code>
          {`{
  "html": "<!DOCTYPE html><html>...rendered responsive email...</html>"
}`}
        </code>
      </pre>

      <h2 className="text-2xl font-semibold mt-10 mb-3">🧩 Features</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-400">
        <li>✅ Supports MJML 4.15+</li>
        <li>🔄 Full Jinja2 support</li>
        <li>📦 Reusable modules (headers, footers, components)</li>
        <li>📱 Mobile-first responsive design</li>
        <li>🧑‍💻 Open source templates and examples</li>
        <li>🚀 Ready for CRM, HRMS, marketing, and transactional emails</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3">🧰 Use Cases</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-400">
        <li>CRM and Marketing Automation</li>
        <li>Internal HR Emails</li>
        <li>Signup / Welcome Emails</li>
        <li>Password Reset / OTPs</li>
        <li>Notifications and Alerts</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3">🔐 Security-First</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-400">
        <li>No email content is logged</li>
        <li>Encrypted API communication</li>
        <li>ISO 27001:2022 & SOC 2 Type II Certified</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3">📥 Export or Import Anytime</h2>
      <p className="text-gray-400 mb-4">
        You’re never locked in. Outliny supports import/export of MJML and HTML, so you can move
        templates freely between systems.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">💡 Tip for Developers</h2>
      <p className="text-gray-400 mb-6">
        Use our pre-built email components and themes to speed up development. No need to start from
        scratch—just customize and deploy.
      </p>

      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href="/dashboard/html-generator"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          🔗 Use the HTML Generator
        </a>
        <a
          href="/docs"
          className="bg-gray-100 text-gray-700 px-6 py-3 rounded shadow hover:bg-gray-200 transition"
        >
          📘 See the Developer Docs
        </a>
        <a
          href="https://github.com/outliny"
          className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-900 transition"
        >
          💬 Ask on GitHub
        </a>
      </div>
    </main>
  )
}

export default GeneratingPdfPage
