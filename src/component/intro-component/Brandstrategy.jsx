import React, { useState, useRef } from 'react';
import { ChevronRight } from 'lucide-react'; // Using lucide-react for the arrow icon
import brand1 from "../../assets/images/brandstrategy/brandstrategy-img-1.png"
import brand2 from "../../assets/images/brandstrategy/brandstrategy-img-2.png"
import brand3 from "../../assets/images/brandstrategy/brandstrategy-img-3.png"
import brand4 from "../../assets/images/brandstrategy/brandstrategy-img-4.png"
import brand5 from "../../assets/images/brandstrategy/brandstrategy-img-5.png"

// Define the content for each step in the strategy
const strategySteps = [
  {
    id: 1,
    title: 'Scope and setup',
    description:
      'We define your key risks, competitors, and target markets to clearly establish what is brand intelligence for your specific business needs. We then configure our monitoring platform.',
    imagePlaceholder: 'Image of a business team reviewing data on a large screen in an office.',
    img:brand1
  },
  {
    id: 2,
    title: 'Data Collection & Curation',
    description:
      'Our automated crawlers gather high-fidelity data across the web, from social media to forums, ensuring comprehensive coverage and high-quality input.',
    imagePlaceholder: 'Image of data streams and network connections.',
    img:brand2
  },
  {
    id: 3,
    title: 'Expert Analysis & Reporting',
    description:
      'Our team of brand intelligence experts analyzes the curated data, translating raw findings into actionable strategic insights and custom reports.',
    imagePlaceholder: 'Image of a person marking up a data report.',
    img:brand3
  },
  {
    id: 4,
    title: 'Actionable Intelligence Loop',
    description:
      'We integrate our findings back into your operations, providing continuous monitoring and support to adapt the strategy as your brand and market evolve.',
    imagePlaceholder: 'Image of a continuous process loop or diagram.',
    img:brand4
  },
  {
    id: 5,
    title: 'Actionable Intelligence Loop',
    description:
      'We integrate our findings back into your operations, providing continuous monitoring and support to adapt the strategy as your brand and market evolve.',
    imagePlaceholder: 'Image of a continuous process loop or diagram.',
    img:brand5
  },
];

const StrategyCarousel = () => {
  const [activeStep, setActiveStep] = useState(strategySteps[0].id);
  const carouselRef = useRef(null);

  // Function to scroll to the next step
  const scrollToNextStep = () => {
    if (carouselRef.current) {
      // Find the index of the current active step
      const currentIndex = strategySteps.findIndex(step => step.id === activeStep);
      
      // Calculate the index of the next step
      const nextIndex = (currentIndex + 1) % strategySteps.length; // Loop back to 0 if at the end
      const nextStepId = strategySteps[nextIndex].id;
      
      // Get the step element to scroll to
      const nextStepElement = carouselRef.current.children[nextIndex];

      if (nextStepElement) {
        // Scroll the carousel to the next element
        carouselRef.current.scrollTo({
          left: nextStepElement.offsetLeft,
          behavior: 'smooth',
        });
        setActiveStep(nextStepId);
      }
    }
  };

  // Determine the current step visible (simple approximation based on state)
  const currentStep = strategySteps.find(step => step.id === activeStep);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
          Implementing your brand intelligence strategy
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We act as your dedicated brand intelligence company, providing both the advanced brand
          intelligence software and the expert analysis required to interpret the findings.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth p-10 pb-12 mx-auto border border-blue-200"
          style={{ 
            // Custom styling to mimic the light blue border/background fade effect
            background: 'linear-gradient(135deg, rgba(230, 245, 255, 0.8) 0%, rgba(255, 255, 255, 1) 100%)',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            // Hide the scrollbar visually while retaining functionality
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none',  /* IE and Edge */
          }}
        >
          {strategySteps.map((step) => (
            <div
              key={step.id}
              className="flex-shrink-0 w-full sm:w-[90%] md:w-[850px] snap-center px-4 lg:px-8"
              // A slight min-height ensures the box looks good even with shorter content
              style={{ minHeight: '350px' }} 
            >
              <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-6 shadow-md h-full">
                
                {/* Image Area */}
                <div className="w-full md:w-1/2 h-64 md:h-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                 <img src={step.img} alt="brand" />
                   <div className="text-sm text-gray-500 p-4">
                                           </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center mb-4">
                    <span className="flex items-center justify-center w-8 h-8 font-bold text-white bg-black rounded-full mr-3">
                      {step.id}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrow */}
        <button
          onClick={scrollToNextStep}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow-lg text-gray-600 hover:text-green-500 transition-colors z-20 hidden sm:block"
          aria-label="Next step"
          style={{ right: '0px' }} // Position the button slightly outside the main content padding
        >
          <ChevronRight size={48} className='absolute left-20'/>
        </button>
      </div>
      
      {/* Pagination Dots */}
<div className="flex justify-center items-center mt-8 w-full max-w-sm mx-auto">
  <div className="flex-1 h-1 bg-gray-300 rounded-full relative overflow-hidden">
    {/* The Active Progress Line */}
    <div
      className="absolute top-0 left-0 h-1 bg-black transition-all duration-500 ease-in-out"
      style={{
        // Calculate the width based on the active step (e.g., Step 2 of 4 is 50% width)
        width: `${((activeStep - 1) / (strategySteps.length - 1)) * 100}%`,
      }}
    ></div>
  </div>
  
  {/* Step Markers (Dots on the line) */}
  <div className="absolute flex justify-between w-full max-w-sm px-0">
    {strategySteps.map((step) => (
      <button
        key={step.id}
        onClick={() => {
          // You would also need to update the scrolling logic here
          // to move the carousel to the corresponding step index.
          setActiveStep(step.id);
          // Example scroll logic (if you want to implement the click functionality):
          /*
          if (carouselRef.current) {
            const index = strategySteps.findIndex(s => s.id === step.id);
            const stepElement = carouselRef.current.children[index];
            carouselRef.current.scrollTo({
              left: stepElement.offsetLeft,
              behavior: 'smooth',
            });
          }
          */
        }}
      
        aria-label={`Go to step ${step.id}`}
      />
    ))}
  </div>
</div>

    </div>
  );
};

export default StrategyCarousel;