'use client'
import HeroSection from './HeroSection'
import Cards from './Cards'
import Automate from './Automate'
import Carousel from './Carousel'
import Testimonial from './Testimonial'
import FAQ from './Faq'

import BottomCard from './BottomCard'

import EnterpriseCards from './EnterpriseCards'


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
        <EnterpriseCards/>
        <FAQ />
        <Testimonial />
        <BottomCard />
      </div>
    </>
  )
}

export default Main
