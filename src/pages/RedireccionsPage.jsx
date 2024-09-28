import React from 'react';
import Navbar from '../components/Navbar';
import Totes from '../components/Totes';
import Footer from '../components/Footer';

const NonExistent = ({ isDarkMode, toggleDarkMode }) => (
    <>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div id="header" className="container mx-auto py-24">
            <Totes isDarkMode={isDarkMode} />
        </div>
        <Footer isDarkMode={isDarkMode} />
    </>
);

export default NonExistent;
