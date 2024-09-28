import React from 'react';
import { subdomainsOptions, colorsOptions } from '../constants';

const Subdomains = ({ isDarkMode }) => {
    const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

    const handleClick = (url) => {
        window.location.href = url;
    };

    return (
        <section id="subdomains" className={`py-20 ${colors.background} ${colors.text}`}>
            <div className="container mx-auto text-center px-4">
                <h2 className={`text-4xl font-extrabold ${colors.title}`}>Els subdominis</h2>
                <p className={`mt-4 text-lg ${colors.description}`}>Explora els subdominis existents.</p>
                <div className="flex flex-wrap justify-center mt-12">
                    {subdomainsOptions.map((option, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center">
                            <div 
                                className={`p-6 border ${colors.border} ${colors.divBackground} rounded-xl text-center flex flex-col w-full cursor-pointer`}
                                onClick={() => handleClick(option.url)}
                            >
                                <h3 className={`text-2xl font-bold ${colors.title}`}>{option.title}</h3>
                                <p className="mt-4">{option.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Subdomains;