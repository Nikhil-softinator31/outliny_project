'use client'


import Testimonials from '../main/Testimonial'
import OutlinyFeatures from './OutlinyFeatures'
import Herosection from './Herosection'



export default function About() {
  return (
    <>
      <div className='pt-16'>
        <Herosection />
       <OutlinyFeatures />
        <Testimonials />
      </div>
    </>
  )
}
