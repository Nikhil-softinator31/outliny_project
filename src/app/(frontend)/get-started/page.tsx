'use client'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Page = () => {

    const [formData,setFormData] = useState({
        email: "",password: "",username:""
    });

    const handleChange = (e:any) =>{
        setFormData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }));
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault();
        console.log('formData is ',formData);
        }

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-black px-4'>
      <div className='flex w-full max-w-6xl bg-gradient-to-br from-[#000000] via-[#0f0d0d] to-[#1a1a1a] rounded-2xl shadow-white border shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden '>

        {/* Left Side - Your Form (Unchanged) */}
        <div className='w-full md:w-1/2 p-8 md:p-12 text-white bg-[#1a1a1a] rounded-2xl shadow-[inset_5px_5px_10px_#141414,inset_-5px_-5px_10px_#1f1f1f]'>
  <h2 className='text-xl text-center font-bold font-aldrich py-2'>SignUp to continue</h2>
  <form onSubmit={handleSubmit} autoComplete="off">
    <div className='mt-2 space-y-5'>

       {/* Username  Field */}
       <div className='space-y-1'>
        <label htmlFor="username">Username</label>
        <input
        
          type="text"
          id="username"
          name="username"
          required
          value={formData.username}
          onChange={handleChange}
          placeholder='Enter your username'
          className='w-full p-3 rounded-xl bg-[#1a1a1a] text-white shadow-[inset_4px_4px_8px_#141414,inset_-4px_-4px_8px_#1f1f1f] outline-none'
        />
      </div>

 
      {/* Email Field */}
      <div className='space-y-1'>
        <label htmlFor="email">Email Address</label>
        <input
        
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
          className='w-full p-3 rounded-xl bg-[#1a1a1a] text-white shadow-[inset_4px_4px_8px_#141414,inset_-4px_-4px_8px_#1f1f1f] outline-none'
        />
      </div>

      {/* Password Field */}
      <div className='space-y-1 '>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter your password'
          className='w-full p-3 rounded-xl bg-[#1a1a1a] text-white shadow-[inset_4px_4px_8px_#141414,inset_-4px_-4px_8px_#1f1f1f] outline-none'
        />
      </div>

      {/* Remember Me + Forgot Password */}
      <div className='flex justify-between text-sm text-gray-400'>
        <label className='flex items-center space-x-2'>
          <input type='checkbox' className='accent-[#3681f7]' />
          <span>Remember me</span>
        </label>
        <button className='hover:underline'>Forgot Your Password?</button>
      </div>

      {/* Login Button */}
      <div className='w-full text-center'>
        <button
          className='w-full p-3 rounded-xl bg-[#1a1a1a] text-white font-medium shadow-[4px_4px_8px_#141414,-4px_-4px_8px_#1f1f1f] hover:shadow-[inset_4px_4px_8px_#141414,inset_-4px_-4px_8px_#1f1f1f] transition-all duration-300'
          type='submit'
        >
          Sign Up
        </button>
      </div>
    </div>

    {/* OR Divider */}
    <div className="flex items-center mt-6 mb-4 gap-4 w-full">
      <hr className="flex-grow border-t border-gray-500" />
      <span className="text-gray-500 text-sm whitespace-nowrap">or continue with</span>
      <hr className="flex-grow border-t border-gray-500" />
    </div>

    {/* Google Login */}
    <div className='flex items-center justify-center gap-2 p-3 rounded-xl bg-[#1a1a1a] shadow-[4px_4px_8px_#141414,-4px_-4px_8px_#1f1f1f] hover:shadow-[inset_4px_4px_8px_#141414,inset_-4px_-4px_8px_#1f1f1f] transition-all duration-300'>
      <FcGoogle className='text-xl' />
      <button className='text-white'>sign up with Google</button>
    </div>

    {/* GitHub Login */}
    <div className='flex items-center justify-center gap-2 mt-4 p-3 rounded-xl bg-[#1a1a1a] shadow-[4px_4px_8px_#141414,-4px_-4px_8px_#1f1f1f] hover:shadow-[inset_4px_4px_8px_#141414,inset_-4px_-4px_8px_#1f1f1f] transition-all duration-300'>
      <FaGithub className='text-xl text-white' />
      <button className='text-white'>sign up with GitHub</button>
    </div>

    {/* Register Link */}
    <div className='text-center mt-6'>
      <Link href='/login' className='hover:underline text-gray-400'>
        Already have an account? <span className='text-white'>Login</span>
      </Link>
    </div>
  </form>
</div>


        {/* Right Side - Branding */}
        <div className='hidden md:flex w-1/2 items-center justify-center p-8 bg-gradient-to-bl from-[#0d0d0d] via-[#1a1a1a] to-[#292929] text-white relative'>
          <div className="text-center space-y-4">
            <div className="text-5xl font-bold text-cyan-400"></div>
            <h2 className="text-2xl font-bold font-aldrich"> Welcome to Outliny</h2>
            <p className="text-sm text-gray-400 max-w-sm mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <ul className="text-xs text-gray-400 space-y-2 mt-4">
              <li>✅ High conversion rates on autopilot</li>
              <li>✅ Free templates for any vertical</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page;
