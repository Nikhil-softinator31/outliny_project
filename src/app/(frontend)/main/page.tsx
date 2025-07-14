'use client'
import HeroSection from './HeroSection'
import Cards from './Cards'
import Automate from './Automate'
import Carousel from './Carousel'
import Testimonial from './Testimonial'
import FAQ from './Faq'

import BottomCard from './BottomCard'

import Card1 from './Card1'


import SpotlightCard from './SpotlightCard'



const Main = () => {
  return (
    <>
      <div className='p-2'>
        <HeroSection />
        <Cards/>
        <SpotlightCard />
        <Automate />
        <Carousel />
        <Card1 />
        <FAQ />
        <Testimonial />
        <BottomCard />
      </div>
    </>
  )
}

export default Main
