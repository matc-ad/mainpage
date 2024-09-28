import React from 'react';
import { FaStar } from 'react-icons/fa';
import { modalitatsOptions, colorsOptions } from '../constants';

const Modalitats = ({ isDarkMode }) => {
    const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

    return (
        <section id="modalitats" className={`py-5 ${colors.background} ${colors.text}`}>
            <div className="container mx-auto text-center px-4">
                <h2 className={`text-4xl font-extrabold ${colors.title}`}>Les modalitats</h2>
                <p className={`mt-4 text-lg ${colors.paragraph}`}>Comparació de les modalitats disponibles.</p>
                <div className="flex flex-wrap justify-center mt-12">
                    {modalitatsOptions.map((option, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center">
                            <div className={`p-6 border ${colors.border} ${colors.divBackground} rounded-xl text-center flex flex-col w-full hyphens-auto`}>
                                <p className="text-4xl mb-4">
                                    {option.title}
                                </p>
                                <p className="mb-4">
                                    <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                    <span className={`${colors.paragraph} tracking-tight`}>/Any</span>
                                </p>
                                <ul className="text-left flex-grow">
                                    {option.features.map((feature, index) => (
                                        <li key={index} className="mt-4 flex items-center">
                                            <FaStar className="flex-shrink-0" />
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
};

export default Modalitats;