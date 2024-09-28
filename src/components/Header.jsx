import React from 'react';

const Header = ({ isDarkMode }) => {
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

export default Header;