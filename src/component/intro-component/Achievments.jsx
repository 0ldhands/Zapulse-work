import React from 'react';

const achievementData = [
  {
    type: 'main',
    value: '100%',
    label: 'Accuracy',
    description: 'Ensures every detail of the data you receive is correct and reliable.',
    bgColor: 'bg-blue-100', // Light blue background
    textColor: 'text-blue-600',
    buttonColor: 'bg-blue-500',
    buttonTextColor: 'text-white',
  },
  {
    type: 'small',
    value: '1000+',
    label: 'Websites',
    description: 'We expertly extract data from over 1,000 global websites for maximum depth.',
    bgColor: 'bg-orange-100', // Light orange background
    textColor: 'text-orange-600',
    buttonColor: 'bg-orange-200',
    buttonTextColor: 'text-orange-700',
  },
  {
    type: 'small',
    value: '20+',
    label: 'Countries',
    description: 'Our data provides crucial intelligence across more than 20 countries.',
    bgColor: 'bg-green-100', // Light green background
    textColor: 'text-green-600',
    buttonColor: 'bg-green-200',
    buttonTextColor: 'text-green-700',
  },
  {
    type: 'small',
    value: '50+',
    label: 'Industries',
    description: 'We support over 50 sectors, including Manufacturing, Retail, and Marketing.',
    bgColor: 'bg-green-100', // Light green background (same as above for consistency if needed)
    textColor: 'text-green-600',
    buttonColor: 'bg-green-200',
    buttonTextColor: 'text-green-700',
  },
  {
    type: 'small',
    value: '50M',
    label: 'Records',
    description: 'We have successfully extracted and delivered over 50 million data records to clients',
    bgColor: 'bg-blue-100', // Light blue background (same as main card for consistency if needed)
    textColor: 'text-blue-600',
    buttonColor: 'bg-blue-200',
    buttonTextColor: 'text-blue-700',
  },
];

const AchievementsSection = () => {
  return (
    <div className="flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Accuracy Card */}
          <div className="md:col-span-1 p-8 rounded-2xl shadow-lg relative overflow-hidden h-96 flex flex-col justify-end bg-blue-100">
            {/* Background circles/waves - simplified, could be more complex with SVGs or more divs */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-1/4 -left-1/4 w-96 h-96 rounded-full bg-blue-200 opacity-20" style={{ transform: 'scale(1.2)' }}></div>
              <div className="absolute -top-1/2 -left-1/2 w-[600px] h-[600px] rounded-full bg-blue-200 opacity-10" style={{ transform: 'scale(1.1)' }}></div>
            </div>

            <div className="relative z-10">
              <p className="text-6xl font-extrabold text-blue-600 mb-4 leading-none">
                100%
              </p>
              <button className="bg-blue-500 text-white text-sm font-medium py-1 px-3 rounded-full mb-3">
                Accuracy
              </button>
              <p className="text-base text-gray-700">
                Ensures every detail of the data you receive is correct and reliable.
              </p>
            </div>
          </div>

          {/* Smaller Achievement Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievementData.filter(item => item.type === 'small').map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-lg flex flex-col justify-between ${item.bgColor} h-44`}
              >
                <p className={`text-4xl font-extrabold ${item.textColor} mb-2 leading-none`}>
                  {item.value}
                </p>
                <button className={`${item.buttonColor} ${item.buttonTextColor} text-xs font-medium py-1 px-2 rounded-full mb-2 self-start`}>
                  {item.label}
                </button>
                <p className="text-sm text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;