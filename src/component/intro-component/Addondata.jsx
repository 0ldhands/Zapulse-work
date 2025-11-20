import React from 'react';

const Addondata = () => {
    return (
        <section className="relative bg-amber-50 m-10 py-20 px-4 overflow-hidden md:py-8 lg:py-10">
            {/* Abstract Shapes in Background */}
            <div className="absolute inset-0">
                {/* Large wavy shape on the right */}
                <div className="absolute right-0 top-0 w-1/3 h-full bg-amber-100 opacity-70"
                     style={{
                         clipPath: 'polygon(70% 0, 100% 0, 100% 100%, 50% 100%, 70% 50%)' // Adjust as needed
                     }}>
                </div>
                {/* Smaller star-like shape (or abstract burst) */}
                <div className="absolute left-1/4 bottom-1/4 w-32 h-32 bg-amber-100 opacity-60 rounded-full animate-pulse-slow"
                     style={{
                         transform: 'rotate(45deg)',
                         clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                     }}>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Content */}
                <div className="text-center lg:text-left lg:w-3/5 mb-10 lg:mb-0">
                    <h1 className="text-4xl sm:text-1xl md:text-3xl lg:text-5xl font-medium text-blue-700 leading-tight mb-6">
                        Make the shift to reliable <br /> web data - DataDwip
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 mb-10">
                        Ready to transform raw data into a continuous, automated strategic engine? Explore our advanced data
                        intelligence services and unlock your competitive edge.
                    </p>
                    <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out">
                        Get started
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L12.586 12H4a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                {/* Optional: You could place an image or another illustration here on larger screens */}
                {/* For this design, the right side is mostly background shapes */}
                <div className="hidden lg:block lg:w-2/5">
                    {/* Placeholder for potential future content or just to maintain structure */}
                </div>
            </div>
        </section>
    );
};

export default Addondata;