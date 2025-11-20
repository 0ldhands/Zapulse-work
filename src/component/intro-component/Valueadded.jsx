import React from "react";

// Data for the service cards
const services = [
  { title: "Web scraping", link: "#" },
  { title: "Data Mining Services", link: "#" },
  { title: "AI Powered Web Scraping", link: "#" },
  { title: "Search Engine Data Scraping", link: "#" },
  { title: "Mobile App Scraping", link: "#" },
  { title: "Android App Scraping", link: "#" },
  { title: "iOS App Scraping", link: "#" },
];

const ValueAddedServices = () => {
  return (
    <section className="relative bg-[#1a3632] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Texture Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFF" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm10-10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm10-10v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM26 44v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM26 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM16 24v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM16-6v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
        }}
      ></div>

      {/* Rotating Asterisk (Background Decoration) */}
      <div
        className="absolute top-1/4 right-0 w-48 h-48 sm:w-64 sm:h-64 opacity-10 animate-spin-slow-reverse"
        style={{
          color: "white", // Color of the asterisk
          fontSize: "200px", // Adjust size as needed
          transform: "rotate(-20deg)", // Initial rotation
          transformOrigin: "center center", // Ensure it spins correctly
        }}
      >
        &#x2731; {/* Unicode character for asterisk/starburst */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-white max-w-lg">
          <h2 className="text-2xl sm:text-4xl font-light leading-tight">
            Other value-added data services from the house of 
          </h2>
          <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-[#40FFE0]">
            DataDwip
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="group relative bg-[#0A5C50] hover:bg-[#40FFE0] p-6 rounded-lg overflow-hidden h-48 flex flex-col justify-between transition-all duration-300 ease-in-out border border-[#40FFE0] hover:border-[#0A5C50]"
            >
              <h3 className="text-xl font-semibold text-white group-hover:text-black transition-colors duration-300">
                {service.title}
              </h3>

              {/* Hover Animation: Transparent Circle & Arrow */}
              <div className="absolute bottom-6 right-6 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-in-out group-hover:bg-transparent">
                {/* The "transparent circle" is the whole area being transparent on hover */}
                {/* Arrow Icon */}
                <svg
                  className="w-6 h-6 text-white group-hover:text-black transition-all duration-3300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </a>
          ))}

          {/* "VIEW ALL" Card */}
          <a
            href="#"
            className="group relative top-20 bg-white hover:bg-black p-6 rounded-full overflow-hidden h-0 flex flex-col items-center justify-center transition-all duration-300 ease-in-out border border-[#2a4d46] hover:border-white"
          >
            <h3 className="text-lg font-medium text-black group-hover:text-white mb-2 transition-colors duration-300">
              VIEW ALL
            </h3>
            {/* Arrow Icon */}
            <svg
              className="w-6 h-6 text-white group-hover:text-black transition-all duration-300 ease-in-out group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueAddedServices;
