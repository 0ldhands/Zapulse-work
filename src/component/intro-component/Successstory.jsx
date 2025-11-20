import React from 'react';
import success from "../../assets/images/success-img.jpg"

const SuccessStoryCard = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Our success stories</h2>
            <p className="text-gray-600 text-center mb-8">Showcasing real-world impact through data-driven partnerships.</p>
            
            <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden rounded-xl shadow-2xl">
                {/* Background Image - FIXED: Use the correct imported variable */}
                <img 
                    src={success}
                    alt="Tire factory floor" 
                    className="w-full h-full object-cover"
                />

                {/* Dark Overlay with Details */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-r from-black to-transparent  text-white">
                    <h3 className="text-3xl sm:text-4xl font-medium mb-8 max-w-lg">
                        Optimizing competitive pricing in the tire industry
                    </h3>
                    
                    {/* Details Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 text-sm sm:text-base mb-6">
                        <div>
                            <p className="opacity-70">Partnership since</p>
                            <p className="font-light text-lg">2024</p>
                        </div>
                        <div>
                            <p className="opacity-70">Industry</p>
                            <p className="font-light text-lg">Tire Manufacturing</p>
                        </div> <br />
                        <div className="col-span-2 sm:col-span-1">
                            <p className="opacity-70">Location</p>
                            <p className="font-light text-lg">North America</p>
                        </div>
                    </div>
                    
                    {/* Read More Button */}
                    <button className="inline-flex items-center w-max px-4 py-2 border border-white text-sm font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-black transition duration-300">
                        Read more
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessStoryCard;