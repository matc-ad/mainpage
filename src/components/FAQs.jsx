import React from 'react';

const FAQs = ({ isDarkMode }) => (
    <section id="faq" className={`py-20 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-300 text-gray-800'}`}>
        <div className="container mx-auto text-center">
            <h2 className={`text-4xl font-extrabold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Preguntes Freqüents</h2>
            <div className="mt-12 text-left">
                <div className="mb-8">
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Per què?</h3>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Som un grup d'estudiants que ens va fer gràcia poder tenir el correu @matc.ad. Fa poc Andorra va començar a permetre la compra dels .ad i per això ho hem comprat. Hem decidit crear aquesta pàgina web i més serveis que ens seran útils o divertits.</p>
                </div>
                <div className="mb-8">
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Pregunta 2</h3>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Resposta a la pregunta 2.</p>
                </div>
                <div className="mb-8">
                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Pregunta 3</h3>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Resposta a la pregunta 3.</p>
                </div>
            </div>
        </div>
    </section>
);

export default FAQs;