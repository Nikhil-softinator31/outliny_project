import React, { ReactNode } from 'react'

const sections = [
  'Definitions',
  'Description of Service',
  'User Accounts',
  'Acceptable Use Policy',
  'User Content and Data',
  'Fees, Payment, and Credits',
  'Open Source Software',
  'Intellectual Property',
  'Term and Termination',
  'Warranties and Disclaimers',
  'Limitation of Liability',
  'Indemnification',
  'Governing Law',
  'Dispute Resolution',
  'Contact Information',
]

export default function TermsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="  max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-ibm-plex-sans">
        Terms &amp; Condition
      </h1>
      <p className="mb-4  text-center text-sm sm:text-base font-ibm-plex-sans ">
        Welcome to Outliny! These Terms and Conditions (&quot;Terms&quot;) govern your access to and
        use of the Outliny website, APIs, software, and services (collectively, the
        &quot;Service&quot;). The Service is provided by Outliny (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By creating an account, accessing our API, or using the Service in any
        way, you (&quot;you&quot; or &quot;User&quot;) agree to be bound by these Terms and our
        Privacy Policy. If you do not agree to these Terms, you may not use the Service. If you are
        using the Service on behalf of a company or other legal entity (&quot;Enterprise&quot;), you
        represent that you have the authority to bind that entity to these Terms, in which case
        &quot;you&quot; and &quot;your&quot; will refer to that entity.
      </p>
      <div className="flex relative ">
        {/* Sidebar */}
        <aside className="hidden md:block  sticky top-20 self-start h-full mt-20">
          <nav className="space-y-20  text-sm font-medium">
            {sections.map((title, idx) => (
              <a
                key={idx}
                href={`#section-${idx + 1}`}
                className="block text-white transition font-semibold text-[18px] leading-[93%] tracking-[0.39px] font-ibm-plex-sans "
              >
                {idx + 1}. {title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content injected here */}
        <main className="flex-1 scroll-smooth  md:ml-8 lg:ml-24  ">{children}</main>
      </div>
    </div>
  )
}
