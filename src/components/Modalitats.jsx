import React from 'react';
import { FaStar } from 'react-icons/fa';

const pricingOptions = [
    {
        title: "Simpatitzant",
        price: "5€",
        features: [
            "Molts beneficis, a un preu reduït.",
            "nom.cognom.cognom@correu.matc.ad",
            "No inclòs.",
            "Accés limitat, segons recursos.",
            "1 any.",
            "Cap."
        ]
    },
    {
        title: "Estudiant",
        price: "9€",
        features: [
            "Tots els beneficis.",
            "elquevulguis@matc.ad (i el de simpatitzant!)",
            "Inclòs.",
            "Accés complet.",
            "1 any.",
            "Ser estudiant."
        ]
    }
];

const Modalitats = ({ isDarkMode }) => (
    <section id="modalitats" className={`py-20 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-300 text-gray-800'}`}>
        <div className="container mx-auto text-center">
            <h2 className={`text-4xl font-extrabold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Les modalitats</h2>
            <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Comparació de les modalitats disponibles.</p>
            <div className="flex justify-center mt-12">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center">
                        <div className={`p-10 border ${isDarkMode ? 'border-neutral-700' : 'border-neutral-300'} rounded-xl text-center`}>
                            <p className="text-4xl mb-8">
                                {option.title}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400 tracking-tight">/Any</span>
                            </p>
                            <ul className="text-left">
                                {option.features.map((feature, index) => (
                                    <li key={index} className="mt-8 flex items-center">
                                        <FaStar />
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Modalitats;