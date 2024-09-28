import React from 'react';

const SubdomainCard = ({ title, description, isDarkMode }) => (
    <div className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
        <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
        <p className="mt-4">{description}</p>
    </div>
);

const Subdomains = ({ isDarkMode }) => (
    <section id="subdomains" className={`py-20 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-300 text-gray-800'}`}>
        <div className="container mx-auto text-center">
            <h2 className={`text-4xl font-extrabold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Els subdominis</h2>
            <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Explora els subdominis existents.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <SubdomainCard title="Subdomini 1" description="Descripció del subdomini 1." isDarkMode={isDarkMode} />
                <SubdomainCard title="Subdomini 2" description="Descripció del subdomini 2." isDarkMode={isDarkMode} />
                <SubdomainCard title="Subdomini 3" description="Descripció del subdomini 3." isDarkMode={isDarkMode} />
            </div>
        </div>
    </section>
);

export default Subdomains;