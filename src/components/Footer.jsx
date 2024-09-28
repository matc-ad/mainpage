import React from 'react';

const Footer = ({ isDarkMode }) => (
    <footer className={`text-center py-6 ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-400 text-gray-800'}`}>
        <p>&copy; 2024 matc.ad. Tots els drets reservats.</p>
    </footer>
);


export default Footer;