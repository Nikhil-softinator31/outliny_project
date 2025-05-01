'use client'


import Testimonials from '../main/Testimonial'
import Flow from './Flow'
import Herosection from './Herosection'



export default function About() {
  return (
    <>
      <div className='pt-16'>
        <Herosection />
  <Flow/>
        <Testimonials />
      </div>
    </>
  )
}
