import React from 'react'
import { RiBookShelfLine } from 'react-icons/ri'
import { IoRocketOutline } from 'react-icons/io5'
import { BsGraphUp } from 'react-icons/bs'
import { BiSolidHandRight } from 'react-icons/bi'
import CaseStudy from './CaseStudy' // The reusable case study component
import { caseStudiesData } from './caseStudyData' // JSON-like data

const CaseStudiesPage = () => {
  return (
    <div className="max-w-[99rem] mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#ebebeb] bg-[#08090a]">
      <h1 className="flex items-center justify-center gap-3 text-3xl sm:text-4xl md:text-[50px] font-semibold mb-6 mt-10 md:mt-24 md:mb-10 text-white font-poppins">
        <RiBookShelfLine /> Case Studies
      </h1>
      <p className="mb-4 max-w-5xl mx-auto text-center text-sm sm:text-base font-inter">
        See how businesses around the world are using Outliny to streamline communication, automate
        documents, and deliver beautiful, consistent branding — effortlessly.
      </p>
      {caseStudiesData.map((study, idx) => (
        <CaseStudy key={idx} {...study} />
      ))}
      {/* instead of writing: */}
      {/* <CaseStudy
        icon={study.icon}
        title={study.title}
        client={study.client}
        challenge={study.challenge}
        solution={study.solution}
        results={study.results}
      />
      we simply write: tsx
      <CaseStudy {...study} /> */}
      
      <h2 className="text-2xl md:text-[30px] flex gap-3 font-semibold mt-10 mb-3 text-white">
        <IoRocketOutline /> Why Companies Choose Outliny
      </h2>
      <ul className="list-disc ml-6 md:ml-11 mb-4 space-y-2 text-sm sm:text-base font-roboto">
        <li>Fast integration and API-first approach.</li>
        <li>Total branding control across Emails and PDFs.</li>
        <li>Enterprise-grade security and compliance.</li>
        <li>No vendor lock-in — open standards and export options.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4 flex gap-3 text-white">
        <BsGraphUp /> Your Success Story Starts Here
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-white text-black px-6 flex gap-3 py-3 font-semibold rounded-xl hover:bg-[#c5c4c4] transition-all duration-200">
          <BiSolidHandRight className="mt-1" /> Start Free with Outliny
        </button>
        <button className="border px-6 py-3 gap-3 flex font-semibold rounded-xl hover:bg-[#1a1a1a] transition-all duration-200">
          <BiSolidHandRight className="mt-1" /> Talk to Our Team About Your Needs
        </button>
      </div>
    </div>
  )
}

export default CaseStudiesPage
