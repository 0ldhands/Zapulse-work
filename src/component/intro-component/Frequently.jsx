import React, { useState } from 'react';

// Data for the FAQ items
const faqItems = [
    {
        question: "What is brand intelligence?",
        answer: "Brand intelligence is the process of collecting, analyzing, and structuring data from all digital sources like social media, news, dark web, and competitor sites to understand market position, consumer sentiment, and brand-related risks. It moves beyond simple social listening to provide a comprehensive view of brand health.",
        large: true // This item will be the large, open one on the left
    },
    {
        question: "How does brand threat intelligence differ from regular brand monitoring?",
        answer: "Brand threat intelligence focuses specifically on identifying and mitigating potential risks and negative sentiments that could harm a brand's reputation, such as counterfeiting, online fraud, or malicious content. Regular brand monitoring is broader, tracking overall brand mentions, sentiment, and market perception.",
        large: false
    },
    {
        question: "What is brand social intelligence?",
        answer: "Brand social intelligence involves collecting and analyzing data from social media platforms to gain insights into consumer behavior, preferences, trends, and public perception of a brand. It helps in understanding engagement, identifying influencers, and optimizing social media strategies.",
        large: false
    },
    {
        question: "Is your brand intelligence software suitable for competitive analysis?",
        answer: "Absolutely. Our brand intelligence platform is designed to provide robust competitive analysis by tracking competitor strategies, product launches, market share, customer reviews, and online presence. This data helps you benchmark your brand and identify opportunities and threats.",
        large: false
    },
    {
        question: "Do you provide predictive capabilities?",
        answer: "Yes, our advanced analytics capabilities include predictive modeling. We can help you forecast market trends, predict potential brand crises, and anticipate shifts in consumer sentiment, allowing for proactive strategic planning.",
        large: false
    }
];

const FAQSection = () => {
    // State to manage which FAQ item is currently open (for the accordion effect)
    // Initialize with the large item being open if it exists.
    const [openIndex, setOpenIndex] = useState(
        faqItems.findIndex(item => item.large)
    );

    const toggleFAQ = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const LargeFAQCard = faqItems.find(item => item.large);
    const SmallFAQItems = faqItems.filter(item => !item.large);

    return (
        <section className="py-20 bg-gradient-to-b from-tansparent to-orange-200 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-16">
                    Frequently Ask Questions
                </h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Large FAQ Card */}
                    {LargeFAQCard && (
                        <div className="lg:w-1/2 flex-shrink-0">
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
                                <div className="flex items-center mb-6">
                                    <div className="w-8 h-1 bg-red-500 mr-4"></div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {LargeFAQCard.question}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                    {LargeFAQCard.answer}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Right Column: Smaller Accordion FAQs */}
                    <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                        {SmallFAQItems.map((item, index) => {
                            // Adjust index for filtered array to match unique id
                            const originalIndex = faqItems.findIndex(f => f === item);
                            const isOpen = openIndex === originalIndex;

                            return (
                                <div 
                                    key={originalIndex} // Use original index for unique key
                                    className="bg-white rounded-xl shadow-lg p-6 cursor-pointer"
                                    onClick={() => toggleFAQ(originalIndex)}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                            {item.question}
                                        </h3>
                                        <span className="text-xl text-gray-600 transition-transform duration-300">
                                            {isOpen ? (
                                                <svg className="w-6 h-6 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                            ) : (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                            )}
                                        </span>
                                    </div>
                                    <div 
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <p className="text-gray-600 text-sm lg:text-base pt-2">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;