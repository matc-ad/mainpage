import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

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

const Header = ({ isDarkMode }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  };

  return (
    <header className={`text-center py-20 bg-cover bg-center ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-300 text-gray-800'}`} style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <div className={`p-10 rounded-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-gray-300 bg-opacity-90'}`}>
        <h1 className="text-5xl font-extrabold">Benvingut a matc.ad</h1>
        <p className="mt-4 text-2xl">Lorem ipsum (no sé què posar aquí) dolor sit amet.</p>
        <button onClick={handleButtonClick} className={`mt-8 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>Comença Ara</button>
      </div>
    </header>
  );
};

const ModalitatTable = ({ isDarkMode }) => (
  <section id="modalitats" className={`py-20 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-300 text-gray-800'}`}>
    <div className="container mx-auto text-center">
      <h2 className={`text-4xl font-extrabold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Les modalitats</h2>
      <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Comparació de les modalitats disponibles.</p>
      <div className="mt-12 overflow-x-auto">
        <table className={`min-w-full rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
          <thead>
            <tr>
              <th className={`py-4 px-6 ${isDarkMode ? 'bg-gray-600 text-blue-400' : 'bg-gray-400 text-gray-800'} font-bold uppercase text-sm text-center`}></th>
              <th className={`py-4 px-6 ${isDarkMode ? 'bg-gray-600 text-blue-400' : 'bg-gray-400 text-gray-800'} font-bold uppercase text-sm text-center`}>Simpatitzant</th>
              <th className={`py-4 px-6 ${isDarkMode ? 'bg-gray-600 text-blue-400' : 'bg-gray-400 text-gray-800'} font-bold uppercase text-sm text-center`}>Estudiant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Descripció</td>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Molts beneficis, a un preu reduït.</td>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Tots els beneficis.</td>
            </tr>
            <tr>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Correu</td>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>nom.cognom.cognom@correu.matc.ad</td>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>elquevulguis@matc.ad (i el de simpatitzant!)</td>
            </tr>
            <tr>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Subdomini</td>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>No inclòs.</td>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Inclòs.</td>
            </tr>
            <tr>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Propers beneficis</td>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Accés limitat, segons recursos.</td>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Accés complet.</td>
            </tr>
            <tr>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Preu</td>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>5€</td>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>9€</td>
            </tr>
            <tr>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Durada</td>
              <td colSpan="2" className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>1 any.</td>
            </tr>
            <tr>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Requisits</td>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Cap.</td>
              <td className={`py-4 px-2 md:px-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-400'}`}>Ser estudiant.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const SubdomainCard = ({ title, description, isDarkMode }) => (
  <div className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
    <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
    <p className="mt-4">{description}</p>
  </div>
);

const Subdomains = ({ isDarkMode }) => (
  <section id="subdomains" className={`py-20 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-300 text-gray-800'}`}>
    <div className="container mx-auto text-center">
      <h2 className={`text-4xl font-extrabold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Els subdominis</h2>
      <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Explora els subdominis existents.</p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <SubdomainCard title="Subdomini 1" description="Descripció del subdomini 1." isDarkMode={isDarkMode} />
        <SubdomainCard title="Subdomini 2" description="Descripció del subdomini 2." isDarkMode={isDarkMode} />
        <SubdomainCard title="Subdomini 3" description="Descripció del subdomini 3." isDarkMode={isDarkMode} />
      </div>
    </div>
  </section>
);

const FAQ = ({ isDarkMode }) => (
  <section id="faq" className={`py-20 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-300 text-gray-800'}`}>
    <div className="container mx-auto text-center">
      <h2 className={`text-4xl font-extrabold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Preguntes Freqüents</h2>
      <div className="mt-12 text-left">
        <div className="mb-8">
          <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Per què?</h3>
          <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Som un grup d'estudiants que ens va fer gràcia poder tenir el correu @matc.ad. Fa poc Andorra va començar a permetre la compra dels .ad i per això ho hem comprat. Hem decidit crear aquesta pàgina web i més serveis que ens seran útils o divertits.</p>
        </div>
        <div className="mb-8">
          <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Pregunta 2</h3>
          <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Resposta a la pregunta 2.</p>
        </div>
        <div className="mb-8">
          <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Pregunta 3</h3>
          <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Resposta a la pregunta 3.</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ isDarkMode }) => (
  <footer className={`text-center py-6 ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-400 text-gray-800'}`}>
    <p>&copy; 2024 matc.ad. Tots els drets reservats.</p>
  </footer>
);

const Home = ({ isDarkMode, toggleDarkMode }) => (
  <>
    <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    <Header isDarkMode={isDarkMode} />
    <ModalitatTable isDarkMode={isDarkMode} />
    <Subdomains isDarkMode={isDarkMode} />
    <FAQ isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
  </>
);

const Roadmap = ({ isDarkMode, toggleDarkMode }) => (
  <>
    <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-extrabold">Roadmap</h1>
      <p className="mt-4">Aquí pots veure el nostre roadmap. <strong>Tot això és momentani.</strong></p>
      <ul className="mt-4 list-disc list-inside">
        <li>Creació logo matc.ad (.svg).</li>
        <li>Fer més bonica la pàgina web.</li>
        <li>Creació d'un roadmap correcte amb les coses que volem fer després de tot això.</li>
      </ul>
    </div>
    <Footer isDarkMode={isDarkMode} />
  </>
);

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
