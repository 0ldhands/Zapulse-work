import React from 'react'
import lanndingimg from "../../assets/images/landing-img-1.png"

import { motion } from "framer-motion";

export default function BrandIntelligenceHero() {
  return (
    <section className="w-full bg-white py-16 md:py-10">
      <div className="max-w-7xl mx-auto  grid md:grid-cols-2 gap-12 items-center justify-between">
       
        <div className="space-y-6">
   
          <span className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-semibold border-1">
            Brand Intelligence
          </span>

  
          <h1 className="text-4xl md:text-5xl  leading-tight text-gray-900">
            Brand intelligence services for
            <span className="text-red-600"> real-time monitoring </span>
            and risk management
          </h1>

   
          <p className="text-gray-600 max-w-md">
            We transform digital chatter into clear, strategic intelligence reports, allowing you to
            manage reputation and achieve growth opportunities with confidence.
          </p>


          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow transition">
            Get started ↗
          </button>
        </div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-end"
        >
          <img
            src={lanndingimg} 
            alt="lanndingimg"
            className="w-full max-w-md h-full relative left-10"
          />
        </motion.div>
      </div>
    </section>
  );
}