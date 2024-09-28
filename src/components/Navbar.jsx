import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { navLinks, colorsOptions } from '../constants';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (path) => {
        navigate('/');
        setTimeout(() => {
            document.getElementById(path).scrollIntoView({ behavior: 'smooth' });
        }, 100);
        setIsMenuOpen(false);
    };

    const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

    return (
        <nav className={`fixed top-0 left-0 w-full p-4 shadow-lg z-50 ${colors.background}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div 
                    className={`text-2xl font-extrabold cursor-pointer ${colors.text}`}
                    onClick={() => handleNavigation('header')}
                >
                    matc.ad
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
                        ☰
                    </button>
                </div>
                <div className="hidden md:flex space-x-4 items-center">
                    {navLinks.map((link, index) => (
                        link.href ? 
                        <a key={index} href={link.href} className={`${colors.text} hover:${colors.title}`}>{link.label}</a> :
                        <button key={index} onClick={() => handleNavigation(link.path)} className={`${colors.text} hover:${colors.title}`}>{link.label}</button>
                    ))}
                    <button onClick={toggleDarkMode} className={`ml-4 p-2 rounded-full w-32 h-10 ${colors.buttonBackground} ${colors.buttonText} ${colors.buttonHoverBackground}`}>
                        {isDarkMode ? 'Mode Clar' : 'Mode Fosc'}
                    </button>
                </div>
            </div>
            <div className={`md:hidden mt-4 space-y-2 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                {navLinks.map((link, index) => (
                    link.href ? 
                    <a key={index} href={link.href} className={`block w-full text-center ${colors.text} hover:${colors.title}`}>{link.label}</a> :
                    <button key={index} onClick={() => handleNavigation(link.path)} className={`block w-full text-center ${colors.text} hover:${colors.title}`}>{link.label}</button>
                ))}
                <button onClick={toggleDarkMode} className={`block w-full text-center mt-2 p-2 rounded-full w-32 h-10 ${colors.buttonBackground} ${colors.buttonText} ${colors.buttonHoverBackground}`}>
                    {isDarkMode ? 'Mode Clar' : 'Mode Fosc'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
