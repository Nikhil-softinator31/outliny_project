'use client'
import { useGSAP } from '@gsap/react'
import React, { useState, useRef } from 'react'
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5'
import { MdMailOutline } from 'react-icons/md'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Page = () => {
  const pararef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      pararef.current,
      { y: 50 },
      {
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      },
    )

    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    )

    gsap.fromTo(
      paragraphRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    )
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    hearAbout: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your API logic here
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 py-36 md:py-44">
      {/* <p
        ref={pararef}
        className="font-aldrich text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[100%] tracking-wide text-center mb-16 opacity-100 bg-custom-gradient13 bg-clip-text text-transparent"
      >
        Get In Touch
      </p> */}
      <p
        ref={pararef}
        className="font-aldrich text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[100%] tracking-wide text-center mb-12 text-white"
      >
        Get In Touch
      </p>

      <form onSubmit={handleSubmit} className="space-y-8 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: 'name', label: 'Enter Your Name', type: 'text' },
            { id: 'email', label: 'Enter Your Email', type: 'email' },
            { id: 'phone', label: 'Enter Your Phone Number', type: 'text' },
            { id: 'website', label: 'Website', type: 'text' },
          ].map(({ id, label, type }) => (
            <div key={id}>
              <label0
                htmlFor={id}
                className="block mb-3 text-sm font-poppins font-normal text-[17.39px] leading-[1] tracking-[0.05em]"
              >
                {label}
              </label0>
              <input
                type={type}
                id={id}
                name={id}
                className="w-full bg-gradient-to-r from-[#191a1b] to-[#050505] text-white p-4 rounded-md"
                onChange={handleChange}
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="hearAbout"
              className="block mb-3 text-sm font-poppins font-normal text-[17.39px] capitalize leading-[1] tracking-[0.05em]"
            >
              How did you hear about us?
            </label>
            <select
              id="hearAbout"
              name="hearAbout"
              className="w-full bg-[#101112] text-white p-5 rounded-md text-[17.39px]"
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="google">Google</option>
              <option value="social">Social Media</option>
              <option value="friend">Friend</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="service"
              className="block mb-3 text-sm font-poppins font-normal text-[17.39px] capitalize leading-[1] tracking-[0.05em]"
            >
              Services you are looking for
            </label>
            <select
              id="service"
              name="service"
              className="w-full bg-[#101112] text-white p-5 rounded-md text-[17.39px]"
              onChange={handleChange}
            >
              <option value="" >Select a service</option>
              <option value="webdev" >Website Development</option>
              <option value="appdev" >App Development</option>
              <option value="design" >UI/UX Design</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-3 text-sm font-poppins font-normal text-[17.39px] capitalize leading-[1] tracking-[0.05em]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="8"
            className="w-full bg-gradient-to-r from-[#191a1b] to-[#020202] text-white p-4 rounded-md"
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="relative overflow-hidden group bg-[#181c25] text-white px-8 py-3 transition font-poppins text-lg border border-white border-opacity-30 rounded-md"
          >
            <span className="absolute inset-0 bg-gray-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
            <span className="relative z-10">Submit</span>
          </button>
        </div>
      </form>

      <div className="mt-16 text-center px-2">
        <h1
          ref={headingRef}
          className="font-poppins font-bold text-[35px] leading-tight"
        >
          Visit us Anytime
        </h1>

        <p
          ref={paragraphRef}
          className="font-poppins font-medium text-[clamp(16px,4.5vw,21.74px)] leading-relaxed text-[#c1c1c2] mt-4 max-w-3xl mx-auto"
        >
          Visit our agency or simply send us an email anytime you want. If you have any questions,
          please feel free to contact us.
        </p>

        {/* address section */}
        <div className="bg-custom-gradient5 mt-12 max-w-3xl  mx-auto rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#2b2a2a] to-[#050505] px-6 py-4 flex ">
            <h2 className="font-bold text-white text-lg">IND</h2>
          </div>
          <div className="px-6 py-6 text-left text-[#c1c1c2] space-y-4 text-sm font-poppins">
            <div className="flex  gap-3">
              <span className="mt-2 sm:mt-0">
                <IoLocationOutline />
              </span>
              <p>
                <span className="text-white font-medium">Address :</span> 165 D & E, Vidur Nagar,
                Indore, Madhya Pradesh 452009
              </p>
            </div>
            <div className="flex  gap-3">
              <span className="mt-1">
                <IoCallOutline />
              </span>
              <p>
                <span className="text-white font-medium">Contact on :</span> 088271 11112
              </p>
            </div>
            <div className="flex  gap-3">
              <span className="mt-1">
                <MdMailOutline />
              </span>
              <p>
                <span className="text-white font-medium">Email :</span> info@softinator.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
