import React from 'react';
import logo from "../assets/logo/logo.png"
import Footertop from "../component/intro-component/Footertop"

// --- Placeholder Data (Reused from previous footer structure) ---
const footerLinks = {
    usefulLinks: [
        "Home", "About Us", "Services", "Industry", "Portfolio", "Case-Studies", "Contact"
    ],
    servicesColumn1: [
        "Web scraping services", "Enterprise web crawling", "Data mining services", "AI powered web scraping", "Search engine data scraping", "Mobile app scraping", "Android app scraping"
    ],
    servicesColumn2: [
        "iOS app scraping", "Real time scraping", "Web scraping API", "Live crawler", "Data insights", "Data intelligence", "AI powered price intelligence" 
    ],
    servicesColumn3: [
        "Brand intelligence", "Retailer intelligence", "Custom data engineering services", "Big data services", "Data warehouse services", "Data strategy and governance" 
    ]
};

// --- Helper Component for Footer Column ---
const FooterLinkColumn = ({ title, links }) => (
    <div className="w-full sm:w-1/2 md:w-auto mb-8 md:mb-0">
        {/* Title has slightly darker color and specific spacing */}
        <h4 className="text-gray-300 text-base font-semibold mb-4">{title}</h4>
        <ul className="space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-[#40FFE0] text-sm transition-colors duration-200">
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);


const SimpleFooterSection = () => {
    return (
        // The entire footer container has a deep black background
        <footer className="bg-black py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<Footertop/>
                
                {/* TOP ROW: Logo and Links Columns (image_2e54dd.png) */}
                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-y-10 md:gap-x-8 lg:gap-x-12">
                    
                    {/* Column 1: Logo (spanning 1 column) */}
                    <div className="md:col-span-1">
                        <div className="text-white text-lg font-bold flex items-center mb-10">
                            {/* Logo matching the design's appearance */}
                           <img src={logo} alt="logo" />
                        </div>
                    </div>

                    {/* Columns 2-5: Link Sections (spanning 4 columns total) */}
                    <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-y-10 sm:gap-x-8">
                        <FooterLinkColumn title="Useful Links" links={footerLinks.usefulLinks} />
                        <FooterLinkColumn title="Services" links={footerLinks.servicesColumn1} />
                        <FooterLinkColumn title="Services" links={footerLinks.servicesColumn2} />
                        <FooterLinkColumn title="Services" links={footerLinks.servicesColumn3} />
                    </div>
                </div>
                
                {/* --- LARGE FADED TEXT (Excluded as per image_2e54dd.png) --- */}

                
                    <h1 className='text-9xl font-medium tracking-tight 
           bg-gradient-to-b from-gray-400 to-black
           text-transparent bg-clip-text text-center m-10'>Data Dwip</h1>
                

            </div>

            {/* COPYRIGHT BAR (image_2e54dd.png) */}
            <div className="py-4 mt-10 border-t border-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p className="mb-2 md:mb-0">
                        Copyright © 2025 Power By DataDwip. <a href="#" className="hover:text-white underline">Privacy Policy</a> | <a href="#" className="hover:text-white underline">Terms and Conditions</a>
                    </p>
                    <div className="flex space-x-3 text-lg">
                        {/* Social Icons matching the design */}
                        <a href="#" className="hover:text-white transition-colors">in</a>
                        <a href="#" className="hover:text-white transition-colors">f</a>
                        <a href="#" className="hover:text-white transition-colors">x</a>
                        <a href="#" className="hover:text-white transition-colors">o</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SimpleFooterSection;