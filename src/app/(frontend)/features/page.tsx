import React from 'react'
import HeroSection from './HeroSection'
import Carousel from '../main/Carousel'
import OutlinyLable1 from './Outliny-label1'
import OutlinyLable3 from './Outliny-label3'
import OutlinyLable2 from './Outliny-label2'
import OutlinyLable4 from './Outliny-label4'
import Testimonials from '../main/Testimonial'


const page = () => {
  return (
    <div>
      <HeroSection />
      <Carousel />
      <OutlinyLable1 />
      <OutlinyLable2 />
      <OutlinyLable3 />
      <OutlinyLable4 />
      <Testimonials/>
    </div>
  )
}

export default page