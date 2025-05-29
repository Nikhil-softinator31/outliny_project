import React from 'react'
import Link from 'next/link'

export default function FooterLandingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white mt-20">Outliny Documentation</h1>

      <p className="text-gray-700 mb-8">
        Welcome to Outliny documentation center. Choose a topic from the sidebar to learn more about
        our platform capabilities, features, and how we can help your business streamline document
        workflows.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/footer-layout/sales"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold mb-3">Sales</h2>
          <p className="text-gray-600">
            Learn how Outliny helps sales teams create professional proposals and contracts.
          </p>
        </Link>

        <Link
          href="/footer-layout/security"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold mb-3">Security</h2>
          <p className="text-gray-600">
            Discover our enterprise-grade security measures and compliance standards.
          </p>
        </Link>

        <Link
          href="/footer-layout/partners"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold mb-3">Partners</h2>
          <p className="text-gray-600">
            Join our partner program and grow your business with Outliny.
          </p>
        </Link>

        <Link
          href="/footer-layout/case-studies"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold mb-3">Case Studies</h2>
          <p className="text-gray-600">
            See how customers are succeeding with Outliny document automation.
          </p>
        </Link>
      </div>
    </div>
  )
}
