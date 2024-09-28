import React from 'react';
import { colorsOptions } from '../constants';

const Footer = ({ isDarkMode }) => {
    const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

    return (
        <footer className={`text-center py-5 ${colors.divBackground} ${colors.text}`}>
            <p>&copy; 2024 matc.ad. Tots els drets reservats.</p>
        </footer>
    );
};

export default Footer;