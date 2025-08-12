
import React from 'react'
import { termsContent } from './data'

export default function TermsPage() {
  return (
    <div className="mt-20">
      {termsContent.map((section, idx) => (
        <section
          key={idx}
          id={`section-${idx + 1}`}
          className="space-y-8 scroll-mt-24 text-[#FFFFFFBF]"
        >
          <h2 className="text-xl font-semibold text-white mb-2 mt-10 ml-6">
            {idx + 1}. {section.title}
          </h2>
          {section.content}
        </section>
      ))}
    </div>
  )
}
