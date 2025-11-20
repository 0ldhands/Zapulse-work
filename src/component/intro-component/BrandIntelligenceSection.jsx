import React, { useState } from 'react';
import Brand from "../../assets/images/brand-intel-img-2.png"
import vector1 from "../../assets/images/vector/vector-1.png"
import vector2 from "../../assets/images/vector/vector-2.png"

// Define the content for each tab
const tabs = [
  {
    id: 'competitive',
    title: 'Complete competitive view',
    content: "We provide robust competitive brand intelligence, tracking product launches, market messaging, and customer sentiment against your top rivals.",
    imagePlaceholder: 'Image of business professionals analyzing charts and graphs on a desk', // Placeholder description for the image
  },
  {
    id: 'risk',
    title: 'Proactive risk mitigation',
    content: "Identify potential threats and negative trends before they impact your brand reputation or operations.",
    imagePlaceholder: 'Image of a digital dashboard showing risk metrics',
  },
  {
    id: 'sentiment',
    title: 'Deep consumer sentiment',
    content: "Uncover true public feeling and deep-seated attitudes towards your brand and products across all digital channels.",
    imagePlaceholder: 'Image of social media data analysis',
  },
  {
    id: 'reputation',
    title: 'Reputation management',
    content: "Actively monitor and manage your brand's image, addressing issues quickly and effectively to maintain trust.",
    imagePlaceholder: 'Image of a network graph showing brand mentions',
  },
  {
    id: 'security',
    title: 'Security and compliance',
    content: "Ensure brand safety and adherence to industry regulations by monitoring for security threats and compliance risks.",
    imagePlaceholder: 'Image of a padlock icon over data streams',
  },
  {
    id: 'predictive',
    title: 'Predictive planning',
    content: "Leverage AI-driven insights to forecast future market trends, consumer behavior, and competitive moves for strategic planning.",
    imagePlaceholder: 'Image of a crystal ball showing future trends',
  },
];

const BrandIntelligenceSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Find the content for the currently active tab
  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 to-white relative overflow-hidden">
      {/* Background Shapes (Simplified/Stylized) */}
      <img src={vector1} alt="vector1" className='absolute left-35 bottom-4'/>
      <img src={vector2} alt="vector2" className='absolute right-0'/>
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full opacity-30 blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-100 rounded-full opacity-30 blur-2xl transform -translate-x-1/2 translate-y-1/2 rotate-45"></div>

      <div className="max-w-4xl w-full z-10">
        
        {/* Main Header Area */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            The intelligence you need to win
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            We build and manage a comprehensive brand intelligence platform that consolidates data across
            the web, from social media to hidden forums, ensuring you always know what matters most to
            your brand.
          </p>
        </header>
        
        {/* Content Box */}
        <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 border border-orange-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left Menu / Tabs */}
            <div className="md:col-span-1 space-y-2 pr-4 border-r md:border-r border-gray-300 md:border-b-0 ">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`py-2 px-3 cursor-pointer text-base transition-all duration-300 rounded-lg ${
                    activeTab === tab.id
                      ? ' text-gray-400 font-semibold shadow-md relative bg-gradient-to-r from-white to-green-200' // Active state
                      : 'text-gray-700 hover:bg-gray-100' // Inactive state
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                  {/* Active tab indicator (optional: adds a little flair) */}
                  {activeTab === tab.id && (
                    <div className="absolute inset-y-0 right-0 w-1 bg-green-600 rounded-l-md"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Right Content Area (Image and Text) */}
            <div className="md:col-span-2 flex flex-col">
              {activeContent && (
                <>
                  {/* Image Area */}
                  <div className="w-full mb-4 rounded-lg overflow-hidden shadow-lg h-48 sm:h-64 md:h-72">
                    <img src={Brand} alt="Brand" />
                                      </div>

                  {/* Text Description */}
                  <div className="text-sm text-gray-600 mt-2 p-2 bg-gray-50 rounded-lg">
                    {activeContent.content}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIntelligenceSection;