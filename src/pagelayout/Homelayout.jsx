import React from 'react'
import Header from '../component/Header'
import Welcome from '../component/intro-component/Welcome'
import Companylogo from '../component/intro-component/Companylogo'
import BrandIntelligenceSection from '../component/intro-component/BrandIntelligenceSection'
import PartnershipSection from '../component/intro-component/Partnershipbrand'
import Brandstrategy from "../component/intro-component/Brandstrategy"
import AchievementsSection from '../component/intro-component/Achievments'
import IndustrySolutionsCarousel from '../component/intro-component/IndustrySolutionsCarousel'

const Homelayout = () => {
  return (
    <div>
        <Header/>
        <Welcome/>
        <Companylogo/>
        <BrandIntelligenceSection/>
        <PartnershipSection/>
        <Brandstrategy/>
        <AchievementsSection/>
        <IndustrySolutionsCarousel/>
    </div>
  )
}

export default Homelayout