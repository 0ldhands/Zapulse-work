import React from 'react'
import Header from '../component/Header'
import Welcome from '../component/intro-component/Welcome'
import Companylogo from '../component/intro-component/Companylogo'
import BrandIntelligenceSection from '../component/intro-component/BrandIntelligenceSection'
import PartnershipSection from '../component/intro-component/Partnershipbrand'
import Brandstrategy from "../component/intro-component/Brandstrategy"
import AchievementsSection from '../component/intro-component/Achievments'
import IndustrySolutionsCarousel from '../component/intro-component/IndustrySolutionsCarousel'
import Addondata from '../component/intro-component/Addondata'
import SuccessStoryCard from '../component/intro-component/Successstory'
import ValueAddedServices from '../component/intro-component/Valueadded'
import Knowledgepage from "../component/intro-component/Knowledgepage"
import FAQSection from '../component/intro-component/Frequently'
import Footer from "../component/Footer"

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
        <Addondata/>
        <SuccessStoryCard/>
        <ValueAddedServices/>
        <Knowledgepage/>
        <FAQSection/>
        <Footer/>
    </div>
  )
}

export default Homelayout