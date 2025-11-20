import React from 'react';

// --- 1. CTA Banner Component (Reused and styled based on image_2e6b1d.png) ---
const CTABannerComponent = () => {
    return (
        <div className="relative overflow-hidden bg-[#FEEFC4] py-20 px-4 sm:px-6 lg:px-8">
            
            {/* Background Shapes */}
            <div 
                className="absolute right-0 top-0 w-2/5 h-full bg-[#FFEED4] opacity-80"
                style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 0% 100%)' }}
            ></div>
            <div 
                className="absolute left-0 bottom-0 w-28 h-28 bg-[#FFEED4] opacity-70"
                style={{ 
                    transform: 'rotate(45deg) translateX(-20%) translateY(20%)', 
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' 
                }}
            ></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Main Headline with Text Gradient (Blue top to bottom) */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4
                           bg-gradient-to-b from-blue-600 to-blue-800 
                           text-transparent bg-clip-text">
                    Let's Connect and Build Your Data Strategy
                </h2>
                
                {/* Descriptive Paragraph */}
                <p className="text-base text-gray-700 max-w-3xl mx-auto mb-8">
                    Ready to transform web data into a business advantage? Use the form below or reach out directly to our experts.
                </p>
                
                {/* Button is optional here, but kept for consistency */}
                <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md shadow-lg text-white bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out">
                    Get in Touch
                </button>
            </div>
        </div>
    );
};

// --- 2. Contact Form Section ---
const ContactFormSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-gray-900">Send Us a Message</h3>
                    <p className="text-gray-600 mt-2">We typically respond within 1-2 business days.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Left Side: Contact Information */}
                    <div className="lg:w-1/3 space-y-8">
                        <ContactInfoItem 
                            icon="📍" 
                            title="Office Location" 
                            details={["123 Data Lane, Suite 400", "Tech City, CA 90210"]} 
                        />
                        <ContactInfoItem 
                            icon="📧" 
                            title="Email Us" 
                            details={["info@datadwip.com", "support@datadwip.com"]} 
                        />
                        <ContactInfoItem 
                            icon="📞" 
                            title="Call Us" 
                            details={["+1 (555) 123-4567", "Mon - Fri, 9am - 5pm EST"]} 
                        />
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:w-2/3 bg-gray-50 p-8 rounded-xl shadow-lg">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput label="Full Name" type="text" placeholder="John Doe" />
                                <FormInput label="Work Email" type="email" placeholder="work@company.com" />
                            </div>
                            <FormInput label="Company Name" type="text" placeholder="Your Company" />
                            <FormInput label="Subject" type="text" placeholder="Regarding Web Scraping Services" />
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                                    placeholder="Tell us about your data needs and project goals..."
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Form Helper Components ---

const FormInput = ({ label, type, placeholder }) => (
    <div>
        <label htmlFor={label} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <input
            type={type}
            name={label}
            id={label}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
            placeholder={placeholder}
            required
        />
    </div>
);

const ContactInfoItem = ({ icon, title, details }) => (
    <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm">
        <div className="text-3xl mr-4">{icon}</div>
        <div>
            <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
            {details.map((detail, index) => (
                <p key={index} className="text-sm text-gray-600">{detail}</p>
            ))}
        </div>
    </div>
);


// --- Main Page Export ---
const ContactUsPage = () => {
    return (
        <div className="font-sans">
            {/* The Gradient CTA Banner at the top */}
            <CTABannerComponent /> 
            
            {/* The main form and contact details */}
            <ContactFormSection />
        </div>
    );
};

export default ContactUsPage;