import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (path) => {
        navigate('/');
        setTimeout(() => {
            document.getElementById(path).scrollIntoView({ behavior: 'smooth' });
        }, 100);
        setIsMenuOpen(false); // Close the menu after navigation
    };

    return (
        <nav className={`p-4 shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div 
                    className={`text-2xl font-extrabold cursor-pointer ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}
                    onClick={() => navigate('/')}
                >
                    matc.ad
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        ☰
                    </button>
                </div>
                <div className={`hidden md:flex space-x-4 items-center`}>
                    <button onClick={() => handleNavigation('modalitats')} className={`transition duration-300 ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-700'}`}>Modalitats</button>
                    <button onClick={() => handleNavigation('subdomains')} className={`transition duration-300 ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-700'}`}>Subdominis</button>
                    <button onClick={() => handleNavigation('faq')} className={`transition duration-300 ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-700'}`}>Preguntes Freqüents</button>
                    <a href="/roadmap" className={`transition duration-300 ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-700'}`}>Roadmap</a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={`transition duration-300 ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-700'}`}>Formulari de contacte</a>
                    <button onClick={toggleDarkMode} className="ml-4 p-2 rounded-full bg-blue-600 text-white">
                        {isDarkMode ? 'Mode Clar' : 'Mode Fosc'}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    <button onClick={() => handleNavigation('modalitats')} className={`block w-full text-center transition duration-300 ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-700'}`}>Modalitats</button>
                    <button onClick={() => handleNavigation('subdomains')} className={`block w-full text-center transition duration-300 ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-700'}`}>Subdominis</button>
                    <button onClick={() => handleNavigation('faq')} className={`block w-full text-center transition duration-300 ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-700'}`}>Preguntes Freqüents</button>
                    <a href="/roadmap" className={`block w-full text-center transition duration-300 ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-700'}`}>Roadmap</a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={`block w-full text-center transition duration-300 ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-700'}`}>Formulari de contacte</a>
                    <button onClick={toggleDarkMode} className="block w-full text-center mt-2 p-2 rounded-full bg-blue-600 text-white">
                        {isDarkMode ? 'Mode Clar' : 'Mode Fosc'}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
