import React from 'react';
import { preguntesFreq, colorsOptions} from '../constants';

const FAQs = ({ isDarkMode }) => {
    const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

    return (
        <section id="faq" className={`py-20 px-4 sm:px-6 lg:px-8 ${colors.background} ${colors.text}`}>
            <div className="container mx-auto text-center">
                <h2 className={`text-4xl font-extrabold ${colors.title}`}>Preguntes Freqüents</h2>
                <div className="mt-12 text-left">
                    {preguntesFreq.map((faq, index) => (
                        <div key={index} className={`items-center p-6 border ${colors.border} rounded-lg shadow-md mb-8 ${colors.divBackground}`}>
                            <h3 className={`text-2xl font-bold ${colors.title}`}>{faq.question}</h3>
                            <p className={`mt-2 ${colors.paragraph}`}>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
