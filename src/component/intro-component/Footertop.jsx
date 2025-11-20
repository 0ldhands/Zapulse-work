import React from 'react';

const CTABannerComponent = () => {
    return (
        // The main container for the banner section
        <div className="relative bottom-50 overflow-hidden bg-[#FEEFC4] py-20 px-4 sm:px-6 lg:px-8 rounded-2xl">
            
            {/* --- Background Shapes --- */}
            {/* Wavy shape on the right, matching the image */}
            <div 
                className="absolute right-0 top-0 w-2/5 h-full bg-[#FFEED4] opacity-80"
                style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0% 100%)' }}
            ></div>
            
            {/* Asterisk/star shape on the left, matching the image */}
            <div 
                className="absolute left-0 bottom-0 w-28 h-28 bg-[#FFEED4] opacity-70"
                style={{ 
                    transform: 'rotate(45deg) translateX(-20%) translateY(20%)', // Adjust position
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' // Star shape
                }}
            ></div>

            {/* --- Content Container --- */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Main Headline with Text Gradient (top to bottom blue) */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-4
                           bg-blue-600 
                           text-transparent bg-clip-text">
                    Your data-powered future starts here
                </h2>
                
                {/* Descriptive Paragraph */}
                <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto mb-8">
                    Want to turn web data into your ultimate business advantage? Our experts are here to help you 
                    build a reliable data strategy that drives growth and powers your decisions.
                </p>
                
                {/* Call-to-Action Button */}
                <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md shadow-lg text-white bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out">
                    Schedule a free consultation 
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L12.586 12H4a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CTABannerComponent;