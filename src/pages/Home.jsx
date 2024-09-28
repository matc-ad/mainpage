import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Modalitats from '../components/Modalitats';
import Subdomains from '../components/Subdomains';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import Roadmap from '../components/Roadmap';

const Home = ({ isDarkMode, toggleDarkMode }) => (
    <>
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div id="header" className="container mx-auto py-24 hyphens-auto">
            <Header isDarkMode={isDarkMode} />
            <Modalitats isDarkMode={isDarkMode} />
            <Subdomains isDarkMode={isDarkMode} />
            <FAQs isDarkMode={isDarkMode} />
            <Roadmap isDarkMode={isDarkMode} />
        </div>
        <Footer isDarkMode={isDarkMode} />
    </>
);

export default Home;
