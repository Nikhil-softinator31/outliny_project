'use client'
import HeroSection from './HeroSection'
import Carousel from './Carousel'
import Automate from './Automate'
import Testimonial from './Testimonial'
import FAQ from './Faq'
import Slider from './Slider'
import BottomCard from './BottomCard'

import Card1 from './Card1'

import BackgroundVideo from './BackgroundVideo'
import SpotlightCard from './SpotlightCard'

// import HeroSection2 from './HeroSection2'
// import BottomCards from './BottomCard'

const Main = () => {
  return (
    <>
      <div className='p-2'>
        <HeroSection />

        <Slider />
        <Automate />
        <Carousel />
        <Card1 />
        <FAQ />
        <Testimonial />
        <SpotlightCard />
        <BottomCard />
      </div>
    </>
  )
}

export default Main
