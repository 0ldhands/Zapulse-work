import React from 'react';

const partnershipFeatures = [
  {
    number: 1,
    title: 'Integrated risk focus',
    description:
      'Unlike general-purpose tools, our automated crawlers are engineered to defeat modern anti-bot systems, ensuring uninterrupted, high-fidelity price intelligence data.',
  },
  {
    number: 2,
    title: 'Customization over software',
    description:
      'While we utilize the best brand intelligence software, our value is in the expert customization and human validation of every system we deploy.',
  },
  {
    number: 3,
    title: 'Depth of coverage',
    description:
      'Our proprietary data collection capabilities reach further than standard platforms, including localized web sources and specific forums critical for true competitive brand intelligence.',
  },
  {
    number: 4,
    title: 'Guaranteed reliability',
    description:
      'We guarantee consistent uptime and data quality with formal Service-Level Agreements (SLAs). Our promise is a data stream you can always count on.',
  },
  {
    number: 5,
    title: 'Full-fledged compliance',
    description:
      'We operate with a strict ethical framework, respecting website terms of service and legal regulations to ensure our data collection is responsible and risk-free.',
  },
  {
    number: 6,
    title: 'Dedicated partnership',
    description:
      'We act as an extension of your team, providing ongoing support and adapting our services as your data needs evolve.',
  },
];

const TrustedPartnershipSection = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Left Column: Features List */}
      <div className="lg:w-1/2 space-y-4 pr-0 lg:pr-8 h-150 overflow-auto ">
        {partnershipFeatures.map((feature) => (
          <div
            key={feature.number}
            // Background color close to the image: text-gray-800 bg-orange-50/50
            className="relative p-6 bg-orange-100 rounded-lg shadow-sm overflow-hidden" 
          >
            {/* Large Number Styling - Positioned absolutely in the corner */}
            <div className="absolute bottom-0 right-0 text-[80px] font-medium text-orange-200 opacity-60 pointer-events-none leading-none">
              {feature.number}
            </div>

            {/* Content Area */}
            <div className="relative z-10 p-5">
              <h3 className="text-base font-medium text-gray-600 mb-2 border-b-1 border-gray-300">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Main Heading */}
      <div className="lg:w-1/2 pt-12 lg:pt-0 lg:pl-8 flex flex-col justify-start">
        <h2 className="text-3xl sm:text-4xl font-medium text-blue-600 leading-tight mb-6">
          Trusted partnership in brand security
        </h2>
        <p className="text-lg text-gray-600">
          Choosing the right brand intelligence company means partnering with
          experts who understand both the data and the risk involved in today's
          digital landscape.
        </p>
      </div>
    </div>
  );
};

export default TrustedPartnershipSection;