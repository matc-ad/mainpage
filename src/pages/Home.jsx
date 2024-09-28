import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Modalitats from '../components/Modalitats';
import Subdomains from '../components/Subdomains';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';

const Home = ({ isDarkMode, toggleDarkMode }) => (
    <>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="container mx-auto py-20">
            <Header isDarkMode={isDarkMode} />
            <Modalitats isDarkMode={isDarkMode} />
            <Subdomains isDarkMode={isDarkMode} />
            <FAQs isDarkMode={isDarkMode} />
        </div>
        <Footer isDarkMode={isDarkMode} />
    </>
);

export default Home;
