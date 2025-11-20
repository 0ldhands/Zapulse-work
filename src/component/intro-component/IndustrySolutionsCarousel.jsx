import React, { useRef } from 'react';
import industry1 from "../../assets/images/industrycard/industry-card-img-1.png"
import industry2 from "../../assets/images/industrycard/industry-card-img-2.png"
import industry3 from "../../assets/images/industrycard/industry-card-img-3.png"
import industry4 from "../../assets/images/industrycard/industry-card-img-4.png"
import industry5 from "../../assets/images/industrycard/industry-card-img-5.png"
import { PiMonitorFill } from "react-icons/pi";
import { IoCart } from "react-icons/io5";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaBookMedical } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

// --- Industry Data (kept the same for brevity) ---
const industryData = [
    {
        title: "Ecommerce",
        imageUrl: industry1,
        altText: "Man shopping in a supermarket aisle",
        hoverBg: "bg-orange-50",
        details: [
            "Monitor competitor pricing and promotions.",
            "Gather product review sentiment at scale.",
            "Track inventory availability across retailers."
        ],
        icon: (
           <IoCart size={150} className='text-orange-300'/>
        )
    },
    {
        title: "SaaS and technology",
        imageUrl: industry2,
        altText: "Person coding on a laptop",
        hoverBg: "bg-yellow-50",
        details: [
            "Leverage app and sales intelligence data.",
            "Track competitor feature adoption.",
            "Forecast subscription churn with precision."
        ],
        icon: (
           <PiMonitorFill size={150}  className='text-orange-300'/>
        )
    },
    {
        title: "Travel",
        imageUrl: industry3,
        altText: "View from an airplane window",
        hoverBg: "bg-blue-50",
        details: [
            "Real-time flight, hotel, and car rental price tracking.",
            "Analyze global route demand and capacity.",
            "Scrape travel review platforms for sentiment."
        ],
        icon: (
           <MdOutlineFlightTakeoff size={150}  className='text-orange-300'/>
        )
    },
    {
        title: "Finance",
        imageUrl: industry4,
        altText: "Person with calculator and documents",
        hoverBg: "bg-green-50",
        details: [
            "Gather public financial statements and reports.",
            "Monitor regulatory compliance data feeds.",
            "Track investment trends and news velocity."
        ],
        icon: (
          <HiCurrencyDollar size={150}  className='text-orange-300'/>
        )
    },
    {
        title: "Marketing", // Corrected title from "Finance" for distinct data
        imageUrl: industry5,
        altText: "Person with calculator and documents",
        hoverBg: "bg-purple-50", 
        details: [
            "Analyze competitor ad creatives and spend.",
            "Track social media trends and audience sentiment.",
            "Monitor search engine rankings and content gaps."
        ],
        icon: (
           <FaBookMedical size={120}  className='text-orange-300'/>
        )
    }
];

// Inner Card Component (Helper Function) - Remains the same
const IndustryCard = ({ title, imageUrl, altText, hoverBg, details, icon }) => {
    return (
        <div className={`group relative w-72 h-96 overflow-hidden rounded-xl shadow-xl cursor-pointer flex-shrink-0 transition-transform duration-500`}>
            {/* Initial State */}
            <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0`}>
                <img src={imageUrl} alt={altText} className="w-full h-full object-cover"/>
                <div className="absolute inset-x-0 bottom-0 h-1/4 flex items-end p-5 bg-gradient-to-t from-black/100 to-transparent">
                    <h2 className="text-2xl font-semibold text-white">{title}</h2>
                </div>
            </div>
            {/* Hover State */}
            <div className={`absolute inset-0 p-6 flex flex-col justify-start transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 bg-gradient-to-t from-orange-200 to-white`}>
                <h2 className="text-2xl font-bold text-black mb-6 border-b-1 border-gray-400">{title}</h2>
                <ul className="space-y-3 text-gray-700">
                    {details.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-lg mr-2 text-black leading-none"><IoIosCheckmarkCircle/></span>
                            <span className="text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-auto flex justify-center relative left-15">
                    {icon}
                </div>
            </div>
        </div>
    );
};


// Main Combined Component
const IndustryCardSection = () => {
    // 1. Initialize the ref for the scrolling container
    const scrollContainerRef = useRef(null);
    // Defines how much to scroll on each click (e.g., width of one card + gap)
    const scrollAmount = 320; 

    // 2. Scroll Left Function
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    // 3. Scroll Right Function
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            {/* 4. Custom CSS for Scrollbar Hiding (Recommended to be in a global CSS file) */}
            <style jsx global>{`
                /* Hide scrollbar for Chrome, Safari and Opera */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                /* Hide scrollbar for IE, Edge and Firefox */
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
            
            <section className="py-10 bg-white px-5">
                {/* Header Content */}
                <div className="max-w-4xl mx-auto text-center mb-12 px-4">
                    <h1 className="text-4xl font-medium text-gray-900 mb-4">
                        Engineering growth across <br /> industries systematically
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our data doesn't just guide, it empowers. Our web scraping service provides the intelligence you need to achieve your key business objectives.
                    </p>
                </div>
                
                {/* Cards Container */}
                <div className="relative">
                    <div 
                        // 1. Attach the ref here
                        ref={scrollContainerRef}
                        className="flex justify-start sm:justify-center overflow-x-scroll gap-8 px-4 sm:px-12 pb-4 scrollbar-hide"
                    >
                        {industryData.map((card, index) => (
                            <IndustryCard 
                                key={index}
                                {...card} 
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows (Functional) */}
                    <div className="flex absolute bottom-[-60px] right-8 transform -translate-y-1/2 space-x-2">
                        <button 
                            onClick={scrollLeft} // Attached handler
                            className="p-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button 
                            onClick={scrollRight} // Attached handler
                            className="p-2 border border-black rounded-full text-white bg-black hover:bg-gray-800 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndustryCardSection;