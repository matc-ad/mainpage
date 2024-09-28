import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';

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
    document.body.className = isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-300 text-gray-800';
  }, [isDarkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/roadmap" element={<Roadmap isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </Router>
  );
};

export default App;
