import React from 'react';
import Navbar from '../components/Navbar';
import Totes from '../components/Totes';
import Footer from '../components/Footer';
import { colorsOptions } from '../constants';

const NonExistent = ({ isDarkMode, toggleDarkMode }) => (
    <>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div id="header" className="container mx-auto py-20">
            <header className={`text-center py-5 bg-cover bg-center ${isDarkMode ? colorsOptions.darkMode.background : colorsOptions.lightMode.background} ${isDarkMode ? colorsOptions.darkMode.text : colorsOptions.lightMode.text}`} style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
                <div className={`p-6 border ${isDarkMode ? colorsOptions.darkMode.border : colorsOptions.lightMode.border} rounded-lg ${isDarkMode ? colorsOptions.darkMode.divBackground : colorsOptions.lightMode.divBackground} bg-opacity-90`}>
                    <h1 className={`text-5xl font-extrabold ${isDarkMode ? colorsOptions.darkMode.title : colorsOptions.lightMode.title}`}>Ups, aquesta pàgina no existeix.</h1>
                    <p className={`mt-4 text-2xl ${isDarkMode ? colorsOptions.darkMode.paragraph : colorsOptions.lightMode.paragraph}`}>No et preocupis, pots veure totes les redireccions aquí:</p>
                </div>
            </header>
            <Totes isDarkMode={isDarkMode} />
        </div>
        <Footer isDarkMode={isDarkMode} />
    </>
);

export default NonExistent;
