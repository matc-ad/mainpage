import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import Home from './pages/Home';
import NonExistent from './pages/NonExistent';
import RedireccionsPage from './pages/RedireccionsPage';
import { colorsOptions, redireccions } from './constants';

const RedirectTo = ({ url }) => {
    useEffect(() => {
        window.location.href = url;
    }, [url]);
    return null;
};

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = Cookies.get('darkMode');
        return savedMode === 'true' || savedMode === undefined; // Default to dark mode if no cookie is set
    });

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            Cookies.set('darkMode', newMode, { expires: 365 });
            return newMode;
        });
    };

    useEffect(() => {
        const mode = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;
        document.body.className = `${mode.background} ${mode.text}`;
    }, [isDarkMode]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
                <Route path="/redireccions" element={<RedireccionsPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
                {redireccions.map((item, index) => (
                        <Route key={index} path={item.page} element={<RedirectTo url={item.url} />} />
                    ))}
                <Route path="*" element={<NonExistent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
            </Routes>
        </Router>
    );
};

export default App;
