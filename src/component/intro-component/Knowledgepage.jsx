import React from "react";
import know from "../../assets/images/knowledge/knowledge-img-1.png"
import know1 from "../../assets/images/knowledge/knowledge-img-2.png"
import know2 from "../../assets/images/knowledge/knowledge-img-3.png"



const KnowledgeCard = ({ category, date, title, image }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer">
        <div className="h-48 w-full overflow-hidden">
            {/* The image should link to the imported image path */}
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"/>
        </div>
        <div className="p-6">
            <p className="text-xs text-gray-500 mb-2">
                <span className="font-semibold text-[#00A38B] mr-2">{category}</span> &bull; {date}
            </p>
            <h4 className="text-lg font-medium text-gray-900 leading-snug">
                {title}
            </h4>
        </div>
    </div>
);


const Knowledgepage = () => {
    
    // The data structure looks correct based on the design.
    const knowledgeData = [
        { category: "AI Model", date: "October 22, 2025", title: "How Large-Scale Web Scraping Supports AI Model Training and Performance?", image: know },
        { category: "Healthcare", date: "August 16, 2025", title: "Healthcare Data Mining Examples, Techniques and Benefits", image: know1 },
        { category: "Web Crawling", date: "August 27, 2024", title: "Enterprise Web Crawling with Custom Integrations for Business", image: know2 },
    ];

    return (
        <div>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-medium text-gray-900 mb-2">
                        The knowledge base
                    </h2>
                    <p className="text-gray-400 mb-12">
                        Know everything about custom data engineering services.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {knowledgeData.map((article, index) => (
                            <KnowledgeCard key={index} {...article} />
                        ))}
                    </div>

                    <button className="mt-12 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 transition duration-300 ease-in-out">
                        VIEW ALL
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Knowledgepage;