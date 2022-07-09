import React from 'react'
import Benefits from './Benefits'
import Completed_Project from './Completed_Project'
import FAQs_Related from './FAQs_Related'
import HeroImage from './HeroImage'
import Home_Service from './Home_Service'
import Why_Choose from './Why_Choose'

const Home = () => {
  return (
    <div>
        <HeroImage />
        <Home_Service />
        <Benefits />
        <Completed_Project />
        <Why_Choose />
        <FAQs_Related />
    </div>
  )
}

export default Home