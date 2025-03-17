'use client'
import HeroSection from './HeroSection'
import Carousel from './Carousel'
import Automate from './Automate'
import Testimonial from './Testimonial'
import FAQ from './Faq'
import Slider from './Slider'
import BottomCard from './BottomCard'
import Navbar from './Navbar'
import Card1 from './Card1'
import Footer from './Footer'
import BackgroundVideo from './BackgroundVideo'
import SpotlightCard from './SpotlightCard'

// import HeroSection2 from './HeroSection2'
// import BottomCards from './BottomCard'

const page = () => {
  return (
    <>
      

   
        <Navbar />
     
        <HeroSection />

        <Carousel />
        <Slider />
        <Automate />
        <Card1 />
        <FAQ />
        <Testimonial />
        <SpotlightCard/>
        <BottomCard />
        <Footer/>  


    </>
  )
}

export default page
//
