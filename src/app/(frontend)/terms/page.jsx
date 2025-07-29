import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";

const TermsOfServicePage = () => {
  return (
    <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <div className="">
        <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-6 text-white font-poppins ">
          Terms & Condition
        </h1>


        <p className="mb-4 max-w-8xl mx-auto mt-12 text-center text-sm sm:text-base font-inter">
        Welcome to Outliny! These Terms and Conditions ("Terms") govern your access to and use of the Outliny website, APIs, software, and services (collectively, the "Service"). The Service is provided by Outliny ("we," "us," or "our").

        By creating an account, accessing our API, or using the Service in any way, you ("you" or "User") agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use the Service.

        If you are using the Service on behalf of a company or other legal entity ("Enterprise"), you represent that you have the authority to bind that entity to these Terms, in which case "you" and "your" will refer to that entity.
      </p>


          
        {/* Section 1 */}
        <section className="pt-6 mt-20 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            1. Definitions
          </h2>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
            <li> <span className='font-bold'>"Service"</span> refers to the cloud-based platform provided by Outliny for creating, managing, and rendering PDF documents and email templates, including our website, editors, APIs, and related technologies.</li>

            <li> <span className='font-bold'>"User Content"</span> means all data, information, templates, code, and other materials that you create, upload, submit, or otherwise transmit to or through the Service. This includes the templates you design and the data you send to our API for rendering.
            </li>

            <li> <span className='font-bold'>"Template"</span> refers to the design layouts for PDFs and emails created using our Service.</li>

            <li> <span className='font-bold'>"API"</span> means the Application Programming Interface provided by Outliny for programmatic access to the Service.</li>

            <li> <span className='font-bold'>"Free Tier"</span> refers to the free usage limits of the Service as described on our Pricing page.
            </li>

           
            <li className="">
            <span className='font-bold'>"Paid Services"</span> refers to any aspect of the Service that requires the payment of fees, typically through the purchase of credits.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="pt-6 mt-7 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            2. Description of Service

          </h2>
          <p className="text-sm sm:text-base">Outliny provides a centralized platform for developers and enterprises to design, manage, and programmatically generate branded communications. This includes:
          </p>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto ">
            <li>Web-based editors for multi-page PDFs and responsive MJML emails.</li>
            <li>A REST API for rendering Templates with dynamic data.
            </li>
            <li>A gallery of pre-built professional Templates.
            </li>
            <li>Management of Templates and reusable modules.
            </li>
          
          </ul>
        
        </section>

        {/* Section 3 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            3. User Accounts

          </h2>
          <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto ">
            <li> <span className='font-bold'>Account Creation:</span> To use most features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process.
            </li>
            <li> <span className='font-bold'>Account Responsibility:</span> You are solely responsible for all activities that occur under your account. You must keep your account password and API keys confidential and secure. You must notify us immediately of any unauthorized use of your account.

            </li>
            <li> <span className='font-bold'>Eligibility:</span> You must be at least 18 years old to use the Service.

            </li>
            
          
          </ul>
        </section>

        {/* Section 4 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">4. Acceptable Use Policy</h2>
          <ul className="list-disc ml-6 md:ml-11 space-y-2 text-sm sm:text-base font-roboto">
            <li>Engage in any activity that is illegal, fraudulent, or violates the rights of others. This includes creating or distributing content related to phishing, scams, or other malicious activities.</li>
            <li>Send unsolicited commercial emails (spam) or any communications that violate applicable laws like the CAN-SPAM Act.</li>
            <li>Infringe upon the intellectual property rights of others. You must have the necessary rights to all User Content you process through the Service.</li>
            <li>Attempt to disrupt, compromise, or reverse-engineer the integrity or security of the Service, its infrastructure, or the data of other users.</li>
            <li>Exceed reasonable request volume, or otherwise abuse the API in a manner that could degrade the Service for other users.</li>
            <li>Resell, sublicense, or lease the Service to third parties without our express written permission.</li>
          </ul>
        </section>

         {/* Section 5 */}
         <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">5. User Content and Data</h2>
          <ul className="list-disc ml-6 md:ml-11 space-y-2 text-sm sm:text-base font-roboto">
            <li><strong>Ownership:</strong> You retain all ownership rights to your User Content. We do not claim any ownership over the Templates you create or the data you send to our API.</li>
            <li><strong>Our License to Your Content:</strong> By using the Service, you grant Outliny a worldwide, non-exclusive, royalty-free license to host, store, process, and transmit your User Content solely for the purpose of providing and improving the Service to you.</li>
            <li><strong>Data Privacy and Security:</strong> We are committed to protecting your data. Our security measures are detailed on our Security page and include ISO 27001:2022 and SOC 2 Type II certifications. All User Content is encrypted at rest and in transit.</li>
            <li><strong>Data Processing:</strong> You are the "Data Controller" of the personal data within your User Content, and Outliny is the "Data Processor." We will only process data according to your instructions (i.e., your API calls) and these Terms. By default, we do not log the sensitive data payloads sent to our rendering endpoints, and our architecture is designed to prevent even Outliny employees from reading your encrypted User Content. For more information, please see our Privacy Policy.</li>
          </ul>
        </section>


        {/* Section 6 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">6. Fees, Payment, and Credits</h2>
          <ul className="list-disc ml-6 md:ml-11 space-y-2 text-sm sm:text-base font-roboto">
            <li> <strong>Paid Services:</strong>  Certain features of the Service require payment. We operate on a pay-as-you-go model where you purchase credits in advance to use for PDF and email generation beyond the Free Tier.</li>
            <li> <strong>Credits: </strong>Purchased credits are non-refundable and will be deducted from your account balance based on your usage as detailed on our Pricing page. Your credits never expire..</li>
            <li> <strong>Pricing: </strong>We reserve the right to change our pricing at any time. We will provide you with reasonable notice of any price changes by posting the new prices on the website or sending you an email notification.</li>
            <li> <strong>Taxes:</strong>  All fees are exclusive of any applicable taxes, levies, or duties imposed by taxing authorities. You are responsible for payment of all such taxes.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            7. Open Source Software
          </h2>
          <p className="text-sm sm:text-base max-w-4xl">
          Outliny is proudly built on and with open-source software. The core Outliny platform is also available as an open-source project on GitHub.</p>

          <ul className="list-disc ml-6 md:ml-11 space-y-2 text-sm sm:text-base font-roboto">
            <li> <strong>Hosted Service:</strong>   These Terms govern your use of our managed, hosted Service.
            </li>
            <li> <strong>Self-Hosted Version: </strong>If you choose to download, modify, or run your own instance of the Outliny software from our public repository, your use of that software is governed by the terms of the applicable open-source license (e.g., MIT, AGPL) accompanying the code, not these Terms</li>
            
          </ul>
        </section>

         {/* Section 8 */}
         <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">8. Intellectual Property</h2>
          <ul className="list-disc ml-6 md:ml-11 space-y-2 text-sm sm:text-base font-roboto">
            <li> <strong>Our IP:</strong> The Service, its visual interfaces, features, branding, the Outliny name and logo, and all pre-built Templates in our gallery are the exclusive property of Outliny and its licensors.
            </li>
            <li><strong>No Vendor Lock-in:</strong> We believe in developer freedom. For email templates, we use the MJML standard, which allows you to easily import and export your templates for use with other services.
            </li>
          </ul>
        </section>

          {/* Section 9 */}
          <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">9. Term and Termination</h2>
          <ul className="list-disc ml-6 md:ml-11 space-y-2 text-sm sm:text-base font-roboto">
            <li><strong>Termination by You:</strong> You may terminate your account at any time by following the instructions within the Service dashboard or by contacting support.</li>
            <li>  <strong>Termination by Us:</strong>We may suspend or terminate your access to the Service at any time, with or without cause, if we believe you have breached these Terms. We will make a reasonable effort to notify you before termination.</li>
            <li> <strong>Effect of Termination: </strong> Upon termination, your right to use the Service will immediately cease. We will have no obligation to maintain your User Content and may delete it permanently after a reasonable grace period (e.g., 30 days), unless legally required to retain it. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</li>
          </ul>
        </section>

        {/* Section 10 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
            10. Warranties and Disclaimers

          </h2>
          <p className="text-sm sm:text-base font-roboto">The service is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, Outliny and its affiliates and licensors disclaim all warranties, whether express, implied, statutory, or otherwise, including but not limited to any implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the service will be uninterrupted, secure, or error-free.

          </p>
        </section>

        {/* Section 11 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
          11. Limitation of Liability

          </h2>
          <p className="text-sm sm:text-base font-roboto">To the fullest extent permitted by law, in no event shall Outliny, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or goodwill, arising out of or in connection with your use of the service, whether based on warranty, contract, tort (including negligence), or any other legal theory.
          In no event shall Outliny's aggregate liability for all claims relating to the service exceed the total amount of fees paid by you to Outliny during the twelve (12) months immediately preceding the event giving rise to the claim..

          </p>
        </section>

        {/* Section 12 */}
        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
          12. Indemnification

          </h2>
          <p className="text-sm sm:text-base font-roboto">You agree to defend, indemnify, and hold harmless Outliny and its affiliates, officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Service; (ii) your violation of any term of these Terms; or (iii) your violation of any third-party right, including any intellectual property or privacy right, related to your User Content.


          </p>
        </section>


        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
          13. Governing Law and Dispute Resolution


          </h2>
          <p className="text-sm sm:text-base font-roboto">These Terms shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in <strong></strong> to resolve any legal matter arising from these Terms..


          </p>
        </section>


        <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
          14. Changes to Terms



          </h2>
          <p className="text-sm sm:text-base font-roboto">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.


          </p>
        </section>

   


         <section className="pt-6 mt-10 space-y-3">
          <h2 className="text-2xl md:text-[30px] font-semibold text-white mb-4">
          15. Contact Information


          </h2>
          <p className="text-sm sm:text-base font-roboto">If you have any questions about these Terms, please contact us at:  <strong>info@softinator.com</strong>


          </p>
        </section>
      </div>
    </div>
  )
}

export default TermsOfServicePage
