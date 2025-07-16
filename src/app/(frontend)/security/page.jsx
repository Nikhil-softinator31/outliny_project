import React from 'react'
import { IoShieldCheckmarkSharp, IoLockClosed, IoEarthSharp } from 'react-icons/io5'
import { FaServer, FaUserShield } from 'react-icons/fa'
import { MdPrivacyTip } from 'react-icons/md'
import { CiMail } from 'react-icons/ci'
import { FaArrowRightLong } from 'react-icons/fa6'
import { CiUnlock } from "react-icons/ci";
import { BsBox } from "react-icons/bs"; 
import { MdLockOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { FiShield } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const SecurityPage = () => {
  return (
    <div className="max-w-[99rem] mx-auto py-16  px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-poppins ">
        Security at Outliny
      </h1>

      <p className="mb-4 max-w-7xl mx-auto text-center text-sm sm:text-base font-inter">
        At Outliny, we understand that email and document templates often carry sensitive business
        and customer data. That’s why we built our platform with security-first principles and
        strict compliance frameworks to ensure your data remains safe, encrypted, and never exposed
        — not even to us.
      </p>

      <div  >
        <h2 className="text-2xl md:text-[30px] flex gap-3  font-semibold text-white mt-20 mb-3 ">
        <CiUnlock />  Certified & Compliant
        </h2>
        <p className="py-4 text-sm sm:text-base font-sans ml-2">
          We may share necessary information with trusted third parties for:
        </p>

        <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>ISO 27001:2022 Certified</li>
          <li>SOC 2 Type II Compliant</li>
        </ul>
        <p className="py-2 italic text-sm sm:text-base font-inter ml-2 max-w-[600px] ">
          These certifications reflect our commitment to secure systems, employee practices, access
          controls, and operational resilience.
        </p>
      </div>

      <div>
        <h2 className="text-2xl md:text-[30px] flex gap-3  font-semibold mt-10 mb-3 text-white ">
        <BsBox /> Zero Visibility Architecture
        </h2>
        <p className="py-4 text-sm sm:text-base font-sans ml-2">We don’t see your data – ever.</p>
        <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>All customer data is encrypted at rest and in transit</li>
          <li>No logs are stored by default</li>
          <li>Outliny employees cannot read or access your templates or parameters</li>
        </ul>
        <p className="py-2 italic text-sm sm:text-base font-inter ml-2">
          You're always in control of your content and your data.
        </p>
      </div>

      <div>
        <h2 className="text-2xl md:text-[30px] flex gap-3  font-semibold mt-10 mb-3 text-white ">
        <MdLockOutline />  End-to-End Encryption
        </h2>
        <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>TLS 1.2+ for all data in transit</li>
          <li>AES-256 encryption for data at rest</li>
          <li>Secrets and keys stored securely using cloud-native vaults</li>
          <li>Template variables and payloads are never persisted unless you opt-in</li>
        </ul>
      </div>

      <div className="mb-10 sm:mb-12">
        <h2 className="text-2xl md:text-[30px] flex gap-3  font-semibold mt-10 mb-3 text-white ">
        <IoSettingsOutline /> Granular Access Controls
        </h2>
        <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>Role-based access for template editing and deployment</li>
          <li>Module-based templating for restricted shared components</li>
          <li>Audit-friendly configuration (including for self-hosted instances)</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl md:text-[30px] flex gap-3 font-semibold mt-10 mb-3 text-white ">
        <IoEarthOutline /> Self-Hosting? You’re in Charge
        </h2>

        <p className="py-4 text-sm sm:text-base font-sans ml-2">
          Outliny is fully open-source and can be self-hosted, giving you:
        </p>
        <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>Full control over data residency and storage</li>
          <li>Internal network deployments behind your own firewall</li>
          <li>Integrate with your existing authentication systems</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl md:text-[30px] flex gap-3 font-semibold mt-10 mb-3 text-white ">
        <FiShield />Security Best Practices We Follow
        </h2>
        <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>Static code analysis on all releases</li>
          <li>CI/CD with signed artifacts</li>
          <li>Regular third-party penetration testing</li>
          <li>Principle of least privilege applied across services</li>
          <li>No third-party analytics or trackers in the editor or API services</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl md:text-[30px] font-semibold mt-10 mb-3 text-white ">
          📄 Data Handling Policy Highlights
        </h2>
        <ul className="list-disc ml-6 md:ml-16 mb-4 space-y-2 text-sm sm:text-base font-roboto">
          <li>No data is stored unless you opt in</li>
          <li>No template parameters are logged</li>
          <li>Logs (if enabled) are encrypted and kept short-lived</li>
          <li>PDF and Email outputs are deleted immediately after rendering</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl md:text-[30px] flex gap-3  font-semibold mt-10 mb-3 text-white ">
        <FaRegEye /> Privacy-First Philosophy
        </h2>
        <p className="text-sm sm:text-base ml-12 mt-3 max-w-[600px]">
          Outliny was built with a simple rule:{' '}
          <strong className="text-white">your data is your data</strong>. We don’t read it, we don’t
          sell it, and we don’t use it to train any models. Ever.
        </p>
        <div className="mt-2 text-sm sm:text-base ml-12 flex gap-2">
          <span className="flex justify-center items-center">
            <FaArrowRightLong />
          </span>
          <a className="underline text-white cursor-pointer" href="/privacy" target="_blank">
            Read our full Privacy Policy
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-2xl md:text-[30px] flex gap-3 font-semibold mt-10 mb-3 text-white ">
        <GiBrain /> Questions About Security?
        </h2>
        <p className="mb-3 text-sm sm:text-base ml-12">
          We’re happy to answer any specific security concerns or requirements. Reach out to us:
        </p>
        <div className="flex flex-wrap gap-2 ml-12 items-center text-sm sm:text-base">
          <CiMail className="text-lg" />
          <span className="text-white font-medium">Email:</span> security@outliny.io
        </div>
      </div>
    </div>
  )
}

export default SecurityPage
